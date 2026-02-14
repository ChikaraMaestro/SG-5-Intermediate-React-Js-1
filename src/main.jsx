import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ProfileTodo from './page/profileTodo/index';
import './assets/css/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileTodo />
  </StrictMode>,
);