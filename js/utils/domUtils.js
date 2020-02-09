/**
 * Функция для добавления/удаления класса DOM елемента
 * @param selector Css селектор элемента
 * @param _class Добавляемый/удаляемый класс
 * @param isAdd Добавить или удалить класс (true, false)
 */
const toggleClass = (selector, _class, isAdd = true) => {
  const el = document.querySelector(selector);

  if (el) {
    const action = isAdd ? 'add' : 'remove';
    el.classList[action](_class);
  }
};
