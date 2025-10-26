import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/home/Home';
import Apps from './pages/Apps';
import About from './pages/About';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'apps', element: <Apps /> },
      { path: 'about', element: <About /> }
    ]
  }
]);

function App() {
  return (<RouterProvider router={router} /> );
}

export default App;
