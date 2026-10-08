import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <h2>Your cart is empty</h2>
        <p>Add some beautiful plants to your cart.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-summary">
        <h2>Total Items: {totalItems}</h2>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>

      <div className="cart-list">
        {items.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity - 1
                      })
                    )
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1
                      })
                    )
                  }
                >
                  +
                </button>
              </div>

              <p>
                Item Total: $
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="remove-button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItem;