import Button from "react-bootstrap/Button";

export default function ItemListContainer({ greeting, increment, reset}) {

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="item-list-container-greeting">{greeting}</div>
      <div className="d-flex gap-4">
        <Button onClick={increment} variant="success">
          Agregar producto al carrito
        </Button>
        <Button onClick={reset} variant="danger">
          Limpiar carrito
        </Button>
      </div>
    </div>
  );
}
