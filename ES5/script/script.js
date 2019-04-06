'use strict';

const GOODS = [
  {title : 'Кусь-кусь', price : '900 ₽', img : 'Banner-1.png'},
  {title : 'Хищник вышел на охоту', price : '1200 ₽', img : 'Banner-2.png'},
  {title : 'Тело, что тупо болит', price : '900 ₽', img : 'Banner-3.png'},
  {title : 'Череп Пашка', price : '900 ₽', img : 'Banner-4.png'},
  {title : 'Все одно', price : '900 ₽', img : 'Banner-5.png'},
  {title : 'Щит Щит Щит', price : '900 ₽', img : 'Banner-6.png'},
  {title : 'И на луне приятно', price : '900 ₽', img : 'Banner-7.png'},
  {title : 'Я иду за тобой', price : '1200 ₽', img : 'Banner-8.png'},
  {title : '8 жизней', price : '900 ₽', img : 'Banner-9.png'},
];

const renderGoodsItem = function (title, price, img) {
  //парсинг объекта в фрагмент верстки
  return `
          <div class="goods-item">
            <img src="images/${img}" alt="photo">
            <h3>${title}</h3>
            <p>${price}</p>
          </div>`;
};

const renderGoodsList = function (list) {
  // прием массива товаров
  // передача его в RGI
  // добавление элемента в DOM
  const goodsList = list.map(item => renderGoodsItem (item.title,item.price, item.img)); // не знаю как записать в ES5 формате
  document.querySelector ('.goods-list').innerHTML = goodsList.join('');

};

renderGoodsList (GOODS);
