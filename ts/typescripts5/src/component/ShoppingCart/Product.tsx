import React from 'react';
import { ProductType } from './types';

interface ProductProps {
  product: ProductType;
  onAdd: (product: ProductType) => void;
}

function Product({ product, onAdd }: ProductProps) {
  return (
    <div style={{ marginBottom: 10 }}>
      <span>
        {product.name} - {product.price}₫{" "}
      </span>
      <button onClick={() => onAdd(product)}>Thêm vào giỏ</button>
    </div>
  );
}

export default Product;