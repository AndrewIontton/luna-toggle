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
    this.toggleButtons.forEach(button => {
      button.setAttribute('aria-selected', this.state);
      button.addEventListener('click', () => this.toggle());
    });
    this.closeButtons.forEach(closeButton => {
      closeButton.addEventListener('click', () => this.close());
    });
  }
  close() {
    this.state = false;
    this.toggleButtons.forEach(button => {
      button.classList.remove('is-active');
      button.setAttribute('aria-selected', false);
    });
    document.body.classList.remove(this.bodyClass);
    this.toggleElement.classList.remove('is-active');
    this.toggleElement.setAttribute('aria-hidden', true);
    this.triggerEvent('close');
  }
  toggle() {
    this.state = !this.state;

    this.toggleButtons.forEach(button => {
      button.classList[this.state ? 'add' : 'remove']('is-active');
      button.setAttribute('aria-selected', this.state);
    });

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