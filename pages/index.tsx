import Head from "next/head"
import { ReactNode } from "react"
import { NextPage } from "types"
import Layout from "components/Layout"
import {
  CarouselImage,
  ContentLayout,
  CopyParagraph,
  CopySection,
  CopyTitle,
  MainContent,
  SideContent,
  SideTitle,
} from "components/Utils"
import Slider from "react-slick"

const Home: NextPage = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Head>
        <title>Symphony Development</title>
      </Head>
      <ContentLayout>
        <MainContent>
          <Slider {...settings}>
            <CarouselImage src={"/slides/slide-1ZZZ3.jpg"} copy={"Mixed Use Envirorment"} />
            <CarouselImage src={"/slides/slide-7OC0R.jpg"} copy={"Mixed Use Envirorment"} />
          </Slider>
          <CopySection>
            <CopyTitle className="mb-4">
              Improving Urban Life with Sustainable Real Estate Solutions
            </CopyTitle>
            <CopyParagraph>
              At Symphony Development, we pride ourselves on our ability to deliver quality real
              estate developments to the urban communities we serve. With an emphasis on sustainable
              building practices, our goal is to better our cities with high-caliber multifamily,
              student housing and mixed-use environments. With a 20-year legacy in real estate, we
              continue to seek out opportunities to develop and build best-in-class spaces for home,
              work and life.
            </CopyParagraph>
          </CopySection>
        </MainContent>
        <SideContent>
          <SideTitle>
            Generating Value <br /> through Quality Urban Development
          </SideTitle>
        </SideContent>
      </ContentLayout>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>
}

export default Home
