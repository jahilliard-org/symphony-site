import Head from "next/head"
import { ReactNode } from "react"
import Layout from "components/Layout"
import Image from "next/image"
import { NextPage } from "types"
import {
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  MainContent,
  SideContent,
  SideTitle,
} from "components/Utils"

const Philosophy: NextPage = () => {
  return (
    <>
      <Head>
        <title>Philosophy</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <div>
            <Image
              width={700}
              height={350}
              src={"/philosophy.jpg"}
              alt="Symphony Management Photo"
            />
          </div>
          <CopySection>
            <CopyTitle className="mb-4">Our Philosophy</CopyTitle>
            <CopyParagraph>
              The Symphony Development philosophy is centered on building a lasting reputation of
              integrity and quality with the real estate community, the municipalities we serve, our
              valued partners and the people who call our developments home, office or amenity. To
              accomplish this, we challenge ourselves to the utmost in creativity and oversight in
              each and every phase of our development cycle including pre-planning, construction and
              customer service.
              <br />
              <br />
              Our success depends on our operating approach, which is founded upon a series of key
              principles:
              <br />
              <br />
              <ul className="pl-8 list-disc leading-loose">
                <li className="pl-2">
                  To be creative in the project concept phase, ensuring the generation and
                  exploration of a full range of design and use ideas
                </li>
                <br />
                <li className="pl-2">
                  To select the uses and design approaches that not only generate strong project
                  economics, but that also generate positive impact on the community
                </li>
                <br />
                <li className="pl-2">
                  To balance pure economics, project design and quality materials to build a quality
                  development and long-term positive reputation
                </li>
                <br />
                <li className="pl-2">
                  To incorporate sustainable building materials and practices into our projects, for
                  the protection of the planet and our end users
                </li>
                <br />
                <li className="pl-2">
                  To invest substantial resources in the detail design elements and pre-construction
                  planning process
                </li>
                <br />
                <li className="pl-2">
                  To be selective in the choosing of general contractors and subcontractors in order
                  to build relationships that last
                </li>
                <br />
                <li className="pl-2">
                  To pay our contractors on a timely basis and to manage expectations
                </li>
                <br />
                <li className="pl-2">
                  To select materials for longevity and quality, increasing customer satisfaction
                  and limiting warranty exposure
                </li>
                <br />
                <li className="pl-2">
                  To address customer service and warranty issues promptly and fairly
                </li>
                <br />
              </ul>
              Standing behind these driving principles, Symphony Development continues to seek out
              new project opportunities while expanding existing relationships.
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          <SideTitle>
            Enhancing Community <br /> through Sustainable Urban Development
          </SideTitle>
        </SideContent>
      </ContentLayout>
    </>
  )
}

Philosophy.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Philosophy
