import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Error from "./components/error/Error";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/contact";
import Cart from "./pages/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <CartProvider>
        <NavigationBar />
        <Routes>
          <Route errorElement={<Error />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:category" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        <Footer />
        <ToastContainer />
      </CartProvider>
    </>
  );
}

export default App;
