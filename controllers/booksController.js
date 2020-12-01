const db = require("../models");
const axios = require("axios")
// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    // db.Book
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    console.log(req.query)
    axios.get("https://www.googleapis.com/books/v1/volumes",{params:req.query}).then(results=>{
      console.log(results.data.items)
      const selectedBooks=results.data.items.filter(result=>{
        if(result.volumeInfo.title && result.volumeInfo.authors && result.volumeInfo.description && result.volumeInfo.imageLinks && result.volumeInfo.imageLinks.thumbnail)
          return true
      })
      res.json(selectedBooks)
    })
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
