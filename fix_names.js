const fs = require('fs');
const path = require('path');

function processDir(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  for(let file of files) {
    let fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.lstatSync(fullPath);
    } catch (e) {
      continue;
    }
    if(stat.isDirectory()) {
      if(file !== 'node_modules' && file !== '.next' && file !== '.git') {
        processDir(fullPath);
      }
    } else if(fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Normalize both to NFC to ensure match, and also try some variations
      let normalizedContent = content.normalize('NFC');
      let found = false;
      
      if (normalizedContent.includes('Việt Anh') || normalizedContent.toLowerCase().includes('viet anh')) {
        let newContent = normalizedContent;
        newContent = newContent.replace(/Việt Anh/g, 'Vui Hùng');
        newContent = newContent.replace(/Đồ Cũ Việt Anh/gi, 'Đồ Cũ Vui Hùng');
        newContent = newContent.replace(/Đồ cũ Việt anh/gi, 'Đồ cũ Vui Hùng');
        newContent = newContent.replace(/Việt anh/g, 'Vui Hùng');
        
        if (normalizedContent !== newContent) {
           fs.writeFileSync(fullPath, newContent, 'utf8');
           console.log('Updated:', fullPath);
        }
      }
    }
  }
}

console.log("Starting advanced script...");
processDir('e:/My Website/DoCuVuiHung/pages');
processDir('e:/My Website/DoCuVuiHung/components');
console.log('Done!');
