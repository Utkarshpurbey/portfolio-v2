export const Tabs = ['_hello', '_about-me', '_projects'];

export const routeAsPerTab = {
    "_hello": "/",
    "_about-me": "/about-me",
    "_projects": "/projects"
  };

export const codeStyle  = {
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    background: '#011627', // Updated background color
    color: '#e0e0e0', // Adjusted text color for contrast
  },
  'hljs-strong': { color: '#ffffff' }, // Strong contrast for bold
  'hljs-emphasis': { color: '#ffffff', fontStyle: 'italic' }, // Same as strong but italic
  'hljs-bullet': { color: '#80aaff' }, // Bright color for bullets
  'hljs-quote': { color: '#80aaff' }, 
  'hljs-link': { color: '#80aaff' }, 
  'hljs-number': { color: '#80aaff' }, 
  'hljs-regexp': { color: '#80aaff' }, 
  'hljs-literal': { color: '#80aaff' }, 
  'hljs-code': { color: '#addb67' }, // Updated greenish for code-like elements
  'hljs-selector-class': { color: '#addb67' }, 
  'hljs-keyword': { color: '#c792ea' }, // Changed to a soft purple for keywords
  'hljs-selector-tag': { color: '#c792ea' }, 
  'hljs-section': { color: '#c792ea' }, 
  'hljs-attribute': { color: '#c792ea' }, 
  'hljs-name': { color: '#c792ea' }, 
  'hljs-variable': { color: '#c792ea' }, 
  'hljs-params': { color: '#e0e0e0' }, // Consistent with base color
  'hljs-string': { color: '#b4f8c8' }, // Brighter green for strings
  'hljs-subst': { color: '#f6c177' }, // Yellow/orange for substitutions
  'hljs-type': { color: '#f6c177' }, 
  'hljs-built_in': { color: '#f6c177' }, 
  'hljs-builtin-name': { color: '#f6c177' }, 
  'hljs-symbol': { color: '#f6c177' }, 
  'hljs-selector-id': { color: '#f6c177' }, 
  'hljs-selector-attr': { color: '#f6c177' }, 
  'hljs-selector-pseudo': { color: '#f6c177' }, 
  'hljs-template-tag': { color: '#f6c177' }, 
  'hljs-template-variable': { color: '#f6c177' }, 
  'hljs-addition': { color: '#f6c177' }, 
  'hljs-comment': { color: '#5c5c5c' }, // Darker gray for comments
  'hljs-deletion': { color: '#5c5c5c' }, 
  'hljs-meta': { color: '#5c5c5c' }, 
};
