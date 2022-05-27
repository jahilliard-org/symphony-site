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
  ImageFrame,
} from "components/Utils"
import Image from "next/image"
import { shuffle, sample, omitBy } from "lodash"
import { getPortfolioProjectImages } from "helpers"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { FC, ReactNode, useMemo } from "react"
import { portfolio, showcase } from "static"
import { EnhacedProject, Project, Slide } from "types"
import { Tab } from "@headlessui/react"
import classNames from "classnames"
import Link from "next/link"

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
    <Tab className={`focus:outline-none  focus:ring-none`}>
      {({ selected }) => (
        <h3
          className={classNames(
            "font-goth text-sm hover:text-brand-darker py-2",
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

const ProjectShowcaseLink: FC<{ project: EnhacedProject }> = ({ project }) => {
  return (
    <Link href={`/project/${project.id}`}>
      <a className={"justify-self-center"}>
        <ImageFrame>
          <Image
            src={project.showcaseImg}
            alt={`${project.name} - Showcase Image`}
            height={200}
            width={250}
          />
        </ImageFrame>
        <CopyTitle className="mt-2 text-center">{project.name}</CopyTitle>
      </a>
    </Link>
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
        <title>Portfolio</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <Showcase slides={showcase} />
          <CopySection>
            <Tab.Group>
              <Tab.List className="grid  grid-cols-2 grid-rows-3 focus-none ring-none md:grid-cols-3 md:grid-rows-2 gap-y-4 gap-x-4 bg-brand-light/25 border-gray-200 border p-4 mb-8">
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
                <Tab.Panel
                  className={`focus:outline-none focus:ring-none grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12`}
                >
                  {portfolio.map((project) => {
                    return (
                      <ProjectShowcaseLink key={`projects-${project.name}`} project={project} />
                    )
                  })}
                </Tab.Panel>
                {Object.keys(categories).map((category) => {
                  return (
                    <Tab.Panel
                      key={`projects-${category}`}
                      className={`focus:outline-none focus:ring-none grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12`}
                    >
                      {portfolio
                        .filter((proj) => proj.category === category)
                        .map((project) => {
                          return (
                            <ProjectShowcaseLink
                              key={`projects-${project.name}`}
                              project={project}
                            />
                          )
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
