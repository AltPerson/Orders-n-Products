import './Product.scss';
import { FC } from 'react';
import { Product } from 'App/types/types';
import { orders } from 'Data/data';
import { getDate } from 'Utils/getDate';
import { getOrderTitle } from 'Utils/getOrderTitle';

const Product: FC<Product> = (props) => {
  const {
    serialNumber,
    isNew,
    guarantee,
    title,
    price,
    date,
    photo,
    order,
    type,
    specification,
  } = props;
  return (
    <div className="product d-flex align-items-center justify-content-between p-3 flex-wrap">
      <div className="product-image col-3">
        <img src={photo} alt="image" />
      </div>
      <div className="product-title d-flex flex-column gap-2 align-items-left col-3">
        <span>{title}</span>
        <span>Серійний номер:{serialNumber}</span>
        <span>
          Тип:{type}-{specification}
        </span>
      </div>
      <div className="product-quarantee d-flex flex-column gap-2 align-items-left ">
        <span>
          з {getDate(guarantee.start)} \ {guarantee.start}
        </span>
        <span>
          по {getDate(guarantee.end)} \ {guarantee.end}
        </span>
      </div>
      <div className="product-new ">
        <span>{isNew ? 'Новий' : 'Б/у'}</span>
      </div>
      <div className="product-price d-flex flex-column gap-2 align-items-left ">
        {price.map((item) => (
          <span
            key={`item-${item.symbol}`}
          >{`${item.value} ${item.symbol}`}</span>
        ))}
      </div>
      <div className="product-order d-flex flex-column align-items-left gap-2">
        {orders.filter((orderItem) => orderItem.id === order)[0].title}
        <span>{getDate(date)}</span>
      </div>
    </div>
  );
};
export default Product;
