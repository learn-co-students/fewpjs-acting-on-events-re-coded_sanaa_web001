// Your code here
let dodger = document.getElementById('dodger') ;

function moveDodgerLeft() {
  var leftNumber = dodger.style.left.replace('px' , '') ;
  
  var left = parseInt(leftNumber , 10) ;
  if(left > 0) 
    dodger.style.left = `${left - 1}px` ;
  
  
}

function moveDodgerRight() {
  var leftNumber = dodger.style.left.replace('px' , '') ;
  
  var left = parseInt(leftNumber , 10) ;
  if(left > 0) 
    dodger.style.left = `${left + 1}px` ;
  
  
}

document.addEventListener('keydown' , e => {
  if(e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
 
})


document.addEventListener('keydown' , e => {
  if(e.key === 'ArrowRight') {
    moveDodgerRight();
  }
 
})