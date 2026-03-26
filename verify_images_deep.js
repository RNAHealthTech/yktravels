
import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/packages.ts', 'utf8');
const matches = [...content.matchAll(/src:\s*["']([^"']+)["']/g)];

if (!matches || matches.length === 0) {
  fs.writeFileSync('missing_images.txt', 'No image paths found.');
  process.exit(0);
}

const paths = matches.map(m => m[1]);
const uniquePaths = [...new Set(paths)];

const cwd = process.cwd();
const missing = [];

uniquePaths.forEach(p => {
  if (p.startsWith('http') || p.startsWith('https://')) return;
  
  const relativePath = p.startsWith('/') ? p.substring(1) : p;
  const fullPath = path.resolve(cwd, 'relativePath'.startsWith('public') ? relativePath : path.join('public', relativePath));
  
  // Actually, common sense: check if it's in public/ or just relative to public
  let checkPath = path.resolve(cwd, 'public', relativePath);
  if (!fs.existsSync(checkPath)) {
      missing.push(p);
  }
});

fs.writeFileSync('missing_images.txt', missing.join('\n'));
console.log(`Found ${missing.length} missing images.`);
