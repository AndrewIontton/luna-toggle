import 'custom-event-polyfill';

export default class Toggle {
  constructor(element, type = 'modal') {
    this.type = type;
    this.contentType = 'aria-hidden';
    this.buttonType = this.type === 'tab' ? this.buttonType = 'aria-selected' : this.buttonType = 'aria-expanded';
    this.modal = element;
    this.state = false;
    this.selector = this.modal.getAttribute('data-toggle-target');
    this.class = `is-active-${this.selector}`;
    this.buttons = document.querySelectorAll(`[data-toggle="${this.selector}"]`);
    this.closeButtons = document.querySelectorAll(`[data-toggle-close="${this.selector}"]`);
    this.init();
  }
  init() {
    this.modal.setAttribute(this.contentType, !this.state);
    this.buttons.forEach(button => {
      button.setAttribute(this.buttonType, this.state);
      button.addEventListener('click', () => this.toggle());
    });
    this.closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => this.close());
    });
  }
  close() {
    this.state = false;
    this.buttons.forEach(button => {
      button.classList.remove('is-active');
      button.setAttribute(this.buttonType, false);
    });
    document.body.classList.remove(this.class);
    this.modal.classList.remove('is-active');
    this.modal.setAttribute(this.contentType, true);
    this.triggerEvent('close');
  }
  toggle() {
    this.state = !this.state;
    this.buttons.forEach(button => {
      button.classList[this.state ? 'add' : 'remove']('is-active');
      button.setAttribute(this.buttonType, this.state);
    });
    document.body.classList[this.state ? 'add' : 'remove'](this.class);
    this.modal.classList[this.state ? 'add' : 'remove']('is-active');
    this.modal.setAttribute(this.contentType, !this.state);
    this.triggerEvent(this.state ? 'open' : 'close');
  }
  triggerEvent(eventName) {
    const customEvent = new CustomEvent(eventName, {
      bubbles: true,
      detail: {
        toggleClass: this,
      },
    });
    this.modal.dispatchEvent(customEvent);
  }
}
