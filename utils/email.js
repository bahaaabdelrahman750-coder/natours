const nodemailer = require('nodemailer');
const pug = require('pug');

const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Bahaa Abdelrahman <${process.env.EMAIL_FORM}>`;
  }

  newTransporter() {
    if (process.env.NODE_ENV === 'production') {
      return 1;
    }

    return nodemailer.createTransport({
      service: 'SendGrid',
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
      }
    });
  }

  async send(template, subject) {
    const html = pug.renderFilr(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText.fromString(html)
    };
    await this.newTransporter().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'welcome to natours family!');
  }

  async sendPasswordReset() {
    await this.send(
      'PasswordReset',
      'Your Password reset token valid for 10 min'
    );
  }
};
