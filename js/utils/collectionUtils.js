/**
 * Функция сортировки коллекции по заданному свойству
 * @param arr Исходная коллекция
 * @param prop Поле, по которому нужно сортировать
 * @param direction Порядок сортировки ('up' - по возрастанию, 'down' - по убыванию)
 * @returns {{byNumber(): *, byString(): *}|this} Объект с функциями. byNumber() - сортировка чисел, byString() - сортировка строк
 */
const sortCollection = (arr, prop, direction = 'up') =>	{
	const arrCopy = [...arr];

	return {
		byNumber() {
			return arrCopy.sort((a, b) => {
				const newA = parseInt(a[prop]);
				const newB = parseInt(b[prop]);

				return direction === 'up' ? newA - newB : newB - newA;
			});
		},
		byString() {
			return arrCopy.sort((a, b) => (
				direction === 'up'
					? (a[prop]).localeCompare(b[prop])
					: (b[prop]).localeCompare(a[prop])
			));
		},
	}
};
