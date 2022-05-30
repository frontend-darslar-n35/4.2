const numbers = [12, 14, 32, 22]

function calculateSum(arr){
    let sum = 0
    numbers.forEach((value) => {
        sum +=value
    })
    return sum
}

// const summ = numbers.reduce((prev, current, index) => {
//     console.log("index:",index, " value:", current, " yig'indi:", prev)
//     prev +=current
//     return prev
// }, 0)

// console.log(summ)

// function reduce(arr, callback, intialValue){
//     let collect
//     let defaultIndex = 0
//     if(typeof intialValue === typeof arr[0] && intialValue){
//         collect = intialValue
//         defaultIndex = 0
//     }else{
//         collect = arr[0];
//         defaultIndex = 1;
//     }

//     for(let i=defaultIndex; i < arr.length; i++){
//         collect = callback(collect,arr[i], i, arr)
//     }

//     return collect
// }

// const summ = numbers.reduce((collect, thisEl)=> collect + thisEl, 0)

// console.log(summ)

// console.log('1'-0+1)

// var a = 12
// console.log(++a + a++) // 25 // 26
// console.log(a) // 13 // 14



// var gentra = [
//     {id:1, name:"Redline"},
//     {id:2, name:"LT"},
//     {id:3, name:"LTZ"},
//     {id:4, name:"AT"},
// ]

// var fakeMers = gentra.map((value, index, arr) => {
//     return {
//         id:value.id,
//         model:value.name
//     }
// })

// console.log(fakeMers)

const user = [
    { id:1, name:"John Doe1", isAdmin:true },
    { id:2, name:"John Doe2", isAdmin:false },
    { id:3, name:"John Doe3", isAdmin:true },
    { id:4, name:"John Doe4", isAdmin:false },
    { id:5, name:"John Doe5", isAdmin:true },
    { id:6, name:"John Doe6", isAdmin:false },
    { id:7, name:"John Doe7", isAdmin:true },
    { id:8, name:"John Doe8", isAdmin:true },
    { id:9, name:"John Doe9", isAdmin:false },
    { id:10, name:"John Doe10", isAdmin:true }
]

// const admins = filter(user, (value, index, arr) => {
//     return value.isAdmin
// })

// function filter(arr, callback){
//     let arrTemp = []
//     for(let i=0; i < arr.length; i++){
//         if(callback(arr[i], i, arr))arrTemp.push(arr[i])
//     }
//     return arrTemp
// }


// function map(arr, callback){
//     let arrTemp = []
//     for(let i=0; i < arr.length; i++){
//         arrTemp.push(callback(arr[i], i, arr))
//     }
//     return arrTemp
// }

// const mappedArray = map(user, (value, index, arr) => {
//     return {
//         name:value.name
//     }
// })

// console.log(mappedArray)

// sum()
var todos = [
    {id:1, title:"Maktabga boraman", isCompleted:true}
]

var containerEl = document.createElement('div')
containerEl.className = 'container'
document.body.appendChild(containerEl)


var todoInputForm = document.createElement('form')
todoInputForm.className = 'todo-form'
todoInputForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let id =todos.length >0 ? todos[todos.length-1].id+1 : 0
    const newTodo = {
        id:id,
        title:todoInput.value,
        isCompleted:false
    }
    todos.push(newTodo)
    todoInput.value = ""
    renderTodos(todos)
})



containerEl.appendChild(todoInputForm)

var todoInput = document.createElement('input')
todoInput.className = 'todo-input'

var todoAddBtn = document.createElement('button')
todoAddBtn.textContent = "Add"
todoAddBtn.type = 'submit'
todoAddBtn.className = 'todo-add-btn'


todoInputForm.appendChild(todoInput)
todoInputForm.appendChild(todoAddBtn)


var todoListEl = document.createElement('div')
containerEl.appendChild(todoListEl)

function createTodoItem(todo){
    let todoContainer = document.createElement('div')
    todoContainer.className = 'todo-item'

    let todoCheckEl = document.createElement('input')
    todoCheckEl.type = 'checkbox'
    todoCheckEl.className = 'todo-item__check'
    todoCheckEl.checked = todo.isCompleted
    todoContainer.appendChild(todoCheckEl)
    todoCheckEl.addEventListener('change', () => {
        todos = todos.map(value => {
            if(value.id === todo.id){
                value.isCompleted = todoCheckEl.checked
            }
            return value
        })
        renderTodos(todos)
        console.log(todos)
    })
    let todoTitleEl = document.createElement('p')
    todoTitleEl.textContent = todo.title
    todoTitleEl.className = 'todo-item__title'
    todoContainer.appendChild(todoTitleEl)

    let todoDelEl = document.createElement('button')
    todoDelEl.textContent = 'delete'
    todoDelEl.className = 'todo-item__delete'
    todoContainer.appendChild(todoDelEl)
    todoDelEl.addEventListener('click', () => {
        todos = todos.filter(value =>value.id!== todo.id)
        renderTodos(todos)
    })
    return todoContainer
}

function renderTodos(todosData){
    todoListEl.innerHTML = null
    todosData.forEach((todo, index) => {
        let todoEl = createTodoItem(todo)
        todoListEl.appendChild(todoEl)
    })
}

renderTodos(todos)