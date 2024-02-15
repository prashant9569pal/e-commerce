import React from "react";

const Cart = ({ cartItems, totalAmount }) => {
  return (
    <div className="cart-container">
      <span className="badge bg-danger rounded-circle ms-2">
        {cartItems.length}
      </span>
      <span className="cart-total">Total: ${totalAmount.toFixed(2)}</span>
    </div>
  );
};

export default Cart;
