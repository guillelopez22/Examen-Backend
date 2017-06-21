var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  nombreCompleto : String,
  username: String,
  previaOcupacion: String,
  fecha_nacimiento: Number,
  paisOrigen: String,
  Repertorio: [String],
  Amigos: [String]
});

module.exports = mongoose.model('usuario', UsuarioSchema);
