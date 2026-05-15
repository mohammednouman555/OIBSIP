const express =
  require("express");

const router =
  express.Router();

const Pizza =
  require("../models/Pizza");

// GET ALL PIZZAS

router.get("/", async (req, res) => {

  try {

    const pizzas =
      await Pizza.find();

    res.json(pizzas);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
});

// ADD PIZZA

router.post("/", async (req, res) => {

  try {

    const pizza =
      new Pizza(req.body);

    const savedPizza =
      await pizza.save();

    res.status(201).json(savedPizza);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE PIZZA

router.delete(
  "/:id",

  async (req, res) => {

    try {

      await Pizza.findByIdAndDelete(
        req.params.id
      );

      res.json({

        message:
          "Pizza deleted"
      });

    } catch (error) {

      res.status(500).json({

        message:
          error.message
      });
    }
  }
);

module.exports = router;