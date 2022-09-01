const container = document.getElementById('container');
const reset = document.getElementById('resetBtn');
const input = document.getElementById('input');
const size = document.getElementById('setSize');
var gridNum = 16;

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(gridNum, gridNum);

function removeGrid(){
  while (container.firstChild){
    container.removeChild(container.lastChild);
  }
}

container.addEventListener('mouseover', function (e) {
  if (e.target.matches('.grid-item')) {
    e.target.classList.add('active');
  }
});

reset.addEventListener('click', function(){
  let gridChild = container.children;
  for (let i = 0; i < gridNum*gridNum; i++){
    gridChild[i].classList.remove('active');
  }  
}
  );

size.addEventListener('click', function(){
  gridNum = Number(input.value)
  removeGrid();
  makeRows(gridNum, gridNum);
});


