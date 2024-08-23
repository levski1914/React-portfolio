import React from "react";

const UserCartComp = ({
  cartItems,
  deleteItemsFromCart,
  totalAmountCalcFunc,
  setCartItems,
}) => {
  return (
    <div>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{ maxWidth: "350px" }}
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasRightLabel">
            My cart
          </h2>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.product.id} className="cart-item">
                    <div>
                      <div className="item-info">
                        <div className="item-image">
                          <img src={item.product.img} alt="" />
                        </div>
                        <div className="item-details">
                          <h3>{item.product.productTitle}</h3>
                          <p>Price: ${item.product.productPrice}</p>
                        </div>
                      </div>
                      <div className="item-actions">
                        <button
                          className="remove-button"
                          onClick={() => deleteItemsFromCart(item.product)}
                        >
                          Remove Product
                        </button>
                        <div className="quantity">
                          <button
                            style={{ margin: "1%" }}
                            onClick={(e) => {
                              setCartItems((prevCartItems) => {
                                const updatedCart = prevCartItems.map(
                                  (prevItem) =>
                                    prevItem.product.id === item.product.id
                                      ? {
                                          ...prevItem,
                                          quantity: item.quantity + 1,
                                        }
                                      : prevItem
                                );
                                return updatedCart;
                              });
                            }}
                          >
                            +
                          </button>
                          <p className="quant">{item.quantity}</p>

                          <button
                            onClick={(e) => {
                              setCartItems((prevCartItems) => {
                                const updatedCart = prevCartItems.map(
                                  (prevItem) =>
                                    prevItem.product.id === item.product.id
                                      ? {
                                          ...prevItem,
                                          quantity: Math.max(
                                            item.quantity - 1,
                                            0
                                          ),
                                        }
                                      : prevItem
                                );
                                return updatedCart;
                              });
                            }}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="checkout-section">
                <div className="checkout-total">
                  <p>Total: ${totalAmountCalcFunc()}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCartComp;
