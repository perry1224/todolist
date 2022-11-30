
window.onload = function(){

    const items = {...localStorage}; //local storage data
    let localStorageArrayKeys = Object.keys(items);
    
    for (let i=0; i<localStorageArrayKeys.length; i++) {
        document.querySelector('.tasks-group').innerHTML +=`
        <div class="task">
            <span class="taskname"> 
            ${localStorageArrayKeys[i]}</span>
            <button class="delete">
            X </button>
        </div>
        `;
    }

    var current_tasks = document.querySelectorAll(".delete"); 
    for (let i=0; i<current_tasks.length; i++){
       current_tasks[i].onclick = function() {
           this.parentNode.remove();
       }
   }
    
    
    
    
    // console.log(items);
    let getData = [];
    document.querySelector('.add').onclick = function() {
        if(document.querySelector('#newtask input').value.length == 0) {
            alert("Please enter a task")
        }
        else {
            document.querySelector('.tasks-group').innerHTML +=`
            <div class="task">
                <span class="taskname"> 
                ${document.querySelector('#newtask input').value}</span>
                <button class="delete">
                X </button>
            </div>
            `;
        getData.push(document.querySelector('#newtask input').value);
        console.log(getData)
    
    
        let mystyle = document.querySelectorAll(".taskname");
        for (let i=0; i<mystyle.length; i++) {
            mystyle[i].addEventListener("dblclick", function() {
                this.classList.toggle("mystyle");
            } )
        }
    
    
        for (let i=0; i < getData.length; i++) {
            localStorage.setItem(getData[i], i);
            
        }
    
    //  var current_tasks = document.querySelectorAll(".delete"); 
    //  for (let i=0; i<current_tasks.length; i++){
    //     current_tasks[i].onclick = function() {
    //         this.parentNode.remove();
    //     }
        
    //  }
    
        }
    }
    
    
    function myFunction() {
        var element = document.getElementById("tasks");
        element.classList.toggle("mystyle");
     }
    
     Sortable.create(list1, {
        animation: 120,
        draggable: '.task',
        handle: '.task',
        sort: true,
        filter: '.sortable-disabled',
        chosenClass: 'active'
      });
    
    }
    
    
    