// Backend/models/customer.js

import mongoose from 'mongoose';

// تحديث الـ Schema الفرعي للعقود ليدعم الحالة اليدوية والملاحظات لكل عقد
const contractSchema = new mongoose.Schema({
    type: String,         // نوع العقد (كهرباء، غاز، أو أنواع الإنترنت المحدثة)
    provider: String,     // الشركة المزودة
    startDate: String,    // تاريخ البداية
    endDate: String,      // تاريخ النهاية
    renewalDate: String,
    contractNotes: String, // ✨ خانة الملاحظات الخاصة بكل عقد على حدة
    status: { type: String, default: '✅ نشط' } // ✨ الحالة أصبحت يدوية (نصية) ولا تعتمد على التاريخ
});

// السكيما الرئيسي للزبون
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
    notes: String,        // الملاحظات العامة للزبون
    contracts: [contractSchema] 
});

export default mongoose.model('Customer', customerSchema);