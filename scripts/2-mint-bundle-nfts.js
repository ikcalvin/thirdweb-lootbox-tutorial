import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  // Paste in the address from when you created the bundle collection module
  const bundleModuleAddress = "0xBC3eA6A634451e6f044E6ef2Cd49ee9f5de29D61";
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Tesla Model S",
        description: "A pretty fancy car!",
        image: readFileSync("./assets/images/tesla_s.jpg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Lamborghini Huracán",
        description: "A pretty fancy car!",
        image: readFileSync("./assets/images/huracan.jpg"),
        properties: {
          rarity: "a bit rare",
          fanciness: 7,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Mclaren P1",
        description: "A super fancy car!",
        image: readFileSync("./assets/images/mclarenp1.jpg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
