const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/E05_Authors", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database! Yay!"))
    .catch(err => console.log("Something went wrong when connecting to the database, uh oh", err));