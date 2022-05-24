import Meta from "./meta"
import tw from "tailwind-styled-components"
import SiteHeader from "components/Header"
import { AppProps } from "next/app"
import { FC, ReactNode } from "react"
import SiteFooter from "components/Footer"

export const ContentWrapper = tw.div`
  container
  max-w-4xl
  mx-auto
  bg-white
  my-4
`

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Meta />
      <ContentWrapper>
        <SiteHeader />
        {children}
        <SiteFooter />
      </ContentWrapper>
    </>
  )
}

export default Layout
