require('../config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//configuracion global de rutas
app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true
    },
    (err, res) => {
        if (err) throw err;
        console.log('DataBase online')
    });

app.listen(process.env.PORT, () => {
    console.log(`Escuhando en el puerto: `, process.env.PORT);
});


//mLab credentials
//user: solaresdb
//pass: 5peNgVzC68cSJ55E

//String connection: mongodb+srv://solaresdb:5peNgVzC68cSJ55E@cluster0.vyzjj.mongodb.net/cafe