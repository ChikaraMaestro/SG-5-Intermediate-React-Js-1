import '../assets/css/todolist.css';
import {useState, useMemo} from 'react';
import Button from './Button';
import { FaTrash } from "react-icons/fa";
import NoItem from './atoms/NoItem';
import { FaCheck } from "react-icons/fa";


const TodoList = ({inputRef}) => {
  const[isAscending, setIsAscending]=useState(true)
  const [todo, setTodo] = useState('');

  const [finishedCount, setFinishedCount] = useState(0);

  const [list, setList] = useState([
    {
      id: 1,
      deskripsi: 'Belajar ReactJs',
    },
  ]);

  const totalTodo =list.length + finishedCount;

  const addTodoHandler = () => {
    if (!todo) return;
    const data = {
      id: list.length === 0 ? 1 : list.at(-1).id+1,
      deskripsi: todo,
    };

    setList([...list, data]);

    setTodo('');
  };

const deleteTodo= (id)=>{
  const filterTodo= list.filter ((item) => item.id !==id)

  setList(filterTodo)
}

const succesTodo= (id)=>{
  const filterTodo = list.filter ((item)=> item.id !==id)
  setList(filterTodo);

  setFinishedCount(finishedCount + 1)
}

const sortedTodo = useMemo(()=>{
  return [...list].sort((a, b) =>{
    if(isAscending) return a.id-b.id;
    return b.id-a.id
  })
}, [list, isAscending])


  return (
    <div className="card todo-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <h3>My Tasks</h3>
      <h3>Todo List Selesai</h3>
      <span>{finishedCount}/{totalTodo}</span>
    </div>
      <div className="input-group">
        <input
          ref={inputRef}
          type="text"
          value={todo}
          placeholder="Tulis tugas baru..."
          onChange={(e) => setTodo(e.target.value)}
        />

        <Button 
        type='button'
        variant="secondary" 
        onClick={()=>setIsAscending(!isAscending  )}>
          Filter
        </Button>

        <Button 
        type='button'
        variant="primary"
        onClick={()=>addTodoHandler()}>
          Add
        </Button>
      </div>
      {list.length === 0 ? <NoItem/> : (
              <ul id="todo-list" className="todo-list">
        {sortedTodo.map((element, index) => {
          return (
            <li key={index}>
              <span>
                <b>{element.id}</b> {element.deskripsi}
              </span>
              <Button variant='succes' onClick={()=>succesTodo(element.id)}>
                  <FaCheck />
              </Button>

              <Button variant='danger' onClick={()=>deleteTodo(element.id)}>
                  <FaTrash />
              </Button>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};

export default TodoList;
