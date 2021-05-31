//define UI content
let form = document.querySelector('#task_form');
let tasklist = document.querySelector('ul');
let taskinput = document.querySelector('#new_task');
let filter = document.querySelector('#task_filter');
let cleartaskbtn = document.querySelector('#clear_task_btn');

//define eventlistener
form.addEventListener('submit', addtask);

//let li = document.createElement('li');
//console.log(li)


//define function

function addtask(e) {
    if (taskinput.value === '') {
        alert('Add a task!');
    }
    else {
        let li = document.createElement('li');
        //li.appendChild(document.addTextNode(taskinput.value + " "));
        //tasklist.appendChild(li)
          console.log(li)
    }
}
