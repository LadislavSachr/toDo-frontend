import Root from './components/root/Root'
import Receiver from './components/Receiver'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import './App.css'

function App() {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Receiver />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Route>
  ));
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
