

function makeMultipleGrid(row,col){

    function startDrawing() {
        this.style.backgroundColor = 'red';
    }

    function eraseDrawing() {
        this.style.backgroundColor = 'white';
    }

    function createGrid() {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        //give width of grids dynamically according to no. of columns
        grid.style.flexBasis='calc(100%/'+col+')';  /* n columns with gap */
        container.appendChild(grid);
        //adding event listeners at the time of grid creation to save time complexity
        grid.addEventListener('mouseover', startDrawing);
        grid.addEventListener('mouseover', eraseDrawing);
    }


    function clearBox() {
        const allGrid = document.querySelectorAll('.grid');
        allGrid.forEach((grid) => {
            grid.style.backgroundColor = 'white';
            grid.removeEventListener('mouseover',startDrawing);
        });
        
    }

    const pen = document.querySelector('.pen-button');

    function applyPen() {
        container.querySelectorAll('.grid').forEach((grid) => {
            grid.removeEventListener('mouseover', eraseDrawing);
            grid.addEventListener('mouseover', startDrawing);
        });
    }

    pen.addEventListener('click', applyPen);

    const eraser = document.querySelector('.eraser-button');

    function applyEraser() {
        container.querySelectorAll('.grid').forEach((grid) => {
            grid.removeEventListener('mouseover', startDrawing);
            grid.addEventListener('mouseover', eraseDrawing);
        });
    }
    eraser.addEventListener('click', applyEraser);

    const clear = document.querySelector('.clear-button');
    clear.addEventListener('click', clearBox);

    for(let i=0;i<row*col;i++){
        createGrid(); 
    }

}

const container = document.querySelector('.container');

function clearGrid() {
    container.innerHTML = ''; // Clear the container's content
}

const setGrid=document.querySelector('#setGrid');
const valueDisplay=document.querySelector('.valueDisplay');
console.log(setGrid.value);
setGrid.addEventListener('input',function(){
    //clear grid everytime you set Grid with new value
    clearGrid();
    const value = this.value; // Get the current value of the range input
    valueDisplay.innerHTML =value+'x'+value; // Display the value
    
    makeMultipleGrid(value,value);
});
makeMultipleGrid(1,1);



