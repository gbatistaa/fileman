import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
  }),
);

app.listen(PORT, () => {
  console.log("Server running on port 4000");
});
