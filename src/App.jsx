import Root from './components/Root'
import Receiver from './components/Receiver'
import Login from './components/Login'
import Register from './components/Register'
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
