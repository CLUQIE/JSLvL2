class Hamburger {
  constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      console.log(`Приветствуем в нашем фастфуде  Макдак\nУ нас есть 2 вида гамбургеров:\nMin и Max\nВы можете добавить начинку командой bigmack.addTopping('Название начинки') \nВы можете удалить начинку командой bigmack.removeTopping('Название начинки');\nВы можете узнать размер гамбургера командой bigmack.getSize();\nВы можете узнать начинку гамбургера командой bigmack.getStuffing();\nВы можете узнать цену гамбургера командой bigmack.calculatePrice();\nВы можете узнать калорийность гамбургера командой bigmack.calculateCalories();`);

  }
  // Добавить добавку
  addTopping(topping) {
    this.topping = topping;
    console.log(`Начинка ${this.topping} добавлена`);
  }
  // Убрать добавку
  removeTopping(topping) {

  }
  // Получить список добавок
  getToppings() {
    console.log(` \nSeasoning - 15Р, 20 кКал \nMayonnaise - 20Р, 5 кКал`);
  }
  // Узнать размер гамбургера
  getSize() {
    console.log(`Размер - ${this.size}`);
  }
  // Узнать начинку гамбургера
  getStuffing() {
    console.log(`Начинка - ${this.stuffing}`);
  }
  // Узнать цену
  calculatePrice() {
    let price = 0;
    if (this.size == 'min'){
      price += 50;
    };
    if (this.size == 'max'){
      price += 100;
    }
    if (this.topping == 'Seasoning'){
      price += 15;
    }
    if (this.topping == 'Mayonnaise'){
      price += 20;
    }
    console.log('Цена - ' + this.price);
  }
  // Узнать калорийность
  calculateCalories() {

  }
}

const bigmack = new Hamburger('min','chees');
bigmack.getSize();
bigmack.getToppings();
bigmack.getStuffing();
