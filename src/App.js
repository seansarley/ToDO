import { useState } from "react";
import "./App.css";


function App() {

  const [task, setTask] = useState("");
  const [todoList, setToDoList] = useState([]);

const handleSubmit = (event) => {
    event.preventDefault();
    setToDoList (currentTasks => [...currentTasks, task]);
    setTask('');
  };
const handleDelete = (deletingTask) => {
  const newTasks = todoList.filter((task) => task !== deletingTask)
  setToDoList(newTasks);
};
return (
  <div classname="App">
    <form onSubmit= {handleSubmit}>
      <h1>ToDo List</h1>
      <input id="enterBar" type="text" value={task} placeholder="Enter Task" onChange= {(e) => setTask(e.target.value)}></input>
      <button id="addButton">Add</button>
    </form>
    <div id="container">
      <ul>
        {
          todoList.map((task,index) => <li key={index}> {task} <button onClick={() => handleDelete(task)}>X</button> </li> )
        }
      </ul>
    </div>
  </div>
  );
}

export default App;
