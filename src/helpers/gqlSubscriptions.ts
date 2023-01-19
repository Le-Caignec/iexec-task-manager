export const handleWss = async (
  cacheDataLoaded: Promise<any>,
  cacheEntryRemoved: Promise<any>,
  wsUrl: string,
  query: string,
  variables: any,
  onData: (data: any) => void
) => {
  const ws = new WebSocket(wsUrl, "graphql-ws");

  try {
    await cacheDataLoaded;

    ws.onopen = () => {
      ws.send(JSON.stringify({ type: "connection_init", payload: {} }));
      ws.send(
        JSON.stringify({
          id: "1",
          type: "start",
          payload: {
            variables: variables,
            extensions: {},
            // "operationName": "",
            query: query,
          },
        })
      );
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.type === "data") {
        const data = msg.payload.data;

        onData(data);
      }
    };

    ws.onclose = function (e) {
      console.log("Socket is closed. Reconnect will be attempted in 1 second.", e.reason);
      // setTimeout(function() {
      // connect();
      // }, 1000);
    };

    ws.onerror = function (err) {
      console.error("Socket encountered error: ", err, "Closing socket");
      ws.close();
    };
  } catch (error) {}
  await cacheEntryRemoved;
  ws.send(JSON.stringify({ id: "1", type: "stop" }));
  ws.close();
};

export const queryFromSubscription = (subs: string) => {
  if (subs.toLowerCase().trim().startsWith("subscription")) {
    var regEx = new RegExp("subscription", "ig");
    return subs.replace(regEx, "query");
  }
  throw new Error("is not a subscription");
};
