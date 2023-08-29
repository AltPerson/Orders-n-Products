import { IOrder } from 'App/types/types';
import './Order.scss';
import { FC } from 'react';
import { getDate } from 'Utils/getDate';
import { getSum } from 'Utils/getSum';
import deleteIcon from 'Assets/Images/Orders/delete.png';
import burgerIcon from 'Assets/Images/Common/burger.svg';
import Product from 'Components/Product/Product';
import { useShowProducts } from 'Utils/Hooks/useShowProducts';
import { useDeleteModal } from 'Utils/Hooks/useDeleteModal';
import { useTranslation } from 'react-i18next';

const Order: FC<IOrder> = (props) => {
  const { id, date, description, products, title } = props;

  const { showState, toggleShowProducts } = useShowProducts();
  const { toogleDeleteModal } = useDeleteModal();
  const { t } = useTranslation('translation');
  return (
    <>
      <div className="order d-flex justify-content-between align-items-center p-3">
        <div className="order-title d-flex flex-column">
          <span>{title}</span>
          <span>{description}</span>
        </div>
        <div className="order-quantity d-flex align-items-center gap-2 flex-wrap">
          <div
            className={`order-quantity__burger ${
              showState.id === id &&
              showState.isOpen &&
              'order-quantity__burger_clicked'
            }`}
            onClick={() =>
              toggleShowProducts({
                id,
                isOpen: true,
              })
            }
          >
            <img src={burgerIcon} alt="burger" />
          </div>
          <span>{products.length}</span>
        </div>
        <div className="order-date">
          <span>
            {getDate(date)} \ {date}
          </span>
        </div>
        <div className="order-sum d-flex flex-column flex-wrap">
          {getSum(products).map((item) => (
            <span key={`item-${item.symbol}`}>{`${item.value} ${t(
              item.symbol,
            )}`}</span>
          ))}
        </div>
        <div
          className="order-delete"
          onClick={() =>
            toogleDeleteModal({
              id,
              title,
              description,
              products,
              isOpen: true,
            })
          }
        >
          <img src={deleteIcon} alt="deleteIcon" />
        </div>
      </div>
      {showState.id === id && showState.isOpen && (
        <div className="order-productsprev">
          <h1>{title}</h1>
          {products.map((product) => (
            <Product key={`product-${product.id}`} {...product} />
          ))}
        </div>
      )}
    </>
  );
};
export default Order;
