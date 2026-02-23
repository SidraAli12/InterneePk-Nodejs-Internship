const { generateCertificatePDF } = require('../services/pdfService');

exports.generateCertificate = async (req, res) => {
  try {
    const { name, email, domain, completionDate } = req.body;

    if (!name || !email || !domain || !completionDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const pdfPath = await generateCertificatePDF({
      name,
      domain,
      completionDate
    });

    res.json({
      message: 'Certificate generated successfully',
      pdfPath
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const generatePDF = require('../services/pdfService');
const sendEmail = require('../services/emailService');

exports.generateAndSendCertificate = async (req, res) => {
  try {
    const { name, email, domain, completionDate } = req.body;

    if (!name || !email || !domain || !completionDate) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Pass full object
const pdfPath = await generateCertificatePDF({ name, domain, completionDate });
    await sendEmail(email, pdfPath);

    res.json({ message: 'Certificate generated & emailed successfully' });
  } catch (error) {
    console.error('Error:', error); // Add console log for debugging
    res.status(500).json({ message: error.message });
  }
};
