import NavigationMenu from 'Components/NavigationMenu/NavigationMenu';
import './Main.scss';
import { FC } from 'react';
import AppRouter from 'Components/AppRouter/AppRouter';
import { Col, Container, Row } from 'react-bootstrap';
import { useToogle } from 'Utils/Hooks/useToogle';
import burgerIcon from 'Assets/Images/Common/burger.svg';

const Main: FC = () => {
  const { show, toogleShow } = useToogle();
  return (
    <section className="main">
      <Container fluid>
        <Row>
          <Col
            className="col-xl-2 col-lg-3 col-md-3 col-12"
            style={{ padding: '0px' }}
          >
            <NavigationMenu show={show} toogleShow={toogleShow} />
          </Col>
          <Col
            className="col-xl-10 col-lg-9 col-md-9 col-12"
            style={{ padding: '0px' }}
          >
            <div
              className={`main-toogle ${show ? 'main-toogle_show' : ''}`}
              onClick={toogleShow}
            >
              <img src={burgerIcon} alt="burgerIcon" />
            </div>
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Main;
