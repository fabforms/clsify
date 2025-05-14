// clsify.js

function toVal(mix) {
  let str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      mix.forEach(item => {
        if (item) {
          const val = toVal(item);
          if (val) str && (str += ' ') && (str += val);
        }
      });
    } else {
      Object.keys(mix).forEach(key => {
        if (mix[key]) {
          str && (str += ' ');
          str += key;
        }
      });
    }
  }

  return str;
}

export function clsify(...args) {
  let str = '';
  args.forEach(arg => {
    const val = toVal(arg);
    if (val) {
      str && (str += ' ');
      str += val;
    }
  });
  return str;
}

// Helper for adding modifiers
clsify.withModifier = function(baseClass, modifiers) {
  return [baseClass, ...modifiers.map(mod => `${baseClass}--${mod}`)].join(' ');
};

// Helper for adding prefixes
clsify.withPrefix = function(prefix, ...classes) {
  return classes.map(cls => `${prefix}-${cls}`).join(' ');
};

// Responsive class handling
clsify.responsive = function(prefix, ...classes) {
  return classes.map((cls, index) => {
    return index === 0 ? cls : `${prefix}-${cls}`;
  }).join(' ');
};

// Chainable API for progressive class building
clsify.chain = function(initialClass) {
  return {
    add: (...args) => clsify(initialClass, ...args),
    modifier: (modifiers) => clsify.withModifier(initialClass, modifiers),
    prefix: (prefix) => clsify.withPrefix(prefix, initialClass),
    responsive: (prefix) => clsify.responsive(prefix, initialClass),
  };
};

export default clsify;

