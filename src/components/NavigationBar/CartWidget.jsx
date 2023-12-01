import { useContext } from "react";
import { BsFillCartFill } from "react-icons/bs";
import cx from "classnames";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export default function CartWidget({ isCollapsed }) {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div className={cx("d-flex text-white", { "mt-3": isCollapsed })}>
      <Link to={"cart"} aria-label="Carrito de compras">
        <BsFillCartFill style={{ fontSize: 30 }} />
      </Link>
      <p>{totalQuantity === 0 ? "" : totalQuantity}</p>
    </div>
  );
}
