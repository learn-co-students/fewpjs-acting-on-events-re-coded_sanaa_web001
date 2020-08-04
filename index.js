// Your code here
let dodger = document.getElementById('dodger');

function moveDodgerLeft(){
  var leftN = dodger.style.left.replace("px", "");
  var left = parseInt(leftN,10);
  if(left >0){
     dodger.style.left = `${left-1}px`;
  }  
}

function moveDodgerRight(){
  var leftN = dodger.style.left.replace("px", "");
  var left = parseInt(leftN,10);
  if(left >0){
     dodger.style.left = `${left+1}px`;
  }  
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});