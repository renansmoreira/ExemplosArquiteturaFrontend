define(function() {
	var self = {};
	var _sandbox;
	var _freteIncluso = false;

	self.inicializar = function(sandbox) {
		_sandbox = sandbox;

		sandbox.exibirTemplate('body', 'frete.html', null, function(body) {
			sandbox.registrarEvento('click', body, 'button[data-js="calcular-frete"]', calcular);
		});
	};

	function calcular() {
		if (_freteIncluso) return;

		_sandbox.notificar('adicionar-frete', 10);
		_freteIncluso = true;
	}

	return self;
});