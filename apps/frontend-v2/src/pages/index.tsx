import Head from "next/head"
import { Inter } from "next/font/google"

import HomePage from "./homePage/homePage"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramen Quest</title>
      </Head>
      <main>
        <HomePage></HomePage>
      </main>
    </>
  )
}

Home.getInitialProps = async () => {
  return {
    noLayout: true, // Ajoutez cette ligne pour indiquer que le layout ne doit pas être affiché sur la page d'accueil
  }
}
