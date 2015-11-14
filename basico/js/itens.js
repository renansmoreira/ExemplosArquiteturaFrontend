define([
	'jquery',
	'handlebars',
	'text!templates/itens.html'
], function($, Handlebars, itensTemplate) {
	var self = {};
	var _itens = [{
		nome: 'Carrinho de bebê',
		preco: 640.00,
		quantidade: 1
	}, {
		nome: 'Camiseta polo',
		preco: 40.00,
		quantidade: 1
	}, {
		nome: 'Hub USB',
		preco: 20.00,
		quantidade: 1
	}];
	var _totalCheio, _total, _desconto;

	self.exibir = function() {
		_totalCheio = somar(_itens);
		_desconto = calcularDesconto(_totalCheio);
		_total = _totalCheio - _desconto;

		var dados = {
			subTotal: _totalCheio,
			desconto: _desconto,
			frete: 0,
			total: _total,
			itens: _itens
		};

		var template = Handlebars.compile(itensTemplate);
		$('body').append(template(dados));
	};

	self.adicionarFrete = function(valor) {
		_total += valor;

		$('span[data-js="frete"]').text(valor);
		$('span[data-js="total"]').text(_total);
	};

	self.aplicarPercentualDeCodigoPromocional = function(percentual) {
		var novoDesconto = _totalCheio * percentual / 100;
		_desconto += novoDesconto;
		_total -= novoDesconto;

		$('span[data-js="desconto"]').text(_desconto);
		$('span[data-js="total"]').text(_total);
	};

	function somar(itens) {
		var soma = 0;

		itens.map(function(item) {
			soma += item.preco;
		});

		return soma;
	}

	function calcularDesconto(subTotal) {
		return subTotal * 20 / 100;
	}

	return self;
});