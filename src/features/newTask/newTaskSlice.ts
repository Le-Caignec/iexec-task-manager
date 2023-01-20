import { gql } from "graphql-request";

import { App, Category, Dataset, Workerpool } from "../../generated/graphql";
import { IExec } from "iexec";
import { ADDRESS_ZERO, removeEmptyProps } from "../../helpers/utils";
import { RequestOrderFields } from "./NewTaskForm";
import { api, getIexecAndRefresh } from "../../app/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import {
  PublishedApporder,
  PublishedDatasetorder,
  PublishedWorkerpoolorder,
} from "iexec/dist/lib/IExecOrderbookModule";

const initialState = {
  selectedApp: "",
  selectedDataset: "",
  selectedWorkerpool: "",
};

export const newTaskSlice = createSlice({
  name: "newTask",
  initialState: initialState,
  reducers: {
    setSelectedApp: (state, action: PayloadAction<string>) => {
      state.selectedApp = action.payload;
    },
    setSelectedDataset: (state, action: PayloadAction<string>) => {
      state.selectedDataset = action.payload;
    },
    setSelectedWorkerpool: (state, action: PayloadAction<string>) => {
      state.selectedWorkerpool = action.payload;
    },
  },
});
export default newTaskSlice.reducer;

export const { setSelectedApp, setSelectedDataset, setSelectedWorkerpool } = newTaskSlice.actions;

export const selectSelectedApp = (state: RootState) => state.newTask.selectedApp;
export const selectSelectedDataset = (state: RootState) => state.newTask.selectedDataset;
export const selectSelectedWorkerpool = (state: RootState) => state.newTask.selectedWorkerpool;

const newTaskApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<{ categories: Category[] }, void>({
      query: () => ({
        document: gql`
          query getCategories {
            categories(orderBy: id) {
              id
              name
            }
          }
        `,
      }),
    }),

    searchApps: builder.query<{ apps: App[] }, { restrictedApps?: string; searchText: string }>({
      query: (args) => ({
        document: gql`
          query getApps($searchText: String) {
            apps(first: 100, where: { name_contains_nocase: $searchText 
              ${args.restrictedApps ? ", id_in: " + args.restrictedApps.toLowerCase() : ""} 
            }) {
              id
              name
            }
          }
        `,
        variables: args,
      }),
    }),

    searchDatasets: builder.query<
      { datasets: Dataset[] },
      { restrictedDatasets?: string; searchText: string }
    >({
      query: (args) => ({
        document: gql`
          query getDatasets($searchText: String) {
            datasets: datasets(first: 100, where: { name_contains_nocase: $searchText 
            ${args.restrictedDatasets ? ", id_in: " + args.restrictedDatasets.toLowerCase() : ""} 
            }) {
              id
              name
            }
          }
        `,
        variables: args,
      }),
    }),

    searchWorkerpools: builder.query<
      { workerpools: Workerpool[] },
      { restrictedWorkerpools?: string; searchText: string }
    >({
      query: (args) => ({
        document: gql`
          query getWorkerpools($searchText: String) {
            workerpools: workerpools(
              first: 100
              where: { description_contains_nocase: $searchText 
                ${args.restrictedWorkerpools
            ? ", id_in: " + args.restrictedWorkerpools.toLowerCase()
            : ""
          } 
            }) {
              id
              description
            }
          }
        `,
        variables: args,
      }),
    }),

    fetchAppOrderbook: builder.query<PublishedApporder[], string>({
      queryFn: async (app, { getState }) => {
        const iexec = await getIexecAndRefresh(getState());
        const account = await iexec.wallet.getAddress();
        let result = await iexec.orderbook.fetchAppOrderbook(app);

        let orders = result.orders.filter(
          (order) =>
            order.order.requesterrestrict.length === 0 ||
            order.order.requesterrestrict === ADDRESS_ZERO ||
            order.order.requesterrestrict === account
        );
        return { data: orders };
      },
    }),

    fetchDatasetOrderbook: builder.query<PublishedDatasetorder[], string>({
      queryFn: async (dataset, { getState }) => {
        const iexec = await getIexecAndRefresh(getState());
        const account = await iexec.wallet.getAddress();
        let result = await iexec.orderbook.fetchDatasetOrderbook(dataset);

        let orders = result.orders.filter(
          (order) =>
            order.order.requesterrestrict.length === 0 ||
            order.order.requesterrestrict === ADDRESS_ZERO ||
            order.order.requesterrestrict === account
        );
        return { data: orders };
      },
    }),

    fetchWorkerpoolOrderbook: builder.query<PublishedWorkerpoolorder[], string>({
      queryFn: async (workerpool, { getState }) => {
        const iexec = await getIexecAndRefresh(getState());
        const account = await iexec.wallet.getAddress();
        let result = await iexec.orderbook.fetchWorkerpoolOrderbook({
          workerpool,
        });

        let orders = result.orders.filter(
          (order) =>
            order.order.requesterrestrict.length === 0 ||
            order.order.requesterrestrict === ADDRESS_ZERO ||
            order.order.requesterrestrict === account
        );

        return { data: orders };
      },
    }),

    createRequestOrder: builder.mutation<string, RequestOrderFields>({
      queryFn: async (formFields, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          const account = await iexec.wallet.getAddress();

          const {
            app,
            dataset,
            workerpool,
            category,
            iexec_result_encryption,
            iexec_result_storage_provider,
          } = formFields;

          const iexec_input_file =
            formFields.inputFiles.trim().length === 0 ? "" : formFields.inputFiles.split(",");

          let tag = iexec_result_encryption ? "tee" : "";

          let requestOrderFields = {
            app,
            workerpool,
            dataset,
            requester: account,
            params:
              {
                iexec_args: formFields.args,
                iexec_input_files:iexec_input_file,
                iexec_result_storage_provider,
                iexec_result_encryption,
              } || "",
            category: category,
            tag,
          };

          if (formFields.limitPrice) {
            const { appmaxprice, datasetmaxprice, workerpoolmaxprice } = formFields;

            requestOrderFields = {
              ...requestOrderFields,
              ...{
                appmaxprice,
                datasetmaxprice,
                workerpoolmaxprice,
              },
            };

            const requestOrderToSign = await iexec.order.createRequestorder(
              removeEmptyProps(requestOrderFields)
            );
            const requestOrder = await iexec.order.signRequestorder(requestOrderToSign);

            let published = await iexec.order.publishRequestorder(requestOrder);
            return { data: published };
          } else {
            const { appOrder, datasetOrder, workerpoolOrder } = await getBestOrders(
              iexec,
              app,
              dataset,
              workerpool,
              category
            );
            console.log("one")
            console.log("requestOrderFields", requestOrderFields)
            console.log("removeEmptyProps(requestOrderFields)", removeEmptyProps(requestOrderFields))
            const requestOrderToSign = await iexec.order.createRequestorder(
              removeEmptyProps(requestOrderFields)
            );
            console.log("two")

            const requestOrder = await iexec.order.signRequestorder(requestOrderToSign);
            console.log("three")

            const res = await iexec.order.matchOrders({
              apporder: appOrder,
              datasetorder: datasetOrder,
              requestorder: requestOrder,
              workerpoolorder: workerpoolOrder,
            });
            console.log("four")

            return { data: res.dealid };
          }
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
      invalidatesTags: ["REQUEST_ORDERS"],
    }),
  }),
});
export const {
  useLazyFetchDatasetOrderbookQuery,
  useLazyFetchWorkerpoolOrderbookQuery,
  useLazyFetchAppOrderbookQuery,
  useGetCategoriesQuery,
  useCreateRequestOrderMutation,
  useLazySearchAppsQuery,
  useLazySearchDatasetsQuery,
  useLazySearchWorkerpoolsQuery,
} = newTaskApi;

async function getBestOrders(
  iexec: IExec,
  app: string,
  dataset: string,
  workerpool: string,
  category: string
) {
  const { orders } = await iexec.orderbook.fetchAppOrderbook(app);
  const appOrder = orders && orders[0] && orders[0].order;
  if (!appOrder) {
    throw new Error(`No orders for app`);
  }

  let datasetOrder;
  if (dataset) {
    const { orders: dtsOrders } = await iexec.orderbook.fetchDatasetOrderbook(dataset, { app });
    datasetOrder = dtsOrders && dtsOrders[0] && dtsOrders[0].order;
    if (!datasetOrder) {
      throw new Error(`No orders for dataset`);
    }
  }

  const { orders: wkpOrders } = await iexec.orderbook.fetchWorkerpoolOrderbook({
    category,
    workerpool,
  });
  const workerpoolOrder = wkpOrders && wkpOrders[0] && wkpOrders[0].order;
  if (!workerpoolOrder) {
    throw new Error(`No orders for workerpool`);
  }
  return { appOrder, datasetOrder, workerpoolOrder };
}
