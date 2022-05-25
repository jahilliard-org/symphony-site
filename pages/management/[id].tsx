import Head from "next/head"
import Image from "next/image"
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
  ImageFrame,
  EmployeeSideMenu,
} from "components/Utils"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from "next"

const Manager = ({ employee, employeeList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { profSrc, name, title, email, desc } = employee
  return (
    <>
      <Head>
        <title>
          {employee.name} - {employee.title}
        </title>
      </Head>
      <ContentLayout>
        <MainContent>
          <CopySection>
            <CopyTitle className="mb-4">
              {employee.name} - {employee.title}
            </CopyTitle>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
              <div className="md:w-1/3 items-center">
                <div className="flex">
                  <ImageFrame>
                    <Image src={profSrc} alt={name} width={"187"} height={"250"} />
                  </ImageFrame>
                </div>
              </div>
              <div className="md:w-2/3">
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
              </div>
            </div>
          </CopySection>
        </MainContent>
        <SideContent>
          <EmployeeSideMenu employeeList={employeeList} />
        </SideContent>
      </ContentLayout>
    </>
  )
}

Manager.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export async function getStaticPaths() {
  const paths = employeeList.map((employee) => ({
    params: { id: employee.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  employee: Employee
  employeeList: Employee[]
}> = async ({ params }) => {
  return {
    props: {
      employee: employeeList.filter((e) => e.id === params!.id)[0],
      employeeList,
    },
  }
}

export default Manager
