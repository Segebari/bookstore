import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

// Route for Save a new book
router.post('/', async (req, res) => {
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
router.get('/', async (req,res) => {
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
router.get('/:id', async (req,res) => {
    try {
        const { id } = req.params;

        const book = await Book.findById(id);

        return res.status(200).json(book);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


// Route for UPDATE a Book from database
router.put('/:id', async (req,res) => {
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

        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Book not found'});
        }

        return res.status(200).send({ message: 'Book updated succesfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

// Route for Delete a Book from database
router.delete('/:id', async (req,res) => {
    try {
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book deleted successfully'});        
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});


export default router;