const Invoice = require('../models/InvoicesModel');

// Invoice APIs
exports.createInvoice = async (req, res) => {
    try {
      const { amount, project, description, dueDate} = req.body;
      const invoice = await Invoice.create({ amount, project, description, dueDate, owner: req.user._id});
      return res.status(201).json({ message: "Invoice created successfully", invoice });
    } catch (error) {
      return res.status(500).json({ error:error, message: error?.message });
    }
  }
  
  // Get all invoices created by the owner
  exports.getInvoices = async (req, res) => {
    // invoices API with pagination
    try { 
      const page = parseInt(req.query.page) || 1; // Default to page 1
      const limit = parseInt(req.query.limit) || 10; // Default limit to 10
      // Calculate the starting index of pagination
      const startIndex = (page - 1) * limit;
      const invoices = await Invoice.find({ owner: req.user._id }).populate('client').limit(limit).skip(startIndex);
      return res.status(200).json({ invoices });
    } catch (error) {
      return res.status(500).json({ error:error, message: error?.message });
    }
  }