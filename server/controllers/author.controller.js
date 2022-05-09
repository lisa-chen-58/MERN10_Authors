const Author = require("../models/author.model");

module.exports.getAuthorList = (req, res) => {
    Author.find({}).collation({locale:'en', strength: 2}).sort({authorName:1})
        //will take in case-sensitive ones
        .then(allAuthors => {
            res.json( allAuthors )
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })}

module.exports.createNewAuthor = (req,res) => {
    Author.create(req.body)
    .then(newlyCreatedAuthor => {
        res.json( newlyCreatedAuthor )
    })
    .catch(err => {
        console.log(err);
        res.status(400).json(err)
    })}

module.exports.getAuthorByID = (req,res) => {
    Author.findOne({_id: req.params.id})
        .then(oneAuthor => {
            res.json( oneAuthor )
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        { _id: req.params.id },
        req.body, { new: true, runValidators: true } 
        // new: true is an option that ensures we are returning a new Author
        // runValidators: true these only work for post requests not put requests
    )
        .then(updatedAuthor => {
            res.json({ updatedAuthor })
        })
        .catch(err => {
            console.log(err);
            response.status(400).json(err)
        })}
    
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result })
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })}