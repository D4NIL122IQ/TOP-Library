const btnAdd = document.querySelector("#add");
const dialog = document.querySelector("dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const nbrPage = document.querySelector("#nbrPage");
const read = document.querySelector("#read");
const exitDialog = document.querySelector("#exit");
const displayCards = document.querySelector(".displayCard");
const form = document.querySelector("form");

let allBooks =[];

function reset(){
    form.reset();
    dialog.close();
}

function verifyReadButtons(){
   if(this.classList.contains("green")){
        this.classList.remove("green");
        this.classList.add("red");
    }else{
        this.classList.remove("red");
        this.classList.add("green");
    }  
}

function Book(title , author , nbrPage, read){
    this.title = title;
    this.author =author;
    this.nbrPage = nbrPage;
    this.read = read;
}

function addBookToLibrary(newBook) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML ='<p> Title : '+ newBook.title + '</p> <p> Author : '+ newBook.author + '</p>  <p> number of pages : '
                        + newBook.nbrPage + '</p> ';
    div.innerHTML += (newBook.read)? '<button class="isread green"  onclick="verifyReadButtons.call(this)"> Read </button>' 
                    : '<button class="isread red" onclick="verifyReadButtons.call(this)"> Read</button>';
    div.innerHTML += '<button class="sup">Remove</button>';
    displayCards.appendChild(div);

    const deleteButtons = document.querySelectorAll(".sup");
    deleteButtons.forEach((button)=> {
        button.addEventListener("click",()=>{
            displayCards.removeChild(button.parentElement);
        })
    })
}

btnAdd.addEventListener("click" , ()=>{
    dialog.showModal();
})

// ajouter une carte (livre)
form.addEventListener("submit" ,()=>{
    let newBook = new Book(title.value , author.value , nbrPage.value , read.checked)
    allBooks.push(newBook);
    addBookToLibrary( newBook);
    reset();
})

//annuler les form
dialog.addEventListener("close" , ()=>{
    reset();
})

exitDialog.addEventListener("click" , ()=>{
    reset();
})