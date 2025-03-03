import { useDispatch } from "react-redux";
import "./cart.scss";
import { deleteProduct, updateQuantity } from "../../actions/cart";

function CartList(props) {
  const { item } = props;
  const price = Math.floor(
    item.info.price - item.info.price * (item.info.discountPercentage / 100)
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart__item" key={item.id}>
        <div className="cart__item--image">
          <img src={item.info.thumbnail} />
        </div>
        <div className="cart__item--content">
          <span>
            <div className="cart__item--title">{item.info.title}</div>
            <div className="cart__item--price-new">{price}$</div>
            <div className="cart__item--price-old">{item.info.price}$</div>
          </span>
          <div className="button-change">
            <button
              onClick={() => dispatch(updateQuantity(item.id, item, -1))}
              className="button button-change--subtract"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => dispatch(updateQuantity(item.id, item, 1))}
              className="button button-change--add"
            >
              +
            </button>
            <button
              onClick={() => dispatch(deleteProduct(item.id))}
              className="button button-change--delete"
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartList;
