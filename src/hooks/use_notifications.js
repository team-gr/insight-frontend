import { useEffect } from "react";
import io from "socket.io-client";

function useNotifications() {
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKETIO_ENDPOINT, {
      query: { userid: "5fe98340a7c9a6242a8dace7" },
    });

    socket.on("connect", () => {
      console.log("socket io connected");
    });

    socket.on("notifications", console.log);

    return () => {
      socket.disconnect();
    };
  }, []);
}

export default useNotifications;
