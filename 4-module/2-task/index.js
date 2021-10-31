function makeDiagonalRed(table) {
  // ваш код...
  let td = table.querySelectorAll('td')

  console.log(td.length)

  for (let i = 0; i < td.length; i += 6) {
    let diagonal = td[i];
    diagonal.style.backgroundColor = 'red'
    console.log(diagonal)
  }
}
