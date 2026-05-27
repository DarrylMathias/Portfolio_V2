const ipLastSubmit = new Map();

export function checkRateLimit(ip, minGap = 10000) {
  const now = Date.now();
  const last = ipLastSubmit.get(ip) || 0;

  if (now - last < minGap) {
    return false;
  }

  ipLastSubmit.set(ip, now);
  return true;
}
