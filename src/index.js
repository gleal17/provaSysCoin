const express = require('express');
const response = require('./response')
const bodyParser = require('body-parser');
const routes = express.Router();

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('ROOT ONLY, ACCESS DENIED.');

});

app.get('/provasyscoin', response.msg);
app.listen(process.env.PORT || 8000);