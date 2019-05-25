let todos = [
  {
    id: 0,
    name: "Washing Clothes",
    completed: false
  },
  {
    id: 1,
    name: "Folding Laundry",
    completed: false
  },
  {
    id: 2,
    name: "Doing the Dishes",
    completed: false
  }
];

const container = document.querySelector(".container");
const item_list = document.querySelector(".item-list");
const todo_form = document.querySelector(".todo-form");
const todo_input = document.querySelector("form input");
let new_todo_holder;
function add_todos(todos_list = todos) {
  todos.forEach(todo => {
    let item = document.createElement("li");
    item.textContent = todo.name;
    item.id = todo.id;
    // item.setAttribute("data-key", todo.id);
    add_a_button(item);
    item_list.appendChild(item);
  });
}
function add_a_new_todo(todo) {
  let item = document.createElement("li");
  item.textContent = todo.name;
  item.id = todos.length;
  //   item.setAttribute("data-key", todos.length);
  add_a_button(item);
  item_list.appendChild(item);
}
function add_a_button(item) {
  let button = document.createElement("button");
  button.innerText = "x";
  button.id = item.id;
  button.addEventListener("click", deletehandler);
  item.appendChild(button);
}
function deletehandler(e) {
  console.log(e.target.id);
  let delete_todo = document.querySelector(`li[id="${e.target.id}"]`);
  delete_todo.parentNode.removeChild(delete_todo);
  let new_todos = todos.filter(todo => todo.id != e.target.id);
  todos = new_todos;
}
add_todos();
todo_form.addEventListener("submit", e => {
  e.preventDefault();
  let new_todo = {
    id: todos.length,
    name: new_todo_holder,
    completed: false
  };
  if (new_todo_holder.length == 0) return alert("text cannot be empty");
  add_a_new_todo(new_todo);
  todos.push(new_todo);
});

todo_input.addEventListener("input", event => {
  event.stopPropagation();
  new_todo_holder = event.target.value;
});
