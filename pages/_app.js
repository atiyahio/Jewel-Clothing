import App from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import makeStore from '../redux/store';
import Page from '../components/Page';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

class AppComponent extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }
  render() {
    const { Component, pageProps, store, router } = this.props;
    return (
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <Page>
            <Component {...pageProps} key={router.route} />
          </Page>
        </AnimatePresence>
      </Provider>
    );
  }
}

export default withRedux(makeStore)(AppComponent);
