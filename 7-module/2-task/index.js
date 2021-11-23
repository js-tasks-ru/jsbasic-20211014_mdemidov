import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.render();
    //this.open();
    // this.setTitle();
    // this.setBody();
    // this.close();

  }

  render() {
    this.elem.classList.add('modal');

    let overlay = document.createElement('div');
    overlay.classList.add('modal__overlay');
    this.elem.append(overlay);

    this.modalInner = document.createElement('div');
    this.modalInner.classList.add('modal__inner');
    this.elem.append(this.modalInner);

    let modalHeader = createElement(`
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">

        </h3>
      </div>
    `);

    this.modalInner.append(modalHeader);

    this.modalBody = document.createElement('div');
    this.modalBody.classList.add('modal__body');

  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    let close = this.elem.querySelector('.modal__close');

    close.onclick = () => {
      this.close();
    };

    let closeModalWindow = (event) => {
      if (event.code !== 'Escape') return;
      this.elem.remove();
      document.body.classList.remove('is-modal-open');
    };

    document.addEventListener('keydown', closeModalWindow);
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(node) {

    this.modalInner.append(this.modalBody);
    this.modalBody.append(node);
  }

  close() {

    if (!this.elem) {
      return;
    }
    this.elem.remove();
    document.body.classList.remove('is-modal-open');

  }

}
