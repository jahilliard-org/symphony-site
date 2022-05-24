import Head from "next/head"
import { FC, ReactNode } from "react"
import Layout from "components/Layout"
import { NextPage } from "types"
import { ContentLayout, MainContent, SideContent } from "components/Utils"
import Slider from "react-slick"

const Philosophy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <ContentLayout>
        <MainContent></MainContent>
        <SideContent></SideContent>
      </ContentLayout>
    </>
  )
}

Philosophy.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Philosophy
