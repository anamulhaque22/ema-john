import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './conponents/Home/Home';
import NotFoundPage from './conponents/NotFoundPage/NotFoundPage';
import Header from './conponents/Header/Header';
import Order from './conponents/Order/Order';
import OrderReview from './conponents/OrderReview/OrderReview';
import ManageInventory from './conponents/ManageInventory/ManageInventory';
import Login from './conponents/Login/Login';
import SignUp from './conponents/SignUp/SignUp';
import RequireAuth from './conponents/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/order' element={<Order />} />
        <Route path='/order-review' element={<RequireAuth>
          <OrderReview></OrderReview>
        </RequireAuth>} />
        <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
