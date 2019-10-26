const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://semanaomini:semanaomini@semanaomini-bhapk.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req informações que o usuario manda
//res informações de retorno da requisição

//req.query = acessar query params (para filtros)
//req.params = acessar route params (edição e delete)
//req.body = acessar o corpo da requisição 

app.use(cors())
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes); 

app.listen(3333);