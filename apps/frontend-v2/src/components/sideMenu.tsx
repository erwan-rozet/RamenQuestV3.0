// SideMenu.tsx
import useNavigationLinks from "@/hooks/useNavigationLinks"
import classes from "../components/layout.module.css"
import Link from "next/link"
import Card from "@/ui/card"
import { useState } from "react"
import Image from "next/image"
import chopsticks from "../../public/japanese-chopsticks-svgrepo-com.svg"

const SideMenu: React.FC = () => {
  const { getArticlesLink, getRecipesLink, getCookWareLink } =
    useNavigationLinks()

  const [isArticlesOpen, setArticlesOpen] = useState<boolean>(false)
  const [isRecipesOpen, setRecipesOpen] = useState<boolean>(false)
  const [isCookwareOpen, setCookwareOpen] = useState<boolean>(false)

  const articlesLink = getArticlesLink()
  const recipesLink = getRecipesLink()
  const cookwareLink = getCookWareLink()

  return (
    <>
      <div className={classes.container}>
        <div className={classes.sideBar}>
          <Link href={"/"}>
            <Image
              className={classes.pictoSideBar}
              src={"/black-bowl.svg"}
              alt={"smoking ramen bowl"}
              width={45}
              height={45}
            ></Image>
          </Link>
          <div className={classes.separator}></div>
          <div onClick={() => setArticlesOpen(!isArticlesOpen)}>
            <Card setOpen={isArticlesOpen} title={"Presse"}>
              {isArticlesOpen && (
                <>
                  {articlesLink.map((link) => (
                    <div className={classes.linkContainer} key={link.href}>
                      <Link href={link.href}>
                        <div className={classes.linkContent}>
                          <span className={classes.linkText}>{link.title}</span>
                          {link.icon && (
                            <span className={classes.linkIcon}>
                              {link.icon}
                            </span>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </Card>
          </div>

          <div onClick={() => setRecipesOpen(!isRecipesOpen)}>
            <Card setOpen={isRecipesOpen} title={"Recettes"}>
              {isRecipesOpen && (
                <>
                  {recipesLink.map((link) => (
                    <div className={classes.linkContainer} key={link.href}>
                      <Link href={link.href}>
                        <div className={classes.linkContent}>
                          <span className={classes.linkText}>{link.title}</span>
                          {link.icon && (
                            <span className={classes.linkIcon}>
                              {link.icon}
                            </span>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </Card>
          </div>

          <div onClick={() => setCookwareOpen(!isCookwareOpen)}>
            <Card setOpen={isCookwareOpen} title={"Cookware"}>
              {isCookwareOpen && (
                <>
                  {cookwareLink.map((link) => (
                    <div className={classes.linkContainer} key={link.href}>
                      <Link href={link.href}>
                        <div className={classes.linkContent}>
                          <span className={classes.linkText}>{link.title}</span>
                          {link.icon && (
                            <span className={classes.linkIcon}>
                              {link.icon}
                            </span>
                          )}
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideMenu
