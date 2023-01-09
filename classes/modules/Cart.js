import { List } from "./List.js";

export class Cart {
  constructor(container) {
    this.container = container;
    this.data = [];
  }
  render() {
    this.data.forEach((data) => {
      this.container.insertAdjacentHTML(
        "beforeend",
        `<li id = '${data.id}'><p>${data.name}</p> <p>${data.price}</p><p>${data.amount}</p> <button type="button" class="" >Delet</button></li>`
      );
    });
  }

  _checkGoodInList(id) {
    return this.data.find((dataItem) => dataItem.id === id);
  }

  addToCart(good) {
    if (this._checkGoodInList(good.id)) {
      this.data.forEach((dataItem) => {
        if (dataItem.id === good.id) {
          dataItem.amount = dataItem.amount + 1;
        }
      });
      return;
    }
    this.data.push({...good, amount: 1 });
  }

clearCart() {
this.container.innerHTML = '';
   }

}
