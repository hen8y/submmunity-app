import CryptoJS from 'crypto-js';

export function generateHex(username: string) {
  return CryptoJS.MD5(username).toString().slice(0, 6);
}
