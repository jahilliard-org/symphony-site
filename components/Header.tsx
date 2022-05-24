import Image from "next/image"
import Link from "next/link"
import { FC, ReactNode } from "react"
import tw from "tailwind-styled-components"

const MenuItem = tw.div`
font-goth text-sm text-brand-dark uppercase
hover:text-brand-darkest
px-1
link link-underline link-underline-black
`

const MenuElement: FC<{ children: ReactNode; href: string }> = ({ children, href }) => {
  return (
    <MenuItem>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </MenuItem>
  )
}

const SiteHeader: FC<{}> = () => {
  return (
    <>
      <header className="flex flex-col items-center md:items-end md:flex-row md:justify-between py-2 md:px-4">
        <div className="mb-2 md:-mb-2">
          <Image src={"/logo.png"} width={137} height={122} alt="Symphony Develoment logo" />
        </div>
        <nav className="flex flex-row space-x-3 items-end ">
          <MenuElement href="/">Home</MenuElement>
          <MenuElement href="/philosophy">Philosophy</MenuElement>
          <MenuElement href="/portfolio">Portfolio</MenuElement>
          <MenuElement href="/management">Management</MenuElement>
          <MenuElement href="/contact">Contact</MenuElement>
        </nav>
      </header>
      <div className="bg-brand-green w-full h-4 mb-2"></div>
    </>
  )
}

export default SiteHeader
