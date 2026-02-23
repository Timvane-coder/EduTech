import { createCanvas, loadImage } from '@napi-rs/canvas';
import fs from 'fs';
import { AnatomySvgDiagrams } from './anatomy-data.js';

/**
 * Generic function to render a specific SVG string to a PNG file
 */
async function saveSvgToPng(svgString, outputFileName) {
  try {
    const svgBase64 = Buffer.from(svgString).toString('base64');
    const svgUrl = `data:image/svg+xml;base64,${svgBase64}`;

    const image = await loadImage(svgUrl);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(image, 0, 0);

    const pngData = await canvas.encode('png');
    fs.writeFileSync(outputFileName, pngData);
    
    console.log(`✅ Saved: ${outputFileName}`);
  } catch (err) {
    console.error(`❌ Failed to render ${outputFileName}:`, err.message);
  }
}

async function renderAllAnatomy() {
  console.log('Starting batch render...');

  // Define the tasks based on your Class static properties
  const tasks = [
    { svg: AnatomySvgDiagrams.heartsvg, name: 'heart-canvas.png' },
    { svg: AnatomySvgDiagrams.neuronsvg, name: 'neuron-canvas.png' },
    { svg: AnatomySvgDiagrams.cellsvg, name: 'cell-canvas.png' }
  ];

  // Run all renders in parallel
  await Promise.all(tasks.map(task => saveSvgToPng(task.svg, task.name)));

  console.log('✨ All anatomy diagrams rendered successfully!');
}

renderAllAnatomy();
