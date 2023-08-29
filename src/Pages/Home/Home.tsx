import './Home.scss';
import { FC } from 'react';
import { useTime } from 'Utils/Hooks/useTime';
import { useOrders } from 'Utils/Hooks/useOrders';
import { useProducts } from 'Utils/Hooks/useProducts';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { time } = useTime();
  const { orders } = useOrders();
  const { products } = useProducts();
  const { t, i18n } = useTranslation('translation');
  return (
    <section className="home p-5 d-flex flex-column align-items-center justify-content-center">
      <div className="home-header">
        <h1 className="home-header__title">{t('hello')}</h1>
      </div>
      <div className="home-today d-flex gap-2 flex-wrap justify-content-center">
        <div className="home-today__text">{t('today')}</div>
        <div className="home-today__date">{time.date[i18n.language]}</div>
        <div className="home-today__time">{time.longFormat}</div>
      </div>
      <div className="home-info d-flex gap-2 flex-wrap justify-content-center">
        <div className="home-info-orders">
          <strong>{t('ordersQuantity')}: </strong>
          {orders[i18n.language].length}
        </div>
        <div className="home-info-products">
          <strong>{t('productsQuantity')}: </strong>
          {products[i18n.language].length}
        </div>
      </div>
      <div className="home-links d-flex flex-wrap justify-content-center gap-3">
        <div className="home-links__orders">
          <Link to="/orders">{t('orders')} 📋</Link>
        </div>
        <div className="home-links__products">
          <Link to="/products">{t('products')} 💼</Link>
        </div>
      </div>
    </section>
  );
};
export default Home;
