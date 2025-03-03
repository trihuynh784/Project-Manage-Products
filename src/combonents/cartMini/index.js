import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartMini() {
  const cart = useSelector(state => state.cartReducer);
  const totalQuantity = cart.reduce((total, item) => total += item.quantity, 0);

  return (
    <>
      <Link to={"cart"} className="header__cart">
        Cart ({totalQuantity})
      </Link>
    </>
  );
}

export default CartMini;
