import '../styles/App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Main from './main';
import Quiz from './quiz';
import Result from './Result';


const router = createBrowserRouter([
     {
      path: '/',
      element: <Main></Main>
     },
     {
      path: '/quiz',
      element: <Quiz>Quiz component</Quiz>
     },
     {
      path: '/result',
      element: <Result>result compoment</Result>
     },
     
])

function App() {
  return (
     <>
     <RouterProvider router={router}/>
     </>
  );
}

export default App;
