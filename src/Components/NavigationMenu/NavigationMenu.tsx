import './NavigationMenu.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import profile from 'Assets/Images/NavigationMenu/profile.jpg';
import settings from 'Assets/Images/NavigationMenu/settings.webp';

const NavigationMenu: FC = () => {
  return (
    <aside className="nmenu d-flex align-items-center flex-column h-100">
      <div className="nmenu-image">
        <img src={profile} alt="profile" />
        <img src={settings} alt="settings" />
      </div>
      <nav className="nmenu-navbar navbar text-center">
        <ul className="navbar-list d-flex flex-column">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
export default NavigationMenu;
