import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Viewproduct from './Components/Viewproduct';
import { AuthProvider, UserContext } from './context/UserContext'
import SellerLogin from './Components/Seller/SellerLogin';
import SellerSignup from './Components/Seller/SellerSignup';
import SellerHome from './Components/Seller/SellerHome';
import SelleraddProduct from './Components/Seller/SelleraddProduct';
import SellerRoute from './Components/AuthRoutes/SellerRoute';
import SellerProductList from './Components/Seller/SellerProductList';
import Singlesellerproduct from './Components/Seller/Singlesellerproduct';
import Updatesellerproduct from './Components/Seller/Updatesellerproduct';
import Buynowproduct from './Components/Seller/Buynow'
import Vieworderpage from './Components/Vieworderpage';
import SellerVieworder from './Components/Seller/SellerVieworder';
import Placeorder from './Components/Placeorder';


function App() {
  // const [demo, setdemo] = useState('hy')


  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/Viewproduct' element={<Viewproduct />} />
          <Route path='/buynowproduct' element={<Buynowproduct></Buynowproduct>}></Route>
          <Route path='/vieworder' element={<Vieworderpage></Vieworderpage>}></Route>
          <Route path='/placeorder' element={<Placeorder />} />

          <Route path="/seller">
            <Route path='' exact element={<SellerRoute><SellerHome></SellerHome></SellerRoute>}></Route>
            <Route path="login" element={<SellerLogin></SellerLogin>}></Route>
            <Route path="signup" element={<SellerSignup></SellerSignup>}></Route>
            <Route path='selleraddproduct' element={<SellerRoute><SelleraddProduct /></SellerRoute>}></Route>
            <Route path='sellerproduct' element={<SellerProductList></SellerProductList>}></Route>
            <Route path='singlesellerproduct/:id' element={<Singlesellerproduct></Singlesellerproduct>}></Route>
            <Route path='updatesellerproduct' element={<Updatesellerproduct></Updatesellerproduct>}></Route>
            <Route path='sellerorder' element={<SellerRoute><SellerVieworder /></SellerRoute>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>



  );
}

export default App;
