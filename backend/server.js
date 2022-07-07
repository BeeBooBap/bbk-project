import express from "express";
import cors from "cors";
import restaurants from "./api/restaurants.route.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// specifying routes
app.use("/api/v1/restaurants", restaurants); // main URL
app.use("*", (req, res) => res.status(404).json({error: "not found"}) ) // to be displayed where no url exists

export default app;


