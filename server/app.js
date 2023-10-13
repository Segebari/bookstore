import express, { request, response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

//  mongoDb key

const mongoDBURL =
    'mongodb+srv://fredzugs:iotrFaMYSJIj9A5P@bookstoremern.u8lvi97.mongodb.net/books-collection?retryWrites=true&w=majority' 



// Middleware for parsing request body
app.use(express.json());

app.get('/', (req, res) => {
    console.log(res)
    return res.status(200).send('My First MERN Stack App')
});


// Route for Save a new book
app.post('/books', async (req, res) => {
    try {
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publisherYear
        ) {
            return res.status(400).send({
                message: 'Send all requred fields: author, publisherYear',
            });
        }

        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publisherYear: req.body.publisherYear,
        };

        const book = await Book.create(newBook);
        res.status(201).send(book); // Return the newly created book
    } catch(error) {
        console.log(error.message);
        res.status(500).send({ message: error.message});
    }
});


// Route for GET ALL Books from database
app.get('/books', async (req,res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// Route for GET One Book from database by ID
app.get('/books', async (req,res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


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