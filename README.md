# Shaxsiy Moliyaviy Boshqaruv Paneli

## Loyihaning Umumiy Maqsadi
Shaxsiy Moliyaviy Boshqaruv Paneli foydalanuvchilarga o'z moliyaviy holatini kuzatib borish va boshqarish imkonini beradi. Ushbu panel orqali foydalanuvchilar daromad va xarajatlarni boshqarishi, real vaqt rejimida valyuta kurslarini kuzatishi va moliyaviy ma'lumotlarni grafikalar yordamida vizualizatsiya qilishi mumkin.

## Form uchun qo'llanma
1. Amount (Miqdor)
Son kiritiladi: Foydalanuvchi yangi tranzaksiyani kiritish uchun miqdor kiritsin. Misol uchun:
Tranzaksiya miqdori: 100 USD (bu daromad yoki xarajat bo‘lishi mumkin, masalan, yangi daromad kiritish).
Tranzaksiya miqdori: 50 USD (bu xarajat bo‘lishi mumkin, masalan, oziq-ovqat xarajati).
Bu miqdorlarni foydalanuvchi tranzaksiya qo‘shish vaqtida kiritadi.

2. Category (Kategoriya)
Tranzaksiya uchun kategoriya tanlash kerak. Masalan:
Daromad: Ish haqi, bonus, qo‘shimcha daromad
Xarajat: Oziq-ovqat, transport, ko‘ngilochar

3. Income (Daromad)
Income — bu foydalanuvchining turli manbalardan kelgan pul kirimi. Daromadga quyidagilar kiradi:
Ish haqi: Ish joyidan olingan pul.
Bonuslar: Ish joyidagi mukofotlar yoki bonuslar.
Qo‘shimcha daromadlar: Masalan, investorlik daromadlari, xizmatlar orqali topilgan pul, ijaraga berishdan olingan pul va hokazo.

4. Expense (Xarajat)
Expense — bu foydalanuvchining turli ehtiyojlari uchun sarflangan pul miqdori. Xarajatlarga quyidagilar kiradi:
Oziq-ovqat: Ovqatga sarflangan pul.
Transport: Mashina yo‘llari yoki jamoat transportiga sarflangan pul.
Ko‘ngilochar: Kino, teatr, dam olishga sarflangan pul.
Uy-joy xarajatlari: Ijara, kommunal to‘lovlar va boshqa uy-joy xarajatlari.

---

## Asosiy Funksiyalar
- **Real vaqt rejimida valyuta kurslari**: API orqali USD, EUR, UZS va boshqa valyutalarning joriy kurslarini ko'rsatish.
- **Tranzaksiyalarni boshqarish**:
  - Daromad va xarajatlarni qo'shish, tahrirlash va o'chirish.
  - Tranzaksiyalarni kategoriyalarga ajratish.
- **Grafik vizualizatsiya**:
  - Jami daromad, xarajat va sof balansni ko'rsatish.
  - Xarajatlar kategoriyasi bo'yicha diagramma.
- **Filtrlash imkoniyatlari**:
  - Sana oralig'i yoki kategoriyaga asoslangan filtrlash.
- **Responsive dizayn**: Mobil, planshet va kompyuter ekranlariga moslashadi.
- **Tranzaksiyalarni LocalStorage'da saqlash**: Tranzaksiyalar avtomatik saqlanadi.

---

## Texnologiyalar
- **Frontend**: ReactJS
- **Styling**: Bootstrap
- **API**: ExchangeRate-API
- **State Management**: React Hooks va Context API
- **Ma'lumotlarni Saqlash**: LocalStorage

---

## Loyihani Ishga Tushirish

### Tizim Talablari
- **Node.js** (v14 yoki undan yuqori)

### O'rnatish Ko'rsatmalari
1. Repozitoriyani klonlang:
   ```bash
   git clone https://github.com/username/finance-dashboard.git



---

## Qisqacha Sharh

Loyiha davomida quyidagi muammolar bilan duch keldim va ularni hal qildim:

1. **CORS xatoliklari**: API'dan ma'lumot olishda CORS xatoliklari yuzaga keldi. Buni hal qilish uchun `proxy` yordamida bu muammoni bartaraf etdim.
2. **Valyuta kurslarini to'g'ri formatlash**: API'dan valyuta kurslarini olishda noto'g'ri formatdagi ma'lumotlarni olish bilan muammo bo'ldi. Buni React hook'lari va state management yordamida tuzatilgan holda vizualizatsiya qildim.

Agar loyihani yanada yaxshilash uchun vaqt bo'lsa, quyidagi takliflarni beraman:

- **Foydalanuvchi uchun ko'proq grafikalar va tahlil vositalari qo'shish**.
- **API optimallashtirish**: API orqali valyuta kurslari tezroq yangilanishi uchun `WebSockets` yoki boshqa real vaqt rejimida ishlovchi texnologiyalarni qo'shish.
