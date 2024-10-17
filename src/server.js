const express = require("express");
// Make an instance of the Express system
// So we can configure it
// eg: routes, settings
const app = express();

// GET localhost:3000/
// .get("/", (req, res) => {})
app.get("/", (request, response) => {
    // response.send("<h1>Hello World!</h1>");
    response.json({
        message:"Hello World!"
    });
});

app.post("/", (request, response) => {
    response.json({
        message:"POST request received!"
    });
});

// http://localhost:3000/bananas
app.post("/bananas", (request, response) => {
    response.json({
        message:"POST bananas received!"
    });
});


const PokemonController = require("./controllers/pokemonController.js");
// localhost:3000/pokemon/
app.use("/pokemon", PokemonController);

module.exports = {
    app
}