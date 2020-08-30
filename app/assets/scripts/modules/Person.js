function Person(fullName) {

    this.name = fullName;

    this.greet = function() {
        console.log("Hello there!");
    }
}

export default Person