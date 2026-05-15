const mongoose =
  require("mongoose");

const orderSchema =
  new mongoose.Schema({

    userId: {

      type: String,

      required: true
    },

    items: [

      {

        name: String,

        price: Number,

        quantity: Number,

        image: String
      }
    ],

    totalPrice: {

      type: Number,

      required: true
    },

    createdAt: {

      type: Date,

      default: Date.now
    }
  });

module.exports =
  mongoose.model(
    "Order",
    orderSchema
  );