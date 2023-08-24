import { Col, Container, Row } from 'react-bootstrap';
import './TopMenu.scss';
import { FC, useEffect } from 'react';
import logo from 'Assets/Images/TopMenu/logo.webp';
import clock from 'Assets/Images/TopMenu/clock.png';
import user from 'Assets/Images/TopMenu/user.png';
import { useState } from 'react';
import { getDate } from 'Utils/getDate';
import { getTime } from 'Utils/getTime';

const TopMenu: FC = () => {
  const [time, setTime] = useState<string>(() => getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <header className="tmenu">
      <Container className="d-flex p-3 justify-content-between align-items-center">
        <div className="tmenu-logo d-flex align-items-center">
          <div className="tmenu-logo__image">
            <img src={logo} alt="logo" />
          </div>
          <div className="tmenu-logo__text">
            <span>Orders & Products</span>
          </div>
        </div>
        <div className="tmenu-search col-md-6 col-sm-3">
          <input type="text" aria-label="search" placeholder="Пошук" />
        </div>
        <div className="tmenu-info d-flex">
          <div className="tmenu-info__date date">
            <div className="date-word">
              <span>Today</span>
            </div>
            <div className="date-number d-flex align-items-center">
              <div className="date-number__full">
                <span>{getDate()}</span>
              </div>
              <div className="date-number__time d-flex align-items-center">
                <img src={clock} alt="clock" />
                <span>{time}</span>
              </div>
            </div>
          </div>
          <div className="tmenu-info__visiters d-flex align-self-center">
            <img src={user} alt="clock" />
            <span>4</span>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default TopMenu;
