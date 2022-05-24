import tw from "tailwind-styled-components"
import Image from "next/image"
import { FC, ReactNode } from "react"

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

export const SideContent = tw.div`
  bg-brand-light
  md:w-1/4
  md:inline
  hidden
`

export const SideTitle: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="mx-6 mt-20">
      <h2 className="font-goth text-ls text-brand-darkest">{children}</h2>
    </div>
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

export const CopyParagraph = tw.p`
  font-inter
  text-xs
  font-normal
  leading-relaxed
  text-brand-dark
`

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
