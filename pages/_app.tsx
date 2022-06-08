import '../styles/globals.css'
import { theme, globalStyles, ThemeProps } from '@ory/themes'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'


import { Refine } from "@pankod/refine-core";
import { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-nextjs-router";
const API_URL = "https://api.fake-rest.refine.dev";

require("../styles/antd.less");

const GlobalStyle = createGlobalStyle((props: ThemeProps) =>
  globalStyles(props)
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div data-testid="app-react">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Refine
          catchAll={<ErrorComponent />}
          dataProvider={dataProvider(API_URL)}
          Layout={Layout}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          routerProvider={routerProvider}
          warnWhenUnsavedChanges={true}
          resources={[{ name: "posts" }]}
        >
          <Component {...pageProps} />
        </Refine>
        <ToastContainer />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
