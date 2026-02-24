import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderToWatch = __dirname;
const outputFileName = 'anatomy-data.js';

function rebuildAnatomyData() {
  try {
    const files = fs.readdirSync(folderToWatch).filter(file => file.endsWith('.svg'));
    
    let classProperties = '';
    const classNames = [];

    files.forEach(file => {
      // Formats 'heart.svg' to 'heartsvg'
      const varName = file.replace('.svg', 'svg').toLowerCase();
      // Read and escape backticks to prevent breaking the JS string
      const svgContent = fs.readFileSync(path.join(folderToWatch, file), 'utf8')
        .replace(/`/g, '\\`');
      
      // Add as a static property to the class
      classProperties += `  static ${varName} = \`${svgContent}\`;\n\n`;
      classNames.push(varName);
    });

    // Construct the Class string
    const classScript = `class AnatomySvgDiagrams {\n${classProperties}}\n\nexport { AnatomySvgDiagrams };`;
    
    fs.writeFileSync(path.join(folderToWatch, outputFileName), classScript);
    
    console.log(`[${new Date().toLocaleTimeString()}] Rebuilt Class in ${outputFileName} (${files.length} SVGs)`);
  } catch (err) {
    console.error('Build error:', err.message);
  }
}

rebuildAnatomyData();

fs.watch(folderToWatch, (eventType, filename) => {
  if (filename && filename.endsWith('.svg')) {
    rebuildAnatomyData();
  }
});
