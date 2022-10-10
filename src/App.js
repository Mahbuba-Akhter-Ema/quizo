import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'home/:id',
          loader: ({params}) => {
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
        ]
      },

    ]);
    return <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
}

export default App;
