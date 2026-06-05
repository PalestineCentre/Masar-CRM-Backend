// Backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// 1) البرمجيات الوسيطة (Middleware)
app.use(cors()); // للسماح لواجهة Electron بالاتصال بالسيرفر من أي مكان
app.use(express.json()); // لقراءة البيانات القادمة بصيغة JSON

// 2) رابط الاتصال بقاعدة البيانات السحابية (MongoDB Atlas)
// تنبيه: استبدل <password> بكلمة مرور حسابك في أطلس (مثال: MasarCrm2026)
const dbURI = "mongodb+srv://palestinecentreit_db_user:tV4IIqN8CeGHiKkN@masarcrm2026.7wfbrca.mongodb.net/?appName=MasarCrm2026";

mongoose.connect(dbURI)
  .then(() => console.log("قاعدة البيانات السحابية متصلة بنجاح! ☁️✅"))
  .catch(err => console.error("خطأ في الاتصال بالسحاب ❌:", err));

// 3) الروابط الأساسية (Routes)
// هنا نقوم بربط السيرفر بملف العمليات الخاص بالزبائن
const customersRouter = require('./routes/customers');
app.use('/api/customers', customersRouter);

// رابط تجريبي للتأكد من أن السيرفر يعمل على الإنترنت
app.get('/', (req, res) => {
  res.send('سيرفر Masar CRM يعمل بنجاح على السحاب! 🚀');
});

// 4) تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`السيرفر يعمل الآن على المنفذ: ${PORT} 🚀`);
});