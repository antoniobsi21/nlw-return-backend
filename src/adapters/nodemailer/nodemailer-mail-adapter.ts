import { MailAdapter, sendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6acaef6bc31de4",
    pass: "f837549df85a4f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Antônio Fernandes <antonio.fernandes.bsi@gmail.com>',
      subject,
      html: body,
    });
  };
}