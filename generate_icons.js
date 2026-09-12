import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const iconSvg = path.join(process.cwd(), 'public', 'icon.svg');

async function generate() {
  await sharp(iconSvg).resize(192, 192).toFile('public/pwa-192x192.png');
  await sharp(iconSvg).resize(512, 512).toFile('public/pwa-512x512.png');
  await sharp(iconSvg).resize(512, 512).toFile('public/pwa-maskable-512x512.png');
  await sharp(iconSvg).resize(180, 180).toFile('public/apple-touch-icon.png');
}

generate().catch(console.error);
