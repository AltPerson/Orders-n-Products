import './Product.scss';
import { FC } from 'react';
import { IProduct } from 'App/types/types';
import { ordersData } from 'Data/data';
import { getDate } from 'Utils/getDate';
import { useTranslation } from 'react-i18next';

const Product: FC<IProduct> = (props) => {
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
  const { t, i18n } = useTranslation('translation');
  return (
    <div className="product d-flex align-items-center justify-content-between p-3">
      <div className="product-image col-3">
        <img src={photo} alt="image" />
      </div>
      <div className="product-title d-flex flex-column gap-2 align-items-left col-3">
        <span>{title}</span>
        <span>
          {t('serialNumber')}:{serialNumber}
        </span>
        <span>
          {t('type')}:{type}-{specification}
        </span>
      </div>
      <div className="product-quarantee d-flex flex-column gap-2 align-items-left ">
        <div className="product-quarantee__from d-flex flex-wrap justify-content-center">
          <span>
            {t('from')}
            {i18n.language === 'ua'
              ? getDate(guarantee.start)
              : getDate(guarantee.start, true)}
          </span>
          <span>\ {guarantee.start}</span>
        </div>
        <div className="product-to d-flex flex-wrap justify-content-center">
          <span>
            {t('to')}
            {i18n.language === 'ua'
              ? getDate(guarantee.end)
              : getDate(guarantee.end, true)}
          </span>
          <span>\ {guarantee.end}</span>
        </div>
      </div>
      <div className="product-new ">
        <span>{isNew ? t('new') : t('sc')}</span>
      </div>
      <div className="product-price d-flex flex-column gap-2 align-items-left ">
        {price.map((item) => (
          <span key={`item-${item.symbol}`}>{`${item.value} ${t(
            item.symbol,
          )}`}</span>
        ))}
      </div>
      <div className="product-order d-flex flex-column align-items-left gap-2">
        {
          ordersData[i18n.language].filter(
            (orderItem) => orderItem.id === order,
          )[0].title
        }
        <span>
          {i18n.language === 'ua' ? getDate(date) : getDate(date, true)}
        </span>
      </div>
    </div>
  );
};
export default Product;
