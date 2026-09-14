import sharp from 'sharp';
import fs from 'fs';

const perfectNeoLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#000000" />
  <polygon points="206,106 406,106 306,256 406,256 306,406 106,406 206,256 106,256" fill="#ffffff" />
</svg>
`;

async function generate() {
  await fs.promises.writeFile('public/icon.svg', perfectNeoLogo);
  
  await sharp(Buffer.from(perfectNeoLogo))
    .resize(192, 192)
    .png()
    .toFile('public/pwa-192x192.png');
    
  await sharp(Buffer.from(perfectNeoLogo))
    .resize(512, 512)
    .png()
    .toFile('public/pwa-512x512.png');
    
  await sharp(Buffer.from(perfectNeoLogo))
    .resize(180, 180)
    .png()
    .toFile('public/apple-touch-icon.png');

  const maskableSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#000000" />
      <g transform="translate(64, 64) scale(0.75)">
        <polygon points="206,106 406,106 306,256 406,256 306,406 106,406 206,256 106,256" fill="#ffffff" />
      </g>
    </svg>
  `;

  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile('public/pwa-maskable-512x512.png');
    
  console.log("Icons updated perfectly with exact white logo.");
}

generate().catch(console.error);
