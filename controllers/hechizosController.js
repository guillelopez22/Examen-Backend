var hechizo = require('../schemas/hechizo.js');
var mongoose = require('mongoose');

exports.getHechizos = {
  handler: function(request, reply){
    var hechizos = hechizo.find({});
    reply(hechizos);
  }
}
exports.getHechizoId = {
  handler : function(request, reply){
    hechizo.findOne({'_id' : request.params._id}, function(err, Hechizo){
      if(!err && Hechizo){
        return reply(Hechizo);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Hechizo not found'));
      }
    });
  }
}
exports.getHechizoName = {
  handler : function(request, reply){
    hechizo.find({'nombre' : request.params.nombre}, function(err, Hechizos){
      if(!err && Hechizos){
        return reply(Hechizos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Hechizo not found'));
      }
    });
  }
}
exports.getHechizoDificultad = {
  handler : function(request, reply){
    hechizo.find({'dificultad' : request.params.dificultad}, function(err, Hechizos){
      if(!err && Hechizos){
        return reply(Hechizos);
      }else if(!err){
        return reply(boom.notFound());
      }else if(err){
        return reply(boom.wrap(err, 'Hechizo not found'));
      }
    });
  }
}
exports.modifyHechizo = {
  handler: function(request, reply){
    hechizo.update(
      {'_id': request.params._id},
      {$set:
        {
          nombre : request.payload.nombre,
          dificultad : request.payload.dificultad,
          tiempo_aprendizaje : request.payload.tiempo_aprendizaje
        }
      }, function(err){
        if(err){
          return reply(boom.wrap(err, 'Hechizo not found'));
        }else{
          return reply('updated succesfully');
        }
      }
      );
  }
}
exports.deleteHechizo = {
  handler: function(request, reply){
    hechizo.findOne({'_id' : request.params._id}, function(err, Hechizo){
      if(err){
        return reply(boom.badRequest("Could not delete Hechizo"));
      }else if(!err && Hechizo){
        Hechizo.remove();
        return reply('Hechizo deleted succesfully');
      }else if(!err){
        return reply(boom.notFound());
      }
    });
  }
}
exports.createHechizo = {
  handler: function(request, reply){
    var newHechizo = new hechizo({
      nombre : request.payload.nombre,
      dificultad : request.payload.dificultad,
      tiempo_aprendizaje : request.payload.tiempo_aprendizaje
    });
    newHechizo.save(function(err){
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
