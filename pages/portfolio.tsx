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
} from "components/Utils"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { ReactNode } from "react"
import { portfolio } from "static"
import { Project } from "types"

export const getStaticProps: GetStaticProps<{ portfolio: Project[] }> = async () => {
  return {
    props: {
      portfolio,
    },
  }
}

const Portfolio = ({ portfolio }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Symphony Portfolio</title>
      </Head>
      <ContentLayout>
        <MainContent>
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
