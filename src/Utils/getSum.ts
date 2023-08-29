import { IProduct, TPrice } from 'App/types/types';

export const getSum = (products: IProduct[]): TPrice[] => {
  const priceObj = {
    USD: 0,
    UAH: 0,
  };
  products.forEach((product) => {
    product.price.forEach((price) => {
      priceObj[price.symbol] += price.value;
    });
  });
  return [
    {
      value: priceObj['USD'],
      symbol: 'USD',
      isDefault: false,
    },
    {
      value: priceObj['UAH'],
      symbol: 'UAH',
      isDefault: true,
    },
  ];
};
