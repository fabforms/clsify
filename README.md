# clsify

`clsify` is a powerful and flexible utility that allows you to easily construct, combine, 
and manage dynamic CSS class names in JavaScript. Whether you're building responsive 
layouts, conditionally applying classes, or handling complex UI states, `clsify` provides 
a simple, clean, and effective way to manage your CSS class names.

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

### Importing `clsify`

To use `clsify` in your JavaScript code, import it as follows:

```javascript
import clsify from 'clsify';
```

### Basic Usage

`clsify` lets you conditionally join class names from strings, arrays, or objects,
building a dynamic class name string. Here's how you can use it:

```javascript
import clsify from 'clsify';

// Using strings and objects
const isLarge = true;
const buttonClass = clsify('btn', 'btn-primary', { 'btn-large': isLarge });

console.log(buttonClass); // 'btn btn-primary btn-large' (if isLarge is true)
```

### Conditional Class Names

You can pass conditional values that are either true or false.
This is useful for adding classes based on conditions:

```javascript
import clsify from 'clsify';

const isActive = true;
const buttonClass = clsify('btn', isActive && 'btn-active', 'btn-large');

console.log(buttonClass); // 'btn btn-active btn-large' (if isActive is true)
```

### Handling Arrays

You can also pass arrays of class names for a simpler approach:

```javascript
import clsify from 'clsify';

const buttonClass = clsify(['btn', 'btn-primary', 'btn-large']);
console.log(buttonClass); // 'btn btn-primary btn-large'
```

### Handling Objects

If you want to specify which classes should be included based on a boolean value,
you can pass an object:

```javascript
import clsify from 'clsify';

const buttonClass = clsify({
  'btn': true,
  'btn-primary': true,
  'btn-large': false // This class will be omitted
});

console.log(buttonClass); // 'btn btn-primary'
```

### With Modifiers

`clsify` allows you to add modifiers to your class names. This can be useful
for utility-first CSS frameworks like BEM or Tailwind:

```javascript
import clsify from 'clsify';

const modifiedClass = clsify.withModifier('btn', ['active', 'large']);

console.log(modifiedClass); // 'btn btn--active btn--large'
```

### With Prefixes

You can add a prefix to each of your class names using `withPrefix`:

```javascript
import clsify from 'clsify';

const prefixedClass = clsify.withPrefix('my-prefix', 'btn', 'active');

console.log(prefixedClass); // 'my-prefix-btn my-prefix-active'
```

### Responsive Classes

`clsify` makes it easy to manage classes for different screen sizes,
perfect for responsive design:

```javascript
import clsify from 'clsify';

const responsiveClass = clsify.responsive('lg', 'btn', 'active', 'large');

console.log(responsiveClass); // 'btn active large lg-btn lg-active lg-large'
```

### Chainable API

For more complex class-building scenarios, `clsify` offers a chainable API
to combine operations:

```javascript
import clsify from 'clsify';

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

Here are some of the helper functions available with `clsify`:

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

```javascript
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

### Sponsored by [FabForm.io](https://fabform.io)

`clsify` is proudly sponsored by **[FabForm.io](https://fabform.io)**, a powerful platform for building modern forms
with ease and flexibility. If you find `clsify` useful, check out **FabForm.io** for a seamless and intuitive form-building experience.

🚀 [Try FabForm.io now!](https://fabform.io)

---

## Contributing

We welcome contributions to `clsify`! If you'd like to improve the utility or fix any bugs,
feel free to open an issue or submit a pull request.

---

## License

`clsify` is licensed under the MIT License. See [LICENSE](LICENSE) for more information.

---

Enjoy using `clsify` to make managing your CSS class names simpler and more efficient in your JavaScript projects!


