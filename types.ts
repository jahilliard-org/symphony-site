import { NextPage as CoreNextPage } from "next/types"
import { ReactNode } from "react"

export type NextPage = CoreNextPage & { getLayout: (page: ReactNode) => ReactNode }

export interface Employee {
  id: string
  profSrc: string
  name: string
  title: string
  email: string
  desc: string[]
}

export interface Project {
  id: string
  category: string
  name: string
  address: string
  desc: string[]
}

export type Employees = Employee[]
