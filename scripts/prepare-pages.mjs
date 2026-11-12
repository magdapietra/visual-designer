import { copyFileSync, mkdirSync, writeFileSync } from 'node:fs';
for (const route of ['creatives', 'work/sleeknote-dashboard-builder']) {
  mkdirSync('dist/' + route, { recursive: true });
  copyFileSync('dist/index.html', 'dist/' + route + '/index.html');
}
writeFileSync('dist/.nojekyll', '');
console.log('Prepared homepage, Creatives, and case-study entry pages.');
