let resultArray = []

function performOperation(){
    let input1 = parseInt(document.getElementById("input1").value)
    let input2 = parseInt(document.getElementById("input2").value)

    
    let aResult = addition(input1, input2)
    resultArray.push(aResult)
    let mResult = multiply(input1, input2)
    resultArray.push(mResult)
    let dResult = division(input1, input2)
    resultArray.push(dResult)

    display(resultArray)

}

function addition(input1, input2){
    return input1 + input2
}

function multiply(input1, input2){
    
    return input1 * input2
}

function division(input1, input2){
    
    return input1 / input2
}

function display(result){
    document.getElementById("result").innerHTML = `Addition = ${resultArray[0]} <br> Multiplication = ${resultArray[1]} <br> Division = ${resultArray[2]} <br>`

}