function updaterate() {
    var inp = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= inp;
}


function compute()
{
    let p = parseInt(document.getElementById("principal").value);
    let r = parseFloat(document.getElementById("rate").value);
    y = parseInt(document.getElementById("years").value);
    var year = new Date().getFullYear() + y
    i = (p*r*y)/100;
    amount = p+r;
    if (p <= 0){
        alert("Wrong Input")
        document.getElementById("principal").focus()
    }
    else {
        result.innerHTML = "If you deposit $" + p + ",\<br\>at an interest rate of " + r + "%\<br\>You will receive an amount of $" + amount + ",\<br\>in the year " + year + "\<br\>";
    }
    
}
        