# 🌟 Kids Platform - Bolalar Ta'lim Dunyosi

> 3-6 yosh bolalar uchun zamonaviy interaktiv ta'lim platformasi

## 📖 Loyiha Haqida

**Kids Platform** - bolalarning bilim olish jarayonini qiziqarli va samarali qilish uchun yaratilgan ta'limiy platforma. Bu loyiha orqali bolalar o'zbek alifbosini o'rganish, turli xil o'yinlar o'ynash va ta'limiy videolar tomosha qilishlari mumkin.

### ✨ Asosiy Xususiyatlar

- 🎯 **Interaktiv Darslar**: 31 ta dars orqali o'zbek alifbosini to'liq o'rganish
- 🎮 **Ta'limiy O'yinlar**: Puzzle va Color Tap o'yinlari
- 🎬 **Multfilmlar**: YouTube API integratsiyasi bilan ta'limiy videolar
- 📱 **Responsive Dizayn**: Barcha qurilmalarda mukammal ishlaydi
- 🎨 **Chiroyli Interfeys**: Bolalar uchun mo'ljallangan rangli va qiziqarli dizayn

## 🏗️ Texnologiyalar

| Texnologiya | Versiya | Maqsadi |
|-------------|---------|---------|
| **React** | 19.1.1 | Frontend framework |
| **Vite** | 7.1.2 | Build tool va development server |
| **React Router** | 7.8.2 | Sahifalar orasida navigatsiya |
| **TailwindCSS** | 4.1.13 | Styling va responsive dizayn |
| **YouTube Data API v3** | - | Video qidiruv va ko'rsatish |

## 📚 Loyiha Tuzilishi

```
kids-platform/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Bosh sahifa hero bo'limi
│   │   └── layout/
│   │       └── Navbar.jsx        # Navigatsiya menyusi
│   ├── pages/
│   │   ├── Home.jsx             # Bosh sahifa
│   │   ├── Lessons.jsx          # Darslar sahifasi
│   │   ├── OnaTili.jsx          # Ona tili darslari
│   │   ├── LessonDetail.jsx     # Dars tafsilotlari
│   │   ├── Games.jsx            # O'yinlar sahifasi
│   │   └── Cartoons.jsx         # Multfilmlar sahifasi
│   ├── App.jsx                  # Asosiy komponent
│   └── main.jsx                 # Entry point
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎯 Sahifalar va Xususiyatlar

### 🏠 Bosh Sahifa (Home)
- Hero bo'limi bilan zamonaviy dizayn
- 3 ta asosiy yo'nalishga navigatsiya kartochkalari

### 📖 Darslar (Lessons)
- **5 ta fan**:
  - 🇺🇿 **Ona tili**: O'zbek alifbosi (31 dars)
  - 🇺🇸 **English**: Ingliz tili darslari
  - 🇷🇺 **Rus tili**: Rus tili darslari  
  - 🔢 **Matematika**: Raqamlar va hisob-kitob
  - 🌱 **Tabiat**: Atrofdagi olam haqida

#### 📝 Ona Tili Darslari
- **31 ta dars**: Har bir O'zbek harfi uchun alohida dars
- **Interaktiv o'rganish**: Harflar, so'zlar va rasmlar bilan
- **Mashq qilish**: Harfga oid narsalarni topish o'yini

### 🎮 O'yinlar (Games)
1. **🧩 Puzzle O'yin**:
   - 3 ta daraja: 2x2, 3x3, 4x4
   - Rangli raqamli bo'lakchalar
   - Harakat hisoblagichi

2. **🎨 Color Tap**:
   - Ranglar ketma-ketligini eslab qolish
   - 4 ta rang: Qizil, Yashil, Sariq, Ko'k
   - Ball to'plash tizimi

### 🎬 Multfilmlar (Cartoons)
- **YouTube API** integratsiyasi
- **Xavfsiz qidiruv** (SafeSearch)
- **Default videolar** ro'yxati
- **Real-time qidiruv** funksiyasi

## 🚀 O'rnatish va Ishga Tushirish

### Talablar
- Node.js (18+ versiya)
- npm yoki yarn

### 1️⃣ Loyihani Clone qilish
```bash
git clone <repository-url>
cd kids-platform
```

### 2️⃣ Dependencies o'rnatish
```bash
npm install
```

### 3️⃣ Environment sozlash
`.env` fayl yarating va YouTube API key qo'shing:
```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### 4️⃣ Development server ishga tushirish
```bash
npm run dev
```

Brauzerda `http://localhost:5173` ochiladi.

## 🛠️ Mavjud Skriptlar

```bash
npm run dev      # Development server
npm run build    # Production build
npm run lint     # Code linting
npm run preview  # Production preview
```

## 🎨 Dizayn Tizimi

### Ranglar
- **Asosiy**: Purple (binafsha) - platforma rangi
- **Darslar**: Blue (ko'k) - ta'lim rangi
- **O'yinlar**: Pink (pushti) - qiziqarli rang
- **Multfilmlar**: Yellow (sariq) - yorqin rang
- **Ona tili**: Green (yashil) - tabiy rang

### Komponentlar
- **Kartochkalar**: Rounded corners, hover effects
- **Tugmalar**: 3D effekt, scale animatsiyalar  
- **Modal/Sahifalar**: Backdrop blur, chiroyli transition

## 📱 Responsive Dizayn

| Qurilma | Breakpoint | Grid Layout |
|---------|------------|-------------|
| Mobile | < 768px | 1 ustun |
| Tablet | 768px - 1024px | 2 ustun |
| Desktop | > 1024px | 3-4 ustun |

## 🔧 Xususiyatlar

### ✅ Amalga oshirilgan
- [x] Responsive dizayn
- [x] Ona tili darslari (31 dars)
- [x] 2 ta interaktiv o'yin
- [x] YouTube video integratsiyasi
- [x] Sahifalar arasi navigatsiya
- [x] Chiroyli animatsiyalar

### 🔄 Rejada
- [ ] Boshqa fanlar uchun darslar
- [ ] Ko'proq o'yinlar
- [ ] Audio qo'shish
- [ ] Progress tracking
- [ ] User authentication

## 👨‍💻 Rivojlantirish

### Kod Stil
- **React Hooks** ishlatilgan
- **Functional Components**
- **TailwindCSS** utility classes
- **Clean Architecture** tamoyillari

### Fayl Nomlash
- **PascalCase**: Komponentlar (`OnaTili.jsx`)
- **camelCase**: Funksiyalar va o'zgaruvchilar
- **kebab-case**: CSS klasslari

## 🤝 Hissa Qo'shish

1. Fork qiling
2. Feature branch yarating (`git checkout -b feature/new-feature`)
3. Commit qiling (`git commit -am 'Add new feature'`)
4. Push qiling (`git push origin feature/new-feature`)
5. Pull Request yarating

## 📄 Litsenziya

Bu loyiha MIT litsenziyasi ostida chiqarilgan.

## 📞 Aloqa

Savollar yoki takliflar bo'lsa, iltimos bog'laning:
- 📧 Email: [your-email@example.com]
- 💬 Telegram: [@your_username]
- 🐙 GitHub: [your-github-username]

---

<div align="center">

### 🌟 Bolalarning kelajagi - bizning qo'limizdа! 🌟

*Ushbu platforma bolalar uchun bilim olishni qiziqarli va samarali qilish maqsadida yaratilgan.*

</div>