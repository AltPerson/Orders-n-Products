import './DeleteModal.scss';
import { FC, MouseEvent } from 'react';
import { useOrders } from 'Utils/Hooks/useOrders';
import { useDeleteModal } from 'Utils/Hooks/useDeleteModal';
import { useTranslation } from 'react-i18next';

const DeleteModal: FC = () => {
  const { deleteOrder } = useOrders();
  const { modalState, toogleDeleteModal } = useDeleteModal();
  const { id, title, description, products } = modalState;
  const { t } = useTranslation('translation');

  const acceptHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    deleteOrder(id);
    declineHandler(e);
  };
  const declineHandler = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    toogleDeleteModal({
      id: null,
      isOpen: false,
      description: '',
      products: [],
      title: '',
    });
  };

  return (
    <div className="delmodal">
      <div className="delmodal-wrapper wrapper">
        <div className="wrapper-close" onClick={declineHandler}>
          x
        </div>
        <div className="wrapper-title">
          <h1>
            <strong>{t('modalAsk')}</strong>
          </h1>
        </div>
        <div className="wrapper-info d-flex flex-column">
          <div className="wrapper-info__title d-flex flex-column">
            <span>
              <strong>{t('modalTitle')}:</strong> {title}
            </span>
            <span>
              <strong>{t('modalDescription')}:</strong> {description}
            </span>
          </div>
          <div className="wrapper-info__products">
            <span>
              <strong>{t('products')}:</strong>{' '}
            </span>
            {products.map((product, _, array) => (
              <span>{`${product.title} ${
                product !== array[array.length - 1] ? '| ' : ''
              }`}</span>
            ))}
          </div>
        </div>
        <div className="wrapper-actions">
          <button onClick={acceptHandler}>{t('modalYes')}</button>
          <button onClick={declineHandler}>{t('modalNo')}</button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
