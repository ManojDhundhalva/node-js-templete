import express from "express";
import cors from "cors";
import config from "./config/index.js";
import router from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router());

app.get("/", (_, res) => res.send("Hello, World!"));

app.listen(config.PORT, () => { 
    console.log(`Server is listening on http://localhost:${config.PORT}`)
});