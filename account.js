const sgMail = require('@sendgrid/mail')
const sendgridApiKey = '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'
sgMail.setApiKey(sendgridApiKey)
sgMail.send({
    to: 'adiishukla196@gmail.com',
    from: 'adii196@outlook.com',
    subject: 'This is my first creation',
    text: 'I hope this one actually get to you'
}).then((sia) => {
    console.log(sia)
}).catch((e) => {
    console.log(e)
})