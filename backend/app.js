const express = require('express');

const app = express();

// ### Configuracoes ###
const port = process.env.PORT || 5000;
// const MONGO_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mean-course.ocusw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const DB_USERNAME='PetBookAdmin';
const DB_PASSWORD='vsk1Mfu6aO83ZlEj';
const DB_NAME='PetbookDB';
const MONGO_URL = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@mean-course.ocusw.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const usersRoutes = require('./routes/users-routes');

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
app.use('/api/users', usersRoutes);


app.listen(port, () => {
    console.log('Servidor iniciado!');
});