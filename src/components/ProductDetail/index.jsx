import './index.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/react-2/xxxmuck/products/${id}`,
      );
      const data = await response.json();
      setProduct(data);
    };

    fetchData();
  }, []);

  return (
    <div className="product-detail">
      <img
        className="product-detail__img"
        src={product.image}
        alt={product.name}
      />
      <div className="product-detail__info">
        <p className="product-detail__title">{product.name}</p>
        <button className="product-detail__button">Objednat</button>
      </div>
    </div>
  );
};
