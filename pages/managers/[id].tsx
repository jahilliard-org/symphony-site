import Head from "next/head"
import { ReactNode } from "react"
import Layout from "components/Layout"
import { Employee, NextPage } from "types"
import { employeeList } from "static"
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
} from "components/Utils"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from "next"

const Manager = ({ employee }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{employee.name}</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <CopySection>
            <CopyTitle className="mb-4">{employee.name}</CopyTitle>
            <CopyParagraph>
              {/* <div className="space-y-4">
                {employeeList.map((employee) => {
                  return <EmployeeContact key={employee.email} {...employee} />
                })}
              </div> */}
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          {/* <SideTitle>
            {employeeList.map((employee) => {
              return (
                <div key={employee.name}>
                  <ClickableA className="text-sm">
                    <span className="pr-4 text-lg">›</span> {employee.name}
                  </ClickableA>
                </div>
              )
            })}
          </SideTitle> */}
        </SideContent>
      </ContentLayout>
    </>
  )
}

Manager.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

// function Post({ post }) {
//   // Render post...
// }

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = employeeList.map((employee) => ({
    params: { id: employee.id },
  }))

  return { paths, fallback: false }
}

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps<{ employee: Employee }> = async ({ params }) => {
  // Pass post data to the page via props
  return { props: { employee: employeeList.filter((e) => e.id === params!.id)[0] } }
}

export default Manager
