function groceryCalculator(){
    g1 = parseFloat(document.getElementById("g1").value)
    g2 = parseFloat(document.getElementById("g2").value)
    g3 = parseFloat(document.getElementById("g3").value)
    result = g1+g2+g3
    document.getElementById("result").innerHTML = "The total amount is: $" + result

}