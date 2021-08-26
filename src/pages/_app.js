import "../styles/globals.css";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import NProgress from "nprogress";
import Router from "next/router";
import "nprogress/nprogress.css";

const store = createStore(reducers, applyMiddleware(thunk));

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
