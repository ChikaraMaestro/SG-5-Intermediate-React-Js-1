import { useEffect,useState,useRef } from 'react';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/Todolist';

const ProfileTodo = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current.focus();
},[]);

useEffect(()=>{
  if(isDarkMode){
    document.body.classList.add("dark-mode")
  }else{
    document.body.classList.remove("dark-mode")
  }

},[isDarkMode])

  return (
    <section className="flex gap-3.5">
      <ProfileCard isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <TodoList inputRef={inputRef} isDarkMode={isDarkMode}/>
    </section>
  );
};

export default ProfileTodo;
