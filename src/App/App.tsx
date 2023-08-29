import TopMenu from 'Components/TopMenu/TopMenu';
import './styles/index.scss';
import Main from 'Components/Main/Main';
import { useEffect, useState } from 'react';
import { useTime } from 'Utils/Hooks/useTime';
import { connect } from 'socket.io-client';
import type { Socket } from 'socket.io-client';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';

const App = () => {
  const [socket, setSocket] = useState<
    Socket<DefaultEventsMap, DefaultEventsMap> | undefined
  >();
  const { checkTime } = useTime();

  useEffect(() => {
    const interval = setInterval(checkTime);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const connection = connect('http://localhost:3001');
    setSocket(connection);
    return () => {
      connection.close();
    };
  }, []);
  return (
    <div className="app">
      <TopMenu socket={socket} />
      <Main />
    </div>
  );
};

export default App;
