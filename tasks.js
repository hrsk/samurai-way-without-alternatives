const tasks = [
    {id: '1', title: "Купить продукты на неделю", isDone: false},
    {id: '2', title: "Полить цветы", isDone: true},
    {id: '3', title: "Сходить на тренировку", isDone: false},
]

const rootEl = document.getElementById("root");

const tasksEl = document.createElement("ul");
tasksEl.setAttribute("id", "tasksElement");


rootEl.append(tasksEl);


tasks.forEach((task) => {
    const taskEl = document.createElement("li");
    taskEl.setAttribute("id", task.id);
    const inputElement = document.createElement("input")
    inputElement.setAttribute("id", "checkboxElement");
    // inputElement.type = 'checkbox';
    inputElement.setAttribute('type', 'checkbox');
    inputElement.checked = task.isDone;
    taskEl.append(inputElement, task.title);
    tasksEl.append(taskEl);
})

const elementsById = document.querySelectorAll("li")
console.log(elementsById)

const firstTaskCheckbox =  elementsById.item(0).getElementsByTagName('input').namedItem('checkboxElement')
const secondTaskCheckbox =  elementsById.item(1).getElementsByTagName('input').namedItem('checkboxElement')
const thirdTaskCheckbox =  elementsById.item(2).getElementsByTagName('input').namedItem('checkboxElement')

console.log(firstTaskCheckbox)
console.log(secondTaskCheckbox)
console.log(thirdTaskCheckbox)


firstTaskCheckbox.addEventListener('onclick', () => {
    alert('click')
})

firstTaskCheckbox.click()

secondTaskCheckbox.addEventListener('onclick', () => {
    alert('click')
})

secondTaskCheckbox.click()


thirdTaskCheckbox.addEventListener('onclick', () => {
    alert('click')
})

thirdTaskCheckbox.click()
