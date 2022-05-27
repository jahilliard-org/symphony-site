import tw from "tailwind-styled-components"
import Image from "next/image"
import { FC, ReactNode } from "react"
import { Employee, Slide } from "types"
import { showcase } from "static"
import Link from "next/link"
import Slider from "react-slick"

export const ContentLayout = tw.div`
  flex
  flex-row
  h-full
`

export const MainContent = tw.main`
  md:w-3/4
  w-full
  mb-4
`

export const Email = tw.a`
  hover
`

export const ShowcaseSlider: FC<{ children: ReactNode }> = ({ children }) => {
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
  return <Slider {...settings}> {children} </Slider>
}

export const SideContent = tw.div`
  bg-brand-light
  md:w-1/4
  md:inline
  hidden
`

export const ImageFrame = tw.div`
  bg-gray-100
  border
  pb-1
  pt-2
  px-2
  border-gray-200
`

export const SideTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-6 mt-20">
      <h2 className="font-goth  text-brand-darkest">{children}</h2>
    </div>
  )
}

export const ClickableA = tw.a`
  hover:text-brand-darker
  hover:border-b
  hover:border-brand-darker
  `

export const EmployeeContact: FC<{
  id: string
  profSrc: string
  name: string
  title: string
  email: string
  profHeight?: number
  profWidth?: number
}> = ({ id, profSrc, name, title, email, profHeight, profWidth }) => {
  const managerProfileLink = `/management/${id}`
  return (
    <div className="flex flex-row space-x-4">
      <div>
        <Link href={managerProfileLink}>
          <ImageFrame className="cursor-pointer">
            <Image
              src={profSrc}
              alt={name}
              width={profWidth || "150"}
              height={profHeight || "200"}
            />
          </ImageFrame>
        </Link>
      </div>
      <div className="w-full font-inter mt-2">
        <Link href={managerProfileLink}>
          <h2 className="text-md uppercase font-goth cursor-pointer">{name}</h2>
        </Link>
        <div className="w-full border-b"></div>
        <div className="mt-2">
          <p>{title}</p>
          <ClickableA href={`mailto:${email}`}>{email}</ClickableA>
        </div>
      </div>
      {/* <h2 className="font-goth text-ls text-brand-darkest">{children}</h2> */}
    </div>
  )
}

export const EmployeeSideMenu: FC<{ employeeList: Employee[] }> = ({ employeeList }) => {
  return (
    <SideTitle>
      {employeeList.map((employee) => {
        return (
          <div key={employee.name}>
            <Link href={`/management/${employee.id}`}>
              <ClickableA className="text-sm">
                <span className="pr-4 text-lg">›</span> {employee.name}
              </ClickableA>
            </Link>
          </div>
        )
      })}
    </SideTitle>
  )
}

export const CopySection = tw.section`
  my-8
  mx-12
`

export const CopyTitle = tw.h1`
  font-goth
  text-md
  text-brand-dark
`

export const CopyParagraph = tw.div`
  font-inter
  text-xs
  font-normal
  leading-relaxed
  text-brand-dark
`

export const Showcase: FC<{ slides: Slide[] }> = ({ slides }) => {
  return (
    <ShowcaseSlider>
      {slides.map((slide) => {
        return (
          <CarouselImage key={`car-showcase-${slide.copy}`} src={slide.img} copy={slide.copy} />
        )
      })}
    </ShowcaseSlider>
  )
}

export const CarouselImage: FC<{ src: string; copy: string }> = ({ src, copy }) => {
  return (
    <div>
      <Image width={700} height={350} src={src} alt={copy} />
      <div className="h-12 bg-brand-green opacity-90 align-baseline -mt-14">
        <p className="pl-12 text-white font-inter pt-5 text-xs">{copy}</p>
      </div>
    </div>
  )
}
