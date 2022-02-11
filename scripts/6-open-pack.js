import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = '0x32D0A381eB7cDE8d2490A635348F3A86Ba13b825';
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Opened the pack!');
  console.log(opened);
}

try {
  await main();
} catch (error) {
  console.error("Error opening the pack", error);
  process.exit(1);
}