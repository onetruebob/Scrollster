define(function(require, exports, module) {
    'use strict';
    var ActorView     = require('views/ActorView');
    var Surface       = require('famous/core/Surface');
    var ImageSurface  = require('famous/surfaces/ImageSurface');

    function ActorFactory() {
          // Container to store created actors by name.
          this.actors = {};
    }

    ActorFactory.prototype.makeActor = function(name, type, content, properties, zIndex, size, scrollStart, scrollStop) {
        var newSurface;

        if (type === 'html') {
            newSurface = new Surface({
                size: size,
                content: content,
                properties: properties
            });
        }

        var newActor = new ActorView();
        newActor.addSurface(newSurface);

        this.actors[name] = newActor;

        return newActor;
    };

    module.exports = ActorFactory;
});
