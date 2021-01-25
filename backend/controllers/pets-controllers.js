const User = require("../models/user");
const Pet = require("../models/pet");
const mongoose = require("mongoose");

const PetsController = {
  postCreatePet: async (req, res) => {
    const { name, race, type, userId } = req.body;
    const createdPet = new Pet({
      owner_pet: userId,
      pet_name: name,
      birthday: Date.now(),
      pet_race: race,
      pet_type: type,
    });

    let user;
    try {
      user = await User.findById(userId);
    } catch (error) {
      console.log(error);
      return next(error);
    }
    if (!userId) {
      res.json({
        error: "Não foi possivel encontrar ID de usuario",
      });
    }

    try {
      const session = await mongoose.startSession();
      session.startTransaction();

      await createdPet.save({ session: session });

      user.pets.push(createdPet);

      await user.save({ session: session });

      session.commitTransaction();
    } catch (error) {
      console.log(error);
      return next(error);
    }

    res.json({ pet: createdPet });
  },
};

module.exports = PetsController;
