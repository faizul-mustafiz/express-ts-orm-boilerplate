import { randomBytes } from 'crypto';
const accessToken = randomBytes(64).toString('hex');
const refreshToken = randomBytes(64).toString('hex');
console.table({
  accessToken,
  refreshToken,
});
