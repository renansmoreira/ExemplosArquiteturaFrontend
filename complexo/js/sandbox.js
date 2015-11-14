define([
	'jquery'
], function() {
	return function(controlador) {
		var self = this;
		var eventos = {};

		self.exibirTemplate = function(container, nomeDoTemplate, dados, callback) {
			var urlDoTemplate = 'text!templates/' + nomeDoTemplate;

			require([
				urlDoTemplate,
				'handlebars'
			], function(template, Handlebars) {
				var jContainer = $(container);
				var conteudo = Handlebars.compile(template)(dados);

				jContainer.append(conteudo);

				if (callback)
					callback(jContainer);
			});

		};

		self.escutar = function(nomeDoEvento, callback) {
			controlador.escutar(nomeDoEvento, callback);
		};

		self.notificar = function(nomeDoEvento, callback) {
			controlador.notificar(nomeDoEvento, callback);
		};

		self.registrarEvento = function(evento, container, alvo, callback) {
			$(container).on(evento, alvo, callback);
		}

		self.alterarTexto = function(seletor, novoTexto) {
			$(seletor).text(novoTexto);
		};
	};
});