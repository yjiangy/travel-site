import '../styles/styles.css'
/*import Person from './modules/Person'
import Animal from './modules/Animal';*/
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}

/* Lesson example code below this line */
/*function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favorate color is " + favColor + ".");
}

let jiangName = "Yueyang Jiang";
let jiangFavColor = "blue";

var jiang = {
    name: "Yueyang Jiang",
    favorateColor: "blue",
    greet: function() {
        console.log("oH, Hleloo, my name is " + jiang.name);
    }
}

class Adult extends Person {
    payTaxes() {
        console.log(this.name + "now owes zero taxes.");
    }
}

let john2 = new Adult("John John");
john2.payTaxes();

var john = new Person("John John");
john.greet();

var sunday = new Animal("Sunday", "Red");
sunday.greet();

person(jiangName, jiangFavColor)
person("yueyang", "blue")
person(jiang.name, jiang.favorateColor)
jiang.greet();
*/