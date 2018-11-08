const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { port, header, transporter } = require(`./public/config/config`);

app.use(header);

// app.get('/', (req, res, next) => { // localhost:3000/?URL_ENV=development
//     global.URL_ENV = req.query.URL_ENV || 'production';
//     next();
// });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/env', (req,res) => res.send({'NODE_ENV':process.env.NODE_ENV}));
// app.post('/tracking', db);

app.post('/contact', (req, res, next) => {
    const contactData = {
        thisname : req.body.data[0].value,
        thismail : req.body.data[1].value,
        thisubject : req.body.data[2].value
    }

    let randomMS = Math.floor(Math.random() * (1500 - 400 + 1)) + 400;

    sendThisMail(contactData, (err, data) => {
        if (err) {
            res.status(200).json({ success: false, err: err });
        } else {
            setTimeout(() => {
                res.status(200).json({ success: true, data: data, randomMS: randomMS });
            }, randomMS);
        }
    });
});

// ************************************ SEND EMAIL ***********************************
let sendThisMail = (data, callback) => {
    let mailOptions = {
        from: data.thismail,
        to: 'siciliastandup@siciliastandup.com',
        subject: `SSU- ${data.thisubject}`,
        html: `
                <h2>siciliastandup FORM</h2>
                <p>Nombre: ${data.thisname} </p>
                <p>Correo: ${data.thismail}</p>
                <p>Mensaje: ${data.thisubject} </p>
                `
    };
    transporter.sendMail(mailOptions, callback);
}

// -----------------------------------------------------------
let server = app.listen(port, () => {
    console.log('Sicilia running at port %s', server.address().port);
});
