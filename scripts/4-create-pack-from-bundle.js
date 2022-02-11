import { readFileSync } from "fs";
import { sdk } from "./helpers.js";

async function main() {
  const bundleModuleAddress = "0xBC3eA6A634451e6f044E6ef2Cd49ee9f5de29D61"; // your bundle module address
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = "0x32D0A381eB7cDE8d2490A635348F3A86Ba13b825"; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Getting all NFTs from bundle...");
  const nftsInBundle = await bundleModule.getAll();

  console.log("NFTs in bundle:");
  console.log(nftsInBundle);

  console.log("Creating a pack containing the NFTs from bundle...");
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: "Fancy Cars Pack!",
      image: readFileSync("./assets/images/cars.jpeg"),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log("Pack created!");
  console.log(created);
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
