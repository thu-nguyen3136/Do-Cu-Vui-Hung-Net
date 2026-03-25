const fs = require('fs');

function fixContrast(filepath) {
  let content = fs.readFileSync(filepath, 'utf8');
  if (filepath.endsWith('Footer.js')) {
    content = content.replace(/group-hover:text-\[#880d11\]/g, 'group-hover:text-brand-400');
    content = content.replace(/text-\[#880d11\] group-hover:text-white/g, 'text-brand-400 group-hover:text-white');
    content = content.replace(/bg-\[#710a0d\]\/20/g, 'bg-brand-600/20');
    content = content.replace(/group-hover:bg-\[#710a0d\]/g, 'group-hover:bg-brand-600');
    content = content.replace(/bg-\[#710a0d\] w-10/g, 'bg-brand-600 w-10');
    content = content.replace(/bg-\[#880d11\] w-10/g, 'bg-brand-500 w-10');
    content = content.replace(/bg-\[#880d11\] opacity-50/g, 'bg-brand-500 opacity-50');
    content = content.replace(/text-\[#710a0d\] font-bold/g, 'text-brand-400 font-bold');
  }
  if (filepath.endsWith('index.js')) {
    content = content.replace(/font-black text-\[#880d11\]">5 Phút/g, 'font-black text-brand-500">5 Phút');
  }
  fs.writeFileSync(filepath, content, 'utf8');
}

fixContrast('e:/My Website/DoCuVuiHung/components/Footer.js');
fixContrast('e:/My Website/DoCuVuiHung/pages/index.js');
console.log('Fixed OK');
