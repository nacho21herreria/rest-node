require('../config/config')
const express = require('express')
const app = express()
const bodyParse = require('body-parser');


app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


app.get('/', function (req, res) {
    res.json('Hello World')
})

app.get('/usuarios', function (req, res) {
    res.json('Consulta usuarios')
})

app.get('/usuario/:id', function (req, res) {
    res.json('consulta ')
})

app.post('/usuario', function (req, res) {

    let body = req.body;
    if (body.name == undefined) {
        res.status(400).json(
            { ok: false, 
              msj: 'Name is required' });
    } else {

        res.json({
            body
        })
    }
});

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando puerto ${process.env.PORT}`)
})