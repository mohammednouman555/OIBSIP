const express =
  require("express");

const mongoose =
  require("mongoose");

const cors =
  require("cors");

require("dotenv").config();

const pizzaRoutes =
  require("./routes/pizzaRoutes");

const authRoutes =
  require("./routes/authRoutes");

const orderRoutes =
  require("./routes/orderRoutes");

const app = express();

// MIDDLEWARE

app.use(cors());

app.use(express.json());

// DATABASE

mongoose.connect(
  process.env.MONGO_URI
)

.then(() => {

  console.log(
    "MongoDB Connected"
  );
})

.catch((error) => {

  console.log(error);
});

// ROUTES

app.use(
  "/api/pizzas",
  pizzaRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.get("/", (req, res) => {

  res.send(
    "Pizza API Running"
  );
});

// PORT

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});