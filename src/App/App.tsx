import TopMenu from 'Components/TopMenu/TopMenu';
import './styles/index.scss';
import Main from 'Components/Main/Main';
import { Col, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const App = () => (
  <div className="app">
    <TopMenu />
    <Main />
  </div>
);

export default App;
