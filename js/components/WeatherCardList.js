class WeatherCardList {
	constructor(list) {
		this._el = document.getElementById('weatherCardList');
		this._nameSortDirection = 'up';
		this._tempSortDirection = null;
		this._list = list;

		this.render();
	}

	static getWeatherListItemTemplate(item) {
		const { name = '', temp = '', weather = {} } = item || {};
		let img = '';

		if (Object.entries(weather).length) {
		  img = `<img src="${weather.icon}" alt="${weather.description}">`;
		}

		const el = document.createElement('div');
		el.classList.add('weather-card', 'column', 'justify-around', 'items-center', 'ma-4', 'px-3');

		el.innerHTML = (
			`
		    <div class="weather-card__header text-center skeleton">${name}</div>
		    <div class="weather-card__temperature-value skeleton">${temp}</div>
		    <div class="weather-card__weather-icon skeleton">${img}</div>
			`
		);

		return el;
	}

	set list(list) {
		this._list = (
			this.isListValid
				? list
				: this.getSortedListByName(list)
		);

		this.render();
	}

	createWeatherList() {
		const listFragment = new DocumentFragment();

		this._list.forEach((el) => {
			listFragment.appendChild(WeatherCardList.getWeatherListItemTemplate(el));
		});

		return listFragment;
	}

	getSortedListByName(list = this._list) {
		return sortCollection(list, 'name', this._nameSortDirection).byString();
	}

	sortByName() {
		this._nameSortDirection = this._nameSortDirection === 'up' ? 'down' : 'up';
		this.list = this.getSortedListByName();
		this._tempSortDirection = null;
	}

	sortByTemp(direction = 'up') {
		if (this._tempSortDirection !== direction) {
			this.list = sortCollection(this._list, 'temp', direction).byNumber();
			this._tempSortDirection = direction;
		}
	}

	get isListValid() {
		return this._list && this._list.every(el => el);
	}

	render() {
		this._el.innerHTML = '';
		this._el.appendChild(this.createWeatherList(this._list));
	}
}
