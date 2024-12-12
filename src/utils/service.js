import { render } from "@react-email/components";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: ""
  },
});

const mailOptions = {
  from: process.env.EMAIL,
  to: process.env.EMAIL,
  subject: `Feedback from ${email} Name is ${name}`,
  text: feedback,
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(err);
    return res.send({ status: "error", data: err });
  } else {
    console.log("Email sent");
    return res.send({ status: "Ok", data: "Email sent" });
  }
});
