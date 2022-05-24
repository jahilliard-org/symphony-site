import { AppProps } from "next/app"
import Head from "next/head"
import { ReactNode } from "react"
import Layout from "components/Layout"

const Home = () => {
  return (
    <>
      <Head>
        <title>Symphony Development</title>
      </Head>
      <div className="h-80"></div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Home
