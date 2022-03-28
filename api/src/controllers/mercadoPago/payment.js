const Order = require('../../models/Order');
// const Courses = require('../../models/Course');
const Cart = require('../../models/Cart');
const User = require('../../models/User');
const mercadopago = require('mercadopago');


mercadopago.configure({
    access_token: 'TEST-6505707681491929-111123-261f99cf4196b91c0d51d3a1960446c0-1017363715'
});

module.exports = async (req, res, next) => {

    const { 
        payment_id, 
        status,
        external_reference,
        } = req.query;

        console.log( "EL PAYMENT ID:" + payment_id)
        console.log("EL STATUS:" + status)
        console.log("LA EXTERNAR REFERENCE:" + external_reference)
    try {
        let order = await Order.findById({_id: external_reference});

        if(status === "approved")
            order = await Order.findOneAndUpdate(
                {
                    _id: external_reference
                }, 
                {
                    payment: "Confirmed",
                    paymentId: payment_id
                }
            );
            try {
                let ordenModified = await Order.findById({_id: external_reference, payment: "Confirmed"});

                let userCourses = await User.findOne({_id: ordenModified.user._id})
                
                userCourses.courses = userCourses.courses.concat(ordenModified.courses);
                await userCourses.save();
                
                await Cart.findOneAndUpdate({user: ordenModified.user._id}, {
                    courses: []
                })
                //  .then(() => {
                //     return res.redirect(`http://localhost:3000/mercadopago/pagos/${external_reference}`)
                // });
                res.redirect(`http://localhost:3000/orders/${external_reference}`);
            } catch(err) {
                console.log(err);
                next(err);
            }
        } catch(err) {
            console.log(err);
            next(err);
        }
};