const mongoose = require ("mongoose");

/// db url
/// here "funDB" is the name of DataBase
const url = "mongodb://localhost:27017/funDB";


mongoose.set("strictQuery", false);
mongoose.connect(url);


/// collection or table schema 
const FunSchema = new mongoose.Schema({
    name: String,
    price: Number,
    rating: Number,
    review: String
});

/// create a collection or table schema and register it to the database.
const Funny = mongoose.model("funny", FunSchema);


/// to insert a record to the collection...
const funny = new Funny ({
    name: "Apple",
    price : 80,
    rating: 4.5,
    review: "An apple a day, keeps the doctors away..."
});

/// to save the data inserted above and close the connection with db.
funny.save();