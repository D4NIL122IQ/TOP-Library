const btnAdd = document.querySelector("#add")
const dialog = document.querySelector("dialog")
const title = document.querySelector("#title")
const author = document.querySelector("#author")
const nbrPage = document.querySelector("#nbrPage")
const read = document.querySelector("#read")
const exitDialog = document.querySelector("#exit")
const displayCards = document.querySelector(".displayCard")
const form = document.querySelector("form")

function Book(title , author , nbrPage, read){
    this.title = title;
    this.author =author;
    this.nbrPage = nbrPage;
    this.read = read
}

function addBookToLibrary(newBook) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML ='<p>'+ newBook.title + '</p> <p>'+ newBook.author + '</p>  <p>'+ newBook.nbrPage + '</p> '
    div.innerHTML += (newBook.read)? '</p> <button class="isread green" > read</button>' : '</p> <button class="isread red"> read</button>'
    div.innerHTML += '<button class="sup">sup</button>'
    displayCards.appendChild(div)
    const deleteButtons = document.querySelectorAll(".sup");


    deleteButtons.forEach((button)=> {
        button.addEventListener("click",()=>{
            displayCards.removeChild(button.parentElement)
        })
    })
}



btnAdd.addEventListener("click" , ()=>{
    dialog.showModal()
})

// ajouter une carte (livre)
form.addEventListener("submit" ,()=>{
    let hd = new Book(title.value , author.value , nbrPage.value , read.checked)
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