const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "Author name is needed"
        ],
        minlength: [
            3,
            "Must be at least 3 characters"
        ]
    }
}, { timestamps: true }
)

module.exports = mongoose.model('Author', AuthorSchema);


// const AuthorSchema = new mongoose.Schema(
    //{
        //books: { type: [String] },
        //name: {type: String }, 
    // },
    // {timestamps: true }
// )