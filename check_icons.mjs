
import * as icons from '@hugeicons/core-free-icons';
const eyeIcons = Object.keys(icons).filter(k => k.toLowerCase().includes('close') || k.toLowerCase().includes('cancel') || k.toLowerCase().includes('x'));
console.log(eyeIcons);
