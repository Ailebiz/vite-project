import { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { taskName: "Гүл суару", completed: true },
    { taskName: "Күнделікті үй тапсырмасын орындау", completed: false }
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { taskName: task, completed: false }]);
      setTask('');
    }
  }

  const toggleComplete = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={task} type="text" onChange={(e) => setTask(e.target.value)} />
        <button type="submit">Қосу</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.taskName}
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "🔄 Қайта бастау" : "✅ Аяқталды"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}