import sharp from 'sharp';
import fs from 'fs';

async function generate() {
  const input = 'public/neo-logo.png';
  
  if (!fs.existsSync(input)) {
    console.error("Input file not found: " + input);
    process.exit(1);
  }
  
  await sharp(input)
    .resize(192, 192)
    .png()
    .toFile('public/pwa-192x192.png');
    
  await sharp(input)
    .resize(512, 512)
    .png()
    .toFile('public/pwa-512x512.png');
    
  await sharp(input)
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  // Maskable usually has padding, but we'll just resize it
  await sharp(input)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
    .png()
    .toFile('public/pwa-maskable-512x512.png');
    
  // Favicon (svg might be preferred, but since they deleted it, maybe generate a small png or ico)
  await sharp(input)
    .resize(64, 64)
    .png()
    .toFile('public/favicon.png');

  console.log("Icons successfully generated from neo-logo.png");
}

generate().catch(console.error);
