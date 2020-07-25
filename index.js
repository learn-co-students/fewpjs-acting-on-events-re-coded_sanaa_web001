// Your code here

var dodger = document.getElementById('dodger');


function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left - 2}px`
    }
}


function moveDodgerRight() {
    var leftNumbers = dodger.style.left.replace('px', '');
    var left = parseInt(leftNumbers, 10)
    if (left > 0) {
        dodger.style.left = `${left + 2}px`
    }
}
function reset(){
    dodger.style.left="180px";

}

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})


document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode===32) {
        reset();
    }
})