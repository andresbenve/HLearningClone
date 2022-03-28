const Cart = require("../../models/Cart");

// Crear Cart de usuario. Cada usuario tiene 1 solo Cart. Esta ruta no deberia usarse porque ya se crean junto al usuario
module.exports = async (req, res, next) => {
  const data = req.body;

  try {
    const cart = new Cart(data);
    await cart.save();
    res.json({ msg: "Cart created", cart });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
