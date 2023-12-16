const addTaskForm = document.querySelector('.add');
const ul = document.querySelector('ul');
const search = document.querySelector('.search input');


const taskTemplate = (newTask) => {
    let li = document.createElement('li');
    let span = document.createElement('span');
    let icon = document.createElement('i');

    span.textContent = newTask;
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    icon.classList.add('fa-trash-alt', 'far', 'delete');

    li.appendChild(span);
    li.appendChild(icon);
    
    ul.appendChild(li);
}

//ALTERNATIVELY
// const taskTemplate2 = (newTask) => {
//     const html = `
//     <li class="list-group-item d-flex justify-content-between align-items-center"><span>${newTask}</span><i class="far fa-trash-alt delete"></i></li>
//     `
//     ul.innerHTML += html;
// }

addTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    let newTask = addTaskForm.add.value.trim();
    if(newTask){
        taskTemplate(newTask);
        addTaskForm.reset();
    }
});

ul.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const searchLogic = (inputKeyWord) => {
    Array.from(ul.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(inputKeyWord))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ul.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(inputKeyWord))
        .forEach((todo) => todo.classList.remove('filtered'));
}

search.addEventListener('keyup', () => {
    const inputKeyWord = search.value.trim().toLowerCase();
    searchLogic(inputKeyWord);
});