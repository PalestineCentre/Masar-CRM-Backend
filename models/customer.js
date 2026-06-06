// models/Customer.js
// تأكد من وجود هذه الحقول في موديل MongoDB الخاص بك
const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    address: { street: String, building: String, plz: String, city: String, state: String },
    phone: String,
    email: String,
    bankCard: String,
    contractType: String,
    notes: String
});
export default mongoose.model('Customer', customerSchema);