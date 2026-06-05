// routes/customers.js
const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customerController");

// روابط التحكم بالزبائن
router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

// روابط التحكم بالعقود
router.post("/:id/contracts", customerController.addContract);
router.delete("/:customerId/contracts/:contractId", customerController.deleteContract);

// هـــام جـداً لحل المشكلة: تصدير الـ router ليقرأه ملف server.js
module.exports = router;