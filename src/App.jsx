import Root from './components/root/Root'
import Manager from './components/manager/Manager'
import Login from './components/login/Login'
import Register from './components/register/Register'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'

function App() {
  const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Manager />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Route>
  ));
  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
