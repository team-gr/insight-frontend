import { call } from "services/base";

const NOTIFICATION_API_ENDPOINT =
  process.env.NEXT_PUBLIC_NOTIFICATION_API_ENDPOINT;

function getByUserId(userid) {
  return call({
    url: `${NOTIFICATION_API_ENDPOINT}/notifications/get`,
    method: "POST",
    body: { user_id: userid },
  });
}

function maskAsRead(notificationIds = []) {
  return call({
    url: `${NOTIFICATION_API_ENDPOINT}/notifications/mask-as-read`,
    method: "POST",
    body: { notification_ids: notificationIds },
  });
}

export default Object.freeze({ getByUserId, maskAsRead });
