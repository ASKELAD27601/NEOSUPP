import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#000000" />
  <!-- Abstract Geometric 'N' - Neo Brutalist -->
  <g fill="#c3f400" transform="translate(60, 106)">
    <!-- Left Triangle/Shape -->
    <polygon points="0,300 140,300 220,160 80,160" />
    <!-- Top Shape -->
    <polygon points="140,0 280,0 200,140 60,140" />
    <!-- Right Shape -->
    <polygon points="280,300 392,300 252,50 140,50" />
  </g>
</svg>
`;

const svgMaskable = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#c3f400" />
  <!-- Abstract Geometric 'N' - Neo Brutalist - inverted for maskable -->
  <g fill="#000000" transform="translate(106, 106) scale(0.75)">
    <!-- Left Triangle/Shape -->
    <polygon points="0,300 140,300 220,160 80,160" />
    <!-- Top Shape -->
    <polygon points="140,0 280,0 200,140 60,140" />
    <!-- Right Shape -->
    <polygon points="280,300 392,300 252,50 140,50" />
  </g>
</svg>
`;

const newLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#111111" />
  <g fill="#c3f400">
    <!-- Top parallelogram -->
    <polygon points="200,120 400,120 300,300 100,300" />
    <!-- Bottom left triangle -->
    <polygon points="100,400 300,400 200,220" />
    <!-- Right triangle -->
    <polygon points="300,120 500,120 400,300" />
  </g>
</svg>
`;

const perfectLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#111111" />
  <g fill="#c3f400" transform="translate(60, 106)">
    <!-- Approximating the triangles from the user's image -->
    <!-- Triangle 1 (Left pointing up-right) -->
    <polygon points="0,150 150,0 150,300" />
    <!-- Triangle 2 (Right pointing down-left) -->
    <polygon points="392,150 242,300 242,0" />
    <!-- Center connector (Triangle pointing down) -->
    <polygon points="150,0 242,0 196,150" />
    <!-- Center connector 2 (Triangle pointing up) -->
    <polygon points="150,300 242,300 196,150" />
  </g>
</svg>
`;

const userImageApproximation = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#181818" />
  
  <g fill="#c3f400" transform="translate(56, 120)">
    <!-- Based closely on the image provided: -->
    <!-- Left Polygon (Parallelogram leaning right) -->
    <polygon points="0,180 120,180 200,60 80,60" />
    
    <!-- Top Polygon (Parallelogram leaning left) -->
    <polygon points="200,0 320,0 240,120 120,120" />
    
    <!-- Right Triangle (pointing left) -->
    <polygon points="280,260 400,260 340,140" />
    
    <!-- Bottom Triangle (pointing right) -->
    <polygon points="120,260 240,260 180,140" />
  </g>
</svg>
`;

const actualUserLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#181818" />
  <g fill="#c3f400" transform="translate(40, 100)">
    <!-- Top Parallelogram -->
    <polygon points="150,0 350,0 250,150 50,150" />
    <!-- Bottom Left Parallelogram -->
    <polygon points="50,150 150,300 350,300 250,150" />
    <!-- Right Triangle -->
    <polygon points="250,150 450,150 350,300" />
  </g>
</svg>
`;

const veryCloseLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#181818" />
  <g fill="#c3f400" transform="translate(60, 126)">
    <!-- The logo in the image is a large hexagon with two triangles removed. -->
    <!-- Or more simply: 3 overlapping triangles forming a stylized N/V shape. -->
    
    <!-- Left triangle pointing right -->
    <polygon points="0,0 180,0 90,130" />
    
    <!-- Right triangle pointing left -->
    <polygon points="220,260 400,260 310,130" />
    
    <!-- Top Parallelogram -->
    <polygon points="110,-50 290,-50 200,80 20,80" />
  </g>
</svg>
`;

const finalLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="512" height="512" fill="#181818" />
  
  <g fill="#c3f400" transform="translate(46, 126)">
    <!-- Left Triangle -->
    <polygon points="0,0 160,0 80,120" />
    <!-- Bottom Left Parallelogram -->
    <polygon points="80,120 240,120 160,240 0,240" />
    <!-- Top Right Parallelogram -->
    <polygon points="180,-20 340,-20 260,100 100,100" />
    <!-- Right Triangle -->
    <polygon points="260,100 420,100 340,220" />
  </g>
</svg>
`;

const userImageExact = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#1f1f1f" />
  <g fill="#a1c935" transform="translate(41, 106)">
    <!-- Top Right Parallelogram -->
    <polygon points="140,0 330,0 245,150 55,150" />
    <!-- Bottom Parallelogram (Left to Right) -->
    <polygon points="55,150 140,300 330,300 245,150" />
    <!-- Right Triangle -->
    <polygon points="245,150 435,150 340,300" />
  </g>
</svg>
`;

const brutalistLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#111111" />
  
  <g fill="#c3f400" transform="translate(60, 106)">
    <!-- Top shape -->
    <polygon points="120,0 300,0 210,140 30,140" />
    <!-- Bottom shape -->
    <polygon points="120,300 300,300 210,160 30,160" />
    <!-- Right triangle -->
    <polygon points="240,140 380,140 310,280" />
  </g>
</svg>
`;

const exactImageMatch = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#181818" />
  <g fill="#c3f400" transform="translate(256, 256)">
    <!-- To match the uploaded image perfectly:
         It has three distinct polygons.
         1. Top parallelogram
         2. Bottom left triangle? Or parallelogram?
         3. Right triangle
    -->
    <polygon points="-120,-120 80,-120 0,20 -200,20" />
    <polygon points="-200,20 -100,160 100,160 0,20" />
    <polygon points="20,20 220,20 120,160" />
  </g>
</svg>
`;

// Let's refine exactImageMatch based on the real image visually.
// - The top shape is a parallelogram leaning left (bottom is further left than top).
// - The bottom shape is a parallelogram leaning right.
// - The right shape is a triangle.

const perfectNeoLogo = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#111111" />
  
  <!-- Add a brutalist border to the icon itself if maskable, but for standard icon keep it clean -->
  <g fill="#c3f400" transform="translate(56, 126)">
    <!-- Top Parallelogram (Slanted down to left) -->
    <polygon points="160,0 360,0 260,130 60,130" />
    
    <!-- Bottom Parallelogram (Slanted down to right) -->
    <polygon points="60,130 160,260 360,260 260,130" />
    
    <!-- Right Triangle (Pointing down) -->
    <polygon points="280,130 480,130 380,260" />
  </g>
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

  // Maskable icon typically has more padding
  const maskableSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#c3f400" />
      <g fill="#111111" transform="translate(106, 156) scale(0.75)">
        <polygon points="160,0 360,0 260,130 60,130" />
        <polygon points="60,130 160,260 360,260 260,130" />
        <polygon points="280,130 480,130 380,260" />
      </g>
    </svg>
  `;

  await sharp(Buffer.from(maskableSvg))
    .resize(512, 512)
    .png()
    .toFile('public/pwa-maskable-512x512.png');
    
  console.log("Icons generated successfully.");
}

generate().catch(console.error);
