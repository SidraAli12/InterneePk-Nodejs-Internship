 const nodemailer = require('nodemailer');

const sendCertificateEmail = async (toEmail, pdfPath) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });

  const info = await transporter.sendMail({
    from: '"Internee.pk" sidra@gmail.com ',
    to: toEmail,
    subject: 'Internship Completion Certificate',
    text: 'Your internship certificate is attached.',
    attachments: [
      {
        filename: 'certificate.pdf',
        path: pdfPath
      }
    ]
  });

  console.log('📧 Email Preview URL:', nodemailer.getTestMessageUrl(info));
};

module.exports = sendCertificateEmail;
