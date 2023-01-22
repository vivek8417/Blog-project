import express from "express";
import mongoose from "mongoose";
import router from "./routes/blog-routes.js";


let app = express()


app.use(express.json())
app.use("/", router)


mongoose.connect("mongodb+srv://admin:MwhoXvDsKR708gOo@cluster0.yxooqxf.mongodb.net/BlogWebsite?retryWrites=true&w=majority")
    .then(() => app.listen(5000))
    .then(() => console.log("Connected to the database and listing to localhost at 5000"))
    .catch(err => {
        console.log(err)
    })





