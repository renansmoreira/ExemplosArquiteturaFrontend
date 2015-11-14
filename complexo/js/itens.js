define(function() {
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
	var _sandbox, _totalCheio, _total, _desconto;

	self.inicializar = function(sandbox) {
		_sandbox = sandbox;
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

		sandbox.exibirTemplate('body', 'itens.html', dados);
		sandbox.escutar('adicionar-frete', adicionarFrete);
		sandbox.escutar('aplicar-percentual-de-codigo-promocional', aplicarPercentualDeCodigoPromocional);
	};

	function adicionarFrete(valor) {
		_total += valor;

		_sandbox.alterarTexto('span[data-js="frete"]', valor);
		_sandbox.alterarTexto('span[data-js="total"]', _total);
	}

	function aplicarPercentualDeCodigoPromocional(percentual) {
		var novoDesconto = _totalCheio * percentual / 100;
		_desconto += novoDesconto;
		_total -= novoDesconto;

		_sandbox.alterarTexto('span[data-js="desconto"]', _desconto);
		_sandbox.alterarTexto('span[data-js="total"]', _total);
	}

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