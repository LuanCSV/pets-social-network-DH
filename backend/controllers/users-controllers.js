
const User = require('../models/user');


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
            admin: true,
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

        res.json({ user: createdUser })
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

        // response
        res.json({
            message: "Logged in! - Acessou!"
        })

    }
}

module.exports = UsersControllers;