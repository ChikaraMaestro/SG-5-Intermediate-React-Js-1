import { useEffect,useState,useRef } from 'react';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/Todolist';

const ProfileTodo = () => {
 const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
},[]);

useEffect(()=>{
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
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
