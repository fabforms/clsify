# clsify

`clsify` is a powerful and flexible utility that allows you to easily construct, combine, and manage dynamic CSS class names
 in JavaScript. Whether you're building responsive layouts, conditionally applying classes, or handling complex UI states, 
`clsify` provides a simple, clean, and effective way to manage your CSS class names.

## Features

- **Dynamic Class Management**: Easily build class strings by conditionally combining multiple classes.
- **Supports Arrays & Objects**: Works with arrays and objects, allowing for flexible class name composition.
- **Responsive Class Handling**: Easily handle responsive class names with custom prefixes.
- **Modifiers & Prefixes**: Add class modifiers or prefixes for a streamlined workflow.
- **Chainable API**: Progressive class-building with a fluent API.
- **Zero Dependencies**: Built to be lightweight and fast without unnecessary dependencies.

## Installation

Install `clsify` via npm or yarn:

```bash
npm install clsify
# or
yarn add clsify
````

## Usage

### Basic Usage

The core functionality of `clsify` is to conditionally join class names. You can pass strings, arrays, and objects, 
and it will intelligently build the correct class names for you.

```js
import clsify from 'clsify';

const buttonClass = clsify('btn', 'btn-primary', { 'btn-large': isLarge });

console.log(buttonClass); // 'btn btn-primary btn-large' (if isLarge is true)
```

### Conditional Class Names

You can use `clsify` with conditional values, which is perfect for conditionally applying classes based on state or props.

```js
const isActive = true;
const buttonClass = clsify('btn', isActive && 'btn-active', 'btn-large');

console.log(buttonClass); // 'btn btn-active btn-large' (if isActive is true)
```

### Handling Arrays

`clsify` supports arrays, allowing you to pass multiple values at once and let it handle the logic for you.

```js
const buttonClass = clsify(['btn', 'btn-primary', 'btn-large']);
console.log(buttonClass); // 'btn btn-primary btn-large'
```

### Handling Objects

You can also pass objects where the keys represent the class names and the values are booleans, indicating whether the class should be included.

```js
const buttonClass = clsify({
  'btn': true,
  'btn-primary': true,
  'btn-large': false // This will be omitted
});

console.log(buttonClass); // 'btn btn-primary'
```

### With Modifiers

`clsify` includes a helper for adding modifiers to your class names. This is useful for utility-based CSS frameworks where you may need to dynamically add modifiers.

```js
const modifiedClass = clsify.withModifier('btn', ['active', 'large']);

console.log(modifiedClass); // 'btn btn--active btn--large'
```

### With Prefixes

You can add a prefix to your class names, which is useful when working with BEM-style naming or any custom naming conventions.

```js
const prefixedClass = clsify.withPrefix('my-prefix', 'btn', 'active');

console.log(prefixedClass); // 'my-prefix-btn my-prefix-active'
```

### Responsive Classes

If you're working with responsive designs, `clsify` allows you to easily manage classes for different screen sizes.

```js
const responsiveClass = clsify.responsive('lg', 'btn', 'active', 'large');

console.log(responsiveClass); // 'btn active large lg-btn lg-active lg-large'
```

### Chainable API

You can also chain multiple operations for progressive class-building.

```js
const classBuilder = clsify.chain('btn');
const finalClass = classBuilder
  .add('primary')
  .modifier(['active'])
  .prefix('my-prefix')
  .responsive('sm')
  .add('rounded')
  .toString();

console.log(finalClass); // 'btn primary my-prefix-btn my-prefix-active sm-btn sm-active sm-rounded'
```

### Helper Functions

* **`clsify.withModifier(baseClass, modifiers)`**: Add modifiers to a base class.
* **`clsify.withPrefix(prefix, ...classes)`**: Add a prefix to multiple class names.
* **`clsify.responsive(prefix, ...classes)`**: Generate responsive class names.
* **`clsify.chain(initialClass)`**: Chain multiple class name operations for a clean and progressive API.

## Benefits

* **Cleaner Code**: Reduce the complexity of dynamically generating class names.
* **Better Readability**: Use plain, readable JavaScript syntax to manage class names.
* **Performance**: Efficiently handle class names without unnecessary computations.
* **Flexibility**: Whether you're using arrays, objects, or chaining, `clsify` can handle it all.

## Example Project

Here’s an example of how `clsify` can be used in a real-world project:

```js
import clsify from 'clsify';

const isActive = true;
const isPrimary = false;
const isLarge = true;

const buttonClass = clsify(
  'btn',
  isPrimary && 'btn-primary',
  isActive && 'btn-active',
  isLarge && 'btn-large'
);

console.log(buttonClass); // 'btn btn-active btn-large'
```

## Sponsorship

###  Sponsored by [FabForm.io](https://fabform.io) 

`clsify` is proudly sponsored by **[FabForm.io](https://fabform.io)**, a powerful platform for building modern forms with ease and flexibility. If you find `clsify` useful, check out **FabForm.io** for a seamless and intuitive form-building experience.

🚀 [Try FabForm.io now!](https://fabform.io)

---

## Contributing

We welcome contributions to `clsify`! If you'd like to improve the utility or fix any bugs, feel free to open an issue or submit a pull request.

---

## License

`clsify` is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Enjoy using `clsify` to make managing your CSS class names simpler and more efficient in your JavaScript projects!


