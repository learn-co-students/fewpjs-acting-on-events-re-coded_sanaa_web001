let dodger = document.getElementById("dodger");
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
 var newPosition = dodger.style.left.replace("px", "");
    newPosition = parseInt(newPosition, 10);
 
  if (newPosition >= 0 && newPosition < 361) {
    dodger.style.left = `${newPosition + 1}px`;
  }
}
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});