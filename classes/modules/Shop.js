export class Shop {
  constructor(cart, goodList, rootContainer) {
    this.cart = cart;
    this.rootContainer = rootContainer;
    this.goodList = goodList;

    this._init();
  }
  _init() {
    this.goodList.render();
     this.cart.render();

    this.rootContainer.addEventListener("click", (event) => {
      switch (true) {
        case event.target.classList.contains("goodsButton"):
          this.cart.addToCart({
            id: event.target.dataset.id,
            name: event.target.dataset.name,
            price: event.target.dataset.price,
          });
          this.cart.clearCart();
          this.cart.render();

          break;

        default:
      }
    });
  }
}
