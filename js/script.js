let messages = []; 
let counter = 0;

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
      
    return newNote;
  }
  
  add(){
     document.querySelector(".notes").appendChild(this.element);
  }
  
  saveToStorage(message){
      messages.push(message);
      localStorage.setItem('notes', JSON.stringify(messages));
      console.log(messages);
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
      this.loadNotesFromStorage(); 
  }
  
  loadNotesFromStorage() {
      console.log("show messages!"); 
      
      let showmessages = JSON.parse(localStorage.getItem('notes'));
      console.log(showmessages); 
      
      showmessages.forEach(function(i){
          let note = new Note(i);
          console.log(note); 
          note.add(); 
          counter++;
      });
  }
   
  createNote(){
    // get value from input field
    let input = document.getElementById("txtAddNote").value;
      
      // check if input is not empty
      if (input!=""){
           let note = new Note(input);
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
let app = new App();