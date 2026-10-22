# النفحة النورانية (React + Vite)

المشروع يشتغل على أي استضافة (GitHub Pages أو Vercel أو غيرهم) بدون تعديل.

## التشغيل على جهازك
```
npm install
npm run dev
```
افتح الرابط اللي يظهر (غالباً http://localhost:5173).

## المحتوى
- نص الكتاب: `src/data/sections.json` (استبدل الأقسام التجريبية بنصك الكامل، كل فقرة في سطر `\n`).
- صور المشايخ: ضعها في `public/images` بالأسماء `hanafy.jpg` و `hamed.jpg` و `ameer.jpg` و `khaled.jpg`.

## الرفع على GitHub ثم النشر على GitHub Pages
1. اعمل ريبو جديد على GitHub، وارفع كل ملفات المشروع (بدون `node_modules` ولا `dist`، وهما في `.gitignore`).
   تأكد إن الفرع اسمه `main`.
2. من الريبو: Settings ← Pages ← في Source اختر **GitHub Actions**.
3. أي Push بعد كده بينشر الموقع تلقائياً، والرابط بيظهر في Settings ← Pages
   (شكله: `https://USERNAME.github.io/REPO/`).

## النشر على Vercel (اختياري)
Add New ← Project ← اختر الريبو ← Deploy. الإعدادات بتتعرف تلقائياً (Vite).

## تجربة نسخة الإنتاج محلياً
```
npm run build
npm run preview
```
