import prisma from "../../../src/utils/prisma";
import frenchUnits from "../../data/frenchUnits";
import imperialUnits from "../../data/imperialUnits";
import { colors } from "../../../ANSI_colors"


export default async function seedUnits() {
  const counter = await prisma.unit.count();

  if (counter < 1) {
    await prisma.$transaction([
      prisma.unit.deleteMany(),
      prisma.unit.createMany({
        data: frenchUnits.map((unit) => ({
          name: unit
        }))
      }),
      prisma.unit.createMany({
        data: imperialUnits.map((unit) => ({
          name: unit
        }))
      })
    ])


    console.info(`${colors.green}, Success: Units seeded`)
    return

  }

  console.info(`${colors.orange}, Warning: there's already data in Unit table, seeding ignored.`)
  return

}
