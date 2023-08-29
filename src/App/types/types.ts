interface TQuarantee {
  start: string;
  end: string;
}

export interface TPrice {
  value: number;
  symbol: string;
  isDefault: boolean;
}

export interface IProduct {
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

export interface IMultiProducts {
  ua: IProduct[];
  en: IProduct[];
}

export interface IOrder {
  id: number;
  title: string;
  date: string;
  description: string;
  products: IProduct[];
}

export interface IMultiOrders {
  ua: IOrder[];
  en: IOrder[];
}

export interface IToogle {
  show: boolean;
  toogleShow: () => void;
}

export interface IOpenStates {
  id: number;
  isOpen: boolean;
}

interface IMultiData {
  ua: string;
  en: string;
}

export interface ITimeFormats {
  date: IMultiData;
  shortFormat: string;
  longFormat: string;
}
