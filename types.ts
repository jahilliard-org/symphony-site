import { NextPage as CoreNextPage } from "next/types"
import { ReactNode } from "react"

export type NextPage = CoreNextPage & { getLayout: (page: ReactNode) => ReactNode }

export interface Employee {
  profSrc: string
  name: string
  title: string
  email: string
}

export type Employees = Employee[]
