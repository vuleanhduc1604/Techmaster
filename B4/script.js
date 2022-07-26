let winWidth = document.documentElement.clientWidth;
let winHeight = document.documentElement.clientHeight;
const minWidth = 3;
const minHeight = 3;
const maxWidth = Math.floor(winWidth/30);
const maxHeight = Math.floor(winHeight/30);
let row, cell;
while (!cell) {
    const inputCell = +prompt(
        `Enter num of cells (min = ${minWidth}),  (max = ${maxWidth})`, 5
    );
    if (inputCell < minWidth || inputCell > maxWidth) {
        alert('Invalid Cell')
    } else {
        cell = inputCell;
    }
}
while (!row) {
    const inputRow = +prompt(
        `Enter num of rows (min = ${minHeight}),  (max = ${maxHeight})`, 5
    );
    if (inputRow < minHeight || inputRow > maxHeight) {
        alert('Invalid Row')
    } else {
        row = inputRow;
    }
}

function createCell() {
    return `<div class='cell'></div>`;
};

function createRow(cell) {
    return "<div class='row'>"
    .concat(Array(cell).fill(createCell(row,cell)).join(""))
    .concat("</div>")
}

function checkHorizontal(rowIndex, cellIndex) {
    const row = document.querySelector(`row.[data-row="${rowIndex}"]`);

    let count = 1;
    let hasLeftBlock, hasRightBlock = false;
    
}