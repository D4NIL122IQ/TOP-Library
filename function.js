const btnAdd = document.querySelector("#add")
const dialog = document.querySelector("dialog")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const nbrPage = document.querySelector("#nbrPage")
const exitDialog = document.querySelector("#exit")
const displayCards = document.querySelector(".displayCard")
let deleteButtons = document.querySelectorAll(".sup");
const form = document.querySelector("form")

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
    deleteButtons = document.querySelectorAll(".sup");
    console.log(deleteButtons)
    
}

deleteButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
        console.log("hello")
    })
})

btnAdd.addEventListener("click" , ()=>{
    console.log(deleteButtons)
    dialog.showModal()
})

// ajouter une carte (livre)
form.addEventListener("submit" ,()=>{
    let hd = new Book(title.value , author.value , nbrPage.value)
    addBookToLibrary( hd)
    form.reset()
    dialog.close()

})

//annuler les fom
dialog.addEventListener("close" , ()=>{
    form.reset()
    dialog.close()
})

exitDialog.addEventListener("click" , ()=>{
    form.reset()
    dialog.close()
})