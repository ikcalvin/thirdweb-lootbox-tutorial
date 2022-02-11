import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = "0x32D0A381eB7cDE8d2490A635348F3A86Ba13b825"; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log("Depositing link...");

  // LINK uses 18 decimals, same as Eth. So this gives us the amount to use for 2 LINK
  const amount = ethers.utils.parseEther("2");

  await packModule.depositLink(amount);
  console.log("Deposited!");

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

try {
  await main();
} catch (error) {
  console.error("Error depositing the LINK", error);
  process.exit(1);
}
