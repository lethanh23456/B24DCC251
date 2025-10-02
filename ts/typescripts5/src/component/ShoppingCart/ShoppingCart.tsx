import React, { useState } from 'react';
import Product from './Product';
import CartItem from './CartItem';
import { ProductType } from './types';

function ShoppingCart() {
  const products: ProductType[] = [
    { id: 1, name: "Sách", price: 10000 },
    { id: 2, name: "Bút", price: 5000 },
    { id: 3, name: "Vở", price: 7000 },
  ];
  
  const [cart, setCart] = useState<ProductType[]>([]);
  
  const handleAddToCart = (product: ProductType) => {
    setCart([...cart, product]);
  };
  
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  
  return (
    <div style={{ padding: 20 }}>
      <h2>Bài 3: Giỏ hàng</h2>
      <h3>Sản phẩm</h3>
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={handleAddToCart} />
      ))}
      <h3>Giỏ hàng</h3>
      <ul>
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>
      <p>
        <strong>Tổng tiền: </strong>
        {totalPrice}₫
      </p>
    </div>
  );
}

export default ShoppingCart;