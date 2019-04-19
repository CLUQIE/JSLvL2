'use strict';

class GoodsItem {
  constructor(title, price, img) {
    this.title = title;
    this.price = price;
    this.img = img;
  }
  render() {
    return `<div class="goods-item">
              <img src="images/${this.img}" alt="photo">
              <h3>${this.title}</h3>
              <p>${this.price} ₽</p>
            </div>`;;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }
  fetchGoods() {
    this.goods = [
      {title : 'Кусь-кусь', price : '900', img : 'Banner-1.png'},
      {title : 'Хищник вышел на охоту', price : '1200', img : 'Banner-2.png'},
      {title : 'Тело, что тупо болит', price : '900', img : 'Banner-3.png'},
      {title : 'Череп Пашка', price : '900', img : 'Banner-4.png'},
      {title : 'Все одно', price : '900', img : 'Banner-5.png'},
      {title : 'Щит Щит Щит', price : '900', img : 'Banner-6.png'},
      {title : 'И на луне приятно', price : '900', img : 'Banner-7.png'},
      {title : 'Я иду за тобой', price : '1200', img : 'Banner-8.png'},
      {title : '8 жизней', price : '900', img : 'Banner-9.png'},
    ];
  }
  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price, good.img);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').innerHTML = listHtml;
  }
  sumGoods(){
    let sumItem = 0;
    let sumItem2 = 0;
    this.goods.forEach(sum => {
       sumItem += Number(sum.price);
       sumItem2 = `Стоимость корзины -  ${sumItem}`;
    });
    console.log(sumItem2);
  }
}

class Basket {
  constructor (){

  }
  render(){

  }
}

class BasketElem {
  constructor (){

  }
  addTo(){

  }
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();
