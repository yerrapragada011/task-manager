const sgMail = require('@sendgrid/mail');

const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: 'agasthyayerrapragada@knights.ucf.edu',
  from: 'agasthyayerrapragada@knights.ucf.edu',
  subject: 'This is my firest creation!',
  text: 'I hope this one actually gets to you.',
});
