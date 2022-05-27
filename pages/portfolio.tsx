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
  SideTitle,
} from "components/Utils"
import { shuffle, sample, omitBy } from "lodash"
import { getPortfolioProjectImages } from "helpers"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { FC, ReactNode, useMemo } from "react"
import { portfolio, showcase } from "static"
import { EnhacedProject, Slide } from "types"
import { Tab } from "@headlessui/react"
import classNames from "classnames"

export const getStaticProps: GetStaticProps<{
  portfolio: EnhacedProject[]
  categories: { [key: string]: string[] }
  showcase: Slide[]
}> = async () => {
  const [first, second, third, ...rest] = showcase
  const shiftedShowcase = [...rest, first, second, third]
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
      showcase: shiftedShowcase,
    },
  }
}

const ProjectTypeSelectionTab: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Tab className={`focus:outline-none focus:ring-none`}>
      {({ selected }) => (
        <h3
          className={classNames(
            "font-goth text-sm hover:text-brand-darker ",
            selected
              ? "text-brand-darker"
              : "text-brand-dark link link-underline link-underline-black",
            selected && "border-b border-brand-darker"
          )}
        >
          {children}
        </h3>
      )}
    </Tab>
  )
}

const Portfolio = ({
  portfolio,
  categories,
  showcase,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

            <Tab.Group>
              <Tab.List className="grid  grid-cols-2 grid-rows-3 focus-none ring-none md:grid-cols-3 md:grid-rows-2 gap-y-2 gap-x-2 bg-brand-light/25 border-brand-light border p-2 ">
                <ProjectTypeSelectionTab>All</ProjectTypeSelectionTab>
                {Object.keys(categories).map((category) => {
                  return (
                    <ProjectTypeSelectionTab key={`selector-${category}`}>
                      {category}
                    </ProjectTypeSelectionTab>
                  )
                })}
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel className={`focus:outline-none focus:ring-none`}>
                  {portfolio.map((project) => {
                    return <div key={`projects-${project.name}`}>{project.name}</div>
                  })}
                </Tab.Panel>
                {Object.keys(categories).map((category) => {
                  return (
                    <Tab.Panel
                      key={`projects-${category}`}
                      className={`focus:outline-none focus:ring-none`}
                    >
                      {portfolio
                        .filter((proj) => proj.category === category)
                        .map((project) => {
                          return <div key={`projects-${project.name}`}>{project.name}</div>
                        })}
                    </Tab.Panel>
                  )
                })}
              </Tab.Panels>
            </Tab.Group>
            <CopyParagraph></CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          <SideTitle>Proven Success for Multiple Projects and Development Types</SideTitle>
        </SideContent>
      </ContentLayout>
    </>
  )
}

Portfolio.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Portfolio
