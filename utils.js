// حفظ وقراءة من localStorage بدون ما الموقع يقع لو المتصفح منعه
export function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v === null ? fallback : JSON.parse(v);
  } catch {
    return fallback;
  }
}

export function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* تجاهل */
  }
}

function normChar(c) {
  if ("إأآٱ".includes(c)) return "ا";
  if (c === "ى") return "ي";
  if (c === "ة") return "ه";
  return c.toLowerCase();
}

// تطبيع النص العربي للبحث: بدون تشكيل وتوحيد الألف والياء والتاء المربوطة
// map: مكان كل حرف في النص الأصلي، عشان نقتطع جزء بتشكيله
export function normalizeMap(text) {
  let out = "";
  const map = [];
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (/[\u064B-\u065F\u0670\u0640]/.test(ch)) continue;
    out += normChar(ch);
    map.push(i);
  }
  return { out, map };
}

export function normalize(text) {
  return normalizeMap(text || "").out;
}
