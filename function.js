const btnAdd = document.querySelector("#add");
const dialog = document.querySelector("dialog");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const nbrPage = document.querySelector("#nbrPage");
const read = document.querySelector("#read");
const exitDialog = document.querySelector("#exit");
const displayCards = document.querySelector(".displayCard");
const form = document.querySelector("form");



// on recupere le localStorage
const cardsInStorage = localStorage.getItem("card")?.toString()

// initialisation du tableau qui contient tout les livre ainsi que l'index
let nbrBook = 0;
let allBooks =[];

//on re)affiche les livre qu'il ya dans le storage
if (cardsInStorage) {
    allBooks = JSON.parse(cardsInStorage)
    allBooks.forEach((obj) => addBookToLibrary(obj))
    nbrBook = allBooks.length
}

//update du storage
function UpdateLocalStorage() {
    localStorage.setItem('card' , JSON.stringify(allBooks))
}


function reset(){
    form.reset();
    dialog.close();
}

function Book(title , author , nbrPage, read){
    this.title = title;
    this.author =author;
    this.nbrPage = nbrPage;
    this.read = read;
    this.nbrbook = nbrBook;
    nbrBook++;
}

// maj du tebleau des elements + du localStorage
function updateArrayOfBook(index , isread) {
    allBooks[index].read = isread; 
    UpdateLocalStorage()

}

function verifyReadButtons(){
   if(this.classList.contains("green")){
        this.classList.remove("green");
        this.classList.add("red");
        updateArrayOfBook(parseInt(this.parentElement.firstChild.className) , false)
    }else{
        this.classList.remove("red");
        this.classList.add("green");
        updateArrayOfBook(parseInt(this.parentElement.firstChild.className) , true)
    }  
}



function addBookToLibrary(newBook) {
    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML ='<p class="'+ newBook.nbrbook +'"> Title : '+ newBook.title + '</p> <p> Author : '+ newBook.author + '</p>  <p> number of pages : '
                        + newBook.nbrPage + '</p> ';
    div.innerHTML += (newBook.read)? '<button class="isread green"  onclick="verifyReadButtons.call(this)"> Read </button>' 
                    : '<button class="isread red" onclick="verifyReadButtons.call(this)"> Read</button>';
    div.innerHTML += '<button class="sup">Remove</button>';
    displayCards.appendChild(div);

    const deleteButtons = document.querySelectorAll(".sup");
    deleteButtons.forEach((button)=> {
        button.addEventListener("click",()=>{

            allBooks = allBooks.filter((obj)=> obj.nbrbook != parseInt(button.parentElement.firstChild.className))
            UpdateLocalStorage()
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
    localStorage.setItem('card' , JSON.stringify(allBooks))
    //update localStrorage
    reset();
})

//annuler les form
dialog.addEventListener("close" , ()=>{
    reset();
})

exitDialog.addEventListener("click" , ()=>{
    reset();
})