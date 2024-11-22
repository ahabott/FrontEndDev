let index = 0

function checkCountValue() {
    if (index === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (index === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }
function increaseCount(){
    index = index+1
    document.getElementById("countDisplay").innerHTML = index
    checkCountValue()
}

function resetButton(){
  index = 0 
  document.getElementById("countDisplay").innerHTML = index
}