const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

// create
function paintToDo(newTodo) {
    // console.log("i will paint", newTodo);
    // li tag create
    const li = document.createElement("li");
    li.id = newTodo.id;
    // span tag create
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //button create
    const button = document.createElement("button");
    button.innerText = "I do";
    // click the button >> start deletToDo
    button.addEventListener("click", deletToDo);
    // span 이라는 자식을 생성
    li.appendChild(span);
    // button 자식 생성
    li.appendChild(button);
    // toDoList에 li이라는 자식을 생성
    toDoList.appendChild(li);
}

// delete
function deletToDo(event) {
    // button 의 부모를 target >> li 변수에 저장
    // id 를 설정해줌으로서 id를 검색할 수 있다.
    const li = event.target.parentElement;
    // 저장된 li remove
    li.remove();
    // toDo = toDos DB, click 한 toDo를 제외한 toDo만 남기기
    // li.id = string  toDo.id = number >> parseInt로 바꿔주기
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // list item을 지운 후 save 시켜줌
    saveToDos();
}
// delete 기능 >> item을 제외하도록 만듬
// 반드시 true retuen. >> 새로운 array에도 사용할 수 있도록, array의 item 유지
function filter() {

}

// save
function saveToDos() {
    // toDos List 를 Array의 형식으로 맞춰줌
    // localStorage.setItem("todos", JSON.stringify(toDos));
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // let toDos로 변경
    toDos = parsedToDos;
    // toDos에 있는 각각의 item에 맞춰 console.log 실행
    // paintToDo 로 List에 저장되어 있는 items 를 보여줌
    parsedToDos.forEach(paintToDo);
}


function handleToDoSubmit(event) {
    event.preventDefault(); // 새로고침 x1
    const newTodo = toDoInput.value; // input의 새로운 value들을 newTodo에 저장
    // ToDoList를 object로
    // id로 delete를 쉽게 할 수 있다.
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDoInput.vaule = "";
    // toDos list에 value push >> localstorage로 보내야함
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos(); // array로 저장되지 않는다. >> JSON.stringfy 사용
};


toDoForm.addEventListener("submit", handleToDoSubmit);
