let messages = [];
messages = localStorage.getItem("notes") ?JSON.parse(localStorage.getItem("notes")):[];
let counter = 0;

class Note {
  constructor(title) {
    this.title = title;
      console.log("title: " + title); 
    this.element = this.createElement(title);    
  }
  
  createElement(title){
      // create new div element -> newNote
    let newNote = document.createElement('div');
 
      newNote.setAttribute("class", "card"); 
      newNote.name = title; 
      
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
      link.addEventListener('click', this.remove.bind(newNote));
      
    return newNote;
  }
  
  add(){
     document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(message){
      messages.push(message);
      localStorage.setItem('notes', JSON.stringify(messages));
      //console.log(messages);
  }
  
  remove(){
      console.log("remove item");
      // remove from storage
       let location = messages.indexOf(`${this.name}`);
       console.log(location);
      if (location >= 0) {
          messages.splice(location,1);
          localStorage.setItem('notes', JSON.stringify(messages));
      }
      
      // remove from screen 
      this.style.visibility = "hidden"; 
  } 
}

class App {
    
  constructor() {
      this.loadNotesFromStorage(); 
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
      console.log("show messages!"); 
      
      let showmessages = JSON.parse(localStorage.getItem('notes'));
      console.log(showmessages); 
      
      if (showmessages!== null){ 
      showmessages.forEach(function(i){
          let note = new Note(i);
          console.log(note); 
          note.add(); 
          counter++;
      });
      }
      console.log("array " + messages); 
  }
   
  createNote(){
    // get value from input field
    let input = document.getElementById("txtAddNote").value;
      
      // check if input is not empty
      if (input!=""){
           let note = new Note(input);
            note.add();      
            this.reset(); 
            note.saveToStorage(input);
      }
  }
  
  reset(){
      // clear input field
      document.getElementById("txtAddNote").value="";
  }
  
}
let app = new App();