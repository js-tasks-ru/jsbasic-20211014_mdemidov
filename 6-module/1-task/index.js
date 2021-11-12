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

    this.rows = rows;
    this.render();
    this.elem.addEventListener('click', this.onClick);

  }


  render() {
    this.elem = document.createElement('table');
    this.thead = document.createElement('thead');
    this.tbody = document.createElement('tbody');

    this.thead.innerHTML = `
    <tr>
      <th>Имя</th>
      <th>Возраст</th>
      <th>Зарплата</th>
      <th>Город</th>
    </tr>
    `;

    this.elem.append(this.thead);


    for (this.row of this.rows) {
      this.tr = document.createElement('tr');

      this.td1 = document.createElement('td');
      this.td1.textContent = this.row.name;
      this.tr.append(this.td1);

      this.td2 = document.createElement('td');
      this.td2.textContent = this.row.age;
      this.tr.append(this.td2);

      this.td3 = document.createElement('td');
      this.td3.textContent = this.row.salary;
      this.tr.append(this.td3);

      this.td4 = document.createElement('td');
      this.td4.textContent = this.row.city;
      this.tr.append(this.td4);

      this.td5 = document.createElement('td');
      this.td5.innerHTML = `<button>X</button>`
      this.tr.append(this.td5);

      this.tbody.append(this.tr);

      this.elem.append(this.tbody);
    }

  }

  onClick(event) {

    if (event.target.tagName != 'BUTTON') return;

    let target = event.target.closest('tr');
    target.hidden = true;

  }
}




