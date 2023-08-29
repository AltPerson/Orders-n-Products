import './NavigationMenu.scss';
import { FC, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import profile from 'Assets/Images/NavigationMenu/profile.jpg';
import settings from 'Assets/Images/NavigationMenu/settings.webp';
import { useTranslation } from 'react-i18next';

interface IProps {
  show: boolean;
  toogleShow: () => void;
}
const NavigationMenu: FC<IProps> = ({ show, toogleShow }) => {
  const { t } = useTranslation('translation');
  return (
    <aside
      className={`nmenu d-flex align-items-center flex-column ${
        show ? 'nmenu_show' : ''
      }`}
    >
      <span className="nmenu_close" onClick={toogleShow}>
        X
      </span>
      <div className="nmenu-image">
        <img src={profile} alt="profile" />
        <img src={settings} alt="settings" />
      </div>
      <nav className="nmenu-navbar navbar text-center">
        <ul className="navbar-list d-flex flex-column">
          <li onClick={toogleShow}>
            <Link to="/">{t('home')}</Link>
          </li>
          <li onClick={toogleShow}>
            <Link to="/orders">{t('orders')}</Link>
          </li>
          <li onClick={toogleShow}>
            <Link to="/products">{t('products')}</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default NavigationMenu;
