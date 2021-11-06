function hideSelf() {
  // ваш код...
  let button = document.querySelector('.hide-self-button');
  let body = document.querySelector('body');



  document.addEventListener('click', function (event) {
    let target = event.target;
    button.hidden = true;
    if (target != button) {
      button.hidden = false;
    }
    console.log(target)
  });


};

