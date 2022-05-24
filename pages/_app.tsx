import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "components/Layout"
import { NextPage } from "next"
import { ReactNode } from "react"

type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
