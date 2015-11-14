var configuracoes = {
	baseUrl: '',

	urlArgs: 'antiCache=' + (new Date()).getTime(),

	paths: {
		'text': 'js/lib/requirejs-text/text',
		'jquery': 'js/lib/jquery/dist/jquery',
		'handlebars': 'js/lib/handlebars/handlebars.amd'
	},

	shim: {
		'jquery': {
			exports: '$'
		}
	}
};

require.config(configuracoes);

require([
	'js/carrinhoView'
], function(carrinhoView) {
	carrinhoView.exibir();
});