import Layout from "components/Layout"
import {
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  EmployeeContact,
  EmployeeSideMenu,
  MainContent,
  SideContent,
  ShowcaseSlider,
  CarouselImage,
  Showcase,
} from "components/Utils"
import { shuffle, sample } from "lodash"
import { getPortfolioProjectImages } from "helpers"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { ReactNode, useMemo } from "react"
import { portfolio, showcase } from "static"
import { EnhacedProject, Slide } from "types"

export const getStaticProps: GetStaticProps<{
  portfolio: EnhacedProject[]
  categories: { [key: string]: string[] }
  showcase: Slide[]
}> = async () => {
  const enhancedPortfolio = getPortfolioProjectImages(portfolio)
  const categories = enhancedPortfolio.reduce((categories, project) => {
    return {
      ...categories,
      [project.category]: [...(categories[project.category] || []), project.id],
    }
  }, {} as { [key: string]: string[] })
  return {
    props: {
      portfolio: enhancedPortfolio,
      categories,
      showcase,
    },
  }
}

const Portfolio = ({
  portfolio,
  categories,
  showcase,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // console.log(categories)

  // const carouselProjects = useMemo(() => {
  //   const orderedCategories = shuffle(Object.keys(categories))

  //   return orderedCategories.map((cat) => {
  //     const projectId = sample(categories[cat])
  //     return portfolio.filter((project) => project.id === projectId)[0]
  //   })
  // }, [portfolio, categories])

  return (
    <>
      <Head>
        <title>Symphony Portfolio</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <Showcase slides={showcase} />
          <CopySection>
            <CopyTitle className="mb-4">Portfolio</CopyTitle>
            <CopyParagraph>
              {/* <div className="space-y-4">
                {portfolio.map((employee) => {
                  return <EmployeeContact key={employee.email} {...employee} />
                })}
              </div> */}
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>{/* <EmployeeSideMenu employeeList={employeeList} /> */}</SideContent>
      </ContentLayout>
    </>
  )
}

Portfolio.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Portfolio
