import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavigationBar from './components/NavigationBar/NavigationBar'
import useProductsQuantity from "./hooks/useProductsQuantity";

// Hola, en esta primer preentrega decidí usar algunos estilos que ya tenía
// hechos en bootstrap de un proyecto anterior que desarrollé en el curso de desarrollo web de coder, y lo adapté a react bootstrap

// Además de cumplir con lo pedido en la consigna, decidí implementar cosas adicionales, pero soy consciente de que no será tomado en consideración

function App() {

  const greeting = "Bienvenido/a"

  const { increment, reset, productsQuantity } = useProductsQuantity();

  return (
    <>
      <NavigationBar productsQuantity={productsQuantity}/>
      <ItemListContainer greeting={greeting} increment={increment} reset={reset}/>
    </>
  )
}

export default App
