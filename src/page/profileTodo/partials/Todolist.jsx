import {useState, useMemo, useEffect} from 'react';
import Button from '../../../components/Button';
import { FaTrash } from "react-icons/fa";
import NoItem from '../../../components/atoms/NoItem';
import { FaCheck } from "react-icons/fa";


const TodoList = ({inputRef, isDarkMode}) => {
  const[isAscending, setIsAscending]=useState(true)
  const [todo, setTodo] = useState('');
  const [finishedCount, setFinishedCount] = useState(0);

  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem('myTodoList');
    return savedList ? JSON.parse(savedList) : [];
  });

  useEffect(() => {
    localStorage.setItem('myTodoList', JSON.stringify(list));
  }, [list]);

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
    <div className={`p-6! rounded-2xl shadow-lg flex-1 max-w-flex! flex flex-col justify-center transition-colors duration-300
      ${isDarkMode ? "bg-[#242526] text-[#ffffff]" : "bg-[#ffffff] text-[#333]"}`}>

      <div className='flex justify-between items-center mb-3!'>
      <h3 className="font-bold text-lg">My Tasks</h3>
      <span className={`text-sm p-3 rounded-full`}>
        <h3 className='font-bold text-lg '>Todo-List Selesai : {finishedCount}/{totalTodo}</h3>
      </span>
    </div>

    <div className="flex gap-2! mb-4!">
        <input
          ref={inputRef}
          type="text"
          value={todo}
          placeholder="Tulis tugas baru..."
          onChange={(e) => setTodo(e.target.value)} className={`flex-1 p-3! border rounded-lg outline-none transition-all  ${
            isDarkMode 
              ? "bg-transparent border-[#666666] focus:border-[#4285f4] text-white placeholder-[#666666]" 
              : "bg-transparent border-[#e4e6eb] focus:border-[#4285f4] text-[#242526]"
          }`}/>

        <div className='flex gap-2'>
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
    </div>

      {list.length === 0 ? <NoItem/> : (
      <ul className="flex flex-col gap-3  ">
        {sortedTodo.map((element, index) => {
          return (
            <li key={element.id} className={`flex justify-between items-center p-3! px-4! rounded-lg border-l-4 shadow-sm transition-all animate-slide-in ${
                    isDarkMode 
                    ? "bg-[#333333] border-[#333333] border-l-[#4285f4]" 
                    : "bg-[#ffffff] border-[#ffffff] border-l-[#4285f4]"
                }`}>
              
              <span className="font-medium">
                <b>{element.id}</b> {element.deskripsi}
              </span>
              <div className="flex gap-2" >
              <Button variant='success' onClick={()=>succesTodo(element.id)}>
                <FaCheck />
              </Button>

              <Button variant='danger' onClick={()=>deleteTodo(element.id)}>
                <FaTrash />
              </Button>
              </div>
            </li>
          );
        })}
      </ul>
      )}
    </div>
  );
};

export default TodoList;
