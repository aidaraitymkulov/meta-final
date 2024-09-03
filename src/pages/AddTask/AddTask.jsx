import { useState } from 'react'
import './AddTask.scss'

 const AddTask = () => {
    const [value, setValue] = useState([]);
    const [task, setTask] = useState('');
    const [index, setIndex] = useState(null);
  
    const handleAddTask = () => {
      if (task) {
        if (index !== null) {
          const updatedValue = [...value];
          updatedValue[index] = { task };
          setValue(updatedValue);
          setIndex(null);
        } else {
          setValue([...value, { task }]);
        }
        setTask('');
      }
    };
    return (
        <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTask();
        }}
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {value.map((value, index) => (
          <li key={index}>
            {value.task}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default AddTask