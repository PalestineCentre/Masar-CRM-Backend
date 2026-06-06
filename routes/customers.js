// routes/customers.js
import express from "express";
import * as customerController from "../controllers/customerController.js";

const router = express.Router();

// روابط التحكم بالزبائن
router.get("/", customerController.getAllCustomers);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

// روابط التحكم بالعقود
router.post("/:id/contracts", customerController.addContract);
router.delete("/:customerId/contracts/:contractId", customerController.deleteContract);

export default router;