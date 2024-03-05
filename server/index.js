import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import {connectToDb} from "./config/Connection.js";
import postRouter from "./routes/post.js";

dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 1905;

app.use('/posts', postRouter)


app.listen(PORT, async () => {
    console.log(`Server is running on ${PORT} port.`);
    await connectToDb();
})