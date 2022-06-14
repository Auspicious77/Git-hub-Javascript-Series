const Addform = document.querySelector('.add')
const list = document.querySelector('.todos')
const generatetemplate = todo =>{
 const html = `
   <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${todo}</span>
                <i class="far fa-trash-alt delete"></i>   
    </li>
 `
 list.innerHTML = html;
};

Addform.addEventListener('submit', e=>{
    e.preventDefault()
    const todo = Addform.add.value.trim();
    if (todo.lenght) {
    generatetemplate(todo);
    Addform.reset()
    }
})

