const express = require('express');
const router = express.Router();
const nodemailer= require ("nodemailer")
const dotenv = require('dotenv');

router.get('/', (req, res) => {
    res.render('index', {titulo : "Send an email"});
});

router.post('/contactBox', (req,res) => {
   console.log (req.body)
   

   const transporter= nodemailer.createTransport ({
       service: 'gmail',
       auth: {
           user: process.env.MAIL_USERNAME,
           pass:  process.env.MAIL_PASSWORD
       }
   })
    const mailOptions= {
        from: `${req.body.email}`,
        to: `${req.body.email}`,
        subject: `message from: ${req.body.firstName} ${req.body.lastName} reason: ${req.body.subject}`,
        text: `${req.body.message}`

    }

    transporter.sendMail(mailOptions, (error,info) => {
        if (error) {
            console.log (error) 
            res.send('error')
        } else { 
            console.log ('email sent' + info.response)
            res.send('success')
        }
    })

})

module.exports = router;