import { createStore } from "redux-dynamic-modules";
import { getThunkExtension } from "redux-dynamic-modules-thunk";

import { getSettingsModule } from "app-redux/settings";
import { getAuthModule } from "app-redux/auth";
import { getFeatureCompareModule } from "app-redux/featurecompare";

const store = createStore(
  {
    extensions: [getThunkExtension()],
  },
  getSettingsModule(),
  getAuthModule(),
  getFeatureCompareModule()
);

export default store;
