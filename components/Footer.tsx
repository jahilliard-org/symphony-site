import Image from "next/image"
import { FC } from "react"
import tw from "tailwind-styled-components"
import { useMemo } from "react"

const SiteFooter: FC<{}> = () => {
  const year = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <footer className="w-full bg-brand-darker">
      <p className="py-1 ml-4 text-xs text-white">{`Copyright © 1991-${year} Symphony Development. All rights reserved.`}</p>
    </footer>
  )
}

export default SiteFooter
