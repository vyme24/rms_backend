const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});

const SendMail = async(tomail,subject,message)=>{
  try {
    const info = await transporter.sendMail({
      from: '"RMS"<ridhamsharma124@gmail.com>', 
      subject,
    
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log(" Mail Message sent: %s", info.messageId);
    return true;
    
  } catch (error) {
    console.log("Mail Error:",error);
    return false
  }
}

module.exports = SendMail;

