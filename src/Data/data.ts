import samsungMonitor from 'Assets/Images/Products/Monitors/samsung.webp';
import msiMonitor from 'Assets/Images/Products/Monitors/msi.webp';
import darkKeyboard from 'Assets/Images/Products/Keyboards/dark.jpg';
import redKeyboard from 'Assets/Images/Products/Keyboards/red.jpg';
import logitechMouse from 'Assets/Images/Products/Mouses/logitech.webp';
import glorious from 'Assets/Images/Products/Mouses/white.png';
import { IOrders, Product } from 'App/types/types';

export const orders: IOrders[] = [
  {
    id: 1,
    title: 'Order 1',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products.filter((product) => product.order === this.id);
    },
  },
  {
    id: 2,
    title: 'Order 2',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products.filter((product) => product.id === this.id);
    },
  },
  {
    id: 3,
    title: 'Order 3',
    date: '2017-06-29 12:09:33',
    description: 'desc',
    get products() {
      return products.filter((product) => product.id === this.id);
    },
  },
];

export const products: Product[] = [
  {
    id: 1,
    serialNumber: 101,
    isNew: true,
    photo: samsungMonitor,
    title: 'Монітор Samsung',
    type: 'Monitors',
    specification: 'S24R358FZ',
    guarantee: {
      start: '08-14-2023 12:09:33',
      end: '08-15-2023 12:09:33',
    },
    price: [
      { value: 100, symbol: 'USD', isDefault: false },
      { value: 2600, symbol: 'UAH', isDefault: true },
    ],
    order: 1,
    date: '08-16-2023 12:09:33',
  },
  {
    id: 2,
    serialNumber: 102,
    isNew: false,
    photo: msiMonitor,
    title: 'Монітор ігровий MSI',
    type: 'Monitors',
    specification: 'G2412',
    guarantee: {
      start: '08-17-2023 13:09:33',
      end: '08-18-2023 13:09:33',
    },
    price: [
      { value: 200, symbol: 'USD', isDefault: false },
      { value: 2700, symbol: 'UAH', isDefault: true },
    ],
    order: 1,
    date: '08-19-2023 13:09:33',
  },
  {
    id: 3,
    serialNumber: 103,
    isNew: true,
    photo: darkKeyboard,
    title: 'Клавіатура Dark Project ',
    type: 'Keyboards',
    specification: 'KB-GSH-871-500004',
    guarantee: {
      start: '08-20-2023 14:09:33',
      end: '08-21-2023 14:09:33',
    },
    price: [
      { value: 300, symbol: 'USD', isDefault: false },
      { value: 2800, symbol: 'UAH', isDefault: true },
    ],
    order: 2,
    date: '08-22-2023 14:09:33',
  },
  {
    id: 4,
    serialNumber: 104,
    isNew: false,
    photo: redKeyboard,
    title: 'Клавіатура Механічна Ігрова MK1',
    type: 'Keyboards',
    specification: 'B07RWDRGH4',
    guarantee: {
      start: '08-23-2023 15:09:33',
      end: '08-24-2023 15:09:33',
    },
    price: [
      { value: 400, symbol: 'USD', isDefault: false },
      { value: 2900, symbol: 'UAH', isDefault: true },
    ],
    order: 2,
    date: '08-25-2023 15:09:33',
  },
  {
    id: 5,
    serialNumber: 105,
    isNew: true,
    photo: logitechMouse,
    title: 'Миша Logitech G Pro Gaming Wireless Black',
    type: 'Mouses',
    specification: '910-005272',
    guarantee: {
      start: '08-26-2023 16:09:33',
      end: '08-27-2023 16:09:33',
    },
    price: [
      { value: 500, symbol: 'USD', isDefault: false },
      { value: 3000, symbol: 'UAH', isDefault: true },
    ],
    order: 3,
    date: '08-28-2023 16:09:33',
  },
  {
    id: 6,
    serialNumber: 106,
    isNew: false,
    photo: glorious,
    title: 'Миша Glorious Model O Wireless',
    type: 'Mouses',
    specification: 'GLO-MS-OW-MW',
    guarantee: {
      start: '08-29-2023 17:09:33',
      end: '08-30-2023 17:09:33',
    },
    price: [
      { value: 600, symbol: 'USD', isDefault: false },
      { value: 3100, symbol: 'UAH', isDefault: true },
    ],
    order: 3,
    date: '08-31-2023 17:09:33',
  },
];
