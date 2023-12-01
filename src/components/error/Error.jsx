import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div
      className="d-flex flex-column align-items-center text-white mt-5"
      style={{ marginLeft: 150 }}
    >
      <h1>Ha ocurrido un error inesperado</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
