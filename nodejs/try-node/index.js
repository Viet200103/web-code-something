const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.routes.js');

const app = express();
app.use(express.json());

// routes
app.use("/api/products", productRoutes)


// api
app.get('/', (req, res) => {
    res.send("Hello from Node API")
})

mongoose.connect("mongodb+srv://viettl200103:KJ5t0XTZfRaIQLeD@cluster0.4puch.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Database is connected!')
        app.listen(3000, () => {
            console.log(`Server running on port 3000`);
        })
    })
    .catch(err => console.log("Connect database failed", err));