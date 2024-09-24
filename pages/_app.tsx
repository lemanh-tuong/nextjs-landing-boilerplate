import '~/styles/globals.css';
import '~/styles/Aos.css';
import Aos from 'aos';
import { appWithTranslation } from 'next-i18next';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Aos.init({
      duration: 600,
      disable: false,
      offset: 300,
      once: true,
    });
  }, []);

  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
