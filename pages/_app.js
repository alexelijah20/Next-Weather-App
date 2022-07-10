import { useEffect } from "react"
import Router from "next/router"
import NProgress from "nprogress"
import { GlobalStyle } from "../styles/globalStyles"
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import themeReducer from "../features/theme"

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
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
