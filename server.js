let nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const { port, header, transporter } = require(`./public/config/config`);


let transporter = nodemailer.createTransport({
    host: 'smtp.siciliastandup.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'siciliastandup@siciliastandup.com',
        pass: 'pqowpqow99'
    },
    tls: {
        rejectUnauthorized: false // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    }
});

let mailOptions = {
    from: 'siciliastandup@siciliastandup.com',
    to: 'leo@leovidal.es',
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!'
    html: '<h1>Anda para allá Welcome</h1><p>That was easy!</p>'
};


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});