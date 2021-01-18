
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const super_secret = "petbooksupersecret"


const UsersControllers = {
    getUsers: async (req, res, next) => {

        let users;
        try {
            users = await User.find({}, '-senha');
        } catch (error) {
            console.log(error);
            return next(error);
        }
        res.json(
            {
                // getter: adiciona o "id" como string para nos conseguirmos utiliza-lo
                // ja que o _id eh apenas para o mongodb
                users: users.map(user => user.toObject({ getters: true }))
            }
        );
    },
    signup: async (req, res, next) => {
        const { name, email, password } = req.body;

        // verifica se ja existe um usuario no banco de dados
        let existingUser;
        try {
            existingUser = await User.findOne({ email: email });
        } catch (error) {
            return next(error);
        }

        if (existingUser) {
            return res.json({ error: "Usuario ja existe" });
        }

        // cria o usuario q vai ser salvo no banco de dados
        const createdUser = new User({
            admin: false,
            name: name,
            email: email,
            password: password,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png",
            // createdAt:,
            local: " ",
            following: [],
            followers: [],
            pets: [],
            posts: []
        });

        try {
            await createdUser.save();
        } catch (err) {
            console.log(err);
            return next();
        }

        res.json({ message: "Usuario criado com sucesso", user: createdUser })
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;

        // procurando se usuario existe
        let authenticatedUser;
        try {
            authenticatedUser = await User.findOne({ email: email });
        } catch (err) {
            return next(err);
        }

        if (!authenticatedUser) {
            return res.json({ error: "Usuario nao existe" });
        }

        // antes de usar o hash na senha
        if (authenticatedUser.password !== password) {
            return res.json({ error: "Senha incorreta" });
        }

        // aqui vai vir a autenticacao
        let token;
        try {
            token = jwt.sign(
                { userId: authenticatedUser.id, email: authenticatedUser.email }
                , super_secret,
                { expiresIn: "1hr" }
            )
        } catch (err) {
            console.log(err);
            return res.json({ error: "Erro interno" });
        }

        // response
        res.json({
            message: "Logged in! - Acessou!",
            userId: authenticatedUser.id,
            email: authenticatedUser.email,
            admin: authenticatedUser.admin,
            token: token
        });

    },
    getUser: async (req, res, next) => {

        const userId = req.params.id;

        let user;
        try {
            user = await User.findById(userId, '-password');
        } catch (error) { }

        if (!user) {
            return res.json({
                error: "Nao foi possivel achar o usuario"
            })
        }

        res.json({
            data: user.toObject({ getters: true })
        })
    }
}

module.exports = UsersControllers;