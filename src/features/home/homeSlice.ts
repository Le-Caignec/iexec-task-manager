import { api, getIexecAndRefresh } from "./../../app/api";
import { gql } from "graphql-request";
import { Task } from "../../generated/graphql";
import { handleWss, queryFromSubscription } from "../../helpers/gqlSubscriptions";

import { PublishedRequestorder } from "iexec/dist/lib/IExecOrderbookModule";
import { ConsumableRequestorder } from "iexec/dist/lib/IExecOrderModule";
import { WSS_URL } from "../../helpers/connector";

export const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getRequestOrderbook: builder.query<PublishedRequestorder[], string>({
      queryFn: async (requester, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());

          const { orders } = await iexec.orderbook.fetchRequestOrderbook({ requester });

          let casted = orders as unknown as PublishedRequestorder[];
          return { data: casted };
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
      providesTags: ["REQUEST_ORDERS"],
    }),

    CancelRequestorder: builder.mutation<{ txHash: string; order: ConsumableRequestorder }, string>(
      {
        queryFn: async (hash, { getState }) => {
          try {
            const iexec = await getIexecAndRefresh(getState());
            const { order } = await iexec.orderbook.fetchRequestorder(hash);
            const cancelResult = await iexec.order.cancelRequestorder(order);
            return { data: cancelResult };
          } catch (e) {
            return { error: (e as Error).message || e };
          }
        },
        invalidatesTags: ["REQUEST_ORDERS"],
      }
    ),

    getTasks: builder.query<{ tasks: Task[] }, string>({
      query: (requester) => ({
        document: queryFromSubscription(GetTasks),
        variables: {
          requester,
        },
      }),
      onCacheEntryAdded: async (
        requester,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) => {
        await handleWss(
          cacheDataLoaded,
          cacheEntryRemoved,
          WSS_URL,
          GetTasks,
          { requester },
          (data: any) => {
            updateCachedData((draft) => {
              if (data as { tasks: Task[] }) {
                draft.tasks = data.tasks;
              }
            });
          }
        );
      },
    }),

    hasDownloadableResult: builder.query<boolean, string>({
      queryFn: async (taskId, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          const task = await iexec.task.show(taskId);
          let results = task.results as { storage: string; location: string };
          return {
            data: results && results.location.length > 0,
          };
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
    }),

    fetchTaskResult: builder.query<string, string>({
      queryFn: async (taskId, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          const response = await iexec.task.fetchResults(taskId);
          const binary = await response.blob();
          let url = window.URL.createObjectURL(binary);
          return { data: url };
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
    }),
  }),
});

export const {
  useHasDownloadableResultQuery,
  useLazyFetchTaskResultQuery,
  useCancelRequestorderMutation,
  useGetTasksQuery,
  useGetRequestOrderbookQuery,
} = homeApi;

const GetTasks = gql`
  subscription getTasks($requester: String) {
    # tasks(first:5){
    tasks(where: { requester: $requester }, orderBy:timestamp, orderDirection:desc) {
      id
      status
      finalDeadline
    }
  }
`;
