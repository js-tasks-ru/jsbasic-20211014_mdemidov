function makeDiagonalRed(table) {
  // ваш код...
  // let td = table.querySelectorAll('td');

  // for (let i = 0; i < td.length; i += 6) {
  //   let diagonal = td[i];
  //   diagonal.style.backgroundColor = 'red';
  //   // или через класс
  //   // diagonal.classList.add('table__cell');
  // }

  for (let i = 0; i < table.rows.length; i++) {
    let tr = table.rows[i];
    tr.cells[i].style.backgroundColor = 'red';
    // или
    tr.cells[i].classList.add('table__cell');


  }

};
