# Table Custom Element
[demo](https://zvakanaka.github.io/table-of-data)
## About
Lightweight and easy to use data table with some markdown support.
## Usage
Import the element in the head
```html
<link rel="import" href="table-of-data.html">
```
Put the element somewhere in the body
```html
<table-of-data></table-of-data>
```
Put data in the table
```javascript
let data = {
  headings: [ 'State', 'Place' ],
  rows: [{
    'State': 'California',
    'Place': '[Redwood Forest](https://en.wikipedia.org/wiki/Redwood_National_and_State_Parks)'
  },
  {
    'State': 'New York',
    'Place': '[New York Islands](https://en.wikipedia.org/wiki/List_of_islands_of_New_York)'
  }]
};
document.querySelector('table-of-data').attachTable(data);
```
![Screenshot](http://i.imgur.com/Wi9b2Jy.png)
## Polyfill
Only HTML Imports and Custom Elements need to be polyfilled (`webcomponents-hi-ce.js`). To see how to use a polyfill, check out [index.html](https://github.com/zvakanaka/table-of-data/blob/master/index.html#L29-L56), which only loads the polyfill if needed (credit to [Eric Bidelman](https://gist.github.com/ebidel/1d5ede1e35b6f426a2a7)).
