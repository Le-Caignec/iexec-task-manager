import {
  selectSelectedApp,
  selectSelectedDataset,
  selectSelectedWorkerpool,
  useLazyFetchAppOrderbookQuery,
  useLazyFetchDatasetOrderbookQuery,
  useLazyFetchWorkerpoolOrderbookQuery,
} from "./newTaskSlice";
import { useEffect } from "react";
import { utils } from "ethers";
import { useAppSelector } from "../../app/hooks";
import { ADDRESS_ZERO } from "../../helpers/utils";

export function useResolveRestricted() {
  const appId = useAppSelector(selectSelectedApp);
  const datasetId = useAppSelector(selectSelectedDataset);
  const workerpoolId = useAppSelector(selectSelectedWorkerpool);
  const [fetchAppOrders, appOrders] = useLazyFetchAppOrderbookQuery();
  const [fetchDatasetOrders, datasetOrders] = useLazyFetchDatasetOrderbookQuery();
  const [fetchWorkerpoolOrders, workerpoolOrders] = useLazyFetchWorkerpoolOrderbookQuery();

  useEffect(() => {
    utils.isAddress(appId) && fetchAppOrders(appId);
  }, [appId, fetchAppOrders]);

  useEffect(() => {
    utils.isAddress(workerpoolId) && fetchWorkerpoolOrders(workerpoolId);
  }, [workerpoolId, fetchWorkerpoolOrders]);

  useEffect(() => {
    utils.isAddress(datasetId) && fetchDatasetOrders(datasetId);
  }, [datasetId, fetchDatasetOrders]);

  const resolveRestrict = (arr1?: string[], arr2?: string[]): string[] => {
    if (arr1?.length === 0) {
      return arr2 || [];
    }
    if (arr2?.length === 0) {
      return arr1 || [];
    }
    return arr1?.filter((i) => arr2?.indexOf(i) !== -1) || [];
  };

  const noZeroAddress = (address: string) => address !== ADDRESS_ZERO;

  const restrictedApps = resolveRestrict(
    (datasetOrders.data || []).map((o) => o.order.apprestrict).filter(noZeroAddress),
    (workerpoolOrders.data || []).map((o) => o.order.apprestrict).filter(noZeroAddress)
  );

  const restrictedDatasets = resolveRestrict(
    (appOrders.data || []).map((o) => o.order.datasetrestrict).filter(noZeroAddress),
    (workerpoolOrders.data || []).map((o) => o.order.datasetrestrict).filter(noZeroAddress)
  );

  const restrictedWorkerpools = resolveRestrict(
    (appOrders.data || []).map((o) => o.order.workerpoolrestrict).filter(noZeroAddress),
    (datasetOrders.data || []).map((o) => o.order.workerpoolrestrict).filter(noZeroAddress)
  );

  return {
    restrictedApps: utils.isAddress(datasetId) ? restrictedApps : undefined,
    restrictedDatasets: utils.isAddress(appId) ? restrictedDatasets : undefined,
    restrictedWorkerpools,
  };
}
