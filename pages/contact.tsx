import Head from "next/head"
import { ReactNode } from "react"
import Layout from "components/Layout"
import { Employee, NextPage } from "types"
import {
  employeeList as employeeListProps,
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  EmployeeContact,
  MainContent,
  SideContent,
  SideTitle,
} from "components/Utils"
import { GetStaticProps } from "next"
import { InferGetStaticPropsType } from "next"

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
        <title>Contact</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.335037659759!2d-118.45497598389748!3d34.035275880610676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb12b928099b%3A0x86be36b4875b3ec3!2s11828+La+Grange+Ave+%23150%2C+Los+Angeles%2C+CA+90025!5e0!3m2!1sen!2sus!4v1467867988292"
              height="370"
              className="w-full"
            ></iframe>
          </div>
          <CopySection>
            <CopyTitle className="mb-4">Send us a Message</CopyTitle>
            <CopyParagraph>
              To contact us individually please use the links below.
              <br />
              <br />
              <div className="space-y-4">
                {employeeList.map((employee) => {
                  return (
                    <EmployeeContact
                      key={employee.email}
                      {...employee}
                      profHeight={125}
                      profWidth={93}
                    />
                  )
                })}
              </div>
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          <SideTitle>
            <div className="text-sm">
              Symphony Development
              <br />
              Suite 150
              <br />
              11828 La Grange Ave
              <br />
              Los Angeles, CA 90025
              <br />
              <br />
              Ph 310.474.7379
              <br />
              Fax 310.474.8580
            </div>
          </SideTitle>
        </SideContent>
      </ContentLayout>
    </>
  )
}

Contact.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Contact
