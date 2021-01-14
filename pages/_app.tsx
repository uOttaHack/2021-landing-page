import { ReactElement, useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import useStore from "@/src/store";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "@/src/theme";
import "focus-visible/dist/focus-visible";
import { Global, css } from "@emotion/core";

const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;

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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Global styles={GlobalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
