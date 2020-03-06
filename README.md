# Luna Toggle
LunaToggle adds basic toggle functionality to elements across your application, from dropdowns, accordions and modals. The idea behind `luna-toggle.js` is to create a simple solution that allows developers to take full control over styling and animations.

## Example
There are a few data attributes you need to set up toggle correctly. The `data-luna-toggle` will be applied to your button elements and a single element with the `data-luna-toggle-target` attribute. Please note that there should only be one `data-luna-toggle-target`.

Within both `data-luna-toggle` and `data-luna-toggle-target` you should apply a unique name that connects the two elements.

There is also a `data-luna-toggle-close` attribute which once clicked will remove the active state from the assigned toggle elements.

```html
<button type="button" data-luna-toggle="search">Open Search</button>
<form data-luna-toggle-target="search">
  ...
  <button type="button" data-luna-toggle-close="search">Close Search</button>
</form>
```

## Include LunaToggle

1. Firstly install the LunaToggle package via npm.
```bash
npm install luna-toggle
```

2. Import the class.
```js
import LunaToggle from 'luna-toggle';
```

3. Initialise the class.
```js
// Initialize all toggle elements by data attribute.
const elements = document.querySelectorAll('[data-luna-toggle-target]');

elements.forEach(element => {
  const toggleElement = new LunaToggle(element);
});

// Initialize a specific element.
const searchEl = document.querySelector('[data-luna-toggle-target="search"]');
const searchToggle = new LunaToggle(searchEl);
```

Toggle will apply an `is-active` class to both the button element and the target element. It will also apply an `is-active-{uniqueId}` class to the body, this will allow developers to apply additional styling to elements when a specific element is being toggled.

A simple reveal animation for a modal could be as follows:

```scss
[data-luna-toggle-target] {
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ease;

  &.is-active {
    opacity: 1;
    pointer-events: all;
  }
}
```

## EventListeners
The class comes with two events, `open` & `close`. This allows additional functionality to be added when toggling. This can be useful to focus on inputs, or add custom in & out animations after each state.

```js
const searchToggle = document.querySelector('[data-luna-toggle-target="search"]');
const searchInput = document.querySelector('input.search-input');

searchToggle.addEventListener('open', () => {
  searchInput.focus();
});

searchToggle.addEventListener('close', () => {
  searchInput.blur();
});
```