// pages/error404.tsx
import { useRouter } from "next/router"
import Button from "@/ui/button"
import classes from "../pages/404.module.css"

const Error404: React.FC = () => {
  const router = useRouter()
  const dynamicMargin = "2%"

  return (
    <main className={classes.notFound}>
      <div className={classes.backgroundImage}>
        <img src="/ramenBowl404.jpg" alt="Ramen bowl" />
      </div>
      <h1 className={classes.spacer}>404</h1>
      <h1 className={classes.spacer}>
        This is not the ramen bowl you're looking for...
      </h1>
      <Button
        margin={dynamicMargin}
        type="button"
        color="success"
        onClick={() => router.push("/")}
      >
        Back Home
      </Button>
    </main>
  )
}

export default Error404
