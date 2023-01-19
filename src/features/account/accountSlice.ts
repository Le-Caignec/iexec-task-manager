import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { IExec } from "iexec";
import { getIexecAndRefresh, api } from "../../app/api";
import { connect as connectIexec } from "../../helpers/connector";
import { BN } from "bn.js";

export interface AccountState {
  iexec: null | IExec;
  status: "Not Connected" | "Connected" | "loading" | "failed";
  userAddress: string;
  error: string | null;
}

const initialState: AccountState = {
  iexec: null,
  status: "Not Connected",
  userAddress: "",
  error: null,
};

export const connect = createAsyncThunk("account/connect", async (_, { dispatch, getState }) => {
  const iexec = (await connectIexec()) as IExec;
  const userAddress = await iexec.wallet.getAddress();

  let prevAddress = (getState() as RootState).account.userAddress as string;

  if (prevAddress.length > 0 && prevAddress.toLowerCase() !== userAddress.toLowerCase()) {
    dispatch(api.util.resetApiState());
  }

  return { iexec, userAddress: userAddress.toLowerCase() };
});

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(connect.pending, (state) => {
        state.status = "loading";
      })
      .addCase(connect.fulfilled, (state, action) => {
        state.status = "Connected";
        state.iexec = action.payload.iexec;
        state.userAddress = action.payload.userAddress;
      })
      .addCase(connect.rejected, (state, action) => {
        state.status = "failed";
        state.error = "" + action.error.message;
      });
  },
});
export default accountSlice.reducer;

export const selectthereIsSomeRequestPending = (state: RootState) =>
  Object.values(state.api.queries).some((query) => query?.status === "pending") ||
  Object.values(state.api.mutations).some((query) => query?.status === "pending");
export const selectAccountIexec = (state: RootState) => state.account.iexec;
export const selectAccountIsConnected = (state: RootState) => state.account.status === "Connected";
export const selectAccountStatus = (state: RootState) => state.account.status;
export const selectAccountError = (state: RootState) => state.account.error;
export const selectAccountUserAddress = (state: RootState) => state.account.userAddress;

const accountApi = api.injectEndpoints({
  endpoints: (builder) => ({
    pushSecret: builder.mutation<
      { isPushed: boolean },
      { secretName: string; secretValue: string }
    >({
      queryFn: async (args, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          let result = await iexec.secrets.pushRequesterSecret(args.secretName, args.secretValue);
          // console.log({ result })
          if (!result.isPushed) {
            return { error: "Unable to push secret" };
          } else {
            return {
              data: result,
            };
          }
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
    }),

    deposit: builder.mutation<{ amount: string; txHash: string }, string>({
      queryFn: async (args, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          let deposit = await iexec.account.deposit(new BN(args));

          return {
            data: {
              txHash: deposit.txHash.toString(),
              amount: deposit.amount.toString(),
            },
          };
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
      invalidatesTags: ["ACCOUNT_BALANCES"],
    }),

    withdraw: builder.mutation<{ amount: string; txHash: string }, string>({
      queryFn: async (args, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          let withdraw = await iexec.account.withdraw(new BN(args));

          return {
            data: {
              txHash: withdraw.txHash.toString(),
              amount: withdraw.amount.toString(),
            },
          };
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
      invalidatesTags: ["ACCOUNT_BALANCES"],
    }),

    getBalance: builder.query<{ stake: string; locked: string }, string>({
      queryFn: async (args, { getState }) => {
        const iexec = await getIexecAndRefresh(getState());
        let balance = await iexec.account.checkBalance(args);
        return {
          data: {
            stake: balance.stake.toString(),
            locked: balance.locked.toString(),
          },
        };
      },
      providesTags: ["ACCOUNT_BALANCES"],
    }),

    getWalletAddress: builder.query<string, void>({
      queryFn: async (args, { getState }) => {
        try {
          const iexec = await getIexecAndRefresh(getState());
          const userAddress = await iexec.wallet.getAddress();
          return { data: userAddress.toLowerCase() };
        } catch (e) {
          return { error: (e as Error).message || e };
        }
      },
    }),
  }),
});
export const {
  useWithdrawMutation,
  usePushSecretMutation,
  useDepositMutation,
  useGetWalletAddressQuery,
  useGetBalanceQuery,
} = accountApi;
