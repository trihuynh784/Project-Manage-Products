import { addToCart, updateQuantity } from "../../actions/cart";
import { useDispatch, useSelector } from "react-redux";
import cartReducer from "../../reducers/cart";

function ProductItem(props) {
  const { item } = props;
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch(cartReducer);

  const handleAddToCart = () => {
    if(cart.some(itemCart => itemCart.id === item.id))
      dispatch(updateQuantity(item.id, item))
    else dispatch(addToCart(item.id, item));
  }

  return (
    <>
      <div className="product__item" key={item.id}>
        <div className="product__item--image">
          <img src={item.thumbnail} alt="" />
        </div>
        <div className="product__item--title">{item.title}</div>
        <div className="product__item--price-new">
          {Math.floor(
            item.price - item.price * (item.discountPercentage / 100)
          )}
          $
        </div>
        <div className="product__item--price-old">{item.price}$</div>
        <div className="product__item--discount">
          {item.discountPercentage}%
        </div>
        <button onClick={() => handleAddToCart()}>Thêm vào giỏ hàng</button>
      </div>
    </>
  );
}

export default ProductItem;
