// utils/manualSpam.js
import {
  FAKE_NAMES,
  FAKE_EMAIL_DOMAINS,
  PROBE_MESSAGES,
} from "./spam";

export function isManualSpam({ name, email, message }) {
  const n = name.toLowerCase().trim();
  const m = message.toLowerCase().trim();
  const e = email.toLowerCase().trim();

  if (FAKE_NAMES.includes(n)) return true;
  if (FAKE_EMAIL_DOMAINS.some(d => e.endsWith(d))) return true;
  if (PROBE_MESSAGES.includes(m)) return true;
  if (/(.)\1{5,}/.test(m)) return true;
  if (/^(qwerty|asdf|zxcv|1234)+$/i.test(m)) return true;

  return false;
}
