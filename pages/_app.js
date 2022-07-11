import { useEffect } from "react"
import Router from "next/router"
import NProgress from "nprogress"
import { GlobalStyle } from "../styles/globalStyles"
import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme"
import { Provider } from "react-redux"
import { SessionProvider } from "next-auth/react"


const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    const start = () => NProgress.start()
    const end = () => NProgress.done()

    Router.events.on("routeChangeStart", start)
    Router.events.on("routeChangeComplete", end)
    Router.events.on("routeChangeError", end)

    return () => {
      Router.events.off("routeChangeStart", start)
      Router.events.off("routeChangeComplete", end)
      Router.events.off("routeChangeError", end)
    }

  }, [])


  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </>
  )
}

export default MyApp
