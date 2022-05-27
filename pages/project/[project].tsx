import Layout from "components/Layout"
import {
  ClickableA,
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  EmployeeSideMenu,
  ImageFrame,
  MainContent,
  Showcase,
  SideContent,
  SideTitle,
} from "components/Utils"
import { getPortfolioProjectImages } from "helpers"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"
import { portfolio } from "static"
import { Employee, EnhacedProject, Slide } from "types"

const Project = ({ project }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { category, name, address, desc, imgs } = project
  const slides = imgs.map((img) => {
    return { img }
  })
  return (
    <>
      <Head>
        <title>
          {name} - {category}
        </title>
      </Head>
      <ContentLayout>
        <MainContent>
          <CopySection>
            <CopyTitle className="mb-4">{name}</CopyTitle>
            <ImageFrame>
              <Showcase slides={slides} height={450} settings={{ dots: true }} />
            </ImageFrame>
            <CopyTitle className="text-sm uppercase mt-8 mb-2">{address}</CopyTitle>
            {desc.map((p) => {
              return (
                <>
                  <CopyParagraph key={p.substring(30)}>
                    {p}
                    <br />
                    <br />
                  </CopyParagraph>
                </>
              )
            })}
          </CopySection>
        </MainContent>
        <SideContent>
          <SideTitle>
            {category} <br />
            Project Type
          </SideTitle>
        </SideContent>
      </ContentLayout>
    </>
  )
}

Project.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export async function getStaticPaths() {
  const paths = portfolio.map((project) => ({
    params: { project: project.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  project: EnhacedProject
}> = async ({ params }) => {
  const projectArr = portfolio.filter((e) => e.id === params!.project)
  const enhancedProjectArr = getPortfolioProjectImages(projectArr)
  return {
    props: {
      project: enhancedProjectArr[0],
    },
  }
}

export default Project
