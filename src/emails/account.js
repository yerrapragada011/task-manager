const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
