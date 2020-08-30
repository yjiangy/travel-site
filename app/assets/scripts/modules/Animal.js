class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    greet() {
        console.log("hello, this is a " + this.name);
    }
}

export default Animal