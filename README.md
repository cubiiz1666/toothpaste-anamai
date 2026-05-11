# 🦷 ยาสีฟันฟลูออไรด์ ≥1400 ppm — กรมอนามัย

เว็บไซต์แสดงรายชื่อยาสีฟันที่มีปริมาณฟลูออไรด์ ≥1400 ppm ที่กรมอนามัยแนะนำ

## 📁 โครงสร้างไฟล์

```
toothpaste-anamai/
├── index.html      ← โครงสร้างหน้าเว็บ
├── style.css       ← ดีไซน์ / สีสรร
├── data.js         ← ข้อมูลยาสีฟันทั้งหมด ← แก้ไขที่นี่
├── app.js          ← ตรรกะการกรองและเรียงลำดับ
├── netlify.toml    ← ตั้งค่า Netlify
└── README.md
```

## 🚀 วิธี Deploy บน Netlify จาก GitHub

### 1. สร้าง GitHub Repository

```bash
git init
git add .
git commit -m "init: ยาสีฟันฟลูออไรด์ กรมอนามัย"
git remote add origin https://github.com/<your-org>/toothpaste-anamai.git
git push -u origin main
```

### 2. เชื่อม Netlify กับ GitHub

1. ไปที่ [app.netlify.com](https://app.netlify.com)
2. กด **"Add new site"** → **"Import an existing project"**
3. เลือก **GitHub** → เลือก repo ที่สร้างไว้
4. ตั้งค่า Build:
   - **Branch:** `main`
   - **Build command:** _(เว้นว่าง)_
   - **Publish directory:** `.`
5. กด **"Deploy site"**

### 3. (ทางเลือก) ตั้ง Custom Domain

ไปที่ Netlify → Site settings → Domain management → Add custom domain

---

## ✏️ วิธีอัพเดทข้อมูลยาสีฟัน

แก้ไขไฟล์ `data.js` เพิ่ม object ใหม่ในอาร์เรย์ `PRODUCTS`:

```js
{
  brand: "ยาสีฟัน...",          // ชื่อยี่ห้อ (ภาษาไทย)
  name: "รุ่น...",              // ชื่อรุ่น
  fluoride: 1500,               // ปริมาณฟลูออไรด์ (ppm)
  age: "ไม่ระบุ",              // กลุ่มอายุที่แนะนำ
  props: [                      // สรรพคุณ (2-4 ข้อ)
    "ป้องกันฟันผุ",
    "ดูแลเหงือก"
  ],
  image: "URL รูปภาพ",          // ใส่ URL รูปยาสีฟัน
  imageAlt: "ชื่อรูป"
}
```

จากนั้น `git push` ไปที่ GitHub — Netlify จะ deploy ให้อัตโนมัติ

---

## 📌 หมายเหตุ

- ข้อมูลอ้างอิงจาก **กองทันตสาธารณสุข กรมอนามัย กระทรวงสาธารณสุข**
- แสดงเฉพาะยาสีฟันที่มีฟลูออไรด์ **≥1400 ppm**
- ปรับปรุงข้อมูล พ.ศ. 2568
