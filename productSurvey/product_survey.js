
submitBtn = document.getElementById("submitBtn")
submitBtn.onclick = Valueretriver

function Valueretriver(){
    Name = document.getElementById("name").value
    age = document.getElementById("age").value
    email = document.getElementById("email").value
    job = document.getElementById("job").value
    designation = document.getElementById("designation").value
    productType = document.getElementById("productType").value
    feedbackText = document.getElementById("feedbackText").value
    experience = document.getElementById("experience").value

    alert('Thank you for your valuable feedback')

    Btnclicked()
    
}



resetBtn = document.getElementById("resetBtn")
resetBtn.onclick = resetFunc

function resetFunc(){
document.getElementById("name").value = ""
alert('Reseted!')

}

document.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        Valueretriver()
    }

})

function Btnclicked(){

    document.getElementById("userInfo").style.display = "block"

    document.getElementById("userName").innerHTML = Name
    document.getElementById("userAge").innerHTML = age
    document.getElementById("userEmail").innerHTML = email
    document.getElementById("userJob").innerHTML = job
    document.getElementById("userDesignation").innerHTML = designation
    document.getElementById("userProductChoice").innerHTML = productType
    document.getElementById("userFeedback").innerHTML = feedbackText
    document.getElementById("userExperience").innerHTML = experience

}