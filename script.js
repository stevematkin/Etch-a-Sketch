//Declare variables and constants
const container = document.querySelector('#container');
const gridSize = document.createElement('div');





function createGrid (rows, cols){
    for (r = 0; r < rows; r++){
        let addRow = document.createElement("div");
        addRow.className = "grid-row";
        addRow.style.height = (300 / cols) + "px";
        addRow.style.width = (300/cols) + "px";
        gridSize.appendChild(addRow);
        

        for (c = 0; c < cols; c++){
            let addColumn = document.createElement("div");
            addColumn.className = "grid-column";
            addColumn.style.height = (300 / cols) + "px";
            addColumn.style.width = (300 / cols) + "px";
            addRow.appendChild(addColumn);
            
        }
    }
    container.appendChild(gridSize);    
    
}
createGrid(10, 10);





