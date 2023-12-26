import prisma from "../../../src/utils/prisma";
import frenchUnits from "../../data/frenchUnits";

// async function run() {
//   const result = await seedUnits();
//   console.log(result);
// }

export default async function seedUnits() {
  const counter = await prisma.unit.count();
  // Blue color
  console.info('\x1b[34m%s\x1b[0m', `Unit counter ===== ${counter}`);

  if (counter < 1) {
    await prisma.unit.createMany({
      data: frenchUnits.map((unit) => ({
        name: unit
      }))
    });

    // Green color
    console.info("\x1b[32m%s\x1b[0m", "Success: Units seeded")
  }

  // Yellow color
  console.info("\x1b[33m%s\x1b[0m", "Failed: there's already data in Unit table, seeding ignored.")

}

// // Call the function to execute the script
// run();
