var mongoose = require('mongoose');

var HechizosSchema = new mongoose.Schema({
  nombre : String,
  dificultad : String,
  tiempo_aprendizaje : Number
});

module.exports = mongoose.model('hechizos', HechizosSchema);
