import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db/database.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

const corsOptions = {
  origin: ["https://along-preview.netlify.app", "http://localhost:5173"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("App is running on port: ", port);
});
