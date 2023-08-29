import { Container } from 'react-bootstrap';
import './TopMenu.scss';
import { FC, useEffect, useState } from 'react';
import logo from 'Assets/Images/TopMenu/logo.webp';
import clock from 'Assets/Images/TopMenu/clock.png';
import user from 'Assets/Images/TopMenu/user.png';
import { useTime } from 'Utils/Hooks/useTime';
import { Link } from 'react-router-dom';
import type { Socket } from 'socket.io-client';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { useTranslation } from 'react-i18next';

interface IProps {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
}

const TopMenu: FC<IProps> = ({ socket }) => {
  const { time } = useTime();
  const [visiters, setVisiters] = useState(1);
  const { t, i18n } = useTranslation('translation');
  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    if (socket) {
      socket.on('users', (data) => {
        setVisiters(data.length);
      });
    }
  }, [socket]);
  return (
    <header className="tmenu">
      <Container className="d-flex p-3 justify-content-between align-items-center tmenu-container">
        <div className="tmenu-logo d-flex align-items-center">
          <div className="tmenu-logo__image">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="tmenu-logo__text">
            <span>Orders & Products</span>
          </div>
        </div>
        <div className="tmenu-search col-md-6 col-sm-3">
          <input type="text" aria-label="search" placeholder={t('search')} />
        </div>
        <div className="tmenu-info d-flex">
          <div className="tmenu-info__date date">
            <div className="date-word">
              <span>{t('today')} </span>
            </div>
            <div className="date-number d-flex align-items-center">
              <div className="date-number__full">
                <span>{time.date[i18n.language]}</span>
              </div>
              <div className="date-number__time d-flex align-items-center">
                <img src={clock} alt="clock" />
                <span>{time.shortFormat}</span>
              </div>
            </div>
          </div>
          <div className="tmenu-info__visiters d-flex align-self-center">
            <img src={user} alt="clock" />
            <span>{visiters}</span>
          </div>
          <div className="tmenu-info__language d-flex align-self-center">
            <select className="custom-select" onChange={onClickLanguageChange}>
              <option value="ua">Ukrainian</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default TopMenu;
