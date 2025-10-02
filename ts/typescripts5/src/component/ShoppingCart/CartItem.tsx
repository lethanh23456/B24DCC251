import React from 'react';
import { ProductType } from './types';

interface CartItemProps {
  item: ProductType;
}

function CartItem({ item }: CartItemProps) {
  return (
    <li>
      {item.name} - {item.price}₫
    </li>
  );
}

export default CartItem;