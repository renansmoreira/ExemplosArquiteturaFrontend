define([
	'js/gerenciadorDeModulos',
	'js/itens',
	'js/frete',
	'js/codigoPromocional',
	'js/pagamento'
], function(gerenciadorDeModulos, itens, frete, codigoPromocional, pagamento) {
	var self = {};

	self.exibir = function() {
		gerenciadorDeModulos.registrar('itens', itens);
		gerenciadorDeModulos.registrar('frete', frete);
		gerenciadorDeModulos.registrar('codigoPromocional', codigoPromocional);
		gerenciadorDeModulos.registrar('pagamento', pagamento);

		gerenciadorDeModulos.iniciarTodos();
	};

	return self;
});