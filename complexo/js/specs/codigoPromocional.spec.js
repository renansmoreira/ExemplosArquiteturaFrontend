define([
	'sandbox',
	'js/codigoPromocional'
], function(sandbox, codigoPromocional) {
	
	describe('Código promocional', function() {
		it('deve rederizar diretamente na body', function() {
			var containerExibido;
			var sandboxSpy = spyOn(sandbox, 'exibirTemplate').and.callFake(function(container) {
				containerExibido = container;
			});

			codigoPromocional.inicializar(sandboxSpy);

			expect(containerExibido).toBe('body');
		});

		it('deve rederizar o template correto', function() {
			var templateExibido;
			var sandboxSpy = spyOn(sandbox, 'exibirTemplate').and.callFake(function(container, template) {
				templateExibido = template;
			});

			codigoPromocional.inicializar(sandboxSpy);

			expect(templateExibido).toBe('codigoPromocional.html');
		});

		it('deve disparar o evento ao clicar no botão', function() {
			var sandboxSpy = spyOn(sandbox, 'notificar');
			codigoPromocional.inicializar(sandboxSpy);

			$('button[data-js="aplicar"]').click();

			expect(sandboxSpy.notificar).toHaveBeenCalledWith('aplicar-percentual-de-codigo-promocional', 20);
		});

		it('não deve disparar o evento ao executar a ação mais de uma vez', function() {
			var sandboxSpy = spyOn(sandbox, 'notificar');
			codigoPromocional.inicializar(sandboxSpy);
			$('button[data-js="aplicar"]').click();

			$('button[data-js="aplicar"]').click();

			expect(sandboxSpy.notificar.calls.count()).toBe(2);
		});
	});
});