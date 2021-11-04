// function indexHeadCell(name) {
//   table = document.querySelector('table');
//   let thead = table.querySelector('thead');
//   let theadRows = thead.querySelectorAll('td');

//   let index = 0;
//   for (let i = 0; i < theadRows.length; i++) {
//     if (theadRows[i].textContent == name) {
//       index = i;
//     }
//   }
//   return index;
// };


function highlight(table) {
  // ваш код...

  let tbody = table.querySelector('tbody');
  let trBody = tbody.querySelectorAll('tr');

  // index = indexHeadCell('Age');
  for (let tr of trBody) {
    if (tr.cells[1].textContent < 18) {
      tr.style.textDecoration = 'line-through';
    }
  };


  // index = indexHeadCell('Gender');

  for (let tr of trBody) {
    if (tr.cells[2].textContent == 'm') {
      tr.classList.add('male');

    } else {
      tr.classList.add('female');
    }
  };


  // index = indexHeadCell('Status');

  for (let tr of trBody) {
    if (!tr.cells[3].matches('[data-available]')) {
      tr.hidden = true;
    } else if (tr.cells[3].dataset.available == 'true') {
      tr.classList.add('available');
    } else {
      tr.classList.add('unavailable')
    }
    // console.log(tr.cells[index]);
  };



};





