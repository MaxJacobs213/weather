const cityIds = [
	524901,
	703448,
	2643743,
	704508,
	616743,
	701822,
	5115985,
	702550,
	1850147,
	2643123,
];

const apiKey = '433e0a6c0c7620c67a844f8293ce4b24';
const url = `http://api.openweathermap.org/data/2.5/group?id=${cityIds.join(',')}&APPID=${apiKey}&units=metric`;
const iconsBaseUrl = 'http://openweathermap.org/img/wn/';

const getIconUrl = name => `${iconsBaseUrl}${name}@2x.png`;

const fetchData = async () => {
	let initList = Array(cityIds.length).fill(null);
	const weatherListInstance = new WeatherCardList(initList);

	const result = await fetch(url);

	if (result.ok) {
		const json = await result.json();

		weatherListInstance.list = json.list.map(el => ({
			name: el.name,
			temp: formatTemp(el.main.temp),
			weather: {
				icon: getIconUrl(el.weather[0].icon),
				description: el.weather[0].description,
			},
		}));

		const actionsPanelInstance = new ActionsPanel();

		actionsPanelInstance.addButtonsClickEventListeners({
			tilesAction: () => toggleClass('#weatherCardList', 'rows-style', false),
			rowsAction: () => toggleClass('#weatherCardList', 'rows-style'),
			textSortAction: () => weatherListInstance.sortByName(),
			tempUpSortAction: () => weatherListInstance.sortByTemp('up'),
			tempDownSortAction: () => weatherListInstance.sortByTemp('down'),
		});
	} else {
		console.error('Error: ', result.status);
	}
};

window.addEventListener('load', fetchData);
