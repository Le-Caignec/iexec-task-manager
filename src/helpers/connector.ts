import { IExec } from "iexec";

// BELLECOUR
const CHAIN_ID = "134";
const CHAIN_NAME = "Bellecour";
const RPC_URL = "https://bellecour.iex.ec";
const BLOCK_EXPLORER_URL = "https://blockscout-bellecour.iex.ec";
export const WSS_URL = "wss://ws-thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5";
export const HTTPS_URL = "https://thegraph.bellecour.iex.ec/subgraphs/name/bellecour/poco-v5";

// VIVIANI
// const CHAIN_ID = '133';
// const CHAIN_NAME = 'Viviani';
// const RPC_URL = 'https://viviani.iex.ec';
// const BLOCK_EXPLORER_URL = 'https://blockscout-viviani.iex.ec';
// export const WSS_URL =
//   'wss://ws-thegraph.viviani.iex.ec/subgraphs/name/viviani/poco-v5';
// export const HTTPS_URL =
//   'https://thegraph.viviani.iex.ec/subgraphs/name/viviani/poco-v5';

export const connect = async () => {
  if (window.ethereum) {
    window.ethereum.on("chainChanged", (_chainId: any) => window.location.reload());
    window.ethereum.on("accountsChanged", (_accounts: any) => window.location.reload());
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x" + parseInt(CHAIN_ID).toString(16),
          chainName: CHAIN_NAME,
          rpcUrls: [RPC_URL],
          blockExplorerUrls: [BLOCK_EXPLORER_URL],
          nativeCurrency: {
            name: "xRLC",
            symbol: "xRLC",
            decimals: 18,
          },
        },
      ],
    });
  } else {
    throw new Error("Please conect a wallet");
  }

  const { result } = await new Promise<{ result: string }>((resolve) =>
    window.ethereum.sendAsync(
      {
        jsonrpc: "2.0",
        method: "net_version",
        params: [],
      },
      (err: any, sendResult: unknown) => {
        const res = sendResult as { result: string };
        if (res) {
          resolve(res);
        } else {
          throw new Error("Unable to get current network");
        }
      }
    )
  );

  if (result !== CHAIN_ID) {
    throw new Error("Please switch to " + CHAIN_NAME + " network");
  }

  const iexec = new IExec({
    ethProvider: window.ethereum,
  });

  return iexec;
};
