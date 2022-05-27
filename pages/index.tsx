import Head from "next/head"
import { FC, ReactNode } from "react"
import { NextPage, Slide } from "types"
import Layout from "components/Layout"
import {
  CarouselImage,
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  MainContent,
  SideContent,
  SideTitle,
  Showcase,
} from "components/Utils"
import { showcase } from "static"
import { GetStaticProps, InferGetStaticPropsType } from "next/types"

export const getStaticProps: GetStaticProps<{
  showcase: Slide[]
}> = async () => {
  return {
    props: {
      showcase,
    },
  }
}

const Home = ({ showcase }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Symphony Development</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <Showcase slides={showcase} />
          <CopySection>
            <CopyTitle className="mb-4">
              Improving Urban Life with Sustainable Real Estate Solutions
            </CopyTitle>
            <CopyParagraph>
              At Symphony Development, we pride ourselves on our ability to deliver quality real
              estate developments to the urban communities we serve. With an emphasis on sustainable
              building practices, our goal is to better our cities with high-caliber multifamily,
              student housing and mixed-use environments. With a 20-year legacy in real estate, we
              continue to seek out opportunities to develop and build best-in-class spaces for home,
              work and life.
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          <SideTitle>
            Generating Value <br /> through Quality Urban Development
          </SideTitle>
        </SideContent>
      </ContentLayout>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Home
