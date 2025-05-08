import fs from "node:fs";
import sharp from "sharp";
import { sharpsToIco } from "sharp-ico";

// Configuration
const inputPath = "public/favicon.svg";
const outputDir = "public";

async function generateFavicons() {
  fs.mkdirSync(outputDir, { recursive: true });

  // Get the SVG logo
  const svgBuffer = fs.readFileSync(inputPath);

  // PNG icons
  await sharp(svgBuffer)
    .resize(192, 192)
    .toFile(`${outputDir}/icon-192x192.png`);
  await sharp(svgBuffer)
    .resize(512, 512)
    .toFile(`${outputDir}/icon-512x512.png`);
  await sharp(svgBuffer)
    .resize(180, 180)
    .toFile(`${outputDir}/apple-touch-icon.png`);

  // ICO icon
  const iconSharp = sharp(svgBuffer);
  await sharpsToIco([iconSharp], `${outputDir}/favicon.ico`, { sizes: [32] });

  console.log("All favicons generated.");
}

generateFavicons();
