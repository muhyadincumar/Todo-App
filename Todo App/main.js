    
    function addTodo(){
    const inputElement = document.querySelector("input");
     const value = inputElement.value;
     if(value === ''){
        alert('Please inter a Todo');
        return; // stop here
     }
     const todoContainer = document.createElement('div')
     todoContainer.className = 'flex justify-between items-center';
     const todoTitle = document.createElement('h4');
     todoTitle.textContent = value;
     const doneButton = document.createElement('button');
     doneButton.className = 'bg-green-500  p-2 rounded-lg';
     doneButton.textContent = 'Done';

     todoContainer.appendChild(todoTitle);
     todoContainer.appendChild(doneButton);
     const alltodoContainer = document.querySelector('#todosContaine');

     alltodoContainer.appendChild(todoContainer);
     inputElement.value = '';
    }