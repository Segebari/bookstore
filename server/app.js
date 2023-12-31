import express, { request, response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";


dotenv.config();

const app = express();
const port = process.env.PORT || 5173;

//  mongoDb key

const mongoDBURL =
    'mongodb+srv://fredzugs:iotrFaMYSJIj9A5P@bookstoremern.u8lvi97.mongodb.net/books-collection?retryWrites=true&w=majority' 



// Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    console.log(res)
    return res.status(200).send('My First MERN Stack App')
});


app.use('/books', booksRoute);


// Middleware for handling CORS POLICY
// Option 1: Allpw All Origins with Default of cors(*)
// Option 2: Custom Origins
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
})); 



mongoose
  .connect(mongoDBURL)
  .then(() => {

    console.log('App  is connected to database');

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    
  })

  .catch((error) => {
    console.log(error);
  });