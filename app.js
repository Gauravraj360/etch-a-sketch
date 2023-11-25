

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

    function darkenColor(color) {
        const stripHash = (c) => c.replace('#', '');
        const padZero = (str, len) => ('0'.repeat(len) + str).slice(-len);
    
        // Parse the color and split into RGB components
        const hex = stripHash(color);
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
    
        // Darken the color by reducing each component by 10%
        const darkenComponent = (c) => Math.round(c * 0.9);
    
        const darkenedR = darkenComponent(r);
        const darkenedG = darkenComponent(g);
        const darkenedB = darkenComponent(b);
    
        // Convert RGB components back to HEX format
        const darkenedColor = `#${padZero(darkenedR.toString(16), 2)}${padZero(darkenedG.toString(16), 2)}${padZero(darkenedB.toString(16), 2)}`;
    
        return darkenedColor;
    }
    
    const tighten=document.querySelector('.tighten-button');
    function applyDarkenColor(){
        const originalColor=penColor;
        const darkenedColor= darkenColor(originalColor);
        console.log(darkenedColor);
        penColor=darkenedColor;
        applyPen();
    }
    tighten.addEventListener('click',applyDarkenColor);
    
    const colorPicker=document.querySelector('.color-picker');

    //event listener for color picker change
    colorPicker.addEventListener('input', function(){
        penColor=colorPicker.value;
        applyPen();
    });

    function getRandomHexColor() {
        // Generating three random values for red, green, and blue components
        const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
    
        // Convert decimal to hexadecimal and ensure each component is a 2-digit string
        const redHex = red.toString(16).padStart(2, '0');
        const greenHex = green.toString(16).padStart(2, '0');
        const blueHex = blue.toString(16).padStart(2, '0');
    
        // Concatenate the components to create the hexadecimal color code
        const hexColor = `#${redHex}${greenHex}${blueHex}`;
    
        return hexColor;
    }
    
    function getRandomColor(){
            const randomColor = getRandomHexColor();
            console.log(randomColor);
            penColor=randomColor;
    }
    function applyRainbowColor(){
        container.querySelectorAll('.grid').forEach((grid)=>{
            grid.addEventListener('mouseover',getRandomColor);
            grid.addEventListener('mouseover', startDrawing);
        });
    }
    //apply event listner to rainbow button
    const rainbowButton=document.querySelector('.rainbow-button');

    rainbowButton.addEventListener('click',applyRainbowColor);

    function applyPen() {
       container.querySelectorAll('.grid').forEach((grid)=> {    
            grid.removeEventListener('mouseover',getRandomColor);
            grid.removeEventListener('mouseover', eraseDrawing);
            grid.addEventListener('mouseover', startDrawing);

       })
    }
    
    const eraser = document.querySelector('.eraser-button');
    eraser.addEventListener('click', applyEraser);

    function applyEraser() {
        container.querySelectorAll('.grid').forEach((grid) => {
            grid.removeEventListener('mouseover', getRandomColor);
            grid.removeEventListener('mouseover', startDrawing);
            grid.addEventListener('mouseover', eraseDrawing);
        });
    }

    const clear = document.querySelector('.clear-button');
    clear.addEventListener('click', clearBox);

    function clearBox() {
        const allGrid = document.querySelectorAll('.grid');
        allGrid.forEach((grid) => {
            grid.style.backgroundColor = 'white';
            grid.removeEventListener('mouseover', getRandomColor);
            grid.removeEventListener('mouseover',startDrawing);
        });
    }

    for(let i=0;i<row*col;i++){
        createGrid(); 
    }

}

const container = document.querySelector('.container');

function clearGrid() {
    container.innerHTML = ''; // Clear the container's content
}

const penButton=document.querySelector('.pen-button');
const penOptions=document.querySelector('.pen-options');
penButton.addEventListener('click', function(){
        
    //toggle visibility of pen color buttons
    if(penOptions.style.display === 'none' || penOptions.style.display === ''){
        penOptions.style.display='grid';
    }
    else {
        penOptions.style.display='none';
    }
});


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



