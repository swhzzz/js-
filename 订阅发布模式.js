var EventCenter = (function() {
    var events = {};
    /*
      {
        my_event: [{handler: function(data){xxx}}, {handler: function(data){yyy}}]
      }
    */
    function on(evt, handler) {
        events[evt] = events[evt] || [];
        events[evt].push({
            handler: handler
        });
    }

    function fire(evt, args) {
        if (!events[evt]) {
            return;
        }
        for (var i = 0; i < events[evt].length; i++) {
            events[evt][i].handler(args);
        }
    }
    return {
        on: on,
        fire: fire
    }
})();
EventCenter.on('hello', function() {
    console.log('hello')
})
EventCenter.on('hello', function() {
    console.log('hello2')
})
EventCenter.fire('hello') // hello,hello2