export const Tasks = () => {

    const tasks = [
        {id: 1, title: "Купить продукты на неделю", isDone: false},
        {id: 2, title: "Полить цветы", isDone: true},
        {id: 3, title: "Сходить на тренировку", isDone: false},
    ]

    return (
        <ul>
            {
                tasks.map((task) => (
                    <li>
                        <span>{task.title}</span>
                        <input type={'checkbox'} checked={task.isDone}/>
                    </li>))
            }
        </ul>
    )
}
