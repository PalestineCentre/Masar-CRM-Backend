import customer from '../models/customer.js';

export const createCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        const saved = await newCustomer.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// تعديل بيانات زبون
exports.updateCustomer = async (req, res) => {
  try {
    const updated = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// حذف زبون وعقوده
exports.deleteCustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.json({ message: "تم حذف الزبون بنجاح" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// إضافة عقد لزبون محدد
exports.addContract = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) return res.status(404).json({ message: "الزبون غير موجود" });

    customer.contracts.push(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// حذف عقد من زبون
exports.deleteContract = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId);
    if (!customer) return res.status(404).json({ message: "الزبون غير موجود" });

    customer.contracts = customer.contracts.filter(c => c._id.toString() !== req.params.contractId);
    await customer.save();
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};