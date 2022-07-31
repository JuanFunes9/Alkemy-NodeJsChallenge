const nodemailer = require('nodemailer')

const sendEmail = (newUserEmail) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'juanfuneslg@gmail.com',
      pass: 'zhvaelpqqgsbqrxm'
    }
  });

  const mailOptions = {
    from: 'Juan Funes - Alkemy Challenge Node.js <juanfuneslg@gmail.com>',
    to: newUserEmail,
    subject: 'Bienvenido a mi servidor Express.js - Disney Challenge',
    text: "Bienvenido a mi challenge de Alkemy!. Fuiste registrado con exito."
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ error })
    }
  })
}

module.exports = sendEmail;