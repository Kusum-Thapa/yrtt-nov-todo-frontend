import { useState } from 'react'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import './App.css';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tasks, setTasks] = useState([
    { text: 'Buy a cat food', completed: false, date: '2020-12-01', id: '001' },
    { text: 'Buy a milk', completed: true, date: '2020-12-05', id: '002' },
    { text: 'clean the kitchen', completed: false, date: '2020-12-18', id: '003' },
    { text: 'Go for walk', completed: true, date: '2020-12-18', id: '004' },
    { text: 'Go to sleep', completed: false, date: '2020-12-18', id: '005' },
    { text: 'Have a rest', completed: false, date: '2020-12-18', id: '06' }
  ])

  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => task.id !== id)
    setTasks(updatedTasks)
  }

  const incompleteTasks = tasks.filter(task => !task.completed)
  const completeTasks = tasks.filter(task => task.completed)

  return (
    <div className="App">
      <Header taskCount={incompleteTasks.length} />
      <main className="all-tasks">
        <TaskList deleteTask ={ deleteTask } tasks={incompleteTasks} status="incomplete" />
        <TaskList deleteTask ={ deleteTask } tasks={completeTasks} status="complete" />
      </main>
    </div>
  );
}

export default App;
