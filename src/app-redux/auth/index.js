import { message } from "antd";
import { UserService } from "services";

const AUTH_SET_USER = "auth_set_user";
const AUTH_SET_TOKEN = "auth_set_token";
const AUTH_SET_LOADING = "auth_set_loading";

const AuthActions = {
  setUsser(user) {
    return { type: AUTH_SET_USER, payload: user };
  },
  setToken(token) {
    return { type: AUTH_SET_TOKEN, payload: token };
  },
  setLoading(loading) {
    return { type: AUTH_SET_LOADING, payload: loading };
  },
  login({ username, password } = {}) {
    return (dispatch) => {
      UserService.login({ username, password })
        .then((response) => {
          message.success("login success");
        })
        .catch((error) => {
          console.log(error);
          message.success("SignIn fail", 100);
        });
    };
  },
};

const initialState = {
  user: null,
  token: null,
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SET_TOKEN:
      return { ...state, token: action.payload };
    case AUTH_SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

function getAuthModule() {
  return {
    id: "auth",
    reducerMap: { auth: reducer },
  };
}

export { AuthActions, getAuthModule };
