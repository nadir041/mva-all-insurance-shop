const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ZIP_RE = /^\d{5}(-\d{4})?$/;

function isValidDob(value) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
  if (!m) return false;
  const [month, day, year] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const date = new Date(year, month - 1, day);
  const valid = date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
  return valid && year >= 1900 && date < new Date();
}

function phoneDigits(value) {
  const digits = value.replace(/\D/g, '');
  return digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
}

const rules = {
  email: (v) => EMAIL_RE.test(v),
  zip: (v) => ZIP_RE.test(v),
  dob: isValidDob,
  phone: (v) => phoneDigits(v).length === 10,
};

/** Returns the field's error message, or '' when valid. */
export function validateField(field, value) {
  const v = typeof value === 'string' ? value.trim() : value;
  if (!v) return field.error;
  if (field.validate && !rules[field.validate](v)) return field.error;
  return '';
}

/** Formats digits as MM/DD/YYYY while typing. */
export function formatDate(value) {
  const d = value.replace(/\D/g, '').slice(0, 8);
  if (d.length > 4) return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
  if (d.length > 2) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return d;
}
