const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "my.smtp.host",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Asyncing Ship" <asyncing-ship@protonmail.com>', // sender address
    to: "levicarlson123@gmail.com", // list of receivers
    subject: "Testing nodemailer ✔", // Subject line
    text: "Hello from Asyncing Ship!", // plain text body
    html: "<h1>Hello from Asyncing Ship!</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

module.exports = main;