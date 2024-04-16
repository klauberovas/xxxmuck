import './index.css';
import { Link } from 'react-router-dom';

export const ProductItem = ({ img, name, id }) => {
  return (
    <div className="product-item">
      <Link className="product-item__link" to={`/product/${id}`}>
        <img className="product-item__img" src={img} alt={name} />
        <div className="product-item__name">{name}</div>
      </Link>
    </div>
  );
};
