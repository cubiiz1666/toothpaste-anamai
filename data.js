// ================================================================
// ข้อมูลยาสีฟันฟลูออไรด์ ≥1400 ppm ในท้องตลาดประเทศไทย
// แหล่งข้อมูล: กองทันตสาธารณสุข กรมอนามัย / ฉลากผลิตภัณฑ์
// ปรับปรุง พ.ศ. 2568
// ================================================================

const PRODUCTS = [

  // ─── SYSTEMA ───
  {
    brand: "ยาสีฟันซิสเท็มมา",
    name: "รุ่น Ultra Care&Protect ไอซี่ มินต์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://placehold.co/300x170/E0F7FA/00695C?text=SYSTEMA%0AIcy+Mint",
    imageAlt: "Systema Icy Mint"
  },
  {
    brand: "ยาสีฟันซิสเท็มมา",
    name: "รุ่น Ultra Care&Protect สปริง มินต์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://placehold.co/300x170/E0F7FA/00695C?text=SYSTEMA%0ASpring+Mint",
    imageAlt: "Systema Spring Mint"
  },
  {
    brand: "ยาสีฟันซิสเท็มมา",
    name: "รุ่น Ultra Care&Protect เชอร์รี่ บลอสซัม",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://placehold.co/300x170/FCE4EC/880E4F?text=SYSTEMA%0ACherry+Blossom",
    imageAlt: "Systema Cherry Blossom"
  },
  {
    brand: "ยาสีฟันซิสเท็มมา",
    name: "รุ่น Ultra Care&Protect แบกที่ คูล",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://placehold.co/300x170/E0F7FA/00695C?text=SYSTEMA%0ABakti+Cool",
    imageAlt: "Systema Bakti Cool"
  },
  {
    brand: "ยาสีฟันซิสเท็มมา",
    name: "รุ่น Sensitive Pro-relief มินต์",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://placehold.co/300x170/E8EAF6/283593?text=SYSTEMA%0ASensitive",
    imageAlt: "Systema Sensitive"
  },

  // ─── SALZ ───
  {
    brand: "ยาสีฟันซอลส์",
    name: "รุ่น คิง เฮิร์บ",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "สมุนไพรธรรมชาติ", "ดูแลสุขภาพเหงือก"],
    image: "https://placehold.co/300x170/E8F5E9/1B5E20?text=SALZ%0AKing+Herb",
    imageAlt: "Salz King Herb"
  },
  {
    brand: "ยาสีฟันซอลส์",
    name: "รุ่น แซลต์ ไวท์เทนนิ่ง",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้น", "ลดคราบสีฟัน", "ป้องกันฟันผุ", "ลดกลิ่นปาก"],
    image: "https://placehold.co/300x170/FFF9C4/F57F17?text=SALZ%0AWhitening",
    imageAlt: "Salz Whitening"
  },
  {
    brand: "ยาสีฟันซอลส์",
    name: "รุ่น เซนสิทีฟ ซอลต์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "เกลือธรรมชาติ"],
    image: "https://placehold.co/300x170/E3F2FD/0D47A1?text=SALZ%0ASensitive",
    imageAlt: "Salz Sensitive"
  },

  // ─── DENTISTE ───
  {
    brand: "ยาสีฟันเดนทิสเต้",
    name: "รุ่น ยาสีฟันแปรงแห้งสำหรับเด็ก กลิ่นมิกซ์ ฟรุต",
    fluoride: 1500,
    age: "6 ปีขึ้นไป",
    props: ["ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ", "เหมาะสำหรับเด็ก"],
    image: "https://placehold.co/300x170/F3E5F5/4A148C?text=Dentiste%0AKids+Fruit",
    imageAlt: "Dentiste Kids"
  },
  {
    brand: "ยาสีฟันเดนทิสเต้",
    name: "รุ่น Original สูตรกลางคืน",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดกลิ่นปาก", "ป้องกันฟันผุ", "ดูแลเหงือก", "สูตรใช้กลางคืน"],
    image: "https://placehold.co/300x170/EDE7F6/311B92?text=Dentiste%0ANight",
    imageAlt: "Dentiste Night"
  },
  {
    brand: "ยาสีฟันเดนทิสเต้",
    name: "รุ่น Whitening Plus",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้น", "ลดกลิ่นปาก", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/E8EAF6/1A237E?text=Dentiste%0AWhitening",
    imageAlt: "Dentiste Whitening"
  },

  // ─── COLGATE ───
  {
    brand: "ยาสีฟันคอลเกต",
    name: "รุ่น Total Pro-Gum Health",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลเหงือก 12 ชั่วโมง", "ลดแบคทีเรีย", "ลดกลิ่นปาก"],
    image: "https://placehold.co/300x170/FFF3E0/E65100?text=Colgate%0ATotal+Pro",
    imageAlt: "Colgate Total Pro"
  },
  {
    brand: "ยาสีฟันคอลเกต",
    name: "รุ่น Sensitive Pro-Relief",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟันทันที", "ป้องกันฟันผุ", "ดูแลเนื้อฟัน"],
    image: "https://placehold.co/300x170/FFF3E0/BF360C?text=Colgate%0ASensitive",
    imageAlt: "Colgate Sensitive"
  },
  {
    brand: "ยาสีฟันคอลเกต",
    name: "รุ่น Max White Expert White",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้นใน 7 วัน", "ลดคราบสี", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/FFF3E0/E65100?text=Colgate%0AMax+White",
    imageAlt: "Colgate Max White"
  },

  // ─── ORAL-B ───
  {
    brand: "ยาสีฟันโอรัล-บี",
    name: "รุ่น Pro-Expert Professional Protection",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ 7 ประการ", "ลดคราบหินปูน", "ดูแลเหงือก", "ลดกลิ่นปาก"],
    image: "https://placehold.co/300x170/E3F2FD/0D47A1?text=Oral-B%0APro-Expert",
    imageAlt: "Oral-B Pro-Expert"
  },
  {
    brand: "ยาสีฟันโอรัล-บี",
    name: "รุ่น 3D White Luxe Glamorous White",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ขจัดคราบสีฟัน", "ฟันขาวขึ้น", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/E8EAF6/1565C0?text=Oral-B%0A3D+White",
    imageAlt: "Oral-B 3D White"
  },

  // ─── SENSODYNE ───
  {
    brand: "ยาสีฟันเซนโซดายน์",
    name: "รุ่น Rapid Relief",
    fluoride: 1400,
    age: "ไม่ระบุ",
    props: ["บรรเทาเสียวฟันได้เร็วใน 60 วินาที", "ป้องกันฟันผุ", "ดูแลเนื้อฟัน"],
    image: "https://placehold.co/300x170/E3F2FD/0D47A1?text=Sensodyne%0ARapid+Relief",
    imageAlt: "Sensodyne Rapid Relief"
  },
  {
    brand: "ยาสีฟันเซนโซดายน์",
    name: "รุ่น Repair & Protect",
    fluoride: 1426,
    age: "ไม่ระบุ",
    props: ["ซ่อมแซมเนื้อฟันที่บอบบาง", "ลดอาการเสียวฟัน", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/E8F5E9/1B5E20?text=Sensodyne%0ARepair",
    imageAlt: "Sensodyne Repair"
  },
  {
    brand: "ยาสีฟันเซนโซดายน์",
    name: "รุ่น True White",
    fluoride: 1400,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้น", "ลดอาการเสียวฟัน", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/F3E5F5/4A148C?text=Sensodyne%0ATrue+White",
    imageAlt: "Sensodyne True White"
  },

  // ─── CREST ───
  {
    brand: "ยาสีฟันเครสต์",
    name: "รุ่น 3D White Brilliance",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ขจัดคราบสี 95%", "ฟันขาวขึ้น", "ป้องกันฟันผุ", "ลดแบคทีเรีย"],
    image: "https://placehold.co/300x170/E3F2FD/1565C0?text=Crest%0A3D+White",
    imageAlt: "Crest 3D White"
  },
  {
    brand: "ยาสีฟันเครสต์",
    name: "รุ่น Pro-Health Advanced",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกัน 7 ปัญหาช่องปาก", "ดูแลเหงือก", "ลดคราบหินปูน"],
    image: "https://placehold.co/300x170/E8EAF6/283593?text=Crest%0APro-Health",
    imageAlt: "Crest Pro-Health"
  },

  // ─── GLISTER (Amway) ───
  {
    brand: "ยาสีฟันกลิสเตอร์",
    name: "รุ่น Multi-Action",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ฟันขาวขึ้น", "ลดคราบ", "ดูแลเหงือก"],
    image: "https://placehold.co/300x170/E8F5E9/2E7D32?text=Glister%0AMulti-Action",
    imageAlt: "Glister Multi-Action"
  },

  // ─── DARLIE ───
  {
    brand: "ยาสีฟันดาร์ลี่",
    name: "รุ่น Double Action Expert White",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้น", "ป้องกันฟันผุ", "ลดกลิ่นปาก", "ลดคราบสีฟัน"],
    image: "https://placehold.co/300x170/E0F7FA/006064?text=Darlie%0AExpert+White",
    imageAlt: "Darlie Expert White"
  },
  {
    brand: "ยาสีฟันดาร์ลี่",
    name: "รุ่น All Shiny White Extra Whitening",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้น", "ป้องกันฟันผุ", "เคลือบป้องกันคราบ"],
    image: "https://placehold.co/300x170/FFF9C4/F57F17?text=Darlie%0AAll+Shiny",
    imageAlt: "Darlie All Shiny"
  },
  {
    brand: "ยาสีฟันดาร์ลี่",
    name: "รุ่น Herb Total Care",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["สมุนไพร 7 ชนิด", "ป้องกันฟันผุ", "ดูแลเหงือก"],
    image: "https://placehold.co/300x170/E8F5E9/1B5E20?text=Darlie%0AHerb+Care",
    imageAlt: "Darlie Herb"
  },

  // ─── GC Tooth Mousse / MI Paste ───
  {
    brand: "ยาสีฟัน GC Tooth Mousse Plus",
    name: "สูตรมีฟลูออไรด์ (สำหรับผู้ใหญ่)",
    fluoride: 900,
    age: "ผู้ใหญ่",
    props: ["เสริมแร่ธาตุแคลเซียม-ฟอสเฟต", "ลดอาการเสียวฟัน", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/FFF9C4/E65100?text=GC+Tooth%0AMousse+Plus",
    imageAlt: "GC Tooth Mousse Plus",
    note: "* ฟลูออไรด์ < 1400 ppm (แสดงเพื่อเปรียบเทียบ)"
  },

  // ─── Elmex ───
  {
    brand: "ยาสีฟัน Elmex",
    name: "รุ่น Anti-Caries Professional",
    fluoride: 1400,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "เสริมความแข็งแรงของเนื้อฟัน", "ลดการกัดกร่อน"],
    image: "https://placehold.co/300x170/FFF3E0/BF360C?text=Elmex%0AAnti-Caries",
    imageAlt: "Elmex Anti-Caries"
  },
  {
    brand: "ยาสีฟัน Elmex",
    name: "รุ่น Sensitive Professional",
    fluoride: 1400,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "เสริมเนื้อฟัน"],
    image: "https://placehold.co/300x170/E8EAF6/283593?text=Elmex%0ASensitive",
    imageAlt: "Elmex Sensitive"
  },

  // ─── Parodontax ───
  {
    brand: "ยาสีฟัน Parodontax",
    name: "รุ่น Extra Fresh Daily",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดเลือดออกตามไรฟัน", "ป้องกันฟันผุ", "ดูแลเหงือกอ่อนแอ"],
    image: "https://placehold.co/300x170/FCE4EC/880E4F?text=Parodontax%0AExtra+Fresh",
    imageAlt: "Parodontax Extra Fresh"
  },
  {
    brand: "ยาสีฟัน Parodontax",
    name: "รุ่น Whitening Daily",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดเลือดออกตามไรฟัน", "ฟันขาวขึ้น", "ดูแลเหงือก"],
    image: "https://placehold.co/300x170/FCE4EC/880E4F?text=Parodontax%0AWhitening",
    imageAlt: "Parodontax Whitening"
  },

  // ─── Ecodenta ───
  {
    brand: "ยาสีฟัน Ecodenta",
    name: "รุ่น Extra Whitening",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้น", "ส่วนผสมออร์แกนิก", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/E8F5E9/1B5E20?text=Ecodenta%0AWhitening",
    imageAlt: "Ecodenta"
  },

  // ─── Arm & Hammer ───
  {
    brand: "ยาสีฟัน Arm & Hammer",
    name: "รุ่น Advance White Extreme Whitening",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["เบกกิ้งโซดาขัดคราบ", "ฟันขาวขึ้น", "ป้องกันฟันผุ", "ลดกลิ่นปาก"],
    image: "https://placehold.co/300x170/E3F2FD/0D47A1?text=Arm+%26+Hammer%0AWhitening",
    imageAlt: "Arm & Hammer"
  },

  // ─── Aquafresh ───
  {
    brand: "ยาสีฟัน Aquafresh",
    name: "รุ่น Extreme Clean Whitening",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["สามแถบสี 3 สูตร", "ลดคราบสี", "ป้องกันฟันผุ", "ลมหายใจสดชื่น"],
    image: "https://placehold.co/300x170/E0F7FA/006064?text=Aquafresh%0AExtreme+Clean",
    imageAlt: "Aquafresh"
  },

  // ─── Signal ───
  {
    brand: "ยาสีฟัน Signal",
    name: "รุ่น White Now Gold",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ฟันขาวขึ้นทันทีที่แปรง", "ป้องกันฟันผุ", "ลดคราบ"],
    image: "https://placehold.co/300x170/FFF9C4/F57F17?text=Signal%0AWhite+Now",
    imageAlt: "Signal White Now"
  },

  // ─── Pearlie White ───
  {
    brand: "ยาสีฟัน Pearlie White",
    name: "รุ่น BioMin Sensitive",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["BioMin เสริมแร่ธาตุ", "ลดเสียวฟัน", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/F3E5F5/4A148C?text=Pearlie+White%0ABioMin",
    imageAlt: "Pearlie White BioMin"
  },

  // ─── นาโน เซ็นส์ (ไทย) ───
  {
    brand: "ยาสีฟัน Nano Sense",
    name: "รุ่น ฟลูออไรด์ ไวท์เทนนิ่ง",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["อนุภาคนาโนขจัดคราบ", "ป้องกันฟันผุ", "ดูแลเหงือก"],
    image: "https://placehold.co/300x170/E0F7FA/00695C?text=Nano+Sense%0AWhitening",
    imageAlt: "Nano Sense"
  },

  // ─── Closeup ───
  {
    brand: "ยาสีฟัน Close Up",
    name: "รุ่น Icy White",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลมหายใจสดชื่น", "ฟันขาวขึ้น", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/E3F2FD/1565C0?text=Close+Up%0AIcy+White",
    imageAlt: "Close Up Icy White"
  },

  // ─── Kodomo (เด็ก) ───
  {
    brand: "ยาสีฟันโคโดโม",
    name: "รุ่น สตรอว์เบอร์รี่ สำหรับเด็ก",
    fluoride: 1450,
    age: "6 ปีขึ้นไป",
    props: ["ป้องกันฟันผุในเด็ก", "รสชาติถูกใจเด็ก", "ดูแลฟันน้ำนม-ฟันแท้"],
    image: "https://placehold.co/300x170/FCE4EC/880E4F?text=Kodomo%0AStrawberry",
    imageAlt: "Kodomo Strawberry"
  },
  {
    brand: "ยาสีฟันโคโดโม",
    name: "รุ่น ส้ม สำหรับเด็ก",
    fluoride: 1450,
    age: "6 ปีขึ้นไป",
    props: ["ป้องกันฟันผุในเด็ก", "รสชาติถูกใจเด็ก", "สูตรอ่อนโยน"],
    image: "https://placehold.co/300x170/FFF9C4/E65100?text=Kodomo%0AOrange",
    imageAlt: "Kodomo Orange"
  },

  // ─── Twin Lotus ───
  {
    brand: "ยาสีฟันทวินโลตัส",
    name: "รุ่น Original Herbal",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["สมุนไพรไทย", "ป้องกันฟันผุ", "ดูแลเหงือก", "ลดกลิ่นปาก"],
    image: "https://placehold.co/300x170/E8F5E9/1B5E20?text=Twin+Lotus%0AHerbal",
    imageAlt: "Twin Lotus Herbal"
  },
  {
    brand: "ยาสีฟันทวินโลตัส",
    name: "รุ่น Clove & Neem",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["กานพลู+สะเดา", "ป้องกันฟันผุ", "ลดการอักเสบของเหงือก"],
    image: "https://placehold.co/300x170/E8F5E9/2E7D32?text=Twin+Lotus%0AClove+Neem",
    imageAlt: "Twin Lotus Clove Neem"
  },

  // ─── Lion (Thailand) ───
  {
    brand: "ยาสีฟัน Lion Ora2",
    name: "รุ่น Stain Clear Crystal",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ขจัดคราบสีฟัน", "ฟันขาวขึ้น", "ป้องกันฟันผุ", "ลดกลิ่นปาก"],
    image: "https://placehold.co/300x170/E8EAF6/1A237E?text=Ora2%0AStain+Clear",
    imageAlt: "Ora2 Stain Clear"
  },
  {
    brand: "ยาสีฟัน Lion Ora2",
    name: "รุ่น Me Intensive Stain Clear",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ขจัดคราบเข้มข้น", "ฟันขาวขึ้น", "ป้องกันฟันผุ"],
    image: "https://placehold.co/300x170/E8EAF6/283593?text=Ora2+Me%0AIntensive",
    imageAlt: "Ora2 Me"
  },

  // ─── Enamel Pro / DenTek ───
  {
    brand: "ยาสีฟัน Pronamel",
    name: "รุ่น Intensive Enamel Repair",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ซ่อมแซมผิวเคลือบฟัน", "ป้องกันฟันผุ", "ลดการกัดกร่อนจากกรด"],
    image: "https://placehold.co/300x170/FFF3E0/E65100?text=Pronamel%0ARepair",
    imageAlt: "Pronamel Repair"
  },

];
