var current_id = 0;
var first_task = true;
function init() {
    // Инициализация приложения
    const todo_list = document.getElementById("todo_list");
    var empty = document.createElement("div");
    empty.classList.add("todo_list_elem");
    empty.classList.add("todo_list_empty_elem");
    var elem_title = document.createElement("div");
    elem_title.classList.add("todo_list_empty_elem_title");
    elem_title.innerHTML = "Список пуст! Добавьте задачу!\n";
    empty.append(elem_title);
    todo_list.append(empty);
}

function handlerAdd(event) {
    // Событие добавления нового элемента
    const input = document.getElementById("todo_input");
    if (input.value) {
        input.classList.remove('error_input');
        addTask(input.value);
    } else {
        input.classList.add('error_input');
    }
};

function addTask(task_value) {
    const todo_list = document.getElementById("todo_list");
    if (first_task) {
        // если добавляется первая задача, мы должны удалить надпись о пустоте
        first_task = false;
        todo_list.replaceChildren();
    }
    // создаем элемент задачи
    var todo = document.createElement("div");
    todo.classList.add("todo_list_elem");
    todo.id = `todo-${current_id}`;

    // елемент заголовка
    var elem_title = document.createElement("div");
    elem_title.classList.add("todo_list_elem_title");
    elem_title.innerHTML = task_value;
    todo.append(elem_title);

    // элемент времени
    var elem_time = document.createElement("div");
    elem_time.classList.add("todo_list_elem_time");
    var d = new Date();
    elem_time.innerHTML = `${d.toUTCString()}`;
    todo.append(elem_time);

    // элемент кнопки
    var elem_btn = document.createElement("div");
    var btn = document.createElement("button");
    btn.classList.add("todo_list_elem_btn");
    btn.classList.add('btn');
    btn.addEventListener('click', (e) => { done_task(e, todo.id) }, false);
    btn.innerHTML = "Отметить";
    elem_btn.append(btn);
    todo.append(elem_btn);

    todo_list.append(todo);
    current_id++;
}

function done_task(e, id) {
    console.log(id);
    // console.log(current_id);
    var todo = document.getElementById(id);
    todo.classList.add('todo_list_elem_done');
    var btn_wraper = todo.lastChild;
    console.log(btn_wraper);
    var d = new Date();
    btn_wraper.innerHTML = `${d.toUTCString()}`;
};

document.addEventListener('DOMContentLoaded', function () {
    init();
});