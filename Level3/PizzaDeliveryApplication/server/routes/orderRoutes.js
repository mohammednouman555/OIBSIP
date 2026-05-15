const express =
  require("express");

const router =
  express.Router();

const Order =
  require("../models/Order");

// CREATE ORDER

router.post(
  "/",

  async (req, res) => {

    try {

      const order =
        new Order(req.body);

      const savedOrder =
        await order.save();

      res.status(201).json(
        savedOrder
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message
      });
    }
  }
);

// GET USER ORDERS

router.get(
  "/:userId",

  async (req, res) => {

    try {

      const orders =
        await Order.find({

          userId:
            req.params.userId
        });

      res.json(orders);

    } catch (error) {

      res.status(500).json({

        message:
          error.message
      });
    }
  }
);

module.exports = router;