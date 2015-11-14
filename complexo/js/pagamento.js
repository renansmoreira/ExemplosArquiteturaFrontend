define(function() {
	var self = {};

	self.inicializar = function(sandbox) {
		sandbox.exibirTemplate('body', 'pagamento.html', null, function(body) {
			sandbox.registrarEvento('click', body, 'button[data-js="pagar"]', pagar);
		});
	};

	function pagar() {
		alert('Redirecionando para o Paypal');
	}

	return self;
});