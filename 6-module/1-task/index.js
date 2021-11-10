/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.name = rows.mame;
    this.age = rows.age;
    this.salary = rows.salary;
    this.city = rows.city;
  }

  get() {
    return this.render;
  }

  render(rows) {
    let elem = document.createElement('tr');
    let cell = document.createElement('td');

    for (let i = 0; i < rows.length; i++) {
      for (let cells in rows[i]) {
        cell[i].textContent = cells;
      }

    }

    return elem;
  }

}
