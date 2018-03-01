class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);
  }
  
  createElement(title){
    let newNote = document.createElement('div');
      
    document.querySelector(".card-remove").addEventListener('click', this.remove.bind(newNote));

      newNote.setAttribute("class", "card"); 
      
      // create paragraph
      let paragraph = document.createElement("p");
      paragraph.innerHTML = title;
      
      // create remove link
      let link = document.createElement("a");
      link.innerHTML = "Remove";
      link.style.cursor = "pointer";
      
      newNote.appendChild(paragraph); 
      newNote.appendChild(link); 
                
    return newNote;
  }
  
  add(){
     document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(){
      
    // Put the object into storage
    localStorage.setItem('testObject', JSON.stringify(this.element));
 
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
  }
  
  remove(){
    // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
    // in this function, 'this' will refer to the current note element
      console.log("click"); 
  
      
     // newFunc = funcA.bind(this);
      //element.removeEventListner('click', newFunc);
      
  } 
}

class App {
    
  constructor() {
      let btn = document.getElementById("btnAddNote");
      //createNote(); 
      
      // click button
      this.btnAdd = btn; 
      this.btnAdd.addEventListener("click", this.createNote.bind(this));
      
      
      
      // press enter
     /* document.getElementById("txtAddNote").addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            this.btnAdd.addEventListener("click", this.createNote.bind(this));

        }
        });*/
      
      
      // click link
      //  this.document.querySelector(".card-remove").addEventListener("click",    );
      
      //this.btnAdd.addEventListener("click", this.createNote.bind(this));

      
      
    // this.loadNotesFromStorage();
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
      
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('testObject');

    console.log('retrievedObject: ', JSON.parse(retrievedObject));
  }
   
  createNote(){
      console.log("create note"); 
    // this function should create a new note by using the Note() class
    
    // get value from input field
    let input =  document.getElementById("txtAddNote").value;
    let note1 = new Note(input); 
    note1.add();      
      
    // doesnt work (yet)
    note1.saveToStorage();
    this.reset(); 
      
  }
  
  reset(){
    // this function should reset the form 
      
  }
  
}


let a1 = new App();

let note1 = new Note("hello"); 
note1.add();


