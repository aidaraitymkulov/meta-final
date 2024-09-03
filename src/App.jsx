import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { examples } from './examples'
import './assets/styles/index.scss'
import { TaskList } from './pages/TaskList'
import AddTask from './pages/AddTask/AddTask'
export const App = () => {
  examples()
  // все задачи js в консоли
  return (
    <div className='container'>
    <Header />
    <Routes>
      <Route path='/' element={<TaskList />}/>
      <Route path='/add' element={<AddTask />}/>
    </Routes>
    </div>
  )
}

export default App

