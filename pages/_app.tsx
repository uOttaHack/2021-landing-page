import { ReactElement, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import useStore from "@/src/store";

function App({ Component, pageProps }: AppProps): ReactElement {
  const initAnalytics = useStore((state) => state.initAnalytics);

  useEffect(() => {
    initAnalytics();
  }, [initAnalytics]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
