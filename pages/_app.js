import React from 'react';
import store, { wrapper } from '../redux/store';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

// export default MyApp;
export default wrapper.withRedux(MyApp);
