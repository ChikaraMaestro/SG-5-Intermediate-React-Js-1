import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './assets/css/todolist.css';
import ProfileTodo from './ProfileTodo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ProfileTodo />
  </StrictMode>,
);
