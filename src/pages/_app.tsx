import '@styles/globals.css';

import SEO from '@components/SEO';
import { ConfigProvider } from '@contexts/ConfigContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <SEO />
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;
