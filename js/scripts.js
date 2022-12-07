
window.onload = function(){


    const items = {...localStorage}; //local storage data
    let localStorageArrayKeys = Object.keys(items);
    
    //loop the local storage and output it when refreshed
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

    // let deleteButton = document.querySelectorAll(".delete");
    // console.log(deleteButton);
    // for (let i = 0; i < deleteButton.length; i++) {
    //     deleteButton[i].onclick = function() {
    //         let deletedElement = deleteButton[i].previousElementSibling.textContent.trim();
    //         console.log(deletedElement);
    //         localStorage.removeItem(deletedElement);
    //         this.parentNode.remove();
    //     }
    // }




    
    // adds tasks
    let getData = [];
    document.querySelector('.add').onclick = function() {
        if(document.querySelector('#newtask input').value.length == 0) {
            alert("Please enter a task")
        } else {
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

        for (let i=0; i < getData.length; i++) {
            localStorage.setItem(getData[i], i);
        }


    
        // getData.value=localStorage.getItem("memos")
    //removes tasks
    // getData.addEventListener("remove", event => {
    //     localStorage.setItem("memos", event.target.value)
    // })

    //toggle strike through tasks
        let mystyle = document.querySelectorAll(".taskname");
        for (let i=0; i<mystyle.length; i++) {
            mystyle[i].addEventListener("dblclick", function() {
                this.classList.toggle("mystyle");
            } )
        }
    
    
             }
        }   

        // function myFunction() {
        //     var element = document.getElementById("tasks");
        //     element.classList.toggle("mystyle");
        // }
    
        //drags tasks and reposition up and down
     Sortable.create(list1, {
        animation: 120,
        draggable: '.task',
        handle: '.task',
        sort: true,
        filter: '.sortable-disabled',
        chosenClass: 'active'
      });
    
      
    }



    
    document.addEventListener('click', function (event) {
 var current_tasks = document.querySelectorAll(".delete"); 
 for (let i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function() {
        let deletedElement = current_tasks[i].previousElementSibling.textContent.trim();
        console.log(deletedElement);
        localStorage.removeItem(deletedElement);
        this.parentNode.remove();
    }
    
 }        
        if (!event.target.matches('.delete')) 
            return;
        event.preventDefault();
        
      
    }, false);
    
    