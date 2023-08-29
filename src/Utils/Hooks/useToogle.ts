import { useState } from 'react';
export const useToogle = () => {
  const [show, setShow] = useState(false);
  const toogleShow = () => {
    setShow((prev) => !prev);
  };
  return { show, toogleShow };
};
