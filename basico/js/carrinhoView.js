define([
	'js/itens',
	'js/frete',
	'js/pagamento',
	'js/codigoPromocional'
], function(itens, frete, pagamento, codigoPromocional) {
	var self = {};

	self.exibir = function() {
		itens.exibir();
		frete.exibir();
		pagamento.exibir();
		codigoPromocional.exibir();
	};

	return self;
});