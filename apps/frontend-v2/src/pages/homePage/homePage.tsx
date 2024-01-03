import classes from "./homePage.module.css"
// import NavHomeMenu from "../navMenu/nav/page";
// import SearchBar from "../SearchBar/SearchBar";
import React, { FC } from "react"
import NavHomeMenu from "./navHomeMenu"
import Image from "next/image"

const HomePage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.photoContainer}>
        <img src="ramenBowl.jpg" alt="bol de ramen" className={classes.photo} />
      </div>
      <h2 className={classes.h2}>ラーメンクエスト</h2>
      <div className={classes.steamContainer}>
        <img src="steam1.png" alt="steam" className={classes.steam} />
      </div>
      <div className={classes.steamContainer2}>
        <img src="steam1.png" alt="steam" className={classes.steam2} />
      </div>

      <div className={classes.navMenu}>
        <NavHomeMenu />
      </div>
      <div className={classes.titleName}>Ramen Quest</div>
      {/* <div>
        <SearchBar />
      </div> */}
    </div>
  )
}
// Marquer le composant HomePage comme un Client Component

export default HomePage
