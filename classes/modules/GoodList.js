import { List } from "./List.js";

export class GoodList extends List {
    constructor(data, container) {
        super(data, container);
    }

    render(){
        this.data.forEach((data) => {
            this.container.insertAdjacentHTML(
                "beforeend",
                `<div id="${data.id}"><p>${data.name}</p><img src="${data.img}" alt="${data.name}">
                <p>${data.description}</p><p>цена: ${data.price}</p>
                <button data-name="${data.name}" data id="${data.id}" data-price="${data.price}" class="goodsButton" type="button">Добавить</button> </div> `
              );
            });
        };
    }