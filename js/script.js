class Note {
  constructor(title) {
    this.title = title;
    this.element = this.createElement(title);    
  }
  
  createElement(title){
      // create new div element -> newNote
    let newNote = document.createElement('div');
 
      newNote.setAttribute("class", "card"); 
      
      // create paragraph
      let paragraph = document.createElement("p");
      paragraph.innerHTML = title;
      
      // create remove link
      let link = document.createElement("a");
      link.className="card-remove"; 
      link.href = "#"; 
      link.innerHTML = "Remove";
      link.style.cursor = "pointer";
      
      // add elements to note 
      newNote.appendChild(paragraph); 
      newNote.appendChild(link); 
      
      // delete note 
      link.onclick = function() {          
          let itemToDelete = this.parentNode; 
          itemToDelete.remove(); 
      }
      
      
      this.saveToStorage(title); 
      
      /*let myID = localStorage.length; 
      
      // save 
      let task = {
          id: myID,
          name:title
      }*/
      
      // Saving element in local storage

    /*  localStorage.setItem("todoData", JSON.stringify(task));
      
      // test to get data
      let data = JSON.parse(localStorage.getItem("todoData"));
      console.log(data); */
      
    return newNote;
  }
  
  add(){
     document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(message){
    // HINT🤩
    // localStorage only supports strings, not arrays
    // if you want to store arrays, look at JSON.parse and JSON.stringify
      
      
      
  }
  
  remove(){
      // remove is an existing function
  } 
}

class App {
    
  constructor() {
      let btn = document.getElementById("btnAddNote");
      
      // click button
      btn.addEventListener("click", this.createNote.bind(this));
            
      
      // press enter
      document.getElementById("txtAddNote").addEventListener("keyup", function(event) {
          // Cancel the default action
          event.preventDefault();
          if (event.keyCode === 13) {
              btn.click();                
          }
        });
      
     //localStorage.clear(); 
  }
  
  loadNotesFromStorage() {
    // HINT🤩
    // load all notes from storage here and add them to the screen
    // something like note.add() in a loop would be nice
      
    // Retrieve the object from storage
   /*     let data = JSON.parse(localStorage.getItem("todoData"));
      console.log("storage: " + data);*/
      
    
      
    
  }
   
  createNote(){
    // get value from input field
    let input = document.getElementById("txtAddNote").value;
      
      // check if input is not empty
      if (input!=""){
           let note = new Note(input); 
          console.log(note); 
            note.add();      
            this.reset(); 
            // doesnt work (yet)
            note.saveToStorage(input);
      }
      
  }
  
  reset(){
      // clear input field
      document.getElementById("txtAddNote").value="";
  }
  
}
let counter = 0; 
let app = new App();
app.loadNotesFromStorage();