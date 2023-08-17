import "./App.css"
import CreateTask from "./CreateTask"
import Header from "./Header"

function App() {
  const [tasks , setTasks] = useState([]);

  const addTask = (newTask) =>{
    setTasks((prevTask) =>{
      return {
        ...prevTask,
      }
    })
  }

  const deleteTask =(id) =>{
    setTasks((prevTask)=>{
      return prevTask.filter((taskItem , index)=>{
        return index !=id;
      })
    })
  }


  return (
    <div className="App">
      <Header />
      <CreateTask  onAdd={addTask}/>
      {tasks.map((taskItem, index)=>{
        return(
          <Task 
          key={index}
          id={index}
          title={taskItem.content}
          onDelete= {deleteTask}
           />
        )
      })}
    </div>
  )
}

export default App
