// Backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import customersRouter from './routes/customers.js';

const app = express();
const PORT = process.env.PORT || 5000;

// 1) البرمجيات الوسيطة (Middleware)
app.use(cors());
app.use(express.json());

// 2) رابط الاتصال بقاعدة البيانات
const dbURI = "mongodb+srv://palestinecentreit_db_user:tV4IIqN8CeGHiKkN@masarcrm2026.7wfbrca.mongodb.net/?appName=MasarCrm2026";

mongoose.connect(dbURI)
  .then(() => console.log("قاعدة البيانات السحابية متصلة بنجاح! ☁️✅"))
  .catch(err => console.error("خطأ في الاتصال بالسحاب ❌:", err));

// 3) الروابط الأساسية (Routes)
app.use('/api/customers', customersRouter);

app.get('/', (req, res) => {
  res.send('سيرفر Masar CRM يعمل بنجاح على السحاب! 🚀');
});

// 4) تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`السيرفر يعمل الآن على المنفذ: ${PORT} 🚀`);
});