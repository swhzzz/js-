var People = (function() {
    var name = 'sls'

    function sayName() {
        console.log(name)
    }
    return {
        name: name,
        sayName: sayName
    }
})()