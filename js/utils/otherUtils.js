/**
 * Функция преобразования температуры из числа в строку (2.53 => '+3')
 * @param temp Исходная температура
 * @returns {string} Строка с температурой вида '+3', '-6'
 */
const formatTemp = (temp) => {
	temp = Math.round(temp);
	temp = temp > 0 ? `+${temp}` : temp.toString();

	return temp;
};
