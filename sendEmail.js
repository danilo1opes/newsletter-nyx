const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'parceriasnyx@gmail.com',
    pass: 'ajyqqmujzjdzhgpkcl',
  },
});

transport
  .sendMail({
    from: 'Nyx <parceriasnyx@gmail.com>',
    to: 'contatolopesdan@gmail.com',
    subject: 'Enviando email com Node',
    html: '<h1>Olá, Dev!</h1> <p>Esse email e novo</p>',
    text: 'Olá pessoal esse email e um test',
  })
  .then((response) => console.log('Email enviado com sucesso!'))
  .catch((error) => console.log('Error ao enviar email.'), error);
