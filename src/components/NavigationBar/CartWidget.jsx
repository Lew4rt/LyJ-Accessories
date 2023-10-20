import { BsFillCartFill } from "react-icons/bs";
import cx from "classnames";

export default function CartWidget({ isCollapsed, productsQuantity}) {

  return (
    <div className={cx("d-flex text-white", { "mt-3": isCollapsed })}>
      <a href="" aria-label="Carrito de compras">
        <BsFillCartFill style={{ fontSize: 30 }} />
      </a>
      <p>{productsQuantity}</p>
    </div>
  );
}