/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var StageView = require('views/StageView');
    var Director = require('tools/Director');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1000);

    var stageView = new StageView();
    var director = new Director();

    var actorDescriptions = {
        'Demo Actor': {
            type: 'image',
            content: 'content/images/famous_logo.png',
            zIndex: 10,
            properties: {
                fontSize: '2em',
                padding: '.5em',
                backfaceVisibility: 'visible'
            },
            size: [300, 300],
            position: [150, 150]
        },
        'Demo Two': {
            type: 'html',
            content: 'Hi!',
            zIndex: 5,
            size: [100, 100],
            position: [800, 200],
            properties: {
                fontSize: '2em',
                padding: '.5em',
                backfaceVisibility: 'visible',
                backgroundColor: 'blue'
            }
        }
    };

    var actionDescriptions = [
        {
            actor: 'Demo Actor',
            start: 0,
            stop: 1000,
            type: 'rotateTo',
            properties: {
                axis: 'y',
                angleInDegrees: 720,
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Demo Actor',
            start: 0,
            stop: 600,
            type: 'position',
            properties: {
                scaleX: 0,
                scaleY: -1
            }
        },
        {
            actor: 'Demo Actor',
            start: 600,
            stop: 1000,
            type: 'moveTo',
            properties: {
                location: [720, 450],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Demo Actor',
            start: 0,
            stop: 1000,
            type: 'opacity',
            properties: {}
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 2000,
            type: 'scale',
            properties: {
                changeRatioX: 4,
                changeRatioY: 4,
                curve: 'spring'
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 2000,
            type: 'rotateTo',
            properties: {
                axis: 'y',
                angleInDegrees: 540
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 1600,
            type: 'position',
            properties: {
                scaleX: 0,
                scaleY: -1
            }
        },
        {
            actor: 'Demo Two',
            start: 1600,
            stop: 2000,
            type: 'moveTo',
            properties: {
                location: [720, 450]
            }
        },
        {
            actor: 'Demo Two',
            start: 1000,
            stop: 1200,
            type: 'opacity',
            properties: {}
        }
    ];

    director.populateStage(stageView, actorDescriptions, actionDescriptions);

    mainContext.add(stageView);
});
