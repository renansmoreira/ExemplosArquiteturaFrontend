define(function() {
	var self = {};
	var _sandbox;
	var _codigoJaAplicado = false;

	self.inicializar = function(sandbox) {
		_sandbox = sandbox;

		sandbox.exibirTemplate('body', 'codigoPromocional.html', null, function(body) {
			sandbox.registrarEvento('click', body, 'button[data-js="aplicar"]', aplicar);
		});
	};

	function aplicar() {
		if (_codigoJaAplicado) return;

		_sandbox.notificar('aplicar-percentual-de-codigo-promocional', 20);
	}

	return self;
});