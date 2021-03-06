import '../styles/styles.css'
/*import Person from './modules/Person'
import Animal from './modules/Animal';*/
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'

// React related code goes here.
import React from 'react'
import ReactDOM from 'react-dom'

// Import React components that we created
import MyAmazingComponent from './modules/MyAmazingcomponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))

new ClientArea()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
             }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal()
        }
    })
})

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