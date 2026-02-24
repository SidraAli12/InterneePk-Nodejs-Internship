const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

exports.generateCertificatePDF = async ({ name, domain, completionDate }) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);

  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  page.drawText('Internship Completion Certificate', {
    x: 80,
    y: 340,
    size: 20,
    font,
    color: rgb(0, 0.2, 0.6),
  });

  page.drawText(`This certifies that`, {
    x: 200,
    y: 280,
    size: 12,
  });

  page.drawText(name, {
    x: 180,
    y: 250,
    size: 18,
    font,
  });

  page.drawText(`has successfully completed the internship in ${domain}`, {
    x: 110,
    y: 210,
    size: 12,
  });

  page.drawText(`Completion Date: ${completionDate}`, {
    x: 180,
    y: 170,
    size: 12,
  });

  const pdfBytes = await pdfDoc.save();

  const fileName = `certificate-${Date.now()}.pdf`;
  const filePath = path.join(__dirname, '../certificates', fileName);

  fs.writeFileSync(filePath, pdfBytes);

  return filePath;
};
