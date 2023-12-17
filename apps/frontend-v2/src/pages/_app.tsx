// _app.tsx
import Layout from "@/components/layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps, router }: AppProps) {
  // Vérifier si la page actuelle est la page d'accueil ou la page d'erreur 404
  const isHomePage = router.pathname === "/"
  const isErrorPage = router.pathname === "/404"

  if (isHomePage || isErrorPage) {
    // Ne pas afficher le layout sur la page d'accueil ou la page d'erreur 404
    return <Component {...pageProps} />
  }

  // Afficher le layout pour toutes les autres pages
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
