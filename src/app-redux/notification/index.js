import { NotificationServices } from "services";

const SET_NOTIFICATIONS = "set_notification";

const NotificatioActions = {
  setNotifications(items) {
    return { type: SET_NOTIFICATIONS, payload: items };
  },
  refresh(userid) {
    return (dispatch) => {
      NotificationServices.getByUserId(userid)
        .then((items) => dispatch(NotificatioActions.setNotifications(items)))
        .catch(console.log);
    };
  },
  maskAsRead(notifications) {
    return (dispatch) => {
      NotificationServices.maskAsRead(notifications.map((n) => n.id))
        .then(() => {
          dispatch(
            NotificatioActions.setNotifications(
              notifications.map((n) => ({ ...n, read: true }))
            )
          );
        })
        .catch(console.log);
    };
  },
};

const initialState = {
  items: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATIONS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
}

function getNotificationModule() {
  return {
    id: "notification",
    reducerMap: { notification: reducer },
  };
}

export { NotificatioActions, getNotificationModule };
