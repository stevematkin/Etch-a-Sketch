//Declare variables and constants
const container = document.querySelector('#container');
const button = document.querySelector('#reset');
button.addEventListener('click', clearAndResize);

//create the grid from input size^2
function createGrid(size){
    //create divs (boxes in the grid)
    for(i=0; i< size**2; i++){
        let addBox = document.createElement('div');
        addBox.classList.add('addBox');
        container.appendChild(addBox);
        

        
    }
    //makes each box in the grid equal in size
    if(size){
        container.style.gridTemplateColumns = "repeat(" + size + ",1fr)";
        
    }

    //adds mouseover event to each box in the grid
    const boxColor = document.querySelectorAll('div.addBox');
    boxColor.forEach(boxColor => {
        boxColor.addEventListener('mouseover', changeColor);
    });
    //change the background color of the div on mouseover event
    function changeColor(e){
        e.target.style.background = 'blue';
    }
      
}
//initial grid size
createGrid(5);

//clear all divs inside container and resize from user input
function clearAndResize() {
    while (container.firstChild){
        container.removeChild(container.firstChild);
        
    }
    let size = prompt("Choose a size for the grid between 1 and 100");
    while (size < 1 || size > 100){
        size = prompt("Choose a size for the grid between 1 and 100");
    }
    createGrid(size);
}



