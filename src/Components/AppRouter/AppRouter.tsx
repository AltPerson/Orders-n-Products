import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const AppRouter: FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={`route ${route.path}`}
            element={<route.component />}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
export default AppRouter;
