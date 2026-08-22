const fs = require('fs');
const files = fs.readdirSync('./client-photos').filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg'));
let html = '<html><body style="display:flex;flex-wrap:wrap;background:#333;color:#fff;">';
for (const f of files) {
  html += `<div style="margin:10px;text-align:center;"><img src="client-photos/${f}" height="200" loading="lazy"/><br/>${f}</div>`;
}
html += '</body></html>';
fs.writeFileSync('gallery_preview.html', html);
