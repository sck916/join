const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, userValidator } = require("../models/User");

const usersController = {
  getUsers: async (req, res) => {
    const users = await User.find().select("-__v");
    res.send(users);
  },
  registerUser: async (req, res) => {
    const { error } = userValidator(req.body);
    if (error) {
      const errorsArray = error.details.map((error) => error.message);
      return res.status(400).send(errorsArray);
    }

    let user = await User.findOne({ username: req.body.username });
    if (user) return res.status(400).send({ message: "Username is taken!" });

    user = new User(
      _.pick(req.body, ["firstName", "lastName", "username", "password"])
    );

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    user = await user.save();

    user = await User.findById(user._id).select("-__v -password");

    const token = user.generateAuthToken();

    const resObj = {
      user: user,
      token: token,
    };

    res.send(resObj);
  },
};

module.exports = usersController;
