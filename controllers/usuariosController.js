var usuario = require('../schemas/usuario.js');
var mongoose = require('mongoose');

exports.getUsuarios = {
  handler: function(request, reply){
    var usuarios = usuario.find({});
    reply(usuarios);
  }
}
exports.getUsuarioId = {
  handler : function(request, reply){
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(!err && Usuario){
        return reply(Usuario);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getUsuarioName = {
  handler : function(request, reply){
    usuario.find({'nombreCompleto' : request.params.nombreCompleto}, function(err, Usuarios){
      if(!err && Usuarios){
        return reply(Usuarios);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.getUsuarioUsername = {
  handler : function(request, reply){
    usuario.find({'username' : request.params.username}, function(err, Usuarios){
      if(!err && Usuarios){
        return reply(Usuarios);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Usuario not found'));
      }
    });
  }
}
exports.modifyUsuario = {
  handler: function(request, reply){
    usuario.update(
      {'_id': request.params._id},
      {$set:
        {
          nombreCompleto : request.payload.nombreCompleto,
          username : request.payload.username,
          previaOcupacion : request.payload.previaOcupacion,
          fecha_nacimiento : request.payload.fecha_nacimiento,
          paisOrigen : request.payload.paisOrigen,
          Repertorio : request.payload.Repertorio,
          Amigos : request.payload.Amigos  
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Usuario not found'));
        }else{
          return reply('updated succesfully');
        }
      }
      );
  }
}
exports.deleteUsuario = {
  handler: function(request, reply){
    usuario.findOne({'_id' : request.params._id}, function(err, Usuario){
      if(err){
        return reply(boom.badRequest("Could not delete usuario"));
      }else if(!err && Usuario){
        Usuario.remove();
        return reply('Usuario deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createUsuario = {
  handler: function(request, reply){
    var newUsuario = new usuario({
      nombreCompleto : request.payload.nombreCompleto,
      username : request.payload.username,
      previaOcupacion : request.payload.previaOcupacion,
      fecha_nacimiento : request.payload.fecha_nacimiento,
      paisOrigen : request.payload.paisOrigen,
      Repertorio : request.payload.Repertorio,
      Amigos : request.payload.Amigos
    });
    newUsuario.save(function(err){
      if(!err){
        return reply({
          success: true
        });
      }else{
        return reply({
          success: false
        })
      }
    });
  }
}
