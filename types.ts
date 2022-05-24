import { NextPage as CoreNextPage } from "next/types"
import { ReactNode } from "react"

export type NextPage = CoreNextPage & { getLayout: (page: ReactNode) => ReactNode }
