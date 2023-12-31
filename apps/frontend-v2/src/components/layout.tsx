import React, { ReactNode } from "react"
import SideMenu from "./sideMenu"
import NavBar from "./layout-navbar"
import Image from "next/image"

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar></NavBar>
      <SideMenu />

      <main>{children}</main>
    </>
  )
}

export default Layout
