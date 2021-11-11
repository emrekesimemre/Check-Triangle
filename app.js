let firstCorner = document.getElementById("first");
let secondCorner = document.getElementById("second");
let thirdCorner = document.getElementById("third");
let button = document.getElementById("button");
let result = document.getElementById("result");

button.addEventListener("click", ()=>{
    corner1 = parseInt(firstCorner.value);
    corner2 = parseInt(secondCorner.value);
    corner3 = parseInt(thirdCorner.value);
    if (corner1 <= 0 || corner2 <= 0 || corner3 <= 0 ) {
        result.textContent = "It can't be a triangle! The length of each side must be greater than 0";
        result.style.textAlign = "center"
        result.style.color = "red"
    }
    else if (corner1 + corner2 < corner3 || corner1 + corner3 < corner2 || corner2 + corner3 < corner1) {
        result.textContent = "It can't be a triangle! The sum of the lengths of the two sides must be greater than the length of the third side";
        result.style.textAlign = "center"
        result.style.color = "red"
    }
    else if (corner1 + corner2 == corner3 || corner1 + corner3 == corner2 || corner2 + corner3 == corner1) {
        result.textContent = "Your Triangle Is Dejenere Triangle";
        result.style.textAlign = "center"
        result.style.color = "green"
    }
    else if (corner1 == corner2 && corner1 == corner3 && corner2 == corner3) {
        result.textContent = "Your Triangle Is Equilateral  Triangle";
        result.style.textAlign = "center"
        result.style.color = "green"
    }
    else if (corner1 == corner2 || corner1 == corner3 || corner2 == corner3){
        result.textContent = "Your Triangle Is Isosceles Triangle";
        result.style.textAlign = "center"
        result.style.color = "green"
    } 
    else if (corner1 !== corner2 && corner1 !== corner3 && corner2 !== corner3) {
        result.textContent = "Your Triangle Is Scalene Triangle";
        result.style.textAlign = "center"
        result.style.color = "green"
    }
});
