document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('tooltipBtn');
	const tooltip = document.getElementById('tooltip-click');

	if (button && tooltip) {
		button.addEventListener('click', async () => {
			try {
				await navigator.clipboard.writeText('luis.rangeldiaz@gmail.com');

				tooltip.classList.remove('invisible', 'opacity-0');
				tooltip.classList.add('visible', 'opacity-100');
			} catch (err) {
				console.error('Error copiando al portapapeles:', err);
			}
		});

		button.addEventListener('mouseleave', () => {
			setTimeout(() => {
				tooltip.classList.remove('visible', 'opacity-100');
				tooltip.classList.add('invisible', 'opacity-0');
			}, 500);
		});
	}
});
