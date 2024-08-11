import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './RootLayout';
import Homepage from './Home';
import Productpage from './product';

const router =  createBrowserRouter(

  [
    {path:'/',element:<RootLayout/>, children: [
      {path:'/' , element: <Homepage/>},
      {path:'/Products',element: <Productpage/>}]}
 
]
)
function App() {
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
