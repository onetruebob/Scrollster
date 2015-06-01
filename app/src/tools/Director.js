define(function(require, exports, module) {
    'use strict';
    var ActorFactory       = require('tools/ActorFactory');
    var ActionFactory      = require('tools/ActionFactory');
    var UnitConverter      = require('tools/UnitConverter');

    var ACTOR_NODE_NAME = 'ACTOR';

    function Director() {
        this.actors = {}; // Collection of actors by name.
    }

    Director.prototype.populateStage = function(stage, actorDescriptions, actionDescriptions) {
        var actorFactory = new ActorFactory();
        var actionFactory = new ActionFactory();
        var keyboardBreakPoints = [];

        _getAdditionalActorsFromDocument(undefined, actorDescriptions);

        for (var actorName in actorDescriptions) {
            // Make sure the zIndex is included in the properties
            if (actorDescriptions[actorName].zPosition && actorDescriptions[actorName].properties) {
                actorDescriptions[actorName].properties.zPosition = actorDescriptions[actorName].zPosition;
            }

            // Make sure size is in pixels.
            actorDescriptions[actorName].size = _unitsToPixels(actorDescriptions[actorName].size);

            // Make sure position is in pixels.
            if (actorDescriptions[actorName].position) {
                actorDescriptions[actorName].position = _unitsToPixels(actorDescriptions[actorName].position);
            }

            var newActor = actorFactory.makeActor(actorName,
                                                  actorDescriptions[actorName].type,
                                                  actorDescriptions[actorName].content,
                                                  actorDescriptions[actorName].classes,
                                                  actorDescriptions[actorName].properties,
                                                  actorDescriptions[actorName].size,
                                                  actorDescriptions[actorName].opacity
                                                  );
            this.actors[actorName] = newActor;
            newActor.setPositionPixels(actorDescriptions[actorName].position[0], actorDescriptions[actorName].position[1]);
        }

        // Reorder the action descriptions by type, since order matters for
        // some types of actions / modifiers.
        actionDescriptions = actionDescriptions.sort(actionFactory.actionComparator);

        for (var i = 0; i < actionDescriptions.length; i++) {
            var actionDesc = actionDescriptions[i];
            var actor = this.actors[actionDesc.actor];

            // Keep track of break points
            if (actionDesc.setBreak) {
                keyboardBreakPoints.push(actionDesc.stop);
            }

            // If action takes a location, ensure that it's in pixels
            if (actionDesc.properties && actionDesc.properties.location) {
                actionDesc.properties.location = _unitsToPixels(actionDesc.properties.location);
            }

            actionFactory.makeAction(actor,
                                     actionDesc.type,
                                     actionDesc.start,
                                     actionDesc.stop,
                                     actionDesc.properties
                                    );
        }

        for (var actorToStage in this.actors) {
            var currActor = this.actors[actorToStage];
            stage.addActor(currActor);
        }

        stage.updateArrowKeyBreakpoints(keyboardBreakPoints);
    };

    function _unitsToPixels(initial) {
        var result =[];
        for (var i = 0; i <= 1; i++) {
            var checkVal = '' + initial[i]; // cast to string
            // Check if units are percentages and adjust is necessary
            // otherwise units are assumed to be pixels.
            if (checkVal.charAt(checkVal.length - 1) === '%') {
                if (i === 0) {
                    result[i] = UnitConverter.percentageToPixelsX(parseFloat(checkVal.slice(0, checkVal.length - 1)));
                }
                if (i === 1) {
                    result[i] = UnitConverter.percentageToPixelsY(parseFloat(checkVal.slice(0, checkVal.length - 1)));
                }
            } else {
                result[i] = initial[i];
            }
        }
        return result;
    }

    function _getAdditionalActorsFromDocument(rootNode, actorCollection) {
        if (!rootNode) {
            rootNode = document.body;
        }

        // for (var i = 0; i < rootNode.childElementCount; i++) {
        //     var node = rootNode.children[i];
        //     if (node.nodeName === ACTOR_NODE_NAME) {
        //         _addNodeAsActor(node);
        //     }
        // }

        var node = rootNode.firstChild;

        while (node) {
            var nextNode = node.nextSibling;
            if (node.nodeName === ACTOR_NODE_NAME) _addNodeAsActor(node, actorCollection);
            node = nextNode;
        }
    }

    function _addNodeAsActor(node, actorCollection) {
        // console.log('Actor name: ' + node.dataset.actorName + ' type: ' + node.dataset.type);

        function removeNode(node) {
            node.remove();
        }

        function getActorContent(node) {
            if (node.dataset.type === 'html') {
                return node.innerHTML;
            } else if (node.dataset.type === 'image') {
                return node.dataset.content;
            }
        }

        function getActorPosition(node) {
            return [node.dataset.positionX, node.dataset.positionY];
        }

        function getActorSize(node) {
            return [node.dataset.width, node.dataset.height];
        }

        function getActorProperties(node) {
            var properties = {};
            var propertyPairs = node.dataset.properties.split(',');

            // For each property pair, break it up into it's constituent key and value
            for (var i = 0; i < propertyPairs.length; i++) {
                var propertyParts = propertyPairs[i].trim().split(':');
                properties[propertyParts[0].trim()] = propertyParts[1].trim();
            }

            return properties;
        }

        function getActorClasses(node) {
            return node.dataset.classes.split(' ');
        }

        function getActorZPosition(node) {
            return node.dataset.positionZ;
        }

        function getActorObject(node) {
            return {
                name: node.dataset.actorName,
                type: node.dataset.type,
                content: getActorContent(node),
                properties: getActorProperties(node),
                size: getActorSize(node),
                position: getActorPosition(node),
                zPosition: getActorZPosition(node),
                classes: getActorClasses(node),
                opacity: node.dataset.opacity
            };
        }

        var newActor = getActorObject(node);
        actorCollection[newActor.name] = newActor;
        removeNode(node);
    }

    module.exports = Director;
});
