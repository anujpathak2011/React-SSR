
import { Dashboard } from 'pages/dashboard/Dashboard';
import LifeLayout from 'components/layouts/LifeLayout';
import Signup from 'pages/Signup';
import Login from 'pages/Login';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';
import AuthLayout from 'components/layouts/AuthLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route element={<LifeLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
