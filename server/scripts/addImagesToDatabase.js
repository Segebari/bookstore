import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; // Import fileURLToPath

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mongoDBURL = 'mongodb+srv://fredzugs:iotrFaMYSJIj9A5P@bookstoremern.u8lvi97.mongodb.net/books-collection?retryWrites=true&w=majority';

mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });

import Book from '../models/bookModel.js'; // Adjust the path to your Mongoose model

const imageDirectory = path.join(__dirname, '../uploads'); // Path to the directory with book images

fs.promises.readdir(imageDirectory)
  .then((files) => {
    files.forEach((file) => {
      // Create a new book document and set the image URL to the file path
      const book = new Book({
        title: 'Book Title', // Replace with actual book title
        author: 'Book Author', // Replace with actual author
        publisherYear: 2023, // Replace with the actual year
        image: `/uploads/${file}`, // Adjust the path as needed
        // Other book details
      });

      // Save the book document to the database
      book.save()
        .then(() => {
          console.log(`Added book with image: ${file}`);
        })
        .catch((err) => {
          console.error(`Error saving book: ${err}`);
        });
    });
  })
  .catch((err) => {
    console.error(err);
  });
