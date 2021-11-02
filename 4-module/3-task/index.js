function indexHeadCell(name) {

  table = document.querySelector('table');
  let theadRows = table.tHead.rows[0].cells;

  let index = 0;
  for (let i = 0; i < theadRows.length; i++) {
    if (theadRows[i].textContent == name) {
      index = i;
    }
  }
  return index;
};


function highlight(table) {
  // ваш код...
  let tbody = table.querySelector('tbody');
  let trBody = tbody.rows;

  index = indexHeadCell('Age');
  for (let tr of trBody) {
    if (tr.cells[index].textContent < 18) {
      tr.cells[index].style.textDecoration = 'line-through';
    }
  };

  index = indexHeadCell('Gender');

  for (let tr of trBody) {
    if (tr.cells[index].textContent == 'm') {
      tr.cells[index].classList.add('male');

    } else {
      tr.cells[index].classList.add('female');
    }
  };


  index = indexHeadCell('Status');

  for (let tr of trBody) {
    if (!tr.cells[index].matches('[data-available]')) {
      tr.cells[index].hidden = true;
    } else if (tr.cells[index].dataset.available == 'true') {
      tr.cells[index].classList.add('available');
    } else {
      tr.cells[index].classList.add('unavailable')
    }
    console.log(tr.cells[index]);
  };

};





