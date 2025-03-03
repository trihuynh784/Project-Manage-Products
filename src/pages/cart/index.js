import { useDispatch, useSelector } from "react-redux";
import CartList from "../../combonents/cart";
import { deleteAll } from "../../actions/cart";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const totalPrice = cart.reduce((total, item) => {
    const newPrice = Math.floor(
      item.info.price - item.info.price * (item.info.discountPercentage / 100)
    );
    return (total += newPrice * item.quantity);
  }, 0);

  return (
    <>
      <div className="cart__head">
        <h3>Giỏ hàng</h3>
        <button onClick={() => handleDeleteAll()}>Xoá tất cả</button>
      </div>
      {cart.length != 0 ? (
        <div className="cart__list">
          {cart.map((item) => (
            <CartList item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <p>Không có sản phẩm nào trong giỏ hàng</p>
      )}
      <div className="cart__total-price">
        Tổng tiền: <span>{totalPrice}$</span>
      </div>
    </>
  );
}

export default Cart;
