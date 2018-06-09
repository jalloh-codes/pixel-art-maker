// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  //assign variable
  let inHeight = document.querySelector('#inputHeight').value;
  let inWidth = document.querySelector('#inputWidth').value;
  const grid = document.querySelector('#pixelCanvas');

  grid.innerHTML = "";
  /*a loop that create <tr> and  <td> and assig the variable color inside
  will let user pick different color*/
  for(let y=0; y < inHeight; y++){
    let rows = grid.insertRow(y);
  	for(let x=0; x < inWidth; x++){
      let col = rows.insertCell(x);
      col.addEventListener('click', function() {
        let color = document.querySelector('#colorPicker').value;
        col.style.backgroundColor = color;
      });
  	}
  }
}
// when page load and the button is click run makeGrid() fun
document.addEventListener("DOMContentLoaded", function(event) {
  const submit = document.querySelector('input[type=submit]');
  submit.addEventListener('click', function (eve){
    // prevent the page to erase the table
    // it help to make it fix
    eve.preventDefault();
    // call makeGrid fun
    makeGrid();

  });

});
