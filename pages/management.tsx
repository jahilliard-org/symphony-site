import Head from "next/head"
import { ReactNode } from "react"
import Layout from "components/Layout"
import { Employee, NextPage } from "types"
import { employeeList as employeeListProps } from "static"
import {
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  EmployeeContact,
  MainContent,
  SideContent,
  SideTitle,
  ClickableA,
  EmployeeSideMenu,
} from "components/Utils"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from "next"
import Link from "next/link"

export const getStaticProps: GetStaticProps<{ employeeList: Employee[] }> = async () => {
  return {
    props: {
      employeeList: employeeListProps,
    },
  }
}

const Contact = ({ employeeList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Management</title>
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

Contact.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Contact
