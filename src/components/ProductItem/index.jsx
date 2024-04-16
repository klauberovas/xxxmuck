import './index.css';

export const ProductItem = ({ img, name }) => {
  return (
    <div className="product-item">
      <img className="product-item__img" src={img} alt={name} />
      <div className="product-item__name">{name}</div>
    </div>
  );
};
