//your JS code here. If required.
// Clear body
document.body.innerHTML = '';

// Helper to create a cell with specific ID and class
const createCell = (id, className, content, colspan = null) => {
    const td = document.createElement('td');
    td.id = id;
    td.className = className;
    td.innerText = content;
    if (colspan) td.colSpan = colspan;
    // Apply required CSS for border and padding
    td.style.padding = '1px';
    td.style.border = '1px solid black';
    return td;
};

// --- Table 1 (ID: table-1, Class: middle) ---
const table1 = document.createElement('table');
table1.id = 'table-1';
table1.className = 'middle';
const tr1 = document.createElement('tr');
tr1.appendChild(createCell('t11', 'left', 'Cell 1'));
tr1.appendChild(createCell('t12', 'center', 'Cell 2')); // ID: t12, Class: center
tr1.appendChild(createCell('t13', 'right', 'Cell 3'));  // ID: t13, Class: right
table1.appendChild(tr1);
document.body.appendChild(table1);

// --- Table 2 (ID: table-2, Class: middle) ---
const table2 = document.createElement('table');
table2.id = 'table-2';
table2.className = 'middle';
const tr2 = document.createElement('tr');
// ID: t21, Colspan: 6
tr2.appendChild(createCell('t21', 'center', 'Merged Cell', 6)); 
table2.appendChild(tr2);
document.body.appendChild(table2);

// --- Table 3 (ID: table-3, Class: middle) with Image ---
const table3 = document.createElement('table');
table3.id = 'table-3';
table3.className = 'middle';
const tr3 = document.createElement('tr');
const tdImage = document.createElement('td');
tdImage.id = 't-image';
// Create and append the image
const img = document.createElement('img');
img.src = 'https://picsum.photos/id/1/100/100';
img.alt = 'Test Image';
tdImage.appendChild(img);
tr3.appendChild(tdImage);
table3.appendChild(tr3);
document.body.appendChild(table3);   