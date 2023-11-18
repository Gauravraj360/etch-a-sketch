/*
var makeGrid = (col) => {
    
    const grid=document.createElement('div');
    // grid.setAttribute('style','height:50px; width:50px; background-color:grey;display:inline-block; margin:3px;');
    grid.classList.add('grid');
    grid.style.flexBasis='calc(100% /'+col+' )';  // n columns with gap 
    const container=document.querySelector('.container');
    container.appendChild(grid);
    // function draw(){
    //     this.style.backgroundColor = 'red'; // Use style property to change background color
    // }
    
    // function erase(){
    //     this.style.backgroundColor = 'white'; // Use style property to change background color
    // }

    function startDrawing() {
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'red';
        });
    }

    function eraseDrawing() {
        grid.removeEventListener('mouseover', startDrawing);
        grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = 'white';
        });
    }

    function clearBox() {
        
            grid.style.backgroundColor = 'white';
            grid.removeEventListener('mouseover', startDrawing); // Remove the pen functionality
            pen.removeEventListener('mouseover',startDrawing);
            
            
        
    }

    const pen = document.querySelector('.pen-button');
    pen.addEventListener('click', startDrawing);

    const eraser = document.querySelector('.eraser-button');
    eraser.addEventListener('click', eraseDrawing);

    const clear = document.querySelector('.clear-button');
    clear.addEventListener('click', clearBox);
    
    
}
 
*/