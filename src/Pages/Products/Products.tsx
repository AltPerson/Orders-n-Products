import './Products.scss';
import { FC, useState, ChangeEvent } from 'react';
import { products } from 'Data/data';
import Product from 'Components/Product/Product';

const Products: FC = () => {
  const [type, setType] = useState('All');
  const inputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.currentTarget.value);
  };
  return (
    <div className="products text-left p-5">
      <div className="products-header header d-flex align-items-center">
        <h1 className="header-title">{`Товари / ${products.length}`}</h1>
        <div className="header-select">
          <label htmlFor="spec">Тип:</label>
          <select id="spec" onChange={inputHandler}>
            <option value="All">Всі</option>
            <option value="Monitors">Монітори</option>
            <option value="Keyboards">Клавіатури</option>
            <option value="Mouses">Миши</option>
          </select>
        </div>
      </div>
      <div className="products-list d-flex flex-column gap-2">
        {products
          .filter((product) => {
            if (type === 'All') return true;
            return product.type === type;
          })
          .map((product) => (
            <Product key={`product-${product.id}`} {...product} />
          ))}
      </div>
    </div>
  );
};
export default Products;
