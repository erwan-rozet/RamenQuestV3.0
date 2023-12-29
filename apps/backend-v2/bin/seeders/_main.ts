import path from "node:path"

import { readdir } from "node:fs/promises"
import prisma from "../../src/utils/prisma"

async function main() {
  const files = await getFilesToRun()

  const args = process.argv.slice(2)

  if (files.length === 0) {
    return console.warn("\x1b[33m%s\x1b[0m", "No seed file to run")
  }

  for (let i = 0; i < files.length; i++) {
    const path = files[i]
    const { default: f } = (await import(path)) as {
      default: (force?: boolean) => Promise<string>
    }
    const text = args[args.length - 1] === "force" ? await f(true) : await f()
    // console.log(
    //   (i + 1).toString().padStart(2) + "/" + files.length.toString(),
    //   text.padEnd(7),
    //   path
    // )
  }
}

main()
  .then(async () => {
    console.info("\x1b[32m%s\x1b[0m", "Success on _main.ts")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

function printExamples() {
  console.info("\x1b[32m%s\x1b[0m", "Examples------------")
  console.log("pnpm prisma:seed-dev base".padEnd(45), "Run seed base")
  console.log("pnpm prisma:seed-dev users".padEnd(45), "Run seed users")
  console.log("pnpm prisma:seed-dev demo".padEnd(45), "Run seed demo")
  console.log(
    "pnpm prisma:seed-dev users catholique".padEnd(45),
    "Run seed user catholique"
  )
  console.log(
    "pnpm prisma:seed-dev demo nexelecdemo".padEnd(45),
    "Run seed demo NexelecDemo"
  )
  console.log(
    "pnpm prisma:seed-dev demo nexelecdemo force".padEnd(45),
    "Run reset then seed demo NexelecDemo"
  )
  console.info("\x1b[32m%s\x1b[0m", "-------------------\n")
}

async function getFilesToRun() {
  const args = process.argv.slice(2)

  if (args.length === 0) {
    printExamples()
    throw new Error("At least one seed mode required! Example above")
  }

  let pathToSeedFiles = ""
  let pathPrefix = ""

  switch (args[0]) {
    case "base":
      pathToSeedFiles = path.join(__dirname, "base")
      pathPrefix = "./base/"
      break
    case "users":
      pathToSeedFiles = path.join(__dirname, "users")
      pathPrefix = "./users/"
      break
    case "demo":
      pathToSeedFiles = path.join(__dirname, "demo")
      pathPrefix = "./demo/"
      break
    default:
      printExamples()
      throw new Error("Invalid seed mode")
  }

  const files = await readdir(pathToSeedFiles)
  files.sort((a, b) => {
    const numA = Number(a.split("_")[0])
    const numB = Number(b.split("_")[0])

    return numA - numB
  })

  if (args.length === 1) return files.map((name) => pathPrefix + name)

  const keyword = args[1]

  return files
    .filter(
      (fileName) =>
        fileName.substring(0, fileName.length - 3).toLowerCase() ===
        keyword.toLowerCase()
    )
    .map((name) => pathPrefix + name)
}
