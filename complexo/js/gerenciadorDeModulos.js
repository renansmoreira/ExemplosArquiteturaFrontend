define([
	'js/sandbox'
], function(Sandbox) {
	var self = {};
	var _modulos = {};
	var _eventos = {};

	self.registrar = function(moduloId, modulo) {
		_modulos[moduloId] = modulo;
	};

	self.iniciar = function(moduloId) {
		_modulos[moduloId].inicializar(new Sandbox(this));
	};

	self.iniciarTodos = function() {
		for (var moduloId in _modulos) {
			self.iniciar(moduloId);
		}
	};

	self.escutar = function(nomeDoEvento, callback) {
		if (_eventos[nomeDoEvento])
			throw new Error('Nome de evento já registrado');

		_eventos[nomeDoEvento] = callback;
	};

	self.notificar = function(nomeDoEvento, dados) {
		if (!_eventos[nomeDoEvento]) return;

		_eventos[nomeDoEvento](dados);
	};

	return self;
});