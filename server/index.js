// Importing ENV variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

//  configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// Micro-services Route
import Auth from "./API/Auth"
import Restaurant from "./API/Restaurant"
import Food from "./API/Food"
import Image from "./API/Image"
import Reviews from "./API/reviews"
import User from "./API/User"
import Orders from "./API/orders"
import Menu from "./API/menu"
import Payments from "./API/Payments"
import MailService from "./API/Mail";

// Database Connection
import ConnectDB from "./database/connection";

// passport config
googleAuthConfig(passport);
routeConfig(passport);

const zomato = express();

//application middleware
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());

// Application Routes
zomato.use("/auth",Auth);
zomato.use("/restaurant" , Restaurant);
zomato.use("/food" , Food);
zomato.use("/image" , Image);
zomato.use("/reviews" , Reviews);
zomato.use("/order", Orders);
zomato.use("/user" , User);
zomato.use("/user" , User);
zomato.use("/menu" , Menu);
zomato.use("/payments" , Payments);
zomato.use("/mail" , MailService);




zomato.get("/", (req, res) => {
  res.json({ message: "Hey Server is running" });
});

zomato.listen(4000, () => {
  ConnectDB()
    .then(() => {
      return console.log("Server is Running🚀");
    })
    .catch(() => {
      return console.log("Server is Running but Database Connection Failed");
    });
});
