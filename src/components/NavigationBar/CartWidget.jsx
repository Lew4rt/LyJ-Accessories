import { BsFillCartFill } from "react-icons/bs";
import cx from "classnames";
import { Link } from "react-router-dom";

export default function CartWidget({ isCollapsed, productsQuantity}) {

  return (
    <div className={cx("d-flex text-white", { "mt-3": isCollapsed })}>
      <Link to={"cart"} aria-label="Carrito de compras">
        <BsFillCartFill style={{ fontSize: 30 }} />
      </Link>
      <p>{productsQuantity && productsQuantity}</p>
    </div>
  );
}