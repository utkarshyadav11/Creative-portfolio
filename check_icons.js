
const icons = require('@hugeicons/core-free-icons');
const eyeIcons = Object.keys(icons).filter(k => k.toLowerCase().includes('eye') || k.toLowerCase().includes('view'));
console.log(eyeIcons);
