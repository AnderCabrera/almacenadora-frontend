import { Root } from './pages/Root.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { TaskList } from './pages/TaskList.jsx';

export const routes = [
  {
    path: '/*',
    element: <Root />,
  },
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/tasks',
    element: <TaskList />,
  },
];
