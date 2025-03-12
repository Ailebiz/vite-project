import { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    { taskName: "Гүл суару", completed: true },
    { taskName: "Күнделікті үй тапсырмасын орындау", completed: false }
  ]);
  const [filter, setFilter] = useState("all"); 

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

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter == "all") {
      return true;
    }
    if (filter === "completed") 
      return task.completed;
    if (filter === "incompleted") 
      return !task.completed;
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={task}
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Қосу</button>
      </form>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('incompleted')}>Incompleted</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.taskName}
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? "🔄 Қайта бастау" : "✅ Аяқталды"}
            </button>
            <button onClick={() => deleteTask(index)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
