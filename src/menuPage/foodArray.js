import burgerurl from '../assets/chickenburger.jpeg'
import pizzaurl from '../assets/pizza.jpg'
import pastaurl from '../assets/pasta.jpg'
class Food{
    constructor(name, price, image){
        this.name = name;
        this.price = price;
        this.image = image;
    }
}
const chickenBurger = new Food('Chicken Burger', 10, burgerurl)
const pizza = new Food('pizza', 10, pizzaurl)
const pasta = new Food('pasta', 15, pastaurl)
export const menuArray = [chickenBurger, pizza, pasta]
