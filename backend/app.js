const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const app = express();


// ### Configuracoes ###
const port = process.env.PORT || 5000;
const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mean-course.ocusw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const usersRoutes = require('./routes/users-routes');
const petsRoutes = require('./routes/pet-routes')
// ### MiddleWares ###
// BodyParser do express
app.use(express.json());
// CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH')
    next();
});

// ### Routes ###
app.use('/users', usersRoutes);

app.use('/pet', petsRoutes)

// "middleware" de erro
 app.use((req, res, next) => {
    res.json({ message: "Nao foi possivel achar a rota" });
})

// conexao com banco de dados
mongoose
    .connect(
        MONGO_URL,
        {
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        }
    ).then(
        app.listen(port, () => {
            console.log('Servidor iniciado!');
        })
    ).catch(err => {
        
        console.log(err);
    });
