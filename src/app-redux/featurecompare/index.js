import sample from "lodash/sample";
import { items } from "app-redux/featurecompare/data";

const FEATURE_COMPARE_SET_LOADING = "feature_compare_set_loading";
const FEATURE_COMPARE_SET_ITEMS = "feature_compare_set_items";
const FEATURE_COMPARE_SET_NOTIFYING = "feature_compare_set_notifying";
const FEATURE_COMPARE_APPEND_ITEM = "feature_compare_append_item";
const FEATURE_COMPARE_REMOVE_ITEM = "feature_compare_remove_item";

const FeatureCompareActions = {
  setNotifying(notifying) {
    return { type: FEATURE_COMPARE_SET_NOTIFYING, payload: notifying };
  },
  setItems(items) {
    return { type: FEATURE_COMPARE_SET_ITEMS, payload: items };
  },
  setLoading(loading) {
    return { type: FEATURE_COMPARE_SET_LOADING, payload: loading };
  },
  appendItem(item) {
    return { type: FEATURE_COMPARE_APPEND_ITEM, payload: item };
  },
  removeItem(itemId) {
    return { type: FEATURE_COMPARE_REMOVE_ITEM, payload: itemId };
  },
  randomItem() {
    return FeatureCompareActions.appendItem(sample(items));
  },
};

const initialState = {
  items: [],
  loading: false,
  notifying: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FEATURE_COMPARE_SET_ITEMS:
      return { ...state, items: action.payload };
    case FEATURE_COMPARE_SET_LOADING:
      return { ...state, loading: action.payload };
    case FEATURE_COMPARE_APPEND_ITEM:
      return { ...state, items: [...state.items, action.payload] };
    case FEATURE_COMPARE_REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.itemid != action.payload),
      };
    case FEATURE_COMPARE_SET_NOTIFYING:
      return { ...state, notifying: action.payload };
    default:
      return state;
  }
}

function getFeatureCompareModule() {
  return {
    id: "featurecompare",
    reducerMap: { featurecompare: reducer },
  };
}

export { FeatureCompareActions, getFeatureCompareModule };
