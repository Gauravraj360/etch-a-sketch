

function makeMultipleGrid(row,col){

    let penColor = 'black'; // Default pen color

    function startDrawing() {
        
        this.style.backgroundColor = penColor;
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

    const penButton=document.querySelector('.pen-button');
    const penOptions=document.querySelector('.pen-options');
    const penColors=document.querySelectorAll('.pen-color');

    penButton.addEventListener('click', function(){
        //apply default pen of black color
        applyPen();
        //toggle visibility of pen color buttons
        if(penOptions.style.display === 'none' || penOptions.style.display === ''){
            penOptions.style.display='grid';
        }
        else {
            penOptions.style.display='none';
        }
    });

    function applyPen() {
       container.querySelectorAll('.grid').forEach((grid)=> {
            grid.removeEventListener('mouseover', eraseDrawing);
            grid.addEventListener('mouseover', startDrawing);
       })
    }
    
    penColors.forEach((colorButton) => {
        colorButton.addEventListener('click',function(){
            const colorClassName= this.classList[1];
            penColor=colorClassName;
            applyPen();
        });
    });

    function applyEraser() {
        container.querySelectorAll('.grid').forEach((grid) => {
            grid.removeEventListener('mouseover', startDrawing);
            grid.addEventListener('mouseover', eraseDrawing);
        });
    }
    const eraser = document.querySelector('.eraser-button');
    eraser.addEventListener('click', applyEraser);

    function clearBox() {
        const allGrid = document.querySelectorAll('.grid');
        allGrid.forEach((grid) => {
            grid.style.backgroundColor = 'white';
            grid.removeEventListener('mouseover',startDrawing);
        });
    }

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



