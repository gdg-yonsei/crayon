import '@styles/globals.css';

import SEO from '@components/SEO';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
