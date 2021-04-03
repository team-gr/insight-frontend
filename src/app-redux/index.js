import { createStore } from "redux-dynamic-modules";
import { getThunkExtension } from "redux-dynamic-modules-thunk";

import { getSettingsModule } from "app-redux/settings";
import { getAuthModule } from "app-redux/auth";
import { getNotificationModule } from "app-redux/notification";

const store = createStore(
  {
    extensions: [getThunkExtension()],
  },
  getSettingsModule(),
  getAuthModule(),
  getNotificationModule()
);

export default store;
