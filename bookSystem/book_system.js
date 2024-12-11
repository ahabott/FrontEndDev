let books = []


function addBook(){
    const bookName = document.getElementById("bookName").value
    const authorName = document.getElementById("authorName").value
    const bookDescription = document.getElementById("bookDescription").value
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value)

    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            author: authorName,
            description: bookDescription,
            pagenumber: pagesNumber
        }
        books.push(book)
        showBooks()
        clearInput()
    } else {
        alert("Please fill all the fields correctly!")
    }
}

function showBooks(){
    const bookDisplay = books.map(function(item, index){
        return `<p>${item.name}<br>${item.author}<br>${item.description}<br>${item.pagenumber}</p>
                <button onclick= "deleteBook(${index})">Delete</button>`
    }).join("")
    document.getElementById("books").innerHTML = bookDisplay
}

function clearInput(){
    document.getElementById("bookName").value = ""
    document.getElementById("authorName").value = ""
    document.getElementById("bookDescription").value = ""
    document.getElementById("pagesNumber").value = ""
}

function deleteBook(index) {
    if (confirm("Are you sure you want to delete this book?")) {
        books.splice(index, 1) // Remove book from array
        showBooks() // Update the displayed list
    }
}