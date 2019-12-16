# Luna Toggle
Toggle adds basic toggle functionality to elements. It can be used for all sorts of applications. From dropdowns, accordions and modals. The idea behind `luna-toggle.js` is to create as little hassle for our developers as possible. Giving them all the control with styling and animations.

## Example
There are a few data attributes you need to set up toggle correctly. The `data-toggle` will be applied to your button elements which once clicked will initialise the toggle of an element with the `data-toggle-target` attribute. Please note that there should only be one `data-toggle-target`.

Within both `data-toggle` and `data-toggle-target` you should apply a unique name that connects the two elements.

There is also a `data-toggle-close` attribute which once clicked will remove the active state from the assigned toggle elements.

```html
<button type="button" data-toggle="search">Open Search</button>
<div data-toggle-target="search">
  ...
  <button type="button" data-toggle-close="search">Close Search</button>
</div>
```

## Initialise the toggle class.

```js
// Initialize all our toggle elements by data attribute.
window.toggleElems = {};
const elements = document.querySelectorAll('[data-toggle-target]');

elements.forEach(element => {
    window.toggleElems[element.getAttribute('data-toggle-target')] = new Toggle(element);
});
```

You can pass an additional argument in the Toggle class which will handle the aria attributes to help with accessibility. These currently are `accordion`, `modal` & `tab`.

```js
window.toggleElems = {};
const elements = document.querySelectorAll('.tabs');

elements.forEach(element => {
    window.toggleElems[element.getAttribute('data-toggle-target')] = new Toggle(element, 'tab');
});
```

Toggle will apply an `is-active` class to both the button element and the target element. It will also apply an `is-active-{uniqueId}` class to the body, this will allow developers to apply additional styling to elements when the element is being toggled.

A simple reveal animation for a modal could be as follows:

```scss
[data-toggle-target="search"] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
const searchBtn = document.querySelector('[data-toggle="search"]');
const searchInput = document.querySelector('input.search-input');

searchBtn.addEventListener('open', () => {
  searchInput.focus();
});

searchBtn.addEventListener('close', () => {
  searchInput.blur();
});
```