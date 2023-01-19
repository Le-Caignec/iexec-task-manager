export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type Account = {
  __typename?: "Account";
  apps: Array<App>;
  balance: Scalars["BigDecimal"];
  contributions: Array<Contribution>;
  datasets: Array<Dataset>;
  dealBeneficiary: Array<Deal>;
  dealCallback: Array<Deal>;
  dealRequester: Array<Deal>;
  events: Array<AccountEvent>;
  frozen: Scalars["BigDecimal"];
  id: Scalars["ID"];
  orderBeneficiary: Array<RequestOrder>;
  orderCallback: Array<RequestOrder>;
  orderRequester: Array<RequestOrder>;
  score: Scalars["BigInt"];
  taskRequester: Array<Task>;
  transactions: Array<Transaction>;
  transfersFrom: Array<Transfer>;
  transfersTo: Array<Transfer>;
  workerpools: Array<Workerpool>;
};

export type AccountAppsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<App_Filter>;
};

export type AccountContributionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Contribution_Filter>;
};

export type AccountDatasetsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Dataset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Dataset_Filter>;
};

export type AccountDealBeneficiaryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type AccountDealCallbackArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type AccountDealRequesterArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type AccountEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AccountEvent_Filter>;
};

export type AccountOrderBeneficiaryArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RequestOrder_Filter>;
};

export type AccountOrderCallbackArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RequestOrder_Filter>;
};

export type AccountOrderRequesterArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RequestOrder_Filter>;
};

export type AccountTaskRequesterArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Task_Filter>;
};

export type AccountTransactionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Transaction_Filter>;
};

export type AccountTransfersFromArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Transfer_Filter>;
};

export type AccountTransfersToArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Transfer_Filter>;
};

export type AccountWorkerpoolsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Workerpool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Workerpool_Filter>;
};

export type AccountEvent = {
  account: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type AccountEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum AccountEvent_OrderBy {
  Account = "account",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Account_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  apps_?: InputMaybe<App_Filter>;
  balance?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_gte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  balance_lt?: InputMaybe<Scalars["BigDecimal"]>;
  balance_lte?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not?: InputMaybe<Scalars["BigDecimal"]>;
  balance_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  contributions_?: InputMaybe<Contribution_Filter>;
  datasets_?: InputMaybe<Dataset_Filter>;
  dealBeneficiary_?: InputMaybe<Deal_Filter>;
  dealCallback_?: InputMaybe<Deal_Filter>;
  dealRequester_?: InputMaybe<Deal_Filter>;
  frozen?: InputMaybe<Scalars["BigDecimal"]>;
  frozen_gt?: InputMaybe<Scalars["BigDecimal"]>;
  frozen_gte?: InputMaybe<Scalars["BigDecimal"]>;
  frozen_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  frozen_lt?: InputMaybe<Scalars["BigDecimal"]>;
  frozen_lte?: InputMaybe<Scalars["BigDecimal"]>;
  frozen_not?: InputMaybe<Scalars["BigDecimal"]>;
  frozen_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  orderBeneficiary_?: InputMaybe<RequestOrder_Filter>;
  orderCallback_?: InputMaybe<RequestOrder_Filter>;
  orderRequester_?: InputMaybe<RequestOrder_Filter>;
  score?: InputMaybe<Scalars["BigInt"]>;
  score_gt?: InputMaybe<Scalars["BigInt"]>;
  score_gte?: InputMaybe<Scalars["BigInt"]>;
  score_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  score_lt?: InputMaybe<Scalars["BigInt"]>;
  score_lte?: InputMaybe<Scalars["BigInt"]>;
  score_not?: InputMaybe<Scalars["BigInt"]>;
  score_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  taskRequester_?: InputMaybe<Task_Filter>;
  transactions_?: InputMaybe<Transaction_Filter>;
  transfersFrom_?: InputMaybe<Transfer_Filter>;
  transfersTo_?: InputMaybe<Transfer_Filter>;
  workerpools_?: InputMaybe<Workerpool_Filter>;
};

export enum Account_OrderBy {
  Apps = "apps",
  Balance = "balance",
  Contributions = "contributions",
  Datasets = "datasets",
  DealBeneficiary = "dealBeneficiary",
  DealCallback = "dealCallback",
  DealRequester = "dealRequester",
  Events = "events",
  Frozen = "frozen",
  Id = "id",
  OrderBeneficiary = "orderBeneficiary",
  OrderCallback = "orderCallback",
  OrderRequester = "orderRequester",
  Score = "score",
  TaskRequester = "taskRequester",
  Transactions = "transactions",
  TransfersFrom = "transfersFrom",
  TransfersTo = "transfersTo",
  Workerpools = "workerpools",
}

export type AccurateContribution = AccountEvent & {
  __typename?: "AccurateContribution";
  account: Account;
  contribution: Contribution;
  id: Scalars["ID"];
  score: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type AccurateContribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution?: InputMaybe<Scalars["String"]>;
  contribution_?: InputMaybe<Contribution_Filter>;
  contribution_contains?: InputMaybe<Scalars["String"]>;
  contribution_contains_nocase?: InputMaybe<Scalars["String"]>;
  contribution_ends_with?: InputMaybe<Scalars["String"]>;
  contribution_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution_gt?: InputMaybe<Scalars["String"]>;
  contribution_gte?: InputMaybe<Scalars["String"]>;
  contribution_in?: InputMaybe<Array<Scalars["String"]>>;
  contribution_lt?: InputMaybe<Scalars["String"]>;
  contribution_lte?: InputMaybe<Scalars["String"]>;
  contribution_not?: InputMaybe<Scalars["String"]>;
  contribution_not_contains?: InputMaybe<Scalars["String"]>;
  contribution_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contribution_not_ends_with?: InputMaybe<Scalars["String"]>;
  contribution_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contribution_not_starts_with?: InputMaybe<Scalars["String"]>;
  contribution_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution_starts_with?: InputMaybe<Scalars["String"]>;
  contribution_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  score?: InputMaybe<Scalars["BigInt"]>;
  score_gt?: InputMaybe<Scalars["BigInt"]>;
  score_gte?: InputMaybe<Scalars["BigInt"]>;
  score_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  score_lt?: InputMaybe<Scalars["BigInt"]>;
  score_lte?: InputMaybe<Scalars["BigInt"]>;
  score_not?: InputMaybe<Scalars["BigInt"]>;
  score_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum AccurateContribution_OrderBy {
  Account = "account",
  Contribution = "contribution",
  Id = "id",
  Score = "score",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type App = Ressource & {
  __typename?: "App";
  checksum: Scalars["Bytes"];
  id: Scalars["ID"];
  mrenclave: Scalars["Bytes"];
  multiaddr: Scalars["Bytes"];
  name: Scalars["String"];
  orders: Array<AppOrder>;
  owner: Account;
  timestamp: Scalars["BigInt"];
  transfers: Array<AppTransfer>;
  type: Scalars["String"];
  usages: Array<Deal>;
};

export type AppOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AppOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AppOrder_Filter>;
};

export type AppTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AppTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AppTransfer_Filter>;
};

export type AppUsagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type AppOrder = {
  __typename?: "AppOrder";
  app: App;
  appprice: Scalars["BigDecimal"];
  datasetrestrict?: Maybe<Scalars["Bytes"]>;
  deals: Array<Deal>;
  id: Scalars["ID"];
  requesterrestrict?: Maybe<Scalars["Bytes"]>;
  salt?: Maybe<Scalars["Bytes"]>;
  sign?: Maybe<Scalars["Bytes"]>;
  tag?: Maybe<Scalars["Bytes"]>;
  volume?: Maybe<Scalars["BigInt"]>;
  workerpoolrestrict?: Maybe<Scalars["Bytes"]>;
};

export type AppOrderDealsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type AppOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars["String"]>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars["String"]>;
  app_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_ends_with?: InputMaybe<Scalars["String"]>;
  app_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_gt?: InputMaybe<Scalars["String"]>;
  app_gte?: InputMaybe<Scalars["String"]>;
  app_in?: InputMaybe<Array<Scalars["String"]>>;
  app_lt?: InputMaybe<Scalars["String"]>;
  app_lte?: InputMaybe<Scalars["String"]>;
  app_not?: InputMaybe<Scalars["String"]>;
  app_not_contains?: InputMaybe<Scalars["String"]>;
  app_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_not_ends_with?: InputMaybe<Scalars["String"]>;
  app_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_not_in?: InputMaybe<Array<Scalars["String"]>>;
  app_not_starts_with?: InputMaybe<Scalars["String"]>;
  app_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  app_starts_with?: InputMaybe<Scalars["String"]>;
  app_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  appprice?: InputMaybe<Scalars["BigDecimal"]>;
  appprice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  appprice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  appprice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  appprice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  appprice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  appprice_not?: InputMaybe<Scalars["BigDecimal"]>;
  appprice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  datasetrestrict?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  datasetrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  requesterrestrict?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  requesterrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt?: InputMaybe<Scalars["Bytes"]>;
  salt_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt_not?: InputMaybe<Scalars["Bytes"]>;
  salt_not_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign?: InputMaybe<Scalars["Bytes"]>;
  sign_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign_not?: InputMaybe<Scalars["Bytes"]>;
  sign_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag?: InputMaybe<Scalars["Bytes"]>;
  tag_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag_not?: InputMaybe<Scalars["Bytes"]>;
  tag_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerpoolrestrict?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  workerpoolrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum AppOrder_OrderBy {
  App = "app",
  Appprice = "appprice",
  Datasetrestrict = "datasetrestrict",
  Deals = "deals",
  Id = "id",
  Requesterrestrict = "requesterrestrict",
  Salt = "salt",
  Sign = "sign",
  Tag = "tag",
  Volume = "volume",
  Workerpoolrestrict = "workerpoolrestrict",
}

export type AppTransfer = RessourceTransferEvent & {
  __typename?: "AppTransfer";
  app: App;
  from: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  to: Account;
  transaction: Transaction;
};

export type AppTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars["String"]>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars["String"]>;
  app_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_ends_with?: InputMaybe<Scalars["String"]>;
  app_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_gt?: InputMaybe<Scalars["String"]>;
  app_gte?: InputMaybe<Scalars["String"]>;
  app_in?: InputMaybe<Array<Scalars["String"]>>;
  app_lt?: InputMaybe<Scalars["String"]>;
  app_lte?: InputMaybe<Scalars["String"]>;
  app_not?: InputMaybe<Scalars["String"]>;
  app_not_contains?: InputMaybe<Scalars["String"]>;
  app_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_not_ends_with?: InputMaybe<Scalars["String"]>;
  app_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_not_in?: InputMaybe<Array<Scalars["String"]>>;
  app_not_starts_with?: InputMaybe<Scalars["String"]>;
  app_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  app_starts_with?: InputMaybe<Scalars["String"]>;
  app_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["String"]>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum AppTransfer_OrderBy {
  App = "app",
  From = "from",
  Id = "id",
  Timestamp = "timestamp",
  To = "to",
  Transaction = "transaction",
}

export type App_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  checksum?: InputMaybe<Scalars["Bytes"]>;
  checksum_contains?: InputMaybe<Scalars["Bytes"]>;
  checksum_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  checksum_not?: InputMaybe<Scalars["Bytes"]>;
  checksum_not_contains?: InputMaybe<Scalars["Bytes"]>;
  checksum_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  mrenclave?: InputMaybe<Scalars["Bytes"]>;
  mrenclave_contains?: InputMaybe<Scalars["Bytes"]>;
  mrenclave_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  mrenclave_not?: InputMaybe<Scalars["Bytes"]>;
  mrenclave_not_contains?: InputMaybe<Scalars["Bytes"]>;
  mrenclave_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  multiaddr?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_contains?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  multiaddr_not?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_not_contains?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  orders_?: InputMaybe<AppOrder_Filter>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transfers_?: InputMaybe<AppTransfer_Filter>;
  type?: InputMaybe<Scalars["String"]>;
  type_contains?: InputMaybe<Scalars["String"]>;
  type_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_ends_with?: InputMaybe<Scalars["String"]>;
  type_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_gt?: InputMaybe<Scalars["String"]>;
  type_gte?: InputMaybe<Scalars["String"]>;
  type_in?: InputMaybe<Array<Scalars["String"]>>;
  type_lt?: InputMaybe<Scalars["String"]>;
  type_lte?: InputMaybe<Scalars["String"]>;
  type_not?: InputMaybe<Scalars["String"]>;
  type_not_contains?: InputMaybe<Scalars["String"]>;
  type_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  type_not_ends_with?: InputMaybe<Scalars["String"]>;
  type_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  type_not_in?: InputMaybe<Array<Scalars["String"]>>;
  type_not_starts_with?: InputMaybe<Scalars["String"]>;
  type_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  type_starts_with?: InputMaybe<Scalars["String"]>;
  type_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  usages_?: InputMaybe<Deal_Filter>;
};

export enum App_OrderBy {
  Checksum = "checksum",
  Id = "id",
  Mrenclave = "mrenclave",
  Multiaddr = "multiaddr",
  Name = "name",
  Orders = "orders",
  Owner = "owner",
  Timestamp = "timestamp",
  Transfers = "transfers",
  Type = "type",
  Usages = "usages",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]>;
  number?: InputMaybe<Scalars["Int"]>;
  number_gte?: InputMaybe<Scalars["Int"]>;
};

export type Category = {
  __typename?: "Category";
  deals: Array<Deal>;
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  timestamp: Scalars["BigInt"];
  workClockTimeRef: Scalars["BigInt"];
};

export type CategoryDealsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type Category_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deals_?: InputMaybe<Deal_Filter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_gt?: InputMaybe<Scalars["String"]>;
  description_gte?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  description_lt?: InputMaybe<Scalars["String"]>;
  description_lte?: InputMaybe<Scalars["String"]>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workClockTimeRef?: InputMaybe<Scalars["BigInt"]>;
  workClockTimeRef_gt?: InputMaybe<Scalars["BigInt"]>;
  workClockTimeRef_gte?: InputMaybe<Scalars["BigInt"]>;
  workClockTimeRef_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workClockTimeRef_lt?: InputMaybe<Scalars["BigInt"]>;
  workClockTimeRef_lte?: InputMaybe<Scalars["BigInt"]>;
  workClockTimeRef_not?: InputMaybe<Scalars["BigInt"]>;
  workClockTimeRef_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Category_OrderBy {
  Deals = "deals",
  Description = "description",
  Id = "id",
  Name = "name",
  Timestamp = "timestamp",
  WorkClockTimeRef = "workClockTimeRef",
}

export type Contribution = {
  __typename?: "Contribution";
  challenge: Scalars["Bytes"];
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  seal: Scalars["Bytes"];
  status: ContributionStatus;
  task: Task;
  timestamp: Scalars["Int"];
  worker: Account;
};

export enum ContributionStatus {
  Contributed = "CONTRIBUTED",
  Proved = "PROVED",
  Rejected = "REJECTED",
  Unset = "UNSET",
}

export type Contribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  challenge?: InputMaybe<Scalars["Bytes"]>;
  challenge_contains?: InputMaybe<Scalars["Bytes"]>;
  challenge_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  challenge_not?: InputMaybe<Scalars["Bytes"]>;
  challenge_not_contains?: InputMaybe<Scalars["Bytes"]>;
  challenge_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  seal?: InputMaybe<Scalars["Bytes"]>;
  seal_contains?: InputMaybe<Scalars["Bytes"]>;
  seal_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  seal_not?: InputMaybe<Scalars["Bytes"]>;
  seal_not_contains?: InputMaybe<Scalars["Bytes"]>;
  seal_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  status?: InputMaybe<ContributionStatus>;
  status_in?: InputMaybe<Array<ContributionStatus>>;
  status_not?: InputMaybe<ContributionStatus>;
  status_not_in?: InputMaybe<Array<ContributionStatus>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["Int"]>;
  timestamp_gt?: InputMaybe<Scalars["Int"]>;
  timestamp_gte?: InputMaybe<Scalars["Int"]>;
  timestamp_in?: InputMaybe<Array<Scalars["Int"]>>;
  timestamp_lt?: InputMaybe<Scalars["Int"]>;
  timestamp_lte?: InputMaybe<Scalars["Int"]>;
  timestamp_not?: InputMaybe<Scalars["Int"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["Int"]>>;
  worker?: InputMaybe<Scalars["String"]>;
  worker_?: InputMaybe<Account_Filter>;
  worker_contains?: InputMaybe<Scalars["String"]>;
  worker_contains_nocase?: InputMaybe<Scalars["String"]>;
  worker_ends_with?: InputMaybe<Scalars["String"]>;
  worker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_gt?: InputMaybe<Scalars["String"]>;
  worker_gte?: InputMaybe<Scalars["String"]>;
  worker_in?: InputMaybe<Array<Scalars["String"]>>;
  worker_lt?: InputMaybe<Scalars["String"]>;
  worker_lte?: InputMaybe<Scalars["String"]>;
  worker_not?: InputMaybe<Scalars["String"]>;
  worker_not_contains?: InputMaybe<Scalars["String"]>;
  worker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  worker_not_ends_with?: InputMaybe<Scalars["String"]>;
  worker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  worker_not_starts_with?: InputMaybe<Scalars["String"]>;
  worker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_starts_with?: InputMaybe<Scalars["String"]>;
  worker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Contribution_OrderBy {
  Challenge = "challenge",
  Hash = "hash",
  Id = "id",
  Seal = "seal",
  Status = "status",
  Task = "task",
  Timestamp = "timestamp",
  Worker = "worker",
}

export type Dataset = Ressource & {
  __typename?: "Dataset";
  checksum: Scalars["Bytes"];
  id: Scalars["ID"];
  multiaddr: Scalars["Bytes"];
  name: Scalars["String"];
  orders: Array<DatasetOrder>;
  owner: Account;
  timestamp: Scalars["BigInt"];
  transfers: Array<DatasetTransfer>;
  usages: Array<Deal>;
};

export type DatasetOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DatasetOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DatasetOrder_Filter>;
};

export type DatasetTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DatasetTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DatasetTransfer_Filter>;
};

export type DatasetUsagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type DatasetOrder = {
  __typename?: "DatasetOrder";
  apprestrict?: Maybe<Scalars["Bytes"]>;
  dataset: Dataset;
  datasetprice: Scalars["BigDecimal"];
  deals: Array<Deal>;
  id: Scalars["ID"];
  requesterrestrict?: Maybe<Scalars["Bytes"]>;
  salt?: Maybe<Scalars["Bytes"]>;
  sign?: Maybe<Scalars["Bytes"]>;
  tag?: Maybe<Scalars["Bytes"]>;
  volume?: Maybe<Scalars["BigInt"]>;
  workerpoolrestrict?: Maybe<Scalars["Bytes"]>;
};

export type DatasetOrderDealsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type DatasetOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  apprestrict?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  apprestrict_not?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  dataset?: InputMaybe<Scalars["String"]>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars["String"]>;
  dataset_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_gt?: InputMaybe<Scalars["String"]>;
  dataset_gte?: InputMaybe<Scalars["String"]>;
  dataset_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_lt?: InputMaybe<Scalars["String"]>;
  dataset_lte?: InputMaybe<Scalars["String"]>;
  dataset_not?: InputMaybe<Scalars["String"]>;
  dataset_not_contains?: InputMaybe<Scalars["String"]>;
  dataset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_not_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetprice?: InputMaybe<Scalars["BigDecimal"]>;
  datasetprice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  datasetprice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  datasetprice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  datasetprice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  datasetprice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  datasetprice_not?: InputMaybe<Scalars["BigDecimal"]>;
  datasetprice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  requesterrestrict?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  requesterrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt?: InputMaybe<Scalars["Bytes"]>;
  salt_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt_not?: InputMaybe<Scalars["Bytes"]>;
  salt_not_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign?: InputMaybe<Scalars["Bytes"]>;
  sign_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign_not?: InputMaybe<Scalars["Bytes"]>;
  sign_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag?: InputMaybe<Scalars["Bytes"]>;
  tag_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag_not?: InputMaybe<Scalars["Bytes"]>;
  tag_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerpoolrestrict?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  workerpoolrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  workerpoolrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
};

export enum DatasetOrder_OrderBy {
  Apprestrict = "apprestrict",
  Dataset = "dataset",
  Datasetprice = "datasetprice",
  Deals = "deals",
  Id = "id",
  Requesterrestrict = "requesterrestrict",
  Salt = "salt",
  Sign = "sign",
  Tag = "tag",
  Volume = "volume",
  Workerpoolrestrict = "workerpoolrestrict",
}

export type DatasetTransfer = RessourceTransferEvent & {
  __typename?: "DatasetTransfer";
  dataset: Dataset;
  from: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  to: Account;
  transaction: Transaction;
};

export type DatasetTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  dataset?: InputMaybe<Scalars["String"]>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars["String"]>;
  dataset_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_gt?: InputMaybe<Scalars["String"]>;
  dataset_gte?: InputMaybe<Scalars["String"]>;
  dataset_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_lt?: InputMaybe<Scalars["String"]>;
  dataset_lte?: InputMaybe<Scalars["String"]>;
  dataset_not?: InputMaybe<Scalars["String"]>;
  dataset_not_contains?: InputMaybe<Scalars["String"]>;
  dataset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_not_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from?: InputMaybe<Scalars["String"]>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum DatasetTransfer_OrderBy {
  Dataset = "dataset",
  From = "from",
  Id = "id",
  Timestamp = "timestamp",
  To = "to",
  Transaction = "transaction",
}

export type Dataset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  checksum?: InputMaybe<Scalars["Bytes"]>;
  checksum_contains?: InputMaybe<Scalars["Bytes"]>;
  checksum_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  checksum_not?: InputMaybe<Scalars["Bytes"]>;
  checksum_not_contains?: InputMaybe<Scalars["Bytes"]>;
  checksum_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  multiaddr?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_contains?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  multiaddr_not?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_not_contains?: InputMaybe<Scalars["Bytes"]>;
  multiaddr_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  orders_?: InputMaybe<DatasetOrder_Filter>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transfers_?: InputMaybe<DatasetTransfer_Filter>;
  usages_?: InputMaybe<Deal_Filter>;
};

export enum Dataset_OrderBy {
  Checksum = "checksum",
  Id = "id",
  Multiaddr = "multiaddr",
  Name = "name",
  Orders = "orders",
  Owner = "owner",
  Timestamp = "timestamp",
  Transfers = "transfers",
  Usages = "usages",
}

export type Deal = {
  __typename?: "Deal";
  app: App;
  appOwner: Account;
  appPrice: Scalars["BigDecimal"];
  apporder?: Maybe<AppOrder>;
  beneficiary: Account;
  botFirst: Scalars["BigInt"];
  botSize: Scalars["BigInt"];
  callback: Account;
  category: Category;
  claimedTasksCount: Scalars["BigInt"];
  completedTasksCount: Scalars["BigInt"];
  dataset?: Maybe<Dataset>;
  datasetOwner: Account;
  datasetPrice: Scalars["BigDecimal"];
  datasetorder?: Maybe<DatasetOrder>;
  events: Array<DealEvent>;
  id: Scalars["ID"];
  params: Scalars["String"];
  requester: Account;
  requestorder?: Maybe<RequestOrder>;
  schedulerRewardRatio: Scalars["BigInt"];
  startTime: Scalars["BigInt"];
  tag: Scalars["Bytes"];
  tasks: Array<Task>;
  timestamp: Scalars["BigInt"];
  trust: Scalars["BigInt"];
  workerStake: Scalars["BigInt"];
  workerpool: Workerpool;
  workerpoolOwner: Account;
  workerpoolPrice: Scalars["BigDecimal"];
  workerpoolorder?: Maybe<WorkerpoolOrder>;
};

export type DealEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DealEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<DealEvent_Filter>;
};

export type DealTasksArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Task_Filter>;
};

export type DealEvent = {
  deal: Deal;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type DealEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deal?: InputMaybe<Scalars["String"]>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars["String"]>;
  deal_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_ends_with?: InputMaybe<Scalars["String"]>;
  deal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_gt?: InputMaybe<Scalars["String"]>;
  deal_gte?: InputMaybe<Scalars["String"]>;
  deal_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_lt?: InputMaybe<Scalars["String"]>;
  deal_lte?: InputMaybe<Scalars["String"]>;
  deal_not?: InputMaybe<Scalars["String"]>;
  deal_not_contains?: InputMaybe<Scalars["String"]>;
  deal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_not_starts_with?: InputMaybe<Scalars["String"]>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_starts_with?: InputMaybe<Scalars["String"]>;
  deal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum DealEvent_OrderBy {
  Deal = "deal",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Deal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars["String"]>;
  appOwner?: InputMaybe<Scalars["String"]>;
  appOwner_?: InputMaybe<Account_Filter>;
  appOwner_contains?: InputMaybe<Scalars["String"]>;
  appOwner_contains_nocase?: InputMaybe<Scalars["String"]>;
  appOwner_ends_with?: InputMaybe<Scalars["String"]>;
  appOwner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  appOwner_gt?: InputMaybe<Scalars["String"]>;
  appOwner_gte?: InputMaybe<Scalars["String"]>;
  appOwner_in?: InputMaybe<Array<Scalars["String"]>>;
  appOwner_lt?: InputMaybe<Scalars["String"]>;
  appOwner_lte?: InputMaybe<Scalars["String"]>;
  appOwner_not?: InputMaybe<Scalars["String"]>;
  appOwner_not_contains?: InputMaybe<Scalars["String"]>;
  appOwner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  appOwner_not_ends_with?: InputMaybe<Scalars["String"]>;
  appOwner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  appOwner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  appOwner_not_starts_with?: InputMaybe<Scalars["String"]>;
  appOwner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  appOwner_starts_with?: InputMaybe<Scalars["String"]>;
  appOwner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  appPrice?: InputMaybe<Scalars["BigDecimal"]>;
  appPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  appPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  appPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  appPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  appPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  appPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  appPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars["String"]>;
  app_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_ends_with?: InputMaybe<Scalars["String"]>;
  app_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_gt?: InputMaybe<Scalars["String"]>;
  app_gte?: InputMaybe<Scalars["String"]>;
  app_in?: InputMaybe<Array<Scalars["String"]>>;
  app_lt?: InputMaybe<Scalars["String"]>;
  app_lte?: InputMaybe<Scalars["String"]>;
  app_not?: InputMaybe<Scalars["String"]>;
  app_not_contains?: InputMaybe<Scalars["String"]>;
  app_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_not_ends_with?: InputMaybe<Scalars["String"]>;
  app_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_not_in?: InputMaybe<Array<Scalars["String"]>>;
  app_not_starts_with?: InputMaybe<Scalars["String"]>;
  app_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  app_starts_with?: InputMaybe<Scalars["String"]>;
  app_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  apporder?: InputMaybe<Scalars["String"]>;
  apporder_?: InputMaybe<AppOrder_Filter>;
  apporder_contains?: InputMaybe<Scalars["String"]>;
  apporder_contains_nocase?: InputMaybe<Scalars["String"]>;
  apporder_ends_with?: InputMaybe<Scalars["String"]>;
  apporder_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  apporder_gt?: InputMaybe<Scalars["String"]>;
  apporder_gte?: InputMaybe<Scalars["String"]>;
  apporder_in?: InputMaybe<Array<Scalars["String"]>>;
  apporder_lt?: InputMaybe<Scalars["String"]>;
  apporder_lte?: InputMaybe<Scalars["String"]>;
  apporder_not?: InputMaybe<Scalars["String"]>;
  apporder_not_contains?: InputMaybe<Scalars["String"]>;
  apporder_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  apporder_not_ends_with?: InputMaybe<Scalars["String"]>;
  apporder_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  apporder_not_in?: InputMaybe<Array<Scalars["String"]>>;
  apporder_not_starts_with?: InputMaybe<Scalars["String"]>;
  apporder_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  apporder_starts_with?: InputMaybe<Scalars["String"]>;
  apporder_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary?: InputMaybe<Scalars["String"]>;
  beneficiary_?: InputMaybe<Account_Filter>;
  beneficiary_contains?: InputMaybe<Scalars["String"]>;
  beneficiary_contains_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_ends_with?: InputMaybe<Scalars["String"]>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_gt?: InputMaybe<Scalars["String"]>;
  beneficiary_gte?: InputMaybe<Scalars["String"]>;
  beneficiary_in?: InputMaybe<Array<Scalars["String"]>>;
  beneficiary_lt?: InputMaybe<Scalars["String"]>;
  beneficiary_lte?: InputMaybe<Scalars["String"]>;
  beneficiary_not?: InputMaybe<Scalars["String"]>;
  beneficiary_not_contains?: InputMaybe<Scalars["String"]>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_not_ends_with?: InputMaybe<Scalars["String"]>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_not_in?: InputMaybe<Array<Scalars["String"]>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars["String"]>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_starts_with?: InputMaybe<Scalars["String"]>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  botFirst?: InputMaybe<Scalars["BigInt"]>;
  botFirst_gt?: InputMaybe<Scalars["BigInt"]>;
  botFirst_gte?: InputMaybe<Scalars["BigInt"]>;
  botFirst_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  botFirst_lt?: InputMaybe<Scalars["BigInt"]>;
  botFirst_lte?: InputMaybe<Scalars["BigInt"]>;
  botFirst_not?: InputMaybe<Scalars["BigInt"]>;
  botFirst_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  botSize?: InputMaybe<Scalars["BigInt"]>;
  botSize_gt?: InputMaybe<Scalars["BigInt"]>;
  botSize_gte?: InputMaybe<Scalars["BigInt"]>;
  botSize_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  botSize_lt?: InputMaybe<Scalars["BigInt"]>;
  botSize_lte?: InputMaybe<Scalars["BigInt"]>;
  botSize_not?: InputMaybe<Scalars["BigInt"]>;
  botSize_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  callback?: InputMaybe<Scalars["String"]>;
  callback_?: InputMaybe<Account_Filter>;
  callback_contains?: InputMaybe<Scalars["String"]>;
  callback_contains_nocase?: InputMaybe<Scalars["String"]>;
  callback_ends_with?: InputMaybe<Scalars["String"]>;
  callback_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  callback_gt?: InputMaybe<Scalars["String"]>;
  callback_gte?: InputMaybe<Scalars["String"]>;
  callback_in?: InputMaybe<Array<Scalars["String"]>>;
  callback_lt?: InputMaybe<Scalars["String"]>;
  callback_lte?: InputMaybe<Scalars["String"]>;
  callback_not?: InputMaybe<Scalars["String"]>;
  callback_not_contains?: InputMaybe<Scalars["String"]>;
  callback_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  callback_not_ends_with?: InputMaybe<Scalars["String"]>;
  callback_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  callback_not_in?: InputMaybe<Array<Scalars["String"]>>;
  callback_not_starts_with?: InputMaybe<Scalars["String"]>;
  callback_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  callback_starts_with?: InputMaybe<Scalars["String"]>;
  callback_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category?: InputMaybe<Scalars["String"]>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_ends_with?: InputMaybe<Scalars["String"]>;
  category_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_gt?: InputMaybe<Scalars["String"]>;
  category_gte?: InputMaybe<Scalars["String"]>;
  category_in?: InputMaybe<Array<Scalars["String"]>>;
  category_lt?: InputMaybe<Scalars["String"]>;
  category_lte?: InputMaybe<Scalars["String"]>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_not_ends_with?: InputMaybe<Scalars["String"]>;
  category_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_not_in?: InputMaybe<Array<Scalars["String"]>>;
  category_not_starts_with?: InputMaybe<Scalars["String"]>;
  category_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category_starts_with?: InputMaybe<Scalars["String"]>;
  category_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  claimedTasksCount?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_gt?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_gte?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  claimedTasksCount_lt?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_lte?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_not?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  completedTasksCount?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_gt?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_gte?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  completedTasksCount_lt?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_lte?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_not?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dataset?: InputMaybe<Scalars["String"]>;
  datasetOwner?: InputMaybe<Scalars["String"]>;
  datasetOwner_?: InputMaybe<Account_Filter>;
  datasetOwner_contains?: InputMaybe<Scalars["String"]>;
  datasetOwner_contains_nocase?: InputMaybe<Scalars["String"]>;
  datasetOwner_ends_with?: InputMaybe<Scalars["String"]>;
  datasetOwner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetOwner_gt?: InputMaybe<Scalars["String"]>;
  datasetOwner_gte?: InputMaybe<Scalars["String"]>;
  datasetOwner_in?: InputMaybe<Array<Scalars["String"]>>;
  datasetOwner_lt?: InputMaybe<Scalars["String"]>;
  datasetOwner_lte?: InputMaybe<Scalars["String"]>;
  datasetOwner_not?: InputMaybe<Scalars["String"]>;
  datasetOwner_not_contains?: InputMaybe<Scalars["String"]>;
  datasetOwner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  datasetOwner_not_ends_with?: InputMaybe<Scalars["String"]>;
  datasetOwner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetOwner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  datasetOwner_not_starts_with?: InputMaybe<Scalars["String"]>;
  datasetOwner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetOwner_starts_with?: InputMaybe<Scalars["String"]>;
  datasetOwner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetPrice?: InputMaybe<Scalars["BigDecimal"]>;
  datasetPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  datasetPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  datasetPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  datasetPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  datasetPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  datasetPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  datasetPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars["String"]>;
  dataset_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_gt?: InputMaybe<Scalars["String"]>;
  dataset_gte?: InputMaybe<Scalars["String"]>;
  dataset_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_lt?: InputMaybe<Scalars["String"]>;
  dataset_lte?: InputMaybe<Scalars["String"]>;
  dataset_not?: InputMaybe<Scalars["String"]>;
  dataset_not_contains?: InputMaybe<Scalars["String"]>;
  dataset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_not_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetorder?: InputMaybe<Scalars["String"]>;
  datasetorder_?: InputMaybe<DatasetOrder_Filter>;
  datasetorder_contains?: InputMaybe<Scalars["String"]>;
  datasetorder_contains_nocase?: InputMaybe<Scalars["String"]>;
  datasetorder_ends_with?: InputMaybe<Scalars["String"]>;
  datasetorder_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetorder_gt?: InputMaybe<Scalars["String"]>;
  datasetorder_gte?: InputMaybe<Scalars["String"]>;
  datasetorder_in?: InputMaybe<Array<Scalars["String"]>>;
  datasetorder_lt?: InputMaybe<Scalars["String"]>;
  datasetorder_lte?: InputMaybe<Scalars["String"]>;
  datasetorder_not?: InputMaybe<Scalars["String"]>;
  datasetorder_not_contains?: InputMaybe<Scalars["String"]>;
  datasetorder_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  datasetorder_not_ends_with?: InputMaybe<Scalars["String"]>;
  datasetorder_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetorder_not_in?: InputMaybe<Array<Scalars["String"]>>;
  datasetorder_not_starts_with?: InputMaybe<Scalars["String"]>;
  datasetorder_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetorder_starts_with?: InputMaybe<Scalars["String"]>;
  datasetorder_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  params?: InputMaybe<Scalars["String"]>;
  params_contains?: InputMaybe<Scalars["String"]>;
  params_contains_nocase?: InputMaybe<Scalars["String"]>;
  params_ends_with?: InputMaybe<Scalars["String"]>;
  params_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  params_gt?: InputMaybe<Scalars["String"]>;
  params_gte?: InputMaybe<Scalars["String"]>;
  params_in?: InputMaybe<Array<Scalars["String"]>>;
  params_lt?: InputMaybe<Scalars["String"]>;
  params_lte?: InputMaybe<Scalars["String"]>;
  params_not?: InputMaybe<Scalars["String"]>;
  params_not_contains?: InputMaybe<Scalars["String"]>;
  params_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  params_not_ends_with?: InputMaybe<Scalars["String"]>;
  params_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  params_not_in?: InputMaybe<Array<Scalars["String"]>>;
  params_not_starts_with?: InputMaybe<Scalars["String"]>;
  params_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  params_starts_with?: InputMaybe<Scalars["String"]>;
  params_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requester?: InputMaybe<Scalars["String"]>;
  requester_?: InputMaybe<Account_Filter>;
  requester_contains?: InputMaybe<Scalars["String"]>;
  requester_contains_nocase?: InputMaybe<Scalars["String"]>;
  requester_ends_with?: InputMaybe<Scalars["String"]>;
  requester_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_gt?: InputMaybe<Scalars["String"]>;
  requester_gte?: InputMaybe<Scalars["String"]>;
  requester_in?: InputMaybe<Array<Scalars["String"]>>;
  requester_lt?: InputMaybe<Scalars["String"]>;
  requester_lte?: InputMaybe<Scalars["String"]>;
  requester_not?: InputMaybe<Scalars["String"]>;
  requester_not_contains?: InputMaybe<Scalars["String"]>;
  requester_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  requester_not_ends_with?: InputMaybe<Scalars["String"]>;
  requester_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_not_in?: InputMaybe<Array<Scalars["String"]>>;
  requester_not_starts_with?: InputMaybe<Scalars["String"]>;
  requester_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_starts_with?: InputMaybe<Scalars["String"]>;
  requester_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requestorder?: InputMaybe<Scalars["String"]>;
  requestorder_?: InputMaybe<RequestOrder_Filter>;
  requestorder_contains?: InputMaybe<Scalars["String"]>;
  requestorder_contains_nocase?: InputMaybe<Scalars["String"]>;
  requestorder_ends_with?: InputMaybe<Scalars["String"]>;
  requestorder_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requestorder_gt?: InputMaybe<Scalars["String"]>;
  requestorder_gte?: InputMaybe<Scalars["String"]>;
  requestorder_in?: InputMaybe<Array<Scalars["String"]>>;
  requestorder_lt?: InputMaybe<Scalars["String"]>;
  requestorder_lte?: InputMaybe<Scalars["String"]>;
  requestorder_not?: InputMaybe<Scalars["String"]>;
  requestorder_not_contains?: InputMaybe<Scalars["String"]>;
  requestorder_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  requestorder_not_ends_with?: InputMaybe<Scalars["String"]>;
  requestorder_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requestorder_not_in?: InputMaybe<Array<Scalars["String"]>>;
  requestorder_not_starts_with?: InputMaybe<Scalars["String"]>;
  requestorder_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requestorder_starts_with?: InputMaybe<Scalars["String"]>;
  requestorder_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  schedulerRewardRatio?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  schedulerRewardRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_not?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startTime?: InputMaybe<Scalars["BigInt"]>;
  startTime_gt?: InputMaybe<Scalars["BigInt"]>;
  startTime_gte?: InputMaybe<Scalars["BigInt"]>;
  startTime_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  startTime_lt?: InputMaybe<Scalars["BigInt"]>;
  startTime_lte?: InputMaybe<Scalars["BigInt"]>;
  startTime_not?: InputMaybe<Scalars["BigInt"]>;
  startTime_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tag?: InputMaybe<Scalars["Bytes"]>;
  tag_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag_not?: InputMaybe<Scalars["Bytes"]>;
  tag_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tasks_?: InputMaybe<Task_Filter>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trust?: InputMaybe<Scalars["BigInt"]>;
  trust_gt?: InputMaybe<Scalars["BigInt"]>;
  trust_gte?: InputMaybe<Scalars["BigInt"]>;
  trust_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trust_lt?: InputMaybe<Scalars["BigInt"]>;
  trust_lte?: InputMaybe<Scalars["BigInt"]>;
  trust_not?: InputMaybe<Scalars["BigInt"]>;
  trust_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerStake?: InputMaybe<Scalars["BigInt"]>;
  workerStake_gt?: InputMaybe<Scalars["BigInt"]>;
  workerStake_gte?: InputMaybe<Scalars["BigInt"]>;
  workerStake_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerStake_lt?: InputMaybe<Scalars["BigInt"]>;
  workerStake_lte?: InputMaybe<Scalars["BigInt"]>;
  workerStake_not?: InputMaybe<Scalars["BigInt"]>;
  workerStake_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpoolOwner?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_?: InputMaybe<Account_Filter>;
  workerpoolOwner_contains?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_ends_with?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_gt?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_gte?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpoolOwner_lt?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_lte?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not_contains?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpoolOwner_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_starts_with?: InputMaybe<Scalars["String"]>;
  workerpoolOwner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolPrice?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolPrice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolPrice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  workerpoolPrice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolPrice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolPrice_not?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolorder?: InputMaybe<Scalars["String"]>;
  workerpoolorder_?: InputMaybe<WorkerpoolOrder_Filter>;
  workerpoolorder_contains?: InputMaybe<Scalars["String"]>;
  workerpoolorder_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolorder_ends_with?: InputMaybe<Scalars["String"]>;
  workerpoolorder_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolorder_gt?: InputMaybe<Scalars["String"]>;
  workerpoolorder_gte?: InputMaybe<Scalars["String"]>;
  workerpoolorder_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpoolorder_lt?: InputMaybe<Scalars["String"]>;
  workerpoolorder_lte?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not_contains?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpoolorder_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpoolorder_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolorder_starts_with?: InputMaybe<Scalars["String"]>;
  workerpoolorder_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Deal_OrderBy {
  App = "app",
  AppOwner = "appOwner",
  AppPrice = "appPrice",
  Apporder = "apporder",
  Beneficiary = "beneficiary",
  BotFirst = "botFirst",
  BotSize = "botSize",
  Callback = "callback",
  Category = "category",
  ClaimedTasksCount = "claimedTasksCount",
  CompletedTasksCount = "completedTasksCount",
  Dataset = "dataset",
  DatasetOwner = "datasetOwner",
  DatasetPrice = "datasetPrice",
  Datasetorder = "datasetorder",
  Events = "events",
  Id = "id",
  Params = "params",
  Requester = "requester",
  Requestorder = "requestorder",
  SchedulerRewardRatio = "schedulerRewardRatio",
  StartTime = "startTime",
  Tag = "tag",
  Tasks = "tasks",
  Timestamp = "timestamp",
  Trust = "trust",
  WorkerStake = "workerStake",
  Workerpool = "workerpool",
  WorkerpoolOwner = "workerpoolOwner",
  WorkerpoolPrice = "workerpoolPrice",
  Workerpoolorder = "workerpoolorder",
}

export type Erc1538CommitMessage = Erc1538Event & {
  __typename?: "ERC1538CommitMessage";
  id: Scalars["ID"];
  message: Scalars["String"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type Erc1538CommitMessage_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  message?: InputMaybe<Scalars["String"]>;
  message_contains?: InputMaybe<Scalars["String"]>;
  message_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_ends_with?: InputMaybe<Scalars["String"]>;
  message_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_gt?: InputMaybe<Scalars["String"]>;
  message_gte?: InputMaybe<Scalars["String"]>;
  message_in?: InputMaybe<Array<Scalars["String"]>>;
  message_lt?: InputMaybe<Scalars["String"]>;
  message_lte?: InputMaybe<Scalars["String"]>;
  message_not?: InputMaybe<Scalars["String"]>;
  message_not_contains?: InputMaybe<Scalars["String"]>;
  message_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  message_not_ends_with?: InputMaybe<Scalars["String"]>;
  message_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  message_not_in?: InputMaybe<Array<Scalars["String"]>>;
  message_not_starts_with?: InputMaybe<Scalars["String"]>;
  message_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  message_starts_with?: InputMaybe<Scalars["String"]>;
  message_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Erc1538CommitMessage_OrderBy {
  Id = "id",
  Message = "message",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Erc1538Event = {
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type Erc1538Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Erc1538Event_OrderBy {
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Erc1538Function = {
  __typename?: "ERC1538Function";
  id: Scalars["ID"];
  module: Erc1538Module;
  name: Scalars["String"];
  updates: Array<Erc1538FunctionUpdate>;
};

export type Erc1538FunctionUpdatesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538FunctionUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};

export type Erc1538FunctionUpdate = Erc1538Event & {
  __typename?: "ERC1538FunctionUpdate";
  functionId: Erc1538Function;
  id: Scalars["ID"];
  newmodule: Erc1538Module;
  oldmodule: Erc1538Module;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type Erc1538FunctionUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  functionId?: InputMaybe<Scalars["String"]>;
  functionId_?: InputMaybe<Erc1538Function_Filter>;
  functionId_contains?: InputMaybe<Scalars["String"]>;
  functionId_contains_nocase?: InputMaybe<Scalars["String"]>;
  functionId_ends_with?: InputMaybe<Scalars["String"]>;
  functionId_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  functionId_gt?: InputMaybe<Scalars["String"]>;
  functionId_gte?: InputMaybe<Scalars["String"]>;
  functionId_in?: InputMaybe<Array<Scalars["String"]>>;
  functionId_lt?: InputMaybe<Scalars["String"]>;
  functionId_lte?: InputMaybe<Scalars["String"]>;
  functionId_not?: InputMaybe<Scalars["String"]>;
  functionId_not_contains?: InputMaybe<Scalars["String"]>;
  functionId_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  functionId_not_ends_with?: InputMaybe<Scalars["String"]>;
  functionId_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  functionId_not_in?: InputMaybe<Array<Scalars["String"]>>;
  functionId_not_starts_with?: InputMaybe<Scalars["String"]>;
  functionId_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  functionId_starts_with?: InputMaybe<Scalars["String"]>;
  functionId_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  newmodule?: InputMaybe<Scalars["String"]>;
  newmodule_?: InputMaybe<Erc1538Module_Filter>;
  newmodule_contains?: InputMaybe<Scalars["String"]>;
  newmodule_contains_nocase?: InputMaybe<Scalars["String"]>;
  newmodule_ends_with?: InputMaybe<Scalars["String"]>;
  newmodule_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  newmodule_gt?: InputMaybe<Scalars["String"]>;
  newmodule_gte?: InputMaybe<Scalars["String"]>;
  newmodule_in?: InputMaybe<Array<Scalars["String"]>>;
  newmodule_lt?: InputMaybe<Scalars["String"]>;
  newmodule_lte?: InputMaybe<Scalars["String"]>;
  newmodule_not?: InputMaybe<Scalars["String"]>;
  newmodule_not_contains?: InputMaybe<Scalars["String"]>;
  newmodule_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  newmodule_not_ends_with?: InputMaybe<Scalars["String"]>;
  newmodule_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  newmodule_not_in?: InputMaybe<Array<Scalars["String"]>>;
  newmodule_not_starts_with?: InputMaybe<Scalars["String"]>;
  newmodule_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  newmodule_starts_with?: InputMaybe<Scalars["String"]>;
  newmodule_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oldmodule?: InputMaybe<Scalars["String"]>;
  oldmodule_?: InputMaybe<Erc1538Module_Filter>;
  oldmodule_contains?: InputMaybe<Scalars["String"]>;
  oldmodule_contains_nocase?: InputMaybe<Scalars["String"]>;
  oldmodule_ends_with?: InputMaybe<Scalars["String"]>;
  oldmodule_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oldmodule_gt?: InputMaybe<Scalars["String"]>;
  oldmodule_gte?: InputMaybe<Scalars["String"]>;
  oldmodule_in?: InputMaybe<Array<Scalars["String"]>>;
  oldmodule_lt?: InputMaybe<Scalars["String"]>;
  oldmodule_lte?: InputMaybe<Scalars["String"]>;
  oldmodule_not?: InputMaybe<Scalars["String"]>;
  oldmodule_not_contains?: InputMaybe<Scalars["String"]>;
  oldmodule_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  oldmodule_not_ends_with?: InputMaybe<Scalars["String"]>;
  oldmodule_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  oldmodule_not_in?: InputMaybe<Array<Scalars["String"]>>;
  oldmodule_not_starts_with?: InputMaybe<Scalars["String"]>;
  oldmodule_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  oldmodule_starts_with?: InputMaybe<Scalars["String"]>;
  oldmodule_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Erc1538FunctionUpdate_OrderBy {
  FunctionId = "functionId",
  Id = "id",
  Newmodule = "newmodule",
  Oldmodule = "oldmodule",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Erc1538Function_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  module?: InputMaybe<Scalars["String"]>;
  module_?: InputMaybe<Erc1538Module_Filter>;
  module_contains?: InputMaybe<Scalars["String"]>;
  module_contains_nocase?: InputMaybe<Scalars["String"]>;
  module_ends_with?: InputMaybe<Scalars["String"]>;
  module_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  module_gt?: InputMaybe<Scalars["String"]>;
  module_gte?: InputMaybe<Scalars["String"]>;
  module_in?: InputMaybe<Array<Scalars["String"]>>;
  module_lt?: InputMaybe<Scalars["String"]>;
  module_lte?: InputMaybe<Scalars["String"]>;
  module_not?: InputMaybe<Scalars["String"]>;
  module_not_contains?: InputMaybe<Scalars["String"]>;
  module_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  module_not_ends_with?: InputMaybe<Scalars["String"]>;
  module_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  module_not_in?: InputMaybe<Array<Scalars["String"]>>;
  module_not_starts_with?: InputMaybe<Scalars["String"]>;
  module_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  module_starts_with?: InputMaybe<Scalars["String"]>;
  module_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  name_contains?: InputMaybe<Scalars["String"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_ends_with?: InputMaybe<Scalars["String"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_gt?: InputMaybe<Scalars["String"]>;
  name_gte?: InputMaybe<Scalars["String"]>;
  name_in?: InputMaybe<Array<Scalars["String"]>>;
  name_lt?: InputMaybe<Scalars["String"]>;
  name_lte?: InputMaybe<Scalars["String"]>;
  name_not?: InputMaybe<Scalars["String"]>;
  name_not_contains?: InputMaybe<Scalars["String"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  name_starts_with?: InputMaybe<Scalars["String"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  updates_?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};

export enum Erc1538Function_OrderBy {
  Id = "id",
  Module = "module",
  Name = "name",
  Updates = "updates",
}

export type Erc1538Module = {
  __typename?: "ERC1538Module";
  functions: Array<Erc1538Function>;
  id: Scalars["ID"];
};

export type Erc1538ModuleFunctionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Function_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1538Function_Filter>;
};

export type Erc1538Module_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  functions_?: InputMaybe<Erc1538Function_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
};

export enum Erc1538Module_OrderBy {
  Functions = "functions",
  Id = "id",
}

export type FaultyContribution = AccountEvent & {
  __typename?: "FaultyContribution";
  account: Account;
  contribution: Contribution;
  id: Scalars["ID"];
  score: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type FaultyContribution_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution?: InputMaybe<Scalars["String"]>;
  contribution_?: InputMaybe<Contribution_Filter>;
  contribution_contains?: InputMaybe<Scalars["String"]>;
  contribution_contains_nocase?: InputMaybe<Scalars["String"]>;
  contribution_ends_with?: InputMaybe<Scalars["String"]>;
  contribution_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution_gt?: InputMaybe<Scalars["String"]>;
  contribution_gte?: InputMaybe<Scalars["String"]>;
  contribution_in?: InputMaybe<Array<Scalars["String"]>>;
  contribution_lt?: InputMaybe<Scalars["String"]>;
  contribution_lte?: InputMaybe<Scalars["String"]>;
  contribution_not?: InputMaybe<Scalars["String"]>;
  contribution_not_contains?: InputMaybe<Scalars["String"]>;
  contribution_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  contribution_not_ends_with?: InputMaybe<Scalars["String"]>;
  contribution_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution_not_in?: InputMaybe<Array<Scalars["String"]>>;
  contribution_not_starts_with?: InputMaybe<Scalars["String"]>;
  contribution_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  contribution_starts_with?: InputMaybe<Scalars["String"]>;
  contribution_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  score?: InputMaybe<Scalars["BigInt"]>;
  score_gt?: InputMaybe<Scalars["BigInt"]>;
  score_gte?: InputMaybe<Scalars["BigInt"]>;
  score_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  score_lt?: InputMaybe<Scalars["BigInt"]>;
  score_lte?: InputMaybe<Scalars["BigInt"]>;
  score_not?: InputMaybe<Scalars["BigInt"]>;
  score_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum FaultyContribution_OrderBy {
  Account = "account",
  Contribution = "contribution",
  Id = "id",
  Score = "score",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type Lock = AccountEvent & {
  __typename?: "Lock";
  account: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  value: Scalars["BigDecimal"];
};

export type Lock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Lock_OrderBy {
  Account = "account",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Value = "value",
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type OrdersMatched = DealEvent & {
  __typename?: "OrdersMatched";
  deal: Deal;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type OrdersMatched_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deal?: InputMaybe<Scalars["String"]>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars["String"]>;
  deal_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_ends_with?: InputMaybe<Scalars["String"]>;
  deal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_gt?: InputMaybe<Scalars["String"]>;
  deal_gte?: InputMaybe<Scalars["String"]>;
  deal_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_lt?: InputMaybe<Scalars["String"]>;
  deal_lte?: InputMaybe<Scalars["String"]>;
  deal_not?: InputMaybe<Scalars["String"]>;
  deal_not_contains?: InputMaybe<Scalars["String"]>;
  deal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_not_starts_with?: InputMaybe<Scalars["String"]>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_starts_with?: InputMaybe<Scalars["String"]>;
  deal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum OrdersMatched_OrderBy {
  Deal = "deal",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type PolicyUpdate = WorkerpoolEvent & {
  __typename?: "PolicyUpdate";
  id: Scalars["ID"];
  newSchedulerRewardRatio: Scalars["BigInt"];
  newWorkerStakeRatio: Scalars["BigInt"];
  oldSchedulerRewardRatio: Scalars["BigInt"];
  oldWorkerStakeRatio: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type PolicyUpdate_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  newSchedulerRewardRatio?: InputMaybe<Scalars["BigInt"]>;
  newSchedulerRewardRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  newSchedulerRewardRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  newSchedulerRewardRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newSchedulerRewardRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  newSchedulerRewardRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  newSchedulerRewardRatio_not?: InputMaybe<Scalars["BigInt"]>;
  newSchedulerRewardRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newWorkerStakeRatio?: InputMaybe<Scalars["BigInt"]>;
  newWorkerStakeRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  newWorkerStakeRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  newWorkerStakeRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  newWorkerStakeRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  newWorkerStakeRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  newWorkerStakeRatio_not?: InputMaybe<Scalars["BigInt"]>;
  newWorkerStakeRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldSchedulerRewardRatio?: InputMaybe<Scalars["BigInt"]>;
  oldSchedulerRewardRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  oldSchedulerRewardRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  oldSchedulerRewardRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldSchedulerRewardRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  oldSchedulerRewardRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  oldSchedulerRewardRatio_not?: InputMaybe<Scalars["BigInt"]>;
  oldSchedulerRewardRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldWorkerStakeRatio?: InputMaybe<Scalars["BigInt"]>;
  oldWorkerStakeRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  oldWorkerStakeRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  oldWorkerStakeRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  oldWorkerStakeRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  oldWorkerStakeRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  oldWorkerStakeRatio_not?: InputMaybe<Scalars["BigInt"]>;
  oldWorkerStakeRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum PolicyUpdate_OrderBy {
  Id = "id",
  NewSchedulerRewardRatio = "newSchedulerRewardRatio",
  NewWorkerStakeRatio = "newWorkerStakeRatio",
  OldSchedulerRewardRatio = "oldSchedulerRewardRatio",
  OldWorkerStakeRatio = "oldWorkerStakeRatio",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Workerpool = "workerpool",
}

export type Protocol = {
  __typename?: "Protocol";
  appsCount: Scalars["BigInt"];
  categoriesCount: Scalars["BigInt"];
  claimedTasksCount: Scalars["BigInt"];
  completedTasksCount: Scalars["BigInt"];
  datasetsCount: Scalars["BigInt"];
  dealsCount: Scalars["BigInt"];
  id: Scalars["ID"];
  tasksCount: Scalars["BigInt"];
  tvl: Scalars["BigDecimal"];
  workerpoolsCount: Scalars["BigInt"];
};

export type Protocol_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  appsCount?: InputMaybe<Scalars["BigInt"]>;
  appsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  appsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  appsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  appsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  appsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  appsCount_not?: InputMaybe<Scalars["BigInt"]>;
  appsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  categoriesCount?: InputMaybe<Scalars["BigInt"]>;
  categoriesCount_gt?: InputMaybe<Scalars["BigInt"]>;
  categoriesCount_gte?: InputMaybe<Scalars["BigInt"]>;
  categoriesCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  categoriesCount_lt?: InputMaybe<Scalars["BigInt"]>;
  categoriesCount_lte?: InputMaybe<Scalars["BigInt"]>;
  categoriesCount_not?: InputMaybe<Scalars["BigInt"]>;
  categoriesCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  claimedTasksCount?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_gt?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_gte?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  claimedTasksCount_lt?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_lte?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_not?: InputMaybe<Scalars["BigInt"]>;
  claimedTasksCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  completedTasksCount?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_gt?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_gte?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  completedTasksCount_lt?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_lte?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_not?: InputMaybe<Scalars["BigInt"]>;
  completedTasksCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  datasetsCount?: InputMaybe<Scalars["BigInt"]>;
  datasetsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  datasetsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  datasetsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  datasetsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  datasetsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  datasetsCount_not?: InputMaybe<Scalars["BigInt"]>;
  datasetsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dealsCount?: InputMaybe<Scalars["BigInt"]>;
  dealsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  dealsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  dealsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  dealsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  dealsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  dealsCount_not?: InputMaybe<Scalars["BigInt"]>;
  dealsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  tasksCount?: InputMaybe<Scalars["BigInt"]>;
  tasksCount_gt?: InputMaybe<Scalars["BigInt"]>;
  tasksCount_gte?: InputMaybe<Scalars["BigInt"]>;
  tasksCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tasksCount_lt?: InputMaybe<Scalars["BigInt"]>;
  tasksCount_lte?: InputMaybe<Scalars["BigInt"]>;
  tasksCount_not?: InputMaybe<Scalars["BigInt"]>;
  tasksCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  tvl?: InputMaybe<Scalars["BigDecimal"]>;
  tvl_gt?: InputMaybe<Scalars["BigDecimal"]>;
  tvl_gte?: InputMaybe<Scalars["BigDecimal"]>;
  tvl_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  tvl_lt?: InputMaybe<Scalars["BigDecimal"]>;
  tvl_lte?: InputMaybe<Scalars["BigDecimal"]>;
  tvl_not?: InputMaybe<Scalars["BigDecimal"]>;
  tvl_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  workerpoolsCount?: InputMaybe<Scalars["BigInt"]>;
  workerpoolsCount_gt?: InputMaybe<Scalars["BigInt"]>;
  workerpoolsCount_gte?: InputMaybe<Scalars["BigInt"]>;
  workerpoolsCount_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerpoolsCount_lt?: InputMaybe<Scalars["BigInt"]>;
  workerpoolsCount_lte?: InputMaybe<Scalars["BigInt"]>;
  workerpoolsCount_not?: InputMaybe<Scalars["BigInt"]>;
  workerpoolsCount_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Protocol_OrderBy {
  AppsCount = "appsCount",
  CategoriesCount = "categoriesCount",
  ClaimedTasksCount = "claimedTasksCount",
  CompletedTasksCount = "completedTasksCount",
  DatasetsCount = "datasetsCount",
  DealsCount = "dealsCount",
  Id = "id",
  TasksCount = "tasksCount",
  Tvl = "tvl",
  WorkerpoolsCount = "workerpoolsCount",
}

export type Query = {
  __typename?: "Query";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountEvent?: Maybe<AccountEvent>;
  accountEvents: Array<AccountEvent>;
  accounts: Array<Account>;
  accurateContribution?: Maybe<AccurateContribution>;
  accurateContributions: Array<AccurateContribution>;
  app?: Maybe<App>;
  appOrder?: Maybe<AppOrder>;
  appOrders: Array<AppOrder>;
  appTransfer?: Maybe<AppTransfer>;
  appTransfers: Array<AppTransfer>;
  apps: Array<App>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  contribution?: Maybe<Contribution>;
  contributions: Array<Contribution>;
  dataset?: Maybe<Dataset>;
  datasetOrder?: Maybe<DatasetOrder>;
  datasetOrders: Array<DatasetOrder>;
  datasetTransfer?: Maybe<DatasetTransfer>;
  datasetTransfers: Array<DatasetTransfer>;
  datasets: Array<Dataset>;
  deal?: Maybe<Deal>;
  dealEvent?: Maybe<DealEvent>;
  dealEvents: Array<DealEvent>;
  deals: Array<Deal>;
  erc1538CommitMessage?: Maybe<Erc1538CommitMessage>;
  erc1538CommitMessages: Array<Erc1538CommitMessage>;
  erc1538Event?: Maybe<Erc1538Event>;
  erc1538Events: Array<Erc1538Event>;
  erc1538Function?: Maybe<Erc1538Function>;
  erc1538FunctionUpdate?: Maybe<Erc1538FunctionUpdate>;
  erc1538FunctionUpdates: Array<Erc1538FunctionUpdate>;
  erc1538Functions: Array<Erc1538Function>;
  erc1538Module?: Maybe<Erc1538Module>;
  erc1538Modules: Array<Erc1538Module>;
  faultyContribution?: Maybe<FaultyContribution>;
  faultyContributions: Array<FaultyContribution>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  ordersMatched?: Maybe<OrdersMatched>;
  ordersMatcheds: Array<OrdersMatched>;
  policyUpdate?: Maybe<PolicyUpdate>;
  policyUpdates: Array<PolicyUpdate>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  requestOrder?: Maybe<RequestOrder>;
  requestOrders: Array<RequestOrder>;
  ressource?: Maybe<Ressource>;
  ressourceTransferEvent?: Maybe<RessourceTransferEvent>;
  ressourceTransferEvents: Array<RessourceTransferEvent>;
  ressources: Array<Ressource>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  schedulerNotice?: Maybe<SchedulerNotice>;
  schedulerNotices: Array<SchedulerNotice>;
  seize?: Maybe<Seize>;
  seizes: Array<Seize>;
  task?: Maybe<Task>;
  taskClaimed?: Maybe<TaskClaimed>;
  taskClaimeds: Array<TaskClaimed>;
  taskConsensus?: Maybe<TaskConsensus>;
  taskConsensuses: Array<TaskConsensus>;
  taskContribute?: Maybe<TaskContribute>;
  taskContributes: Array<TaskContribute>;
  taskEvent?: Maybe<TaskEvent>;
  taskEvents: Array<TaskEvent>;
  taskFinalize?: Maybe<TaskFinalize>;
  taskFinalizes: Array<TaskFinalize>;
  taskInitialize?: Maybe<TaskInitialize>;
  taskInitializes: Array<TaskInitialize>;
  taskReopen?: Maybe<TaskReopen>;
  taskReopens: Array<TaskReopen>;
  taskReveal?: Maybe<TaskReveal>;
  taskReveals: Array<TaskReveal>;
  tasks: Array<Task>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  workerpool?: Maybe<Workerpool>;
  workerpoolEvent?: Maybe<WorkerpoolEvent>;
  workerpoolEvents: Array<WorkerpoolEvent>;
  workerpoolOrder?: Maybe<WorkerpoolOrder>;
  workerpoolOrders: Array<WorkerpoolOrder>;
  workerpoolTransfer?: Maybe<WorkerpoolTransfer>;
  workerpoolTransfers: Array<WorkerpoolTransfer>;
  workerpools: Array<Workerpool>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccountEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountEvent_Filter>;
};

export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type QueryAccurateContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAccurateContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AccurateContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccurateContribution_Filter>;
};

export type QueryAppArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAppOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAppOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AppOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppOrder_Filter>;
};

export type QueryAppTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAppTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AppTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppTransfer_Filter>;
};

export type QueryAppsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<App_Filter>;
};

export type QueryCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Category_Filter>;
};

export type QueryCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contribution_Filter>;
};

export type QueryDatasetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDatasetOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDatasetOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DatasetOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetOrder_Filter>;
};

export type QueryDatasetTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDatasetTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DatasetTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetTransfer_Filter>;
};

export type QueryDatasetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Dataset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dataset_Filter>;
};

export type QueryDealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDealEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryDealEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DealEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DealEvent_Filter>;
};

export type QueryDealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deal_Filter>;
};

export type QueryErc1538CommitMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1538CommitMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538CommitMessage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538CommitMessage_Filter>;
};

export type QueryErc1538EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1538EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Event_Filter>;
};

export type QueryErc1538FunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1538FunctionUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1538FunctionUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538FunctionUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};

export type QueryErc1538FunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Function_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Function_Filter>;
};

export type QueryErc1538ModuleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryErc1538ModulesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Module_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Module_Filter>;
};

export type QueryFaultyContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryFaultyContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FaultyContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FaultyContribution_Filter>;
};

export type QueryLockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryLocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Lock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Lock_Filter>;
};

export type QueryOrdersMatchedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryOrdersMatchedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<OrdersMatched_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrdersMatched_Filter>;
};

export type QueryPolicyUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryPolicyUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PolicyUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PolicyUpdate_Filter>;
};

export type QueryProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};

export type QueryRequestOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRequestOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RequestOrder_Filter>;
};

export type QueryRessourceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRessourceTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRessourceTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RessourceTransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RessourceTransferEvent_Filter>;
};

export type QueryRessourcesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Ressource_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ressource_Filter>;
};

export type QueryRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};

export type QuerySchedulerNoticeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySchedulerNoticesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SchedulerNotice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchedulerNotice_Filter>;
};

export type QuerySeizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QuerySeizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Seize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seize_Filter>;
};

export type QueryTaskArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskClaimed_Filter>;
};

export type QueryTaskConsensusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskConsensusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskConsensus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskConsensus_Filter>;
};

export type QueryTaskContributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskContributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskContribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskContribute_Filter>;
};

export type QueryTaskEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskEvent_Filter>;
};

export type QueryTaskFinalizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskFinalizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskFinalize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskFinalize_Filter>;
};

export type QueryTaskInitializeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskInitializesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskInitialize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskInitialize_Filter>;
};

export type QueryTaskReopenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskReopensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskReopen_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReopen_Filter>;
};

export type QueryTaskRevealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTaskRevealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskReveal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReveal_Filter>;
};

export type QueryTasksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Task_Filter>;
};

export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type QueryTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type QueryUnlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUnlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Unlock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unlock_Filter>;
};

export type QueryWorkerpoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWorkerpoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWorkerpoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};

export type QueryWorkerpoolOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWorkerpoolOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolOrder_Filter>;
};

export type QueryWorkerpoolTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryWorkerpoolTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolTransfer_Filter>;
};

export type QueryWorkerpoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Workerpool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workerpool_Filter>;
};

export type RequestOrder = {
  __typename?: "RequestOrder";
  app?: Maybe<App>;
  appmaxprice?: Maybe<Scalars["BigDecimal"]>;
  beneficiary?: Maybe<Account>;
  callback?: Maybe<Account>;
  category?: Maybe<Category>;
  dataset?: Maybe<Dataset>;
  datasetmaxprice?: Maybe<Scalars["BigDecimal"]>;
  deals: Array<Deal>;
  id: Scalars["ID"];
  params?: Maybe<Scalars["String"]>;
  requester: Account;
  salt?: Maybe<Scalars["Bytes"]>;
  sign?: Maybe<Scalars["Bytes"]>;
  tag?: Maybe<Scalars["Bytes"]>;
  trust?: Maybe<Scalars["BigInt"]>;
  volume?: Maybe<Scalars["BigInt"]>;
  workerpool?: Maybe<Workerpool>;
  workerpoolmaxprice?: Maybe<Scalars["BigDecimal"]>;
};

export type RequestOrderDealsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type RequestOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  app?: InputMaybe<Scalars["String"]>;
  app_?: InputMaybe<App_Filter>;
  app_contains?: InputMaybe<Scalars["String"]>;
  app_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_ends_with?: InputMaybe<Scalars["String"]>;
  app_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_gt?: InputMaybe<Scalars["String"]>;
  app_gte?: InputMaybe<Scalars["String"]>;
  app_in?: InputMaybe<Array<Scalars["String"]>>;
  app_lt?: InputMaybe<Scalars["String"]>;
  app_lte?: InputMaybe<Scalars["String"]>;
  app_not?: InputMaybe<Scalars["String"]>;
  app_not_contains?: InputMaybe<Scalars["String"]>;
  app_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  app_not_ends_with?: InputMaybe<Scalars["String"]>;
  app_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  app_not_in?: InputMaybe<Array<Scalars["String"]>>;
  app_not_starts_with?: InputMaybe<Scalars["String"]>;
  app_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  app_starts_with?: InputMaybe<Scalars["String"]>;
  app_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  appmaxprice?: InputMaybe<Scalars["BigDecimal"]>;
  appmaxprice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  appmaxprice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  appmaxprice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  appmaxprice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  appmaxprice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  appmaxprice_not?: InputMaybe<Scalars["BigDecimal"]>;
  appmaxprice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  beneficiary?: InputMaybe<Scalars["String"]>;
  beneficiary_?: InputMaybe<Account_Filter>;
  beneficiary_contains?: InputMaybe<Scalars["String"]>;
  beneficiary_contains_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_ends_with?: InputMaybe<Scalars["String"]>;
  beneficiary_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_gt?: InputMaybe<Scalars["String"]>;
  beneficiary_gte?: InputMaybe<Scalars["String"]>;
  beneficiary_in?: InputMaybe<Array<Scalars["String"]>>;
  beneficiary_lt?: InputMaybe<Scalars["String"]>;
  beneficiary_lte?: InputMaybe<Scalars["String"]>;
  beneficiary_not?: InputMaybe<Scalars["String"]>;
  beneficiary_not_contains?: InputMaybe<Scalars["String"]>;
  beneficiary_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_not_ends_with?: InputMaybe<Scalars["String"]>;
  beneficiary_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_not_in?: InputMaybe<Array<Scalars["String"]>>;
  beneficiary_not_starts_with?: InputMaybe<Scalars["String"]>;
  beneficiary_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  beneficiary_starts_with?: InputMaybe<Scalars["String"]>;
  beneficiary_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  callback?: InputMaybe<Scalars["String"]>;
  callback_?: InputMaybe<Account_Filter>;
  callback_contains?: InputMaybe<Scalars["String"]>;
  callback_contains_nocase?: InputMaybe<Scalars["String"]>;
  callback_ends_with?: InputMaybe<Scalars["String"]>;
  callback_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  callback_gt?: InputMaybe<Scalars["String"]>;
  callback_gte?: InputMaybe<Scalars["String"]>;
  callback_in?: InputMaybe<Array<Scalars["String"]>>;
  callback_lt?: InputMaybe<Scalars["String"]>;
  callback_lte?: InputMaybe<Scalars["String"]>;
  callback_not?: InputMaybe<Scalars["String"]>;
  callback_not_contains?: InputMaybe<Scalars["String"]>;
  callback_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  callback_not_ends_with?: InputMaybe<Scalars["String"]>;
  callback_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  callback_not_in?: InputMaybe<Array<Scalars["String"]>>;
  callback_not_starts_with?: InputMaybe<Scalars["String"]>;
  callback_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  callback_starts_with?: InputMaybe<Scalars["String"]>;
  callback_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category?: InputMaybe<Scalars["String"]>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_ends_with?: InputMaybe<Scalars["String"]>;
  category_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_gt?: InputMaybe<Scalars["String"]>;
  category_gte?: InputMaybe<Scalars["String"]>;
  category_in?: InputMaybe<Array<Scalars["String"]>>;
  category_lt?: InputMaybe<Scalars["String"]>;
  category_lte?: InputMaybe<Scalars["String"]>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_not_ends_with?: InputMaybe<Scalars["String"]>;
  category_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_not_in?: InputMaybe<Array<Scalars["String"]>>;
  category_not_starts_with?: InputMaybe<Scalars["String"]>;
  category_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category_starts_with?: InputMaybe<Scalars["String"]>;
  category_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset?: InputMaybe<Scalars["String"]>;
  dataset_?: InputMaybe<Dataset_Filter>;
  dataset_contains?: InputMaybe<Scalars["String"]>;
  dataset_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_gt?: InputMaybe<Scalars["String"]>;
  dataset_gte?: InputMaybe<Scalars["String"]>;
  dataset_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_lt?: InputMaybe<Scalars["String"]>;
  dataset_lte?: InputMaybe<Scalars["String"]>;
  dataset_not?: InputMaybe<Scalars["String"]>;
  dataset_not_contains?: InputMaybe<Scalars["String"]>;
  dataset_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with?: InputMaybe<Scalars["String"]>;
  dataset_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_not_in?: InputMaybe<Array<Scalars["String"]>>;
  dataset_not_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  dataset_starts_with?: InputMaybe<Scalars["String"]>;
  dataset_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetmaxprice?: InputMaybe<Scalars["BigDecimal"]>;
  datasetmaxprice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  datasetmaxprice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  datasetmaxprice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  datasetmaxprice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  datasetmaxprice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  datasetmaxprice_not?: InputMaybe<Scalars["BigDecimal"]>;
  datasetmaxprice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  params?: InputMaybe<Scalars["String"]>;
  params_contains?: InputMaybe<Scalars["String"]>;
  params_contains_nocase?: InputMaybe<Scalars["String"]>;
  params_ends_with?: InputMaybe<Scalars["String"]>;
  params_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  params_gt?: InputMaybe<Scalars["String"]>;
  params_gte?: InputMaybe<Scalars["String"]>;
  params_in?: InputMaybe<Array<Scalars["String"]>>;
  params_lt?: InputMaybe<Scalars["String"]>;
  params_lte?: InputMaybe<Scalars["String"]>;
  params_not?: InputMaybe<Scalars["String"]>;
  params_not_contains?: InputMaybe<Scalars["String"]>;
  params_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  params_not_ends_with?: InputMaybe<Scalars["String"]>;
  params_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  params_not_in?: InputMaybe<Array<Scalars["String"]>>;
  params_not_starts_with?: InputMaybe<Scalars["String"]>;
  params_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  params_starts_with?: InputMaybe<Scalars["String"]>;
  params_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requester?: InputMaybe<Scalars["String"]>;
  requester_?: InputMaybe<Account_Filter>;
  requester_contains?: InputMaybe<Scalars["String"]>;
  requester_contains_nocase?: InputMaybe<Scalars["String"]>;
  requester_ends_with?: InputMaybe<Scalars["String"]>;
  requester_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_gt?: InputMaybe<Scalars["String"]>;
  requester_gte?: InputMaybe<Scalars["String"]>;
  requester_in?: InputMaybe<Array<Scalars["String"]>>;
  requester_lt?: InputMaybe<Scalars["String"]>;
  requester_lte?: InputMaybe<Scalars["String"]>;
  requester_not?: InputMaybe<Scalars["String"]>;
  requester_not_contains?: InputMaybe<Scalars["String"]>;
  requester_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  requester_not_ends_with?: InputMaybe<Scalars["String"]>;
  requester_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_not_in?: InputMaybe<Array<Scalars["String"]>>;
  requester_not_starts_with?: InputMaybe<Scalars["String"]>;
  requester_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_starts_with?: InputMaybe<Scalars["String"]>;
  requester_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  salt?: InputMaybe<Scalars["Bytes"]>;
  salt_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt_not?: InputMaybe<Scalars["Bytes"]>;
  salt_not_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign?: InputMaybe<Scalars["Bytes"]>;
  sign_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign_not?: InputMaybe<Scalars["Bytes"]>;
  sign_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag?: InputMaybe<Scalars["Bytes"]>;
  tag_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag_not?: InputMaybe<Scalars["Bytes"]>;
  tag_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trust?: InputMaybe<Scalars["BigInt"]>;
  trust_gt?: InputMaybe<Scalars["BigInt"]>;
  trust_gte?: InputMaybe<Scalars["BigInt"]>;
  trust_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trust_lt?: InputMaybe<Scalars["BigInt"]>;
  trust_lte?: InputMaybe<Scalars["BigInt"]>;
  trust_not?: InputMaybe<Scalars["BigInt"]>;
  trust_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolmaxprice?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolmaxprice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolmaxprice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolmaxprice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  workerpoolmaxprice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolmaxprice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolmaxprice_not?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolmaxprice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum RequestOrder_OrderBy {
  App = "app",
  Appmaxprice = "appmaxprice",
  Beneficiary = "beneficiary",
  Callback = "callback",
  Category = "category",
  Dataset = "dataset",
  Datasetmaxprice = "datasetmaxprice",
  Deals = "deals",
  Id = "id",
  Params = "params",
  Requester = "requester",
  Salt = "salt",
  Sign = "sign",
  Tag = "tag",
  Trust = "trust",
  Volume = "volume",
  Workerpool = "workerpool",
  Workerpoolmaxprice = "workerpoolmaxprice",
}

export type Ressource = {
  id: Scalars["ID"];
  owner: Account;
};

export type RessourceTransferEvent = {
  from: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  to: Account;
  transaction: Transaction;
};

export type RessourceTransferEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars["String"]>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum RessourceTransferEvent_OrderBy {
  From = "from",
  Id = "id",
  Timestamp = "timestamp",
  To = "to",
  Transaction = "transaction",
}

export type Ressource_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum Ressource_OrderBy {
  Id = "id",
  Owner = "owner",
}

export type Reward = AccountEvent & {
  __typename?: "Reward";
  account: Account;
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  value: Scalars["BigDecimal"];
};

export type Reward_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Reward_OrderBy {
  Account = "account",
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Value = "value",
}

export type SchedulerNotice = WorkerpoolEvent & {
  __typename?: "SchedulerNotice";
  deal: Deal;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type SchedulerNotice_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  deal?: InputMaybe<Scalars["String"]>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars["String"]>;
  deal_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_ends_with?: InputMaybe<Scalars["String"]>;
  deal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_gt?: InputMaybe<Scalars["String"]>;
  deal_gte?: InputMaybe<Scalars["String"]>;
  deal_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_lt?: InputMaybe<Scalars["String"]>;
  deal_lte?: InputMaybe<Scalars["String"]>;
  deal_not?: InputMaybe<Scalars["String"]>;
  deal_not_contains?: InputMaybe<Scalars["String"]>;
  deal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_not_starts_with?: InputMaybe<Scalars["String"]>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_starts_with?: InputMaybe<Scalars["String"]>;
  deal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum SchedulerNotice_OrderBy {
  Deal = "deal",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Workerpool = "workerpool",
}

export type Seize = AccountEvent & {
  __typename?: "Seize";
  account: Account;
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  value: Scalars["BigDecimal"];
};

export type Seize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Seize_OrderBy {
  Account = "account",
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Value = "value",
}

export type Subscription = {
  __typename?: "Subscription";
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountEvent?: Maybe<AccountEvent>;
  accountEvents: Array<AccountEvent>;
  accounts: Array<Account>;
  accurateContribution?: Maybe<AccurateContribution>;
  accurateContributions: Array<AccurateContribution>;
  app?: Maybe<App>;
  appOrder?: Maybe<AppOrder>;
  appOrders: Array<AppOrder>;
  appTransfer?: Maybe<AppTransfer>;
  appTransfers: Array<AppTransfer>;
  apps: Array<App>;
  categories: Array<Category>;
  category?: Maybe<Category>;
  contribution?: Maybe<Contribution>;
  contributions: Array<Contribution>;
  dataset?: Maybe<Dataset>;
  datasetOrder?: Maybe<DatasetOrder>;
  datasetOrders: Array<DatasetOrder>;
  datasetTransfer?: Maybe<DatasetTransfer>;
  datasetTransfers: Array<DatasetTransfer>;
  datasets: Array<Dataset>;
  deal?: Maybe<Deal>;
  dealEvent?: Maybe<DealEvent>;
  dealEvents: Array<DealEvent>;
  deals: Array<Deal>;
  erc1538CommitMessage?: Maybe<Erc1538CommitMessage>;
  erc1538CommitMessages: Array<Erc1538CommitMessage>;
  erc1538Event?: Maybe<Erc1538Event>;
  erc1538Events: Array<Erc1538Event>;
  erc1538Function?: Maybe<Erc1538Function>;
  erc1538FunctionUpdate?: Maybe<Erc1538FunctionUpdate>;
  erc1538FunctionUpdates: Array<Erc1538FunctionUpdate>;
  erc1538Functions: Array<Erc1538Function>;
  erc1538Module?: Maybe<Erc1538Module>;
  erc1538Modules: Array<Erc1538Module>;
  faultyContribution?: Maybe<FaultyContribution>;
  faultyContributions: Array<FaultyContribution>;
  lock?: Maybe<Lock>;
  locks: Array<Lock>;
  ordersMatched?: Maybe<OrdersMatched>;
  ordersMatcheds: Array<OrdersMatched>;
  policyUpdate?: Maybe<PolicyUpdate>;
  policyUpdates: Array<PolicyUpdate>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  requestOrder?: Maybe<RequestOrder>;
  requestOrders: Array<RequestOrder>;
  ressource?: Maybe<Ressource>;
  ressourceTransferEvent?: Maybe<RessourceTransferEvent>;
  ressourceTransferEvents: Array<RessourceTransferEvent>;
  ressources: Array<Ressource>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  schedulerNotice?: Maybe<SchedulerNotice>;
  schedulerNotices: Array<SchedulerNotice>;
  seize?: Maybe<Seize>;
  seizes: Array<Seize>;
  task?: Maybe<Task>;
  taskClaimed?: Maybe<TaskClaimed>;
  taskClaimeds: Array<TaskClaimed>;
  taskConsensus?: Maybe<TaskConsensus>;
  taskConsensuses: Array<TaskConsensus>;
  taskContribute?: Maybe<TaskContribute>;
  taskContributes: Array<TaskContribute>;
  taskEvent?: Maybe<TaskEvent>;
  taskEvents: Array<TaskEvent>;
  taskFinalize?: Maybe<TaskFinalize>;
  taskFinalizes: Array<TaskFinalize>;
  taskInitialize?: Maybe<TaskInitialize>;
  taskInitializes: Array<TaskInitialize>;
  taskReopen?: Maybe<TaskReopen>;
  taskReopens: Array<TaskReopen>;
  taskReveal?: Maybe<TaskReveal>;
  taskReveals: Array<TaskReveal>;
  tasks: Array<Task>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  unlock?: Maybe<Unlock>;
  unlocks: Array<Unlock>;
  workerpool?: Maybe<Workerpool>;
  workerpoolEvent?: Maybe<WorkerpoolEvent>;
  workerpoolEvents: Array<WorkerpoolEvent>;
  workerpoolOrder?: Maybe<WorkerpoolOrder>;
  workerpoolOrders: Array<WorkerpoolOrder>;
  workerpoolTransfer?: Maybe<WorkerpoolTransfer>;
  workerpoolTransfers: Array<WorkerpoolTransfer>;
  workerpools: Array<Workerpool>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccountEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountEvent_Filter>;
};

export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};

export type SubscriptionAccurateContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAccurateContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AccurateContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccurateContribution_Filter>;
};

export type SubscriptionAppArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAppOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAppOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AppOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppOrder_Filter>;
};

export type SubscriptionAppTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAppTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AppTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AppTransfer_Filter>;
};

export type SubscriptionAppsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<App_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<App_Filter>;
};

export type SubscriptionCategoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Category_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Category_Filter>;
};

export type SubscriptionCategoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contribution_Filter>;
};

export type SubscriptionDatasetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDatasetOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDatasetOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DatasetOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetOrder_Filter>;
};

export type SubscriptionDatasetTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDatasetTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DatasetTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DatasetTransfer_Filter>;
};

export type SubscriptionDatasetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Dataset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Dataset_Filter>;
};

export type SubscriptionDealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDealEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionDealEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<DealEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<DealEvent_Filter>;
};

export type SubscriptionDealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deal_Filter>;
};

export type SubscriptionErc1538CommitMessageArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1538CommitMessagesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538CommitMessage_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538CommitMessage_Filter>;
};

export type SubscriptionErc1538EventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1538EventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Event_Filter>;
};

export type SubscriptionErc1538FunctionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1538FunctionUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1538FunctionUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538FunctionUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538FunctionUpdate_Filter>;
};

export type SubscriptionErc1538FunctionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Function_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Function_Filter>;
};

export type SubscriptionErc1538ModuleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionErc1538ModulesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Module_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1538Module_Filter>;
};

export type SubscriptionFaultyContributionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionFaultyContributionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<FaultyContribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FaultyContribution_Filter>;
};

export type SubscriptionLockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionLocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Lock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Lock_Filter>;
};

export type SubscriptionOrdersMatchedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionOrdersMatchedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<OrdersMatched_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrdersMatched_Filter>;
};

export type SubscriptionPolicyUpdateArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionPolicyUpdatesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<PolicyUpdate_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PolicyUpdate_Filter>;
};

export type SubscriptionProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};

export type SubscriptionRequestOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRequestOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RequestOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RequestOrder_Filter>;
};

export type SubscriptionRessourceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRessourceTransferEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRessourceTransferEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RessourceTransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RessourceTransferEvent_Filter>;
};

export type SubscriptionRessourcesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Ressource_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Ressource_Filter>;
};

export type SubscriptionRewardArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionRewardsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Reward_Filter>;
};

export type SubscriptionSchedulerNoticeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSchedulerNoticesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<SchedulerNotice_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<SchedulerNotice_Filter>;
};

export type SubscriptionSeizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionSeizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Seize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Seize_Filter>;
};

export type SubscriptionTaskArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskClaimed_Filter>;
};

export type SubscriptionTaskConsensusArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskConsensusesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskConsensus_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskConsensus_Filter>;
};

export type SubscriptionTaskContributeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskContributesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskContribute_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskContribute_Filter>;
};

export type SubscriptionTaskEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskEvent_Filter>;
};

export type SubscriptionTaskFinalizeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskFinalizesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskFinalize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskFinalize_Filter>;
};

export type SubscriptionTaskInitializeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskInitializesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskInitialize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskInitialize_Filter>;
};

export type SubscriptionTaskReopenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskReopensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskReopen_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReopen_Filter>;
};

export type SubscriptionTaskRevealArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTaskRevealsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskReveal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TaskReveal_Filter>;
};

export type SubscriptionTasksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Task_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Task_Filter>;
};

export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};

export type SubscriptionTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transfer_Filter>;
};

export type SubscriptionUnlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUnlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Unlock_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Unlock_Filter>;
};

export type SubscriptionWorkerpoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWorkerpoolEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWorkerpoolEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};

export type SubscriptionWorkerpoolOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWorkerpoolOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolOrder_Filter>;
};

export type SubscriptionWorkerpoolTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionWorkerpoolTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WorkerpoolTransfer_Filter>;
};

export type SubscriptionWorkerpoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Workerpool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Workerpool_Filter>;
};

export type Task = {
  __typename?: "Task";
  consensus?: Maybe<Scalars["Bytes"]>;
  contributionDeadline: Scalars["BigInt"];
  contributions: Array<Contribution>;
  deal: Deal;
  events: Array<TaskEvent>;
  finalDeadline: Scalars["BigInt"];
  id: Scalars["ID"];
  index: Scalars["BigInt"];
  requester: Account;
  resultDigest?: Maybe<Scalars["Bytes"]>;
  results?: Maybe<Scalars["String"]>;
  resultsCallback?: Maybe<Scalars["String"]>;
  revealDeadline?: Maybe<Scalars["BigInt"]>;
  rewards: Array<Reward>;
  seizes: Array<Seize>;
  status: TaskStatus;
  timestamp: Scalars["BigInt"];
};

export type TaskContributionsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Contribution_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Contribution_Filter>;
};

export type TaskEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TaskEvent_Filter>;
};

export type TaskRewardsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Reward_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Reward_Filter>;
};

export type TaskSeizesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Seize_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Seize_Filter>;
};

export type TaskClaimed = TaskEvent & {
  __typename?: "TaskClaimed";
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type TaskClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskClaimed_OrderBy {
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type TaskConsensus = TaskEvent & {
  __typename?: "TaskConsensus";
  consensus: Scalars["Bytes"];
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type TaskConsensus_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  consensus?: InputMaybe<Scalars["Bytes"]>;
  consensus_contains?: InputMaybe<Scalars["Bytes"]>;
  consensus_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  consensus_not?: InputMaybe<Scalars["Bytes"]>;
  consensus_not_contains?: InputMaybe<Scalars["Bytes"]>;
  consensus_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskConsensus_OrderBy {
  Consensus = "consensus",
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type TaskContribute = TaskEvent & {
  __typename?: "TaskContribute";
  hash: Scalars["Bytes"];
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  worker: Account;
};

export type TaskContribute_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  hash?: InputMaybe<Scalars["Bytes"]>;
  hash_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  hash_not?: InputMaybe<Scalars["Bytes"]>;
  hash_not_contains?: InputMaybe<Scalars["Bytes"]>;
  hash_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  worker?: InputMaybe<Scalars["String"]>;
  worker_?: InputMaybe<Account_Filter>;
  worker_contains?: InputMaybe<Scalars["String"]>;
  worker_contains_nocase?: InputMaybe<Scalars["String"]>;
  worker_ends_with?: InputMaybe<Scalars["String"]>;
  worker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_gt?: InputMaybe<Scalars["String"]>;
  worker_gte?: InputMaybe<Scalars["String"]>;
  worker_in?: InputMaybe<Array<Scalars["String"]>>;
  worker_lt?: InputMaybe<Scalars["String"]>;
  worker_lte?: InputMaybe<Scalars["String"]>;
  worker_not?: InputMaybe<Scalars["String"]>;
  worker_not_contains?: InputMaybe<Scalars["String"]>;
  worker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  worker_not_ends_with?: InputMaybe<Scalars["String"]>;
  worker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  worker_not_starts_with?: InputMaybe<Scalars["String"]>;
  worker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_starts_with?: InputMaybe<Scalars["String"]>;
  worker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskContribute_OrderBy {
  Hash = "hash",
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Worker = "worker",
}

export type TaskEvent = {
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type TaskEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskEvent_OrderBy {
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type TaskFinalize = TaskEvent & {
  __typename?: "TaskFinalize";
  id: Scalars["ID"];
  results: Scalars["Bytes"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type TaskFinalize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  results?: InputMaybe<Scalars["Bytes"]>;
  results_contains?: InputMaybe<Scalars["Bytes"]>;
  results_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  results_not?: InputMaybe<Scalars["Bytes"]>;
  results_not_contains?: InputMaybe<Scalars["Bytes"]>;
  results_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskFinalize_OrderBy {
  Id = "id",
  Results = "results",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type TaskInitialize = TaskEvent & {
  __typename?: "TaskInitialize";
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type TaskInitialize_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskInitialize_OrderBy {
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Workerpool = "workerpool",
}

export type TaskReopen = TaskEvent & {
  __typename?: "TaskReopen";
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
};

export type TaskReopen_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskReopen_OrderBy {
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
}

export type TaskReveal = TaskEvent & {
  __typename?: "TaskReveal";
  digest: Scalars["Bytes"];
  id: Scalars["ID"];
  task: Task;
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  worker: Account;
};

export type TaskReveal_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  digest?: InputMaybe<Scalars["Bytes"]>;
  digest_contains?: InputMaybe<Scalars["Bytes"]>;
  digest_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  digest_not?: InputMaybe<Scalars["Bytes"]>;
  digest_not_contains?: InputMaybe<Scalars["Bytes"]>;
  digest_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  task?: InputMaybe<Scalars["String"]>;
  task_?: InputMaybe<Task_Filter>;
  task_contains?: InputMaybe<Scalars["String"]>;
  task_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_ends_with?: InputMaybe<Scalars["String"]>;
  task_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_gt?: InputMaybe<Scalars["String"]>;
  task_gte?: InputMaybe<Scalars["String"]>;
  task_in?: InputMaybe<Array<Scalars["String"]>>;
  task_lt?: InputMaybe<Scalars["String"]>;
  task_lte?: InputMaybe<Scalars["String"]>;
  task_not?: InputMaybe<Scalars["String"]>;
  task_not_contains?: InputMaybe<Scalars["String"]>;
  task_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  task_not_ends_with?: InputMaybe<Scalars["String"]>;
  task_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  task_not_in?: InputMaybe<Array<Scalars["String"]>>;
  task_not_starts_with?: InputMaybe<Scalars["String"]>;
  task_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  task_starts_with?: InputMaybe<Scalars["String"]>;
  task_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  worker?: InputMaybe<Scalars["String"]>;
  worker_?: InputMaybe<Account_Filter>;
  worker_contains?: InputMaybe<Scalars["String"]>;
  worker_contains_nocase?: InputMaybe<Scalars["String"]>;
  worker_ends_with?: InputMaybe<Scalars["String"]>;
  worker_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_gt?: InputMaybe<Scalars["String"]>;
  worker_gte?: InputMaybe<Scalars["String"]>;
  worker_in?: InputMaybe<Array<Scalars["String"]>>;
  worker_lt?: InputMaybe<Scalars["String"]>;
  worker_lte?: InputMaybe<Scalars["String"]>;
  worker_not?: InputMaybe<Scalars["String"]>;
  worker_not_contains?: InputMaybe<Scalars["String"]>;
  worker_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  worker_not_ends_with?: InputMaybe<Scalars["String"]>;
  worker_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_not_in?: InputMaybe<Array<Scalars["String"]>>;
  worker_not_starts_with?: InputMaybe<Scalars["String"]>;
  worker_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  worker_starts_with?: InputMaybe<Scalars["String"]>;
  worker_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum TaskReveal_OrderBy {
  Digest = "digest",
  Id = "id",
  Task = "task",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Worker = "worker",
}

export enum TaskStatus {
  Active = "ACTIVE",
  Completed = "COMPLETED",
  Failled = "FAILLED",
  Revealing = "REVEALING",
  Unset = "UNSET",
}

export type Task_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  consensus?: InputMaybe<Scalars["Bytes"]>;
  consensus_contains?: InputMaybe<Scalars["Bytes"]>;
  consensus_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  consensus_not?: InputMaybe<Scalars["Bytes"]>;
  consensus_not_contains?: InputMaybe<Scalars["Bytes"]>;
  consensus_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  contributionDeadline?: InputMaybe<Scalars["BigInt"]>;
  contributionDeadline_gt?: InputMaybe<Scalars["BigInt"]>;
  contributionDeadline_gte?: InputMaybe<Scalars["BigInt"]>;
  contributionDeadline_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contributionDeadline_lt?: InputMaybe<Scalars["BigInt"]>;
  contributionDeadline_lte?: InputMaybe<Scalars["BigInt"]>;
  contributionDeadline_not?: InputMaybe<Scalars["BigInt"]>;
  contributionDeadline_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  contributions?: InputMaybe<Array<Scalars["String"]>>;
  contributions_?: InputMaybe<Contribution_Filter>;
  contributions_contains?: InputMaybe<Array<Scalars["String"]>>;
  contributions_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  contributions_not?: InputMaybe<Array<Scalars["String"]>>;
  contributions_not_contains?: InputMaybe<Array<Scalars["String"]>>;
  contributions_not_contains_nocase?: InputMaybe<Array<Scalars["String"]>>;
  deal?: InputMaybe<Scalars["String"]>;
  deal_?: InputMaybe<Deal_Filter>;
  deal_contains?: InputMaybe<Scalars["String"]>;
  deal_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_ends_with?: InputMaybe<Scalars["String"]>;
  deal_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_gt?: InputMaybe<Scalars["String"]>;
  deal_gte?: InputMaybe<Scalars["String"]>;
  deal_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_lt?: InputMaybe<Scalars["String"]>;
  deal_lte?: InputMaybe<Scalars["String"]>;
  deal_not?: InputMaybe<Scalars["String"]>;
  deal_not_contains?: InputMaybe<Scalars["String"]>;
  deal_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with?: InputMaybe<Scalars["String"]>;
  deal_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_not_in?: InputMaybe<Array<Scalars["String"]>>;
  deal_not_starts_with?: InputMaybe<Scalars["String"]>;
  deal_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  deal_starts_with?: InputMaybe<Scalars["String"]>;
  deal_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  finalDeadline?: InputMaybe<Scalars["BigInt"]>;
  finalDeadline_gt?: InputMaybe<Scalars["BigInt"]>;
  finalDeadline_gte?: InputMaybe<Scalars["BigInt"]>;
  finalDeadline_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  finalDeadline_lt?: InputMaybe<Scalars["BigInt"]>;
  finalDeadline_lte?: InputMaybe<Scalars["BigInt"]>;
  finalDeadline_not?: InputMaybe<Scalars["BigInt"]>;
  finalDeadline_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  index?: InputMaybe<Scalars["BigInt"]>;
  index_gt?: InputMaybe<Scalars["BigInt"]>;
  index_gte?: InputMaybe<Scalars["BigInt"]>;
  index_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  index_lt?: InputMaybe<Scalars["BigInt"]>;
  index_lte?: InputMaybe<Scalars["BigInt"]>;
  index_not?: InputMaybe<Scalars["BigInt"]>;
  index_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  requester?: InputMaybe<Scalars["String"]>;
  requester_?: InputMaybe<Account_Filter>;
  requester_contains?: InputMaybe<Scalars["String"]>;
  requester_contains_nocase?: InputMaybe<Scalars["String"]>;
  requester_ends_with?: InputMaybe<Scalars["String"]>;
  requester_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_gt?: InputMaybe<Scalars["String"]>;
  requester_gte?: InputMaybe<Scalars["String"]>;
  requester_in?: InputMaybe<Array<Scalars["String"]>>;
  requester_lt?: InputMaybe<Scalars["String"]>;
  requester_lte?: InputMaybe<Scalars["String"]>;
  requester_not?: InputMaybe<Scalars["String"]>;
  requester_not_contains?: InputMaybe<Scalars["String"]>;
  requester_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  requester_not_ends_with?: InputMaybe<Scalars["String"]>;
  requester_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_not_in?: InputMaybe<Array<Scalars["String"]>>;
  requester_not_starts_with?: InputMaybe<Scalars["String"]>;
  requester_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  requester_starts_with?: InputMaybe<Scalars["String"]>;
  requester_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  resultDigest?: InputMaybe<Scalars["Bytes"]>;
  resultDigest_contains?: InputMaybe<Scalars["Bytes"]>;
  resultDigest_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  resultDigest_not?: InputMaybe<Scalars["Bytes"]>;
  resultDigest_not_contains?: InputMaybe<Scalars["Bytes"]>;
  resultDigest_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  results?: InputMaybe<Scalars["String"]>;
  resultsCallback?: InputMaybe<Scalars["String"]>;
  resultsCallback_contains?: InputMaybe<Scalars["String"]>;
  resultsCallback_contains_nocase?: InputMaybe<Scalars["String"]>;
  resultsCallback_ends_with?: InputMaybe<Scalars["String"]>;
  resultsCallback_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  resultsCallback_gt?: InputMaybe<Scalars["String"]>;
  resultsCallback_gte?: InputMaybe<Scalars["String"]>;
  resultsCallback_in?: InputMaybe<Array<Scalars["String"]>>;
  resultsCallback_lt?: InputMaybe<Scalars["String"]>;
  resultsCallback_lte?: InputMaybe<Scalars["String"]>;
  resultsCallback_not?: InputMaybe<Scalars["String"]>;
  resultsCallback_not_contains?: InputMaybe<Scalars["String"]>;
  resultsCallback_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  resultsCallback_not_ends_with?: InputMaybe<Scalars["String"]>;
  resultsCallback_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  resultsCallback_not_in?: InputMaybe<Array<Scalars["String"]>>;
  resultsCallback_not_starts_with?: InputMaybe<Scalars["String"]>;
  resultsCallback_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  resultsCallback_starts_with?: InputMaybe<Scalars["String"]>;
  resultsCallback_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  results_contains?: InputMaybe<Scalars["String"]>;
  results_contains_nocase?: InputMaybe<Scalars["String"]>;
  results_ends_with?: InputMaybe<Scalars["String"]>;
  results_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  results_gt?: InputMaybe<Scalars["String"]>;
  results_gte?: InputMaybe<Scalars["String"]>;
  results_in?: InputMaybe<Array<Scalars["String"]>>;
  results_lt?: InputMaybe<Scalars["String"]>;
  results_lte?: InputMaybe<Scalars["String"]>;
  results_not?: InputMaybe<Scalars["String"]>;
  results_not_contains?: InputMaybe<Scalars["String"]>;
  results_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  results_not_ends_with?: InputMaybe<Scalars["String"]>;
  results_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  results_not_in?: InputMaybe<Array<Scalars["String"]>>;
  results_not_starts_with?: InputMaybe<Scalars["String"]>;
  results_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  results_starts_with?: InputMaybe<Scalars["String"]>;
  results_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  revealDeadline?: InputMaybe<Scalars["BigInt"]>;
  revealDeadline_gt?: InputMaybe<Scalars["BigInt"]>;
  revealDeadline_gte?: InputMaybe<Scalars["BigInt"]>;
  revealDeadline_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  revealDeadline_lt?: InputMaybe<Scalars["BigInt"]>;
  revealDeadline_lte?: InputMaybe<Scalars["BigInt"]>;
  revealDeadline_not?: InputMaybe<Scalars["BigInt"]>;
  revealDeadline_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  rewards_?: InputMaybe<Reward_Filter>;
  seizes_?: InputMaybe<Seize_Filter>;
  status?: InputMaybe<TaskStatus>;
  status_in?: InputMaybe<Array<TaskStatus>>;
  status_not?: InputMaybe<TaskStatus>;
  status_not_in?: InputMaybe<Array<TaskStatus>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Task_OrderBy {
  Consensus = "consensus",
  ContributionDeadline = "contributionDeadline",
  Contributions = "contributions",
  Deal = "deal",
  Events = "events",
  FinalDeadline = "finalDeadline",
  Id = "id",
  Index = "index",
  Requester = "requester",
  ResultDigest = "resultDigest",
  Results = "results",
  ResultsCallback = "resultsCallback",
  RevealDeadline = "revealDeadline",
  Rewards = "rewards",
  Seizes = "seizes",
  Status = "status",
  Timestamp = "timestamp",
}

export type Transaction = {
  __typename?: "Transaction";
  accountEvents: Array<AccountEvent>;
  blockNumber: Scalars["BigInt"];
  erc1538Events: Array<Erc1538Event>;
  from?: Maybe<Account>;
  gasLimit: Scalars["BigInt"];
  gasPrice: Scalars["BigInt"];
  gasUsed: Scalars["BigInt"];
  id: Scalars["ID"];
  ressourceTransferEvent: Array<RessourceTransferEvent>;
  taskEvents: Array<TaskEvent>;
  timestamp: Scalars["BigInt"];
  to?: Maybe<Account>;
  value: Scalars["BigInt"];
  workerpoolEvents: Array<WorkerpoolEvent>;
};

export type TransactionAccountEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<AccountEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<AccountEvent_Filter>;
};

export type TransactionErc1538EventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Erc1538Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Erc1538Event_Filter>;
};

export type TransactionRessourceTransferEventArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<RessourceTransferEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<RessourceTransferEvent_Filter>;
};

export type TransactionTaskEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<TaskEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<TaskEvent_Filter>;
};

export type TransactionWorkerpoolEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  blockNumber?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  from?: InputMaybe<Scalars["String"]>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  gasLimit?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_gte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasLimit_lt?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_lte?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not?: InputMaybe<Scalars["BigInt"]>;
  gasLimit_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_gte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasPrice_lt?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_lte?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not?: InputMaybe<Scalars["BigInt"]>;
  gasPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_gte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  gasUsed_lt?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_lte?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not?: InputMaybe<Scalars["BigInt"]>;
  gasUsed_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigInt"]>;
  value_gt?: InputMaybe<Scalars["BigInt"]>;
  value_gte?: InputMaybe<Scalars["BigInt"]>;
  value_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  value_lt?: InputMaybe<Scalars["BigInt"]>;
  value_lte?: InputMaybe<Scalars["BigInt"]>;
  value_not?: InputMaybe<Scalars["BigInt"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Transaction_OrderBy {
  AccountEvents = "accountEvents",
  BlockNumber = "blockNumber",
  Erc1538Events = "erc1538Events",
  From = "from",
  GasLimit = "gasLimit",
  GasPrice = "gasPrice",
  GasUsed = "gasUsed",
  Id = "id",
  RessourceTransferEvent = "ressourceTransferEvent",
  TaskEvents = "taskEvents",
  Timestamp = "timestamp",
  To = "to",
  Value = "value",
  WorkerpoolEvents = "workerpoolEvents",
}

export type Transfer = {
  __typename?: "Transfer";
  from: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  to: Account;
  transaction: Transaction;
  value: Scalars["BigDecimal"];
};

export type Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars["String"]>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Transfer_OrderBy {
  From = "from",
  Id = "id",
  Timestamp = "timestamp",
  To = "to",
  Transaction = "transaction",
  Value = "value",
}

export type Unlock = AccountEvent & {
  __typename?: "Unlock";
  account: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  value: Scalars["BigDecimal"];
};

export type Unlock_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars["String"]>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars["String"]>;
  account_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_ends_with?: InputMaybe<Scalars["String"]>;
  account_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_gt?: InputMaybe<Scalars["String"]>;
  account_gte?: InputMaybe<Scalars["String"]>;
  account_in?: InputMaybe<Array<Scalars["String"]>>;
  account_lt?: InputMaybe<Scalars["String"]>;
  account_lte?: InputMaybe<Scalars["String"]>;
  account_not?: InputMaybe<Scalars["String"]>;
  account_not_contains?: InputMaybe<Scalars["String"]>;
  account_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  account_not_ends_with?: InputMaybe<Scalars["String"]>;
  account_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  account_not_in?: InputMaybe<Array<Scalars["String"]>>;
  account_not_starts_with?: InputMaybe<Scalars["String"]>;
  account_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  account_starts_with?: InputMaybe<Scalars["String"]>;
  account_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["BigDecimal"]>;
  value_gt?: InputMaybe<Scalars["BigDecimal"]>;
  value_gte?: InputMaybe<Scalars["BigDecimal"]>;
  value_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  value_lt?: InputMaybe<Scalars["BigDecimal"]>;
  value_lte?: InputMaybe<Scalars["BigDecimal"]>;
  value_not?: InputMaybe<Scalars["BigDecimal"]>;
  value_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum Unlock_OrderBy {
  Account = "account",
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Value = "value",
}

export type Workerpool = Ressource & {
  __typename?: "Workerpool";
  description: Scalars["String"];
  events: Array<WorkerpoolEvent>;
  id: Scalars["ID"];
  orders: Array<WorkerpoolOrder>;
  owner: Account;
  schedulerRewardRatio: Scalars["BigInt"];
  timestamp: Scalars["BigInt"];
  transfers: Array<WorkerpoolTransfer>;
  usages: Array<Deal>;
  workerStakeRatio: Scalars["BigInt"];
};

export type WorkerpoolEventsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolEvent_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WorkerpoolEvent_Filter>;
};

export type WorkerpoolOrdersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WorkerpoolOrder_Filter>;
};

export type WorkerpoolTransfersArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<WorkerpoolTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<WorkerpoolTransfer_Filter>;
};

export type WorkerpoolUsagesArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type WorkerpoolEvent = {
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  transaction: Transaction;
  workerpool: Workerpool;
};

export type WorkerpoolEvent_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum WorkerpoolEvent_OrderBy {
  Id = "id",
  Timestamp = "timestamp",
  Transaction = "transaction",
  Workerpool = "workerpool",
}

export type WorkerpoolOrder = {
  __typename?: "WorkerpoolOrder";
  apprestrict?: Maybe<Scalars["Bytes"]>;
  category?: Maybe<Category>;
  datasetrestrict?: Maybe<Scalars["Bytes"]>;
  deals: Array<Deal>;
  id: Scalars["ID"];
  requesterrestrict?: Maybe<Scalars["Bytes"]>;
  salt?: Maybe<Scalars["Bytes"]>;
  sign?: Maybe<Scalars["Bytes"]>;
  tag?: Maybe<Scalars["Bytes"]>;
  trust?: Maybe<Scalars["BigInt"]>;
  volume?: Maybe<Scalars["BigInt"]>;
  workerpool: Workerpool;
  workerpoolprice: Scalars["BigDecimal"];
};

export type WorkerpoolOrderDealsArgs = {
  first?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Deal_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<Deal_Filter>;
};

export type WorkerpoolOrder_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  apprestrict?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  apprestrict_not?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  apprestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  category?: InputMaybe<Scalars["String"]>;
  category_?: InputMaybe<Category_Filter>;
  category_contains?: InputMaybe<Scalars["String"]>;
  category_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_ends_with?: InputMaybe<Scalars["String"]>;
  category_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_gt?: InputMaybe<Scalars["String"]>;
  category_gte?: InputMaybe<Scalars["String"]>;
  category_in?: InputMaybe<Array<Scalars["String"]>>;
  category_lt?: InputMaybe<Scalars["String"]>;
  category_lte?: InputMaybe<Scalars["String"]>;
  category_not?: InputMaybe<Scalars["String"]>;
  category_not_contains?: InputMaybe<Scalars["String"]>;
  category_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  category_not_ends_with?: InputMaybe<Scalars["String"]>;
  category_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  category_not_in?: InputMaybe<Array<Scalars["String"]>>;
  category_not_starts_with?: InputMaybe<Scalars["String"]>;
  category_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  category_starts_with?: InputMaybe<Scalars["String"]>;
  category_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  datasetrestrict?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  datasetrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  datasetrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  deals_?: InputMaybe<Deal_Filter>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  requesterrestrict?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_contains?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  requesterrestrict_not?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_not_contains?: InputMaybe<Scalars["Bytes"]>;
  requesterrestrict_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt?: InputMaybe<Scalars["Bytes"]>;
  salt_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  salt_not?: InputMaybe<Scalars["Bytes"]>;
  salt_not_contains?: InputMaybe<Scalars["Bytes"]>;
  salt_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign?: InputMaybe<Scalars["Bytes"]>;
  sign_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  sign_not?: InputMaybe<Scalars["Bytes"]>;
  sign_not_contains?: InputMaybe<Scalars["Bytes"]>;
  sign_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag?: InputMaybe<Scalars["Bytes"]>;
  tag_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  tag_not?: InputMaybe<Scalars["Bytes"]>;
  tag_not_contains?: InputMaybe<Scalars["Bytes"]>;
  tag_not_in?: InputMaybe<Array<Scalars["Bytes"]>>;
  trust?: InputMaybe<Scalars["BigInt"]>;
  trust_gt?: InputMaybe<Scalars["BigInt"]>;
  trust_gte?: InputMaybe<Scalars["BigInt"]>;
  trust_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  trust_lt?: InputMaybe<Scalars["BigInt"]>;
  trust_lte?: InputMaybe<Scalars["BigInt"]>;
  trust_not?: InputMaybe<Scalars["BigInt"]>;
  trust_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume?: InputMaybe<Scalars["BigInt"]>;
  volume_gt?: InputMaybe<Scalars["BigInt"]>;
  volume_gte?: InputMaybe<Scalars["BigInt"]>;
  volume_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  volume_lt?: InputMaybe<Scalars["BigInt"]>;
  volume_lte?: InputMaybe<Scalars["BigInt"]>;
  volume_not?: InputMaybe<Scalars["BigInt"]>;
  volume_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpoolprice?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolprice_gt?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolprice_gte?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolprice_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
  workerpoolprice_lt?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolprice_lte?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolprice_not?: InputMaybe<Scalars["BigDecimal"]>;
  workerpoolprice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]>>;
};

export enum WorkerpoolOrder_OrderBy {
  Apprestrict = "apprestrict",
  Category = "category",
  Datasetrestrict = "datasetrestrict",
  Deals = "deals",
  Id = "id",
  Requesterrestrict = "requesterrestrict",
  Salt = "salt",
  Sign = "sign",
  Tag = "tag",
  Trust = "trust",
  Volume = "volume",
  Workerpool = "workerpool",
  Workerpoolprice = "workerpoolprice",
}

export type WorkerpoolTransfer = RessourceTransferEvent & {
  __typename?: "WorkerpoolTransfer";
  from: Account;
  id: Scalars["ID"];
  timestamp: Scalars["BigInt"];
  to: Account;
  transaction: Transaction;
  workerpool: Workerpool;
};

export type WorkerpoolTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  from?: InputMaybe<Scalars["String"]>;
  from_?: InputMaybe<Account_Filter>;
  from_contains?: InputMaybe<Scalars["String"]>;
  from_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_ends_with?: InputMaybe<Scalars["String"]>;
  from_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_gt?: InputMaybe<Scalars["String"]>;
  from_gte?: InputMaybe<Scalars["String"]>;
  from_in?: InputMaybe<Array<Scalars["String"]>>;
  from_lt?: InputMaybe<Scalars["String"]>;
  from_lte?: InputMaybe<Scalars["String"]>;
  from_not?: InputMaybe<Scalars["String"]>;
  from_not_contains?: InputMaybe<Scalars["String"]>;
  from_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  from_not_ends_with?: InputMaybe<Scalars["String"]>;
  from_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  from_not_in?: InputMaybe<Array<Scalars["String"]>>;
  from_not_starts_with?: InputMaybe<Scalars["String"]>;
  from_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  from_starts_with?: InputMaybe<Scalars["String"]>;
  from_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  to?: InputMaybe<Scalars["String"]>;
  to_?: InputMaybe<Account_Filter>;
  to_contains?: InputMaybe<Scalars["String"]>;
  to_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_ends_with?: InputMaybe<Scalars["String"]>;
  to_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_gt?: InputMaybe<Scalars["String"]>;
  to_gte?: InputMaybe<Scalars["String"]>;
  to_in?: InputMaybe<Array<Scalars["String"]>>;
  to_lt?: InputMaybe<Scalars["String"]>;
  to_lte?: InputMaybe<Scalars["String"]>;
  to_not?: InputMaybe<Scalars["String"]>;
  to_not_contains?: InputMaybe<Scalars["String"]>;
  to_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  to_not_ends_with?: InputMaybe<Scalars["String"]>;
  to_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  to_not_in?: InputMaybe<Array<Scalars["String"]>>;
  to_not_starts_with?: InputMaybe<Scalars["String"]>;
  to_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  to_starts_with?: InputMaybe<Scalars["String"]>;
  to_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction?: InputMaybe<Scalars["String"]>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars["String"]>;
  transaction_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_gt?: InputMaybe<Scalars["String"]>;
  transaction_gte?: InputMaybe<Scalars["String"]>;
  transaction_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_lt?: InputMaybe<Scalars["String"]>;
  transaction_lte?: InputMaybe<Scalars["String"]>;
  transaction_not?: InputMaybe<Scalars["String"]>;
  transaction_not_contains?: InputMaybe<Scalars["String"]>;
  transaction_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with?: InputMaybe<Scalars["String"]>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_not_in?: InputMaybe<Array<Scalars["String"]>>;
  transaction_not_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  transaction_starts_with?: InputMaybe<Scalars["String"]>;
  transaction_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool?: InputMaybe<Scalars["String"]>;
  workerpool_?: InputMaybe<Workerpool_Filter>;
  workerpool_contains?: InputMaybe<Scalars["String"]>;
  workerpool_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_gt?: InputMaybe<Scalars["String"]>;
  workerpool_gte?: InputMaybe<Scalars["String"]>;
  workerpool_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_lt?: InputMaybe<Scalars["String"]>;
  workerpool_lte?: InputMaybe<Scalars["String"]>;
  workerpool_not?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains?: InputMaybe<Scalars["String"]>;
  workerpool_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_not_in?: InputMaybe<Array<Scalars["String"]>>;
  workerpool_not_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with?: InputMaybe<Scalars["String"]>;
  workerpool_starts_with_nocase?: InputMaybe<Scalars["String"]>;
};

export enum WorkerpoolTransfer_OrderBy {
  From = "from",
  Id = "id",
  Timestamp = "timestamp",
  To = "to",
  Transaction = "transaction",
  Workerpool = "workerpool",
}

export type Workerpool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  description?: InputMaybe<Scalars["String"]>;
  description_contains?: InputMaybe<Scalars["String"]>;
  description_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_ends_with?: InputMaybe<Scalars["String"]>;
  description_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_gt?: InputMaybe<Scalars["String"]>;
  description_gte?: InputMaybe<Scalars["String"]>;
  description_in?: InputMaybe<Array<Scalars["String"]>>;
  description_lt?: InputMaybe<Scalars["String"]>;
  description_lte?: InputMaybe<Scalars["String"]>;
  description_not?: InputMaybe<Scalars["String"]>;
  description_not_contains?: InputMaybe<Scalars["String"]>;
  description_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  description_not_ends_with?: InputMaybe<Scalars["String"]>;
  description_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  description_not_in?: InputMaybe<Array<Scalars["String"]>>;
  description_not_starts_with?: InputMaybe<Scalars["String"]>;
  description_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  description_starts_with?: InputMaybe<Scalars["String"]>;
  description_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["ID"]>;
  id_gt?: InputMaybe<Scalars["ID"]>;
  id_gte?: InputMaybe<Scalars["ID"]>;
  id_in?: InputMaybe<Array<Scalars["ID"]>>;
  id_lt?: InputMaybe<Scalars["ID"]>;
  id_lte?: InputMaybe<Scalars["ID"]>;
  id_not?: InputMaybe<Scalars["ID"]>;
  id_not_in?: InputMaybe<Array<Scalars["ID"]>>;
  orders_?: InputMaybe<WorkerpoolOrder_Filter>;
  owner?: InputMaybe<Scalars["String"]>;
  owner_?: InputMaybe<Account_Filter>;
  owner_contains?: InputMaybe<Scalars["String"]>;
  owner_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_ends_with?: InputMaybe<Scalars["String"]>;
  owner_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_gt?: InputMaybe<Scalars["String"]>;
  owner_gte?: InputMaybe<Scalars["String"]>;
  owner_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_lt?: InputMaybe<Scalars["String"]>;
  owner_lte?: InputMaybe<Scalars["String"]>;
  owner_not?: InputMaybe<Scalars["String"]>;
  owner_not_contains?: InputMaybe<Scalars["String"]>;
  owner_not_contains_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with?: InputMaybe<Scalars["String"]>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_not_in?: InputMaybe<Array<Scalars["String"]>>;
  owner_not_starts_with?: InputMaybe<Scalars["String"]>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  owner_starts_with?: InputMaybe<Scalars["String"]>;
  owner_starts_with_nocase?: InputMaybe<Scalars["String"]>;
  schedulerRewardRatio?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  schedulerRewardRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_not?: InputMaybe<Scalars["BigInt"]>;
  schedulerRewardRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_gte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  timestamp_lt?: InputMaybe<Scalars["BigInt"]>;
  timestamp_lte?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not?: InputMaybe<Scalars["BigInt"]>;
  timestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  transfers_?: InputMaybe<WorkerpoolTransfer_Filter>;
  usages_?: InputMaybe<Deal_Filter>;
  workerStakeRatio?: InputMaybe<Scalars["BigInt"]>;
  workerStakeRatio_gt?: InputMaybe<Scalars["BigInt"]>;
  workerStakeRatio_gte?: InputMaybe<Scalars["BigInt"]>;
  workerStakeRatio_in?: InputMaybe<Array<Scalars["BigInt"]>>;
  workerStakeRatio_lt?: InputMaybe<Scalars["BigInt"]>;
  workerStakeRatio_lte?: InputMaybe<Scalars["BigInt"]>;
  workerStakeRatio_not?: InputMaybe<Scalars["BigInt"]>;
  workerStakeRatio_not_in?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export enum Workerpool_OrderBy {
  Description = "description",
  Events = "events",
  Id = "id",
  Orders = "orders",
  Owner = "owner",
  SchedulerRewardRatio = "schedulerRewardRatio",
  Timestamp = "timestamp",
  Transfers = "transfers",
  Usages = "usages",
  WorkerStakeRatio = "workerStakeRatio",
}

export type _Block_ = {
  __typename?: "_Block_";
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]>;
  /** The block number */
  number: Scalars["Int"];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: "_Meta_";
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type TestQueryVariables = Exact<{ [key: string]: never }>;

export type TestQuery = {
  __typename?: "Query";
  apps: Array<{ __typename?: "App"; id: string; name: string }>;
};
