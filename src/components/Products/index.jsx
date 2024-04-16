import './index.css';
import { ProductItem } from '../ProductItem';
import { useState, useEffect } from 'react';

export const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://apps.kodim.cz/react-2/xxxmuck/products',
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      {data.map((item, index) => (
        <ProductItem key={index} name={item.name} img={item.image} />
      ))}
    </div>
  );
};
