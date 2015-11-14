define([
	'jquery',
	'handlebars',
	'text!templates/frete.html',
	'js/itens'
], function($, Handlebars, freteTemplate, itens) {
	var self = {};
	var freteIncluso = false;

	self.exibir = function() {
		$('body')
			.on('click', 'button[data-js="calcular-frete"]', calcular)
			.append(freteTemplate);
	};

	function calcular() {
		if (freteIncluso) return;
		
		itens.adicionarFrete(10);
		freteIncluso = true;
	}

	return self;
});