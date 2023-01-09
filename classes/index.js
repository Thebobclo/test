import { goods } from "./const/good.const.js";
import { Cart } from "./modules/Cart.js";
import { GoodList } from "./modules/GoodList.js";
import { Shop } from "./modules/Shop.js";

const cardsWrapper = document.querySelector("#card_wrapper");
const cartWrapper = document.querySelector("#cart");
const root = document.querySelector("#root");


const cart = new Cart(cardsWrapper);
const goodList = new GoodList(goods, cardsWrapper);
const shop = new Shop(cart, goodList,root);

