import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    console.log(res)
    return res.status(200).send('My First MERN Stack App')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });