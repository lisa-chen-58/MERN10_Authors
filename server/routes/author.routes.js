const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAuthorList);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.get('/api/authors/:id', AuthorController.getAuthorByID);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
}

    //make sure your :id matches what it says on your controller