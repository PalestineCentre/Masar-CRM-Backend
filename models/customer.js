import mongoose from 'mongoose';

const contractSchema = new mongoose.Schema({
    startDate: String,
    endDate: String,
    renewalDate: String,
    notes: String,
    status: { type: String, default: 'active' } // مثلاً: نشط أو منتهي
});

const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    address: { street: String, building: String, plz: String, city: String, state: String },
    phone: String,
    email: String,
    bankCard: String,
    contractType: String,
    notes: String,
    contracts: [contractSchema] // مصفوفة عقود تحتوي على تفاصيل كل عقد
});

export default mongoose.model('Customer', customerSchema);