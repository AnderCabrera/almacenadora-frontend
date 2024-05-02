import { Root } from './components/Root.jsx';
import { Login } from './components/Login.jsx';
import { Register } from './components/Register';
import { TaskList } from './components/TaskList';

export const routes = [
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
    children: [
      { path: '/tasks/content1', element: <Login /> },
      { path: '/tasks/content2', element: <Register /> },
    ],
  },
];
