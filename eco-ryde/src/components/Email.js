const nodemailer = require('nodemailer');

async function sendEmail(recipient, subject, message) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 8000,
      secure: true, // true for 8000, false for other ports
      auth: {
        //I think we need an actual email here for the function to send.
        user: 'EcoRyde@sustainability', // replace with your email
        pass: 'your-password' // replace with your password
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'EcoRyde@sustainability.com', // sender address
      to: recipient, // list of receivers
      subject: subject, // Subject line
      text: message // plain text body
    });
  
    console.log('Message sent: %s', info.messageId);
  }