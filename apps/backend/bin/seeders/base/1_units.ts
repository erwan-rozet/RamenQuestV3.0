import prisma from "@/utils/prisma"
import frenchUnits from "../../data/frenchUnits"

export default async function seedUnits() {
  const counter = await prisma.unit.count()
  if (counter < 1) {
    await prisma.unit.createMany({
      data: frenchUnits.map((unit) => ({
        name: unit
      }))
    })

    return "Units seeded";
  }

  return "Units ignored";
}