import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_EMAIL_PASSWORD
  }
});

transporter.verify(function(error, success) {
  if (error) {
    console.error('SMTP connection error:', error);
  } else {
    console.log('SMTP Server is ready');
  }
});

function sendMailNotification(receiverEmail, prompt) {
  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: receiverEmail,
      subject: prompt.subject,
      text: prompt.message,
    }, (error, info) => {
      if (error) {
        console.error("Email send error:", error);
        return reject(error);
      }
      console.log('Email sent: ' + info.response);
      resolve(info);
    });
  });
}

export default sendMailNotification;
