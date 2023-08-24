interface TQuarantee {
  start: string;
  end: string;
}

interface TPrice {
  value: number;
  symbol: string;
  isDefault: boolean;
}

export interface Product {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: TQuarantee;
  price: TPrice[];
  order: number;
  date: string;
}

export interface IOrders {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Product[];
}
