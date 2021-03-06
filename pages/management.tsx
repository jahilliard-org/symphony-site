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
import { employeeList as employeeListProps } from "static"
import { Employee } from "types"

export const getStaticProps: GetStaticProps<{ employeeList: Employee[] }> = async () => {
  return {
    props: {
      employeeList: employeeListProps,
    },
  }
}

const Management = ({ employeeList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Symphony Management</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <CopySection>
            <CopyTitle className="mb-4">Management</CopyTitle>
            <CopyParagraph>
              <div className="space-y-4">
                {employeeList.map((employee) => {
                  return <EmployeeContact key={employee.email} {...employee} />
                })}
              </div>
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          <EmployeeSideMenu employeeList={employeeList} />
        </SideContent>
      </ContentLayout>
    </>
  )
}

Management.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Management
