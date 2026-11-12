import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
const base = process.env.PAGES_BASE_PATH || '/visual-designer/';
for (const route of ['', 'creatives/', 'work/sleeknote-dashboard-builder/']) {
  const html = readFileSync(`dist/${route}index.html`, 'utf8');
  assert(html.includes(`${base}assets/`), `Base path missing in ${route || 'homepage'}`);
  for (const [, url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!url.startsWith(base)) continue;
    assert(existsSync(path.join('dist', url.slice(base.length))), `Missing page asset: ${url}`);
  }
}
for (const manifest of ['ads.json', 'creatives.json']) {
  for (const item of JSON.parse(readFileSync(`src/${manifest}`, 'utf8'))) {
    for (const field of ['src', 'thumb']) {
      if (item[field]) assert(existsSync(path.join('dist', item[field].replace(/^\//, ''))), `Missing creative: ${item[field]}`);
    }
  }
}
for (const name of readdirSync('dist/assets').filter(name=>name.endsWith('.css'))) {
  const css=readFileSync(`dist/assets/${name}`,'utf8');
  for (const [, raw] of css.matchAll(/url\(([^)]+)\)/g)) {
    const url=raw.replace(/["']/g,'');
    if(url.startsWith(base)) assert(existsSync(path.join('dist',url.slice(base.length))), `Missing CSS asset: ${url}`);
  }
}
assert(existsSync('dist/.nojekyll'));
console.log('Verified all three entry pages, base paths, creative images, and font/CSS assets.');
