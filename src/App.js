import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dr. appt',
        day: 'Feb 15 at 2:30',
        reminder: true,

    },
    {
        id: 2, 
        text: 'Meeting at school',
        day: 'Feb 15 at 4:30',
        reminder: true,
    },
    {
        id: 3,
        text: 'Grocery shopping',
        day: 'Feb 16 at 530',
        reminder: false,
    }
])

// add task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 100000) + 1
  const newTask = { id, ...task } 
  setTasks([...tasks, newTask])
}



// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? 
      {...task, reminder: !task.reminder} : 
      task
      )
    )
}


  return (
    <div className='container'>
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? 
        ( <Tasks tasks={tasks} onDelete={deleteTask} 
            onToggle={toggleReminder} /> ) :
        ('No tasks in queue') 
      }
    </div>
  )
}

export default App;
