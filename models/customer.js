// Backend/models/customer.js

import mongoose from 'mongoose';

// 1. نقوم بإضافة حقول نوع العقد والشركة المزودة هنا داخل الـ Schema الفرعي للعقود
const contractSchema = new mongoose.Schema({
    type: String,         // نوع العقد (مثال: كهرباء، غاز، إنترنت)
    provider: String,     // الشركة المزودة
    startDate: String,    // تاريخ البداية
    endDate: String,      // تاريخ النهاية
    renewalDate: String,
    notes: String,
    status: { type: String, default: '⏳ قيد التنفيذ' } 
});

// 2. السكيما الرئيسي للزبون
const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    address: { 
        street: String, 
        building: String, 
        plz: String, 
        city: String, 
        state: String 
    },
    phone: String,
    email: String,
    bankCard: String,
    notes: String,
    contracts: [contractSchema] // الآن أصبحت تحتوي على كافة التفاصيل المدمجة بدون تكرار أو مسح
});

export default mongoose.model('Customer', customerSchema);