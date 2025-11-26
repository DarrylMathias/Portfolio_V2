import { Resend } from 'resend';

const resend = new Resend('re_efbSkJUV_BP5ki4p8eGoGkXZDaaCCgE1o');

resend.emails.send({
  from: 'help@darrylmathias.tech',
  to: 'darrylnevmat@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});