var usuariosController = require('./controllers/usuariosController');
var hechizosController = require('./controllers/hechizosController');
exports.endpoints = [
	{
		method: 'GET',
		path: '/',
		config:{
			handler:function(request, reply){
				console.log(request.query);
				return reply('Hola');
			}
		}
	},
	{
			method: 'GET',
		 	path: '/usuarios',
		 	config: usuariosController.getUsuarios
 	},

	{
			method: 'GET',
			path: '/usuarios/searchbyid/{_id}',
			config: usuariosController.getUsuarioId
 	},
	{
			method: 'GET',
			path: '/usuarios/searchbyname/{nombre}',
			config: usuariosController.getUsuarioName
 	},
	{
			method: 'GET',
			path: '/usuarios/searchbyUsername/{username}',
			config: usuariosController.getUsuarioUsername
 	},
 	{
			method: 'GET',
			path: '/usuarios/aprendidos/{_id}',
			config: usuariosController.getUsuarioAprendidos
 	}
 	{
 			method: 'PUT',
 			path: '/usuarios/update/{_id}',
 			config: usuariosController.modifyUsuario

 	},
	{
			method: 'DELETE',
			path: '/usuarios/delete/{_id}',
			config: usuariosController.deleteUsuario
 	},
	{
			method: 'POST',
			path: '/usuarios/create',
			config: usuariosController.createUsuario
 	},
	{
			method: 'GET',
		 	path: '/hechizos',
		 	config: hechizosController.getHechizos
 	},

	{
			method: 'GET',
			path: '/hechizos/searchbyid/{_id}',
			config: hechizosController.getHechizoId
 	},
	{
			method: 'GET',
			path: '/hechizos/searchbyname/{nombre}',
			config: hechizosController.getHechizoName
 	},
	{
			method: 'GET',
			path: '/hechizos/searchbyDificultad/{dificultad}',
			config: hechizosController.getHechizoDificultad
 	},
 	{
			method: 'GET',
			path: '/hechizos/searchbyDificultad/{tiempo_aprendizaje}',
			config: hechizosController.getHechizoDificultad
 	}
 	{
 			method: 'PUT',
 			path: '/hechizos/update/{_id}',
 			config: hechizosController.modifyHechizo

 	},
	{
			method: 'DELETE',
			path: '/hechizos/delete/{_id}',
			config: hechizosController.deleteHechizo
 	},
	{
			method: 'POST',
			path: '/hechizos/create',
			config: hechizosController.createHechizo
 	}
];
