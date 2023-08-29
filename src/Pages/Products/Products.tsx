import './Products.scss';
import { FC, useState, ChangeEvent } from 'react';
import Product from 'Components/Product/Product';
import { useProducts } from 'Utils/Hooks/useProducts';
import { useTranslation } from 'react-i18next';

const Products: FC = () => {
  const [type, setType] = useState('All');
  const { products } = useProducts();
  const { t, i18n } = useTranslation('translation');
  const inputHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setType(e.currentTarget.value);
  };
  return (
    <section className="products text-left p-5">
      <div className="products-header header d-flex align-items-center">
        <h1 className="header-title">{`${t('products')} / ${
          products[i18n.language].length
        }`}</h1>
        <div className="header-select">
          <label htmlFor="spec">{t('type')}:</label>
          <select id="spec" onChange={inputHandler}>
            <option value="All">{t('all')}</option>
            <option value="Monitors">{t('monitors')}</option>
            <option value="Keyboards">{t('keyboards')}</option>
            <option value="Mouses">{t('mouses')}</option>
          </select>
        </div>
      </div>
      <div className="products-list d-flex flex-column gap-2">
        {products[i18n.language]
          .filter((product) => {
            if (type === 'All') return true;
            return product.type === type;
          })
          .map((product) => (
            <Product key={`product-${product.id}`} {...product} />
          ))}
      </div>
    </section>
  );
};
export default Products;
