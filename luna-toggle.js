import 'custom-event-polyfill';

export default class LunaToggle {
  constructor(element) {
    this.toggleElement = element;
    this.state = false;
    this.selector = this.toggleElement.getAttribute('data-luna-toggle-target');
    this.bodyClass = `is-active-${this.selector}`;
    this.toggleButtons = document.querySelectorAll(`[data-luna-toggle="${this.selector}"]`);
    this.closeButtons = document.querySelectorAll(`[data-luna-toggle-close="${this.selector}"]`);
    this.init();
  }
  init() {
    this.toggleElement.setAttribute('aria-hidden', !this.state);

    for (let index = 0; index < this.toggleButtons.length; index++) {
      const button = this.toggleButtons[index];
      button.setAttribute('aria-selected', this.state);
      button.addEventListener('click', () => this.toggle());
    }
    for (let index = 0; index < this.closeButtons.length; index++) {
      const closeButton = this.closeButtons[index];
      closeButton.addEventListener('click', () => this.close());
    }
  }
  close() {
    this.state = false;
    for (let index = 0; index < this.toggleButtons.length; index++) {
      const button = this.toggleButtons[index];
      button.classList.remove('is-active');
      button.setAttribute('aria-selected', false);
    }
    document.body.classList.remove(this.bodyClass);
    this.toggleElement.classList.remove('is-active');
    this.toggleElement.setAttribute('aria-hidden', true);
    this.triggerEvent('close');
  }
  toggle() {
    this.state = !this.state;

    for (let index = 0; index < this.toggleButtons.length; index++) {
      const button = this.toggleButtons[index];
      button.classList[this.state ? 'add' : 'remove']('is-active');
      button.setAttribute('aria-selected', this.state);
    }

    document.body.classList[this.state ? 'add' : 'remove'](this.bodyClass);
    this.toggleElement.classList[this.state ? 'add' : 'remove']('is-active');
    this.toggleElement.setAttribute('aria-hidden', !this.state);
    this.triggerEvent(this.state ? 'open' : 'close');
  }
  triggerEvent(eventName) {
    const customEvent = new CustomEvent(eventName, {
      bubbles: true,
      detail: {
        toggleClass: this,
      },
    });
    this.toggleElement.dispatchEvent(customEvent);
  }
}