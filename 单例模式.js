let People = (function() {
    var instance

    function init(name) {
        return {
            name: name
        }
    }
    return {
        createPeople: function(name) {
            if (!instance) {
                instance = init(name)
            }
            return instance
        }
    }
})()
People.createPeople('swh') // {name: 'swh'}
People.createPeople('sls') // {name: 'sls'}