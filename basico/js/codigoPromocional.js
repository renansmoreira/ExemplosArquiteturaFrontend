define([
	'jquery',
	'handlebars',
	'text!templates/codigoPromocional.html',
	'js/itens'
], function($, Handlebars, codigoPromocionalTemplate, itens) {
	var self = {};
	var _codigoJaAplicado = false;

	self.exibir = function() {
		$('body')
			.on('click', 'button[data-js="aplicar"]', aplicar)
			.append(codigoPromocionalTemplate);
	};

	function aplicar() {
		if (_codigoJaAplicado) return;
		
		itens.aplicarPercentualDeCodigoPromocional(20);
		_codigoJaAplicado = true;
	}

	return self;
});