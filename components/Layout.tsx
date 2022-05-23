import Meta from "./meta"

export default function Layout({ children }: any) {
  return (
    <>
      <Meta />
      <div className="">
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
