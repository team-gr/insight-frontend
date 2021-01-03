import Router from "next/router";
import { notification } from "antd";
import { UserService } from "services";

const AUTH_SET_USER = "auth_set_user";
const AUTH_SET_LOADING = "auth_set_loading";

const AuthActions = {
  setUser(user) {
    return { type: AUTH_SET_USER, payload: user };
  },
  setLoading(loading) {
    return { type: AUTH_SET_LOADING, payload: loading };
  },
  register({ username, role, email, password } = {}) {
    return async (dispatch) => {
      dispatch(AuthActions.setLoading(true));
      try {
        await UserService.register({ username, role, email, password });
        message.success("SignIn Success!");
        Router.push("/signin");
      } catch (error) {
        notification["error"]({
          message: "Register error!",
          description: error.message,
        });
      } finally {
        dispatch(AuthActions.setLoading(false));
      }
    };
  },
  login({ email, password } = {}) {
    return async (dispatch) => {
      dispatch(AuthActions.setLoading(true));
      try {
        const data = await UserService.login({ email, password });
        localStorage.setItem("token", data.token);
        dispatch(AuthActions.setUser(data.user));
        Router.push("/");
      } catch (error) {
        notification["error"]({
          message: "Login error!",
          description: error.message,
        });
      } finally {
        dispatch(AuthActions.setLoading(false));
      }
    };
  },
  logout() {
    return (dispatch) => {
      localStorage.removeItem("token");
      dispatch(AuthActions.setUser({}));
      Router.push("/signin");
    };
  },
};

const initialState = {
  user: {
    id: "",
    username: "",
    email: "",
    role: "",
    avatar: "",
  },
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SET_USER:
      return { ...state, user: action.payload };
    case AUTH_SET_LOADING:
      return { ...state, loading: action.payload };
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
