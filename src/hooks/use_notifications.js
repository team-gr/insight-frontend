import io from "socket.io-client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { notification } from "antd";

import { NotificatioActions } from "app-redux/notification";

function useNotifications({ userid } = {}) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (userid) {
      const socket = io(process.env.NEXT_PUBLIC_NOTIFICATION_API_ENDPOINT, {
        query: { userid },
      });

      socket.on("connect", () => {
        console.log("socket io connected");
      });

      socket.on("notifications", (noti) => {
        notification["info"]({
          message: "Notification",
          description: noti.title,
          duration: 2,
          placement: "bottomLeft",
        });

        dispatch(NotificatioActions.refresh(userid));
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [userid]);
}

export default useNotifications;
