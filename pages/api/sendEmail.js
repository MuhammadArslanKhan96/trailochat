const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "la925052@gmail.com",
    pass: "bhyjdudgxxhgxqlz",
  },
});

// const link = `http://192.168.18.11:3000/signin?accept=`;            //local url
const link = `https://trailochat.vercel.app/signin?accept=`;    //live url

export default async function sendEmail(req, res) {
  const { curentUserEmail, toEmail, id } = req.body;
  // async..await is not allowed in global scope, must use a wrapper
  // async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: curentUserEmail, // sender address
    to: toEmail, // list of receivers
    subject: "Invitation to join trello", // Subject line
    // text: "Hi", // plain text body
    html: `Send the invitation on trello <div>
    <a href="${link + id}" >
      Accept
    </a>
  </div>`, // html body
  });

  res.send("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
  // }
  // main().catch(console.error);
}
