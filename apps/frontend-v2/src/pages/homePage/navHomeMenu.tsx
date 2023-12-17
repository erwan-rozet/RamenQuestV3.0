import React from "react"
import classes from "./homePage.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const NavHomeMenu: React.FC = () => {
  const router = useRouter()
  return (
    <div className={classes.navMenu}>
      <Link
        href="/test/mabite"
        className={`${classes.navItem} ${classes.link}`}
      >
        je débute
      </Link>
      <Link
        href="/navMenu/intermediate"
        className={`${classes.navItem} ${classes.link}`}
      >
        je me débrouille
      </Link>
      <Link href="/advanced" className={`${classes.navItem} ${classes.link}`}>
        je suis hyper fort
      </Link>
      <Link href="/faq" className={`${classes.navItem} ${classes.link}`}>
        faq
      </Link>
      <Link href="/shopping" className={`${classes.navItem} ${classes.link}`}>
        shopping
      </Link>
      <Link href="/contact" className={`${classes.navItem} ${classes.link}`}>
        nous contacter
      </Link>
      <Link href="/bio" className={`${classes.navItem} ${classes.link}`}>
        bio
      </Link>
    </div>
  )
}

export default NavHomeMenu
