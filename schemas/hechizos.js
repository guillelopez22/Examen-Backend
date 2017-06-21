var mongoose = require('mongoose');

var HechizoSchema = new mongoose.Schema({
  nombre : String,
  dificultad : String,
  tiempo_aprendizaje : Number
});

module.exports = mongoose.model('hechizos', HechizosSchema);
