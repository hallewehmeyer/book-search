import axios from "axios";

export default {
  // Gets all books
  getBooks: function(bookTitle) {
    console.log(bookTitle)
    return axios.get(`/api/books?q=${bookTitle}`);
  },
  // Gets the book with the given id
  getSaved: function() {
    console.log("getting saved")
    return axios.get("/api/books/saved");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
