import "styles/tailwind.css";

import Router from "next/router";
import NProgress from "nprogress";
import { notification } from "antd";
import { Provider } from "react-redux";

import store from "app-redux";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

notification.config({ duration: 1.5 });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
