const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const route = express.Router();
const port = process.env.PORT || 5000;
app.use("/v1", route);

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: "smtp.gmail.com",
  auth: {
    user: "speakwest.mailer@gmail.com",
    pass: "&EVM8*Z.m5(&K#j",
  },
  secure: true,
});

app.post("/send-email", async (req, res) => {
  const { email, text, tel } = req.body;
  const mailData = {
    from: "speakwest.mailer@gmail.com",
    to: "speak.east.russia@gmail.com",
    subject: "Message from speakwest mailer!",
    text: `Почта отправителя: ${email}. Телефон отправителя: ${tel}. Сообщение отправителя: ${text}`,
  };

  try {
    const result = await transporter.sendMail(mailData);
    res.send({ status: "success", data: result.messageId });
  } catch (error) {
    console.log(error);
    res.send({ status: "error", data: null });
  }
});

app.use(cors());
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
