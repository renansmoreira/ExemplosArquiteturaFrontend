define([
	'jquery',
	'text!templates/pagamento.html'
], function($, pagamentoTemplate) {
	var self = {};

	self.exibir = function() {
		$('body')
			.on('click', 'button[data-js="pagar"]', pagar)
			.append(pagamentoTemplate);
	};

	function pagar() {
		alert('Redirecionando para o Paypal');
	}

	return self;
});