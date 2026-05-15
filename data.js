// ================================================================
// ข้อมูลยาสีฟันฟลูออไรด์ ≥1400 ppm ในท้องตลาดประเทศไทย
// แหล่งข้อมูล: กองทันตสาธารณสุข กรมอนามัย กระทรวงสาธารณสุข
// ปรับปรุง พ.ศ. 2568 | รวม 74 รายการ
// ================================================================

const PRODUCTS = [

  // ID: 83
  {
    brand: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect ไอซี่ มินต์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture83.png",
    imageAlt: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect ไอซี่ มินต์"
  },

  // ID: 84
  {
    brand: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect สปริง มินต์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture84.png",
    imageAlt: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect สปริง มินต์"
  },

  // ID: 85
  {
    brand: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect เชอร์รี่ บลอสซัม",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture85.png",
    imageAlt: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect เชอร์รี่ บลอสซัม"
  },

  // ID: 86
  {
    brand: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect แมกซี่ คูล",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture86.png",
    imageAlt: "ยาสีฟันซิสเท็มมา รุ่น Ultra Care&Protect แมกซี่ คูล"
  },

  // ID: 117
  {
    brand: "ยาสีฟันซอลส์ รุ่น คิง เฮิร์บ",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture117.png",
    imageAlt: "ยาสีฟันซอลส์ รุ่น คิง เฮิร์บ"
  },

  // ID: 138
  {
    brand: "ยาสีฟันเดนทิสเต้ รุ่น ยาสีฟันแปรงแห้งสำหรับเด็ก กลิ่นมิกซ์ ฟรุต",
    fluoride: 1500,
    age: "6 ปีขึ้นไป",
    props: ["ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture138.png",
    imageAlt: "ยาสีฟันเดนทิสเต้ รุ่น ยาสีฟันแปรงแห้งสำหรับเด็ก กลิ่นมิกซ์ ฟรุต"
  },

  // ID: 140
  {
    brand: "ยาสีฟันเดนทิสเต้ รุ่น Anticavity Max Fluoride (สูตรแปรงแห้ง)",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture140.png",
    imageAlt: "ยาสีฟันเดนทิสเต้ รุ่น Anticavity Max Fluoride (สูตรแปรงแห้ง)"
  },

  // ID: 144
  {
    brand: "ยาสีฟันเดนทิสเต้ รุ่น Ultra Sensitive",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ลดการสะสมของแบคทีเรีย", "ลดอาการเสียวฟัน", "ดูแลสุขภาพเหงือก", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture144.png",
    imageAlt: "ยาสีฟันเดนทิสเต้ รุ่น Ultra Sensitive"
  },

  // ID: 161
  {
    brand: "ยาสีฟันไฮเฮิร์บ รุ่น เดย์ แอนด์ ไนท์ แคร์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture161.png",
    imageAlt: "ยาสีฟันไฮเฮิร์บ รุ่น เดย์ แอนด์ ไนท์ แคร์"
  },

  // ID: 162
  {
    brand: "ยาสีฟันไฮเฮิร์บ รุ่น แอดวานซ์ กัม แคร์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture162.png",
    imageAlt: "ยาสีฟันไฮเฮิร์บ รุ่น แอดวานซ์ กัม แคร์"
  },

  // ID: 163
  {
    brand: "ยาสีฟันไฮเฮิร์บ รุ่น Premium Organic Care",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ลดการสะสมของแบคทีเรีย", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture163.png",
    imageAlt: "ยาสีฟันไฮเฮิร์บ รุ่น Premium Organic Care"
  },

  // ID: 165
  {
    brand: "ยาสีฟันออรัลเฮิร์บ รุ่น whitening",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ทำให้ฟันขาว", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture165.png",
    imageAlt: "ยาสีฟันออรัลเฮิร์บ รุ่น whitening"
  },

  // ID: 216
  {
    brand: "ยาสีฟันกู๊ดเอจ รุ่น Sensitive Shield",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture216.png",
    imageAlt: "ยาสีฟันกู๊ดเอจ รุ่น Sensitive Shield"
  },

  // ID: 217
  {
    brand: "ยาสีฟันกู๊ดเอจ รุ่น Hyper Salt",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture217.png",
    imageAlt: "ยาสีฟันกู๊ดเอจ รุ่น Hyper Salt"
  },

  // ID: 218
  {
    brand: "ยาสีฟันกู๊ดเอจ รุ่น Healthy Life Healthy World",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["เพิ่มความชุ่มชื้นในช่องปาก", "ไม่มีสาร SLS", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture218.png",
    imageAlt: "ยาสีฟันกู๊ดเอจ รุ่น Healthy Life Healthy World"
  },

  // ID: 287
  {
    brand: "ยาสีฟันเดลตาเมท รุ่น Peach Mint",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ไม่มีสาร SLS", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture287.png",
    imageAlt: "ยาสีฟันเดลตาเมท รุ่น Peach Mint"
  },

  // ID: 288
  {
    brand: "ยาสีฟันเดลตาเมท รุ่น Yusu Mint",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ไม่มีสาร SLS", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture288.png",
    imageAlt: "ยาสีฟันเดลตาเมท รุ่น Yusu Mint"
  },

  // ID: 297
  {
    brand: "ยาสีฟันบูม",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture297.png",
    imageAlt: "ยาสีฟันบูม"
  },

  // ID: 325
  {
    brand: "ยาสีฟันออเดอร์สมาย",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture325.png",
    imageAlt: "ยาสีฟันออเดอร์สมาย"
  },

  // ID: 360
  {
    brand: "ยาสีฟันSis' s นมแพะ",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture360.png",
    imageAlt: "ยาสีฟันSis' s นมแพะ"
  },

  // ID: 366
  {
    brand: "ยาสีฟันขิง ขิง",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture366.png",
    imageAlt: "ยาสีฟันขิง ขิง"
  },

  // ID: 374
  {
    brand: "ยาสีฟันไวซรอย รุ่น Advanced Probiotic",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture374.png",
    imageAlt: "ยาสีฟันไวซรอย รุ่น Advanced Probiotic"
  },

  // ID: 380
  {
    brand: "ยาสีฟันKindee รุ่น Organic Fluoride 1500 ppm (Strawberry) Anti Plaque",
    fluoride: 1500,
    age: "6 ปีขึ้นไป",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture380.png",
    imageAlt: "ยาสีฟันKindee รุ่น Organic Fluoride 1500 ppm (Strawberry) Anti Plaque"
  },

  // ID: 381
  {
    brand: "ยาสีฟันKindee รุ่น Organic Fluoride 1500 ppm (Watermelon) Anti Plaque",
    fluoride: 1500,
    age: "6 ปีขึ้นไป",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture381.png",
    imageAlt: "ยาสีฟันKindee รุ่น Organic Fluoride 1500 ppm (Watermelon) Anti Plaque"
  },

  // ID: 391
  {
    brand: "ยาสีฟันยินตัน ออริจินัล",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟัันผุ", "ลดอาการเสียวฟัน", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture391.png",
    imageAlt: "ยาสีฟันยินตัน ออริจินัล"
  },

  // ID: 392
  {
    brand: "ยาสีฟันยินตัน สเปียร์มินต์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟัันผุ", "ลดอาการเสียวฟัน", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture392.png",
    imageAlt: "ยาสีฟันยินตัน สเปียร์มินต์"
  },

  // ID: 396
  {
    brand: "ยาสีฟันซอลล์ เสน่ห์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture396.png",
    imageAlt: "ยาสีฟันซอลล์ เสน่ห์"
  },

  // ID: 404
  {
    brand: "ยาสีฟันแฮร์วอล รุ่น Whitening Plus",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture404.png",
    imageAlt: "ยาสีฟันแฮร์วอล รุ่น Whitening Plus"
  },

  // ID: 413
  {
    brand: "ยาสีฟันด็อกเตอร์ เจ",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture413.png",
    imageAlt: "ยาสีฟันด็อกเตอร์ เจ"
  },

  // ID: 422
  {
    brand: "ยาสีฟันเอ็มเดนท์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture422.png",
    imageAlt: "ยาสีฟันเอ็มเดนท์"
  },

  // ID: 426
  {
    brand: "ยาสีฟันสมุนไพร Tenplus รุ่น ฟลูออไรด์",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture426.png",
    imageAlt: "ยาสีฟันสมุนไพร Tenplus รุ่น ฟลูออไรด์"
  },

  // ID: 443
  {
    brand: "ยาสีฟันอรุณ (Arunn)",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture443.png",
    imageAlt: "ยาสีฟันอรุณ (Arunn)"
  },

  // ID: 444
  {
    brand: "ยาสีฟันสมุนไพรAuraklin plus white",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture444.png",
    imageAlt: "ยาสีฟันสมุนไพรAuraklin plus white"
  },

  // ID: 448
  {
    brand: "ยาสีฟัน Ko Rich รุ่น Fluoride 1500 ppm",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture448.png",
    imageAlt: "ยาสีฟัน Ko Rich รุ่น Fluoride 1500 ppm"
  },

  // ID: 451
  {
    brand: "ยาสีฟัน Sparkle รุ่น instant white",
    fluoride: 1500,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture451.png",
    imageAlt: "ยาสีฟัน Sparkle รุ่น instant white"
  },

  // ID: 361
  {
    brand: "ยาสีฟันเวลเดนท์ รุ่น Extreme Awake",
    fluoride: 1499,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture361.png",
    imageAlt: "ยาสีฟันเวลเดนท์ รุ่น Extreme Awake"
  },

  // ID: 415
  {
    brand: "ยาสีฟันคูฬเดนท์ (CUDent) สูตร Cooling Peppermint",
    fluoride: 1498,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture415.png",
    imageAlt: "ยาสีฟันคูฬเดนท์ (CUDent) สูตร Cooling Peppermint"
  },

  // ID: 177
  {
    brand: "ยาสีฟันกิฟฟารีน รุ่น ELDERLY NATURE CARE",
    fluoride: 1492,
    age: "ผู้สูงอายุ",
    props: ["ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture177.png",
    imageAlt: "ยาสีฟันกิฟฟารีน รุ่น ELDERLY NATURE CARE"
  },

  // ID: 178
  {
    brand: "ยาสีฟันกิฟฟารีน รุ่น HEMP SEED OIL",
    fluoride: 1492,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture178.png",
    imageAlt: "ยาสีฟันกิฟฟารีน รุ่น HEMP SEED OIL"
  },

  // ID: 219
  {
    brand: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น 9X HERBAL PLUS FLUORIDE",
    fluoride: 1490,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture219.png",
    imageAlt: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น 9X HERBAL PLUS FLUORIDE"
  },

  // ID: 220
  {
    brand: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น G.U.M.X. PROPOLIS PLUS FLUORIDE",
    fluoride: 1490,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture220.png",
    imageAlt: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น G.U.M.X. PROPOLIS PLUS FLUORIDE"
  },

  // ID: 221
  {
    brand: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น ZURFACEX HYPERSENSITIVE CARE FLUORIDE",
    fluoride: 1490,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture221.png",
    imageAlt: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น ZURFACEX HYPERSENSITIVE CARE FLUORIDE"
  },

  // ID: 222
  {
    brand: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น BREATHX FLUORIDE",
    fluoride: 1490,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture222.png",
    imageAlt: "ยาสีฟันด็อกเตอร์พงศ์ รุ่น BREATHX FLUORIDE"
  },

  // ID: 46
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น ออริจินัล",
    fluoride: 1480,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture46.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น ออริจินัล"
  },

  // ID: 48
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น ไวท์ เอ็กซ์เพิร์ท",
    fluoride: 1480,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture48.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น ไวท์ เอ็กซ์เพิร์ท"
  },

  // ID: 61
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น ออร์โธ มายด์ แอนด์ แคร์",
    fluoride: 1480,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดอาการเสียวฟัน", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture61.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น ออร์โธ มายด์ แอนด์ แคร์"
  },

  // ID: 62
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น ออร์โธ แอคทีฟ",
    fluoride: 1480,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture62.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น ออร์โธ แอคทีฟ"
  },

  // ID: 47
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น กรีนที เบร็ธ เอ็กซ์เพิร์ท",
    fluoride: 1460,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture47.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น กรีนที เบร็ธ เอ็กซ์เพิร์ท"
  },

  // ID: 58
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส เฮอร์เบิลกัมแคร์",
    fluoride: 1460,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดอาการเสียวฟัน"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture58.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส เฮอร์เบิลกัมแคร์"
  },

  // ID: 59
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส เนเจอร์แคร์",
    fluoride: 1460,
    age: "อายุ 40 ปีขึ้นไป",
    props: ["ทำให้ฟันขาว", "ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture59.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส เนเจอร์แคร์"
  },

  // ID: 19
  {
    brand: "ยาสีฟันคอลเกต รุ่น ปัญจเวทสมุนไพร ดีท็อกซ์",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture19.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น ปัญจเวทสมุนไพร ดีท็อกซ์"
  },

  // ID: 20
  {
    brand: "ยาสีฟันคอลเกต รุ่น ดีท็อกซ์ เซสตี้ ยูซุ",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture20.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น ดีท็อกซ์ เซสตี้ ยูซุ"
  },

  // ID: 23
  {
    brand: "ยาสีฟันคอลเกต รุ่น สดชื่นเย็นซ่า",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture23.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น สดชื่นเย็นซ่า"
  },

  // ID: 24
  {
    brand: "ยาสีฟันคอลเกต รุ่น รสยอดนิยม",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture24.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น รสยอดนิยม"
  },

  // ID: 27
  {
    brand: "ยาสีฟันคอลเกต รุ่น คอนฟิเดนท์ สมายล์ BT21",
    fluoride: 1450,
    age: "ยาสีฟันสำหรับผู้ใหญ่",
    props: ["เพิ่มความสดชื่นมั่นใจ", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture27.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น คอนฟิเดนท์ สมายล์ BT21"
  },

  // ID: 36
  {
    brand: "ยาสีฟันคอลเกต รุ่น โททอล ชาร์โคล ดีพ คลีน",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture36.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น โททอล ชาร์โคล ดีพ คลีน"
  },

  // ID: 37
  {
    brand: "ยาสีฟันคอลเกต รุ่น โททอล ไวท์เทนนิ่ง",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture37.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น โททอล ไวท์เทนนิ่ง"
  },

  // ID: 38
  {
    brand: "ยาสีฟันคอลเกต รุ่น โททอล โปรเฟสชั่นแนล คลีน เจล",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture38.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น โททอล โปรเฟสชั่นแนล คลีน เจล"
  },

  // ID: 39
  {
    brand: "ยาสีฟันคอลเกต รุ่น โททอล โปรเฟสชั่นแนล คลีน ครีม",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ", "ลดการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture39.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น โททอล โปรเฟสชั่นแนล คลีน ครีม"
  },

  // ID: 40
  {
    brand: "ยาสีฟันคอลเกต รุ่น โททอล แอดวานส์ เฟรช",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture40.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น โททอล แอดวานส์ เฟรช"
  },

  // ID: 42
  {
    brand: "ยาสีฟันคอลเกต รุ่น โททอล เซนซิทีวิตี้ กัม เฮลต์",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ป้องกันฟันผุ", "ลดอาการเสียวฟัน", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture42.png",
    imageAlt: "ยาสีฟันคอลเกต รุ่น โททอล เซนซิทีวิตี้ กัม เฮลต์"
  },

  // ID: 44
  {
    brand: "ยาสีฟันใกล้ชิด รุ่น ดีพ แอคชั่น เรดฮอต",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture44.png",
    imageAlt: "ยาสีฟันใกล้ชิด รุ่น ดีพ แอคชั่น เรดฮอต"
  },

  // ID: 56
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส เซนซิทีฟ",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดอาการเสียวฟัน"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture56.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส เซนซิทีฟ"
  },

  // ID: 57
  {
    brand: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส ไวท์เทนนิ่ง",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ทำให้ฟันขาว", "ดูแลสุขภาพเหงือก", "ลดอาการเสียวฟัน"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture57.png",
    imageAlt: "ยาสีฟันฟลูโอคารีล รุ่น 40พลัส ไวท์เทนนิ่ง"
  },

  // ID: 123
  {
    brand: "ยาสีฟันเซ็นโซดายน์ รุ่น เฮอร์เบิล มัลติ แคร์",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture123.png",
    imageAlt: "ยาสีฟันเซ็นโซดายน์ รุ่น เฮอร์เบิล มัลติ แคร์"
  },

  // ID: 128
  {
    brand: "ยาสีฟันเซ็นโซดายน์ รุ่น เซ็นซิทิวิตี้ & กัม",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture128.png",
    imageAlt: "ยาสีฟันเซ็นโซดายน์ รุ่น เซ็นซิทิวิตี้ & กัม"
  },

  // ID: 130
  {
    brand: "ยาสีฟันเซ็นโซดายน์ รุ่น คอมพลีท โพรเทคชั่น พลัส",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาวขึ้น", "ลดอาการเสียวฟัน", "ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture130.png",
    imageAlt: "ยาสีฟันเซ็นโซดายน์ รุ่น คอมพลีท โพรเทคชั่น พลัส"
  },

  // ID: 231
  {
    brand: "ยาสีฟันออรัลบี รุ่น Gum and Enamel  (สูตรป้องกันฟันผุ)",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture231.png",
    imageAlt: "ยาสีฟันออรัลบี รุ่น Gum and Enamel  (สูตรป้องกันฟันผุ)"
  },

  // ID: 232
  {
    brand: "ยาสีฟันออรัลบี รุ่น Gum and Enamel (สูตรสะอาดสดชื่น)",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture232.png",
    imageAlt: "ยาสีฟันออรัลบี รุ่น Gum and Enamel (สูตรสะอาดสดชื่น)"
  },

  // ID: 233
  {
    brand: "ยาสีฟันออรัลบี รุ่น Gum and Enamel (สูตรฟันขาว)",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ลดการสะสมของแบคทีเรีย", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture233.png",
    imageAlt: "ยาสีฟันออรัลบี รุ่น Gum and Enamel (สูตรฟันขาว)"
  },

  // ID: 235
  {
    brand: "ยาสีฟันออรัลบี รุ่น 3D White Fast White (Fortifying Mineral)",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture235.png",
    imageAlt: "ยาสีฟันออรัลบี รุ่น 3D White Fast White (Fortifying Mineral)"
  },

  // ID: 435
  {
    brand: "ยาสีฟัน CURAPROX รุ่น enzycal 1450",
    fluoride: 1450,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ลดอาการเสียวฟัน", "ลดการสะสมของแบคทีเรีย", "ไม่มีสาร SLS"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture435.png",
    imageAlt: "ยาสีฟัน CURAPROX รุ่น enzycal 1450"
  },

  // ID: 108
  {
    brand: "ยาสีฟันพาโรดอนแทกซ์ รุ่น  ฟลูออไรด์",
    fluoride: 1400,
    age: "ไม่ระบุ",
    props: ["ป้องกันฟันผุ", "ดูแลสุขภาพเหงือก", "ลดการสะสมของแบคทีเรีย"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture108.png",
    imageAlt: "ยาสีฟันพาโรดอนแทกซ์ รุ่น  ฟลูออไรด์"
  },

  // ID: 109
  {
    brand: "ยาสีฟันพาโรดอนแทกซ์ รุ่น คอมพลีท โพรเทคชั่น",
    fluoride: 1400,
    age: "ไม่ระบุ",
    props: ["ทำให้ฟันขาว", "ดูแลสุขภาพเหงือก", "ป้องกันฟันผุ"],
    image: "https://raw.githubusercontent.com/dental-anamai/toothpaste-anamai/main/public/toothpaste-images/Picture109.png",
    imageAlt: "ยาสีฟันพาโรดอนแทกซ์ รุ่น คอมพลีท โพรเทคชั่น"
  }

];
