(function() {
  'use strict';
  customElements.define('table-of-data', class extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `<table id="table" class="table-of-data"></table>
        <style>
          table.table-of-data td, table.table-of-data th { border-bottom: 1px solid #ddd; text-align: left; }
          table.table-of-data { border-collapse: collapse; width: 100%; }
          table.table-of-data th, table.table-of-data td { padding: 8px; }
        </style>`;
    }
    set data(val) {
      this._refreshTable(val);
      this._data = val;
    }
    get data() { return (this._data || {}); }
    _refreshTable(data) {//add/refresh data in table
      let tableOfData = this.children.table;
      let frag = document.createDocumentFragment();
      let tableHeadingRow = document.createElement('tr');
      data.headings.forEach(heading => {
        let tableHeading = document.createElement('th');
        tableHeading.textContent = heading;
        tableHeadingRow.appendChild(tableHeading);
      });
      frag.appendChild(tableHeadingRow);
      data.rows.forEach(row => {
        let tableRow = document.createElement('tr');
        data.headings.forEach((name, i) => {
          let rowEl = document.createElement('td');
          rowEl.innerHTML = row[i];
          tableRow.appendChild(rowEl);
        });
        frag.appendChild(tableRow);
      });
      tableOfData.innerHTML = '';//clear the table
      tableOfData.appendChild(frag);
    }
  });
}());
