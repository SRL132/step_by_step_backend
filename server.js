const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();
const fs = require('fs');
//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,

})
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

//routes middleware
fs.readdirSync('./src/routes').map(file => app.use('/api/', require(`./src/routes/${file}`)))

//port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

