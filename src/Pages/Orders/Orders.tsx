import './Orders.scss';
import { FC } from 'react';
import Order from 'Components/Order/Order';
import { useOrders } from 'Utils/Hooks/useOrders';
import DeleteModal from 'Components/Modal/DeleteModal';
import { useDeleteModal } from 'Utils/Hooks/useDeleteModal';
import { useTranslation } from 'react-i18next';

const Orders: FC = () => {
  const { orders } = useOrders();
  const { modalState } = useDeleteModal();
  const { t, i18n } = useTranslation('translation');

  return (
    <section className="orders text-left p-5">
      {modalState.id && modalState.isOpen && <DeleteModal />}
      <div className="orders-header">
        <h1 className="orders-header__title">{`${t(`orders`)} / ${
          orders[i18n.language].length
        }`}</h1>
      </div>
      <div className="orders-list d-flex flex-column gap-2">
        {orders[i18n.language].length > 0 ? (
          orders[i18n.language].map((order) => (
            <Order key={`order-${order.id}`} {...order} />
          ))
        ) : (
          <div className="orders-empty">{t('noOrders')}</div>
        )}
      </div>
    </section>
  );
};
export default Orders;
