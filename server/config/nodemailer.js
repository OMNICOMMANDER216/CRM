const nodemailer = require("nodemailer");
const account = require('./config').mailCredentions;

// async..await is not allowed in global scope, must use a wrapper
function mailer() {
     async function main(){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: account.user, //mailtrap username
      pass: account.password // mailtrap password
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
    from: '"OMNICOMMANDER" <info@omnicommander.com>', // sender address
    to: "oumar@omnicommander.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: `<h2> You have been assigned a new customer </h2>
            <a href="#">Click here to see</a>` // html body
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s");
  console.log(info);
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
    return main;
}


module.exports =  mailer();