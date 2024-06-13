const btn = document.querySelector("#add")
const dialog = document.querySelector("dialog")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const nbrPage = document.querySelector("#nbrPage")
const exitDialog = document.querySelector("#exit")
const displayCards = document.querySelector(".displayCard")


function Book(title , author , nbrPage){
    this.title = title;
    this.author =author;
    this.nbrPage = nbrPage;
}

function addBookToLibrary(newBook) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML =' <p>'+ newBook.title + '</p> <p>'+ newBook.author + '</p>  <p>'+ newBook.nbrPage + '</p> <button class="read"> read</button> <button class="sup">sup</button>'
    displayCards.appendChild(div)
}


btn.addEventListener("click" , ()=>{
    dialog.showModal()
})


dialog.addEventListener("close" , ()=>{
    let hd = new Book(title.value , author.value , nbrPage.value)
   addBookToLibrary( hd)
})


exitDialog.addEventListener("click" , ()=>{
    dialog.close()
})