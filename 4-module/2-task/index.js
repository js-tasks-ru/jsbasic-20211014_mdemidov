function makeDiagonalRed(table) {
  // ваш код...
  for (let i = 0; i < table.rows.length; i++) {
    let tr = table.rows[i];
    tr.cells[i].style.backgroundColor = 'red';
    // или
    tr.cells[i].classList.add('table__cell');


  }

};
