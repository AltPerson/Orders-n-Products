import NavigationMenu from 'Components/NavigationMenu/NavigationMenu';
import './Main.scss';
import { FC } from 'react';
import AppRouter from 'Components/AppRouter/AppRouter';
import { Col, Container, Row } from 'react-bootstrap';

const Main: FC = () => {
  return (
    <section className="main">
      <Container fluid>
        <Row style={{ padding: '0px' }}>
          <Col className="col-2">
            <NavigationMenu />
          </Col>
          <Col className="col-10" style={{ padding: '0px' }}>
            <AppRouter />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Main;
