let width
let length

function areaCalculator(){
    width = parseFloat(document.getElementById("width").value)
    length = parseFloat(document.getElementById("length").value)
    let area = width*length
    document.getElementById('result').innerText = "The area of the rectangle is: " + area;
}

