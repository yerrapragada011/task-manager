const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'agasthyayerrapragada@knights.ucf.edu',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'agasthyayerrapragada@knights.ucf.edu',
    subject: 'Sorry to see you go!',
    text: `Goodbye, ${name}. I hope to see you back sometime.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
