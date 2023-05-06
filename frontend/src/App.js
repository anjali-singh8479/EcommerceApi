import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pay from "./components/Pay"
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
function App() {
  const user=true
  return (
   
    <>
      <Router>
        <Routes>
        <Route exact path="/pay" element={<Pay />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={ <Login/>}
         
          > </Route>
          <Route exact path="/cart" element={<Cart/>}></Route>
          <Route path="/products/:category" element={<ProductList />}></Route>
          <Route exact path="/product/:id" element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
