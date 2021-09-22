const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  originalTitle: {
    type: String,
  },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
