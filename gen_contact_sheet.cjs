const fs = require('fs');
const sharp = require('sharp');
const path = require('path');

async function createContactSheet() {
  const photosDir = './client-photos';
  const files = fs.readdirSync(photosDir).filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
  
  const cols = 10;
  const thumbW = 300;
  const thumbH = 400;
  const colSpacing = 320;
  const rowSpacing = 450;
  const rows = Math.ceil(files.length / cols);
  
  const width = cols * colSpacing;
  const height = rows * rowSpacing;
  
  const composites = [];
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const x = (i % cols) * colSpacing;
    const y = Math.floor(i / cols) * rowSpacing;
    
    // Resize image
    const imgPath = path.join(photosDir, file);
    const thumbBuffer = await sharp(imgPath).resize(thumbW, thumbH, { fit: 'contain', background: {r: 0, g: 0, b: 0, alpha: 1} }).toBuffer();
    
    composites.push({
      input: thumbBuffer,
      top: y,
      left: x
    });
    
    // Add text label as SVG
    const svgText = `
      <svg width="${thumbW}" height="40">
        <rect x="0" y="0" width="${thumbW}" height="40" fill="black" />
        <text x="5" y="25" font-family="sans-serif" font-size="14" fill="white">${file}</text>
      </svg>
    `;
    composites.push({
      input: Buffer.from(svgText),
      top: y + thumbH,
      left: x
    });
  }
  
  await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 }
    }
  })
  .composite(composites)
  .toFile('contact_sheet.jpg');
  console.log('contact_sheet.jpg created successfully.');
}

createContactSheet().catch(console.error);
