const User = require("../../models/User");
const bcrypt = require("bcrypt");

// Crear User desde el front (solo hacemos una copia de lo que administra Auth0)

module.exports = async (req, res, next) => {
  try {
    const { fullName, password, email } = req.body;
    const name = fullName;
    console.log("name", fullName)
    if (!name) {
      return res.status(400).json({
        error: "Please provide a name",
      });
    }
    
    if (!password) {
        return res.status(400).json({
            error: "Please provide a password",
        });
    }
    
    if (!email) {
      return res.status(400).json({
        error: "Please provide an email",
      });
    }

    const isUserInDB = await User.findOne({ email: email });
    if (isUserInDB) {
      return res.status(400).json({
        error: "The email is already in use",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      password: hashedPassword,
      email,
    });
    await user.save();
    res.json({
      msg: "User created",
      user,
    });
  } catch (err) {
    next(err);
  }
};

