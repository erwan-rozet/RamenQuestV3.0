import { ImNewspaper } from "react-icons/im"
import { PiAddressBook } from "react-icons/pi"
import { ImSpoonKnife } from "react-icons/im"
import { GiFlour } from "react-icons/gi"
import { PiCookingPotLight } from "react-icons/pi"
import { SiCookiecutter } from "react-icons/si"

export default function useNavigationLinks() {
  function getArticlesLink() {
    const articlesLink = [
      {
        href: "/articles",
        title: "Articles de blog",
        icon: <ImNewspaper />,
      },
      {
        href: "/jenesaispas",
        title: "Je ne sais pas",
        icon: <PiAddressBook />,
      },
    ]
    return articlesLink
  }
  function getRecipesLink() {
    const recipesLink = [
      {
        href: "/recipes",
        title: "Recettes",
        icon: <ImSpoonKnife />,
      },
      {
        href: "/ingredients",
        title: "Ingrédients",
        icon: <GiFlour />,
      },
    ]
    return recipesLink
  }
  function getCookWareLink() {
    const cookwareLink = [
      {
        href: "/cookware",
        title: "Cookware",
        icon: <PiCookingPotLight />,
      },
      {
        href: "/jenesaispas",
        title: "Je ne sais pas",
        icon: <SiCookiecutter />,
      },
    ]
    return cookwareLink
  }

  return { getArticlesLink, getCookWareLink, getRecipesLink }
}
