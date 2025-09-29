# table-of-data
[demo](https://zvakanaka.github.io/table-of-data)

## Usage
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
Note: *markdown links supported*
