class ActionsPanel {
	constructor() {
		this.el = document.getElementById('actionsPanel');
	}

	addButtonsClickEventListeners(handlers) {
		const buttons = this.el.querySelectorAll('button');

		buttons.forEach((button) => {
			const action = handlers[button.id];

			if (action) {
				button.addEventListener('click', action);
			}
		});
	};
}
