import Image from "next/image"
import { FC, ReactNode } from "react"
import tw from "tailwind-styled-components"

const MenuItem = tw.div`
font-inter text-sm text-brand-dark uppercase
hover:text-brand-darkest
px-1
link link-underline link-underline-black
`

const MenuElement: FC<{ children: ReactNode }> = ({ children }) => {
  return <MenuItem>{children}</MenuItem>
}

const SiteHeader: FC<{}> = () => {
  return (
    <>
      <header className="flex flex-col items-center md:items-end md:flex-row md:justify-between py-2 md:px-4">
        <div className="mb-2 md:mb-0">
          <Image src={"/logo.png"} width={137} height={122} alt="Symphony Develoment logo" />
        </div>
        <nav className="flex flex-row space-x-3 items-end md:mr-8">
          <MenuElement>
            <a>Home</a>
          </MenuElement>
          <MenuElement>
            <a>Philosophy</a>
          </MenuElement>
          <MenuElement>
            <a>Portfolio</a>
          </MenuElement>
          <MenuElement>
            <a>Management</a>
          </MenuElement>
          <MenuElement>
            <a>Contact</a>
          </MenuElement>
        </nav>
      </header>
      <div className="bg-brand-green w-full h-4"></div>
    </>
  )
}

export default SiteHeader
