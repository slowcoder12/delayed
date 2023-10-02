const Booking = require('../models/slot');

exports.addBooking = (req,res)=>{
    const { name, email, slotTime } = req.body;

     Booking.create({
      name:name,
      email:email,
      slotTime:slotTime,
    }).then(result=>{
        console.log("booking added successfully in database");
        res.send();
    }).catch(err=>{
        console.log("Error occured",err);
    })

};

exports.getBooking = (req,res)=>{


}