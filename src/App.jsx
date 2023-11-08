import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Error from "./components/error/Error";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/contact";
import Cart from "./pages/cart/Cart"
import useProductsQuantity from "./hooks/useProductsQuantity";
import { Routes, Route } from "react-router-dom";

function App() {

  const { increment, reset, productsQuantity } = useProductsQuantity();

  return (
    <>
      <NavigationBar productsQuantity={productsQuantity} />
        <Routes>
          <Route errorElement={<Error />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/:category" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
