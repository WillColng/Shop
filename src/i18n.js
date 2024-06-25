import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to USDT Shop",
      "cart": "Cart",
      "yourCart": "Your Cart",
      "price": "Price",
      "quantity": "Quantity",
      "total": "Total",
      "totalAmount": "Total Amount",
      "transferTo": "Transfer to",
      "addToCart": "Add to Cart",
      "remove": "Remove",
      "emptyCart": "Your cart is empty"
    }
  },
  ru: {
    translation: {
      "welcome": "Добро пожаловать в USDT Shop",
      "cart": "Корзина",
      "yourCart": "Ваша корзина",
      "price": "Цена",
      "quantity": "Количество",
      "total": "Итого",
      "totalAmount": "Общая сумма",
      "transferTo": "Перевести на",
      "addToCart": "Добавить в корзину",
      "remove": "Удалить",
      "emptyCart": "Ваша корзина пуста"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
