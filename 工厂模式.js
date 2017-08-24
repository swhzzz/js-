function Person(name, age) {
    let o = {}
    o.name = name
    o.age = age
    o.sayName = function() {
        console.log(this.name)
    }
    return o;
}