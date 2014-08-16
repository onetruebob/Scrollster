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
        'Bob Name': {
            type: 'html',
            content: 'BOB OWEN',
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center'
            },
            size: [700, 140],
            position: [1440, 538],
            classes: ['z2']
        },
        'Tom Name': {
            type: 'html',
            content: 'TOM O\'CONNELL',
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center'
            },
            size: [840, 140],
            position: [480, 538],
            classes: ['z2']
        },
        'Slide One': {
            type: 'image',
            content: 'content/images/scrollster-name-main.001.jpg',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: [1920, 1080],
            position: [960, -1080],
            classes: ['z1']
        },
        'Slide Two': {
            type: 'html',
            content: 'SCROLL ANIMATION COMPONENT?',
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center'
            },
            size: [1920, 1080],
            position: [480, 2 * 1080],
            classes: ['z2']
        },
        'Scrollarama': {
            type: 'image',
            content: 'content/images/scrollarama.png',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: [960, 240],
            position: [960, 1540],
            classes: ['z1']
        },
        'Scrollmagic': {
            type: 'image',
            content: 'content/images/scrollmagic.png',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: [960, 340],
            position: [960, 1540],
            classes: ['z1']
        }
    };

    var actionDescriptions = [
        {
            actor: 'Bob Name',
            start: 0,
            stop: 1000,
            type: 'position',
            properties: {
                scaleX: +1,
                scaleY: 0
            }
        },
        {
            actor: 'Tom Name',
            start: 0,
            stop: 1000,
            type: 'position',
            properties: {
                scaleX: -1,
                scaleY: 0
            }
        },
        // {
        //     actor: 'Slide One',
        //     start: 1000,
        //     stop: 2000,
        //     type: 'scale',
        //     properties: {
        //         changeRatioX: 0,
        //         changeRatioY: 0,
        //         curve: 'easeIn'
        //     }
        // },
        // {
        //     actor: 'Slide One',
        //     start: 1000,
        //     stop: 2000,
        //     type: 'rotateTo',
        //     properties: {
        //         axis: 'y',
        //         angleInDegrees: 720,
        //         curve: 'easeIn'
        //     }
        // },
        {
            actor: 'Slide One',
            start: 0,
            stop: 1000,
            type: 'opacity',
            properties: {}
        },
        {
            actor: 'Slide One',
            start: 0,
            stop: 1,
            type: 'moveTo',
            properties: {
                location: [960, 540],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Slide One',
            start: 1001,
            stop: 2000,
            type: 'position',
            properties: {
                scaleX: 0,
                scaleY: 1.2
            }
        },
        {
            actor: 'Slide Two',
            start: 1001,
            stop: 2000,
            type: 'moveTo',
            properties: {
                location: [960, 1080],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Slide Two',
            start: 2001,
            stop: 3000,
            type: 'moveTo',
            properties: {
                location: [960, 540],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Scrollmagic',
            start: 2001,
            stop: 3000,
            type: 'rotateTo',
            properties: {
                axis: 'y',
                angleInDegrees: 1440,
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Scrollarama',
            start: 2001,
            stop: 3000,
            type: 'moveTo',
            properties: {
                location: [960, 540],
            }
        },
        {
            actor: 'Scrollmagic',
            start: 2001,
            stop: 3000,
            type: 'moveTo',
            properties: {
                location: [960, 540],
            }
        },
        {
            actor: 'Scrollarama',
            start: 3201,
            stop: 4000,
            type: 'moveTo',
            properties: {
                location: [960, 440],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Scrollmagic',
            start: 3201,
            stop: 4000,
            type: 'moveTo',
            properties: {
                location: [960, 840],
                curve: 'easeOutBounce'
            }
        },
        // {
        //     actor: 'Slide One',
        //     start: 0,
        //     stop: 1000,
        //     type: 'rotateTo',
        //     properties: {
        //         axis: 'y',
        //         angleInDegrees: 720,
        //         curve: 'easeOutBounce'
        //     }
        // },
        // {
        //     actor: 'Slide One',
        //     start: 0,
        //     stop: 600,
        //     type: 'position',
        //     properties: {
        //         scaleX: 0,
        //         scaleY: -1
        //     }
        // },
        // {
        //     actor: 'Slide One',
        //     start: 600,
        //     stop: 1000,
        //     type: 'moveTo',
        //     properties: {
        //         location: [720, 450],
        //         curve: 'easeOutBounce'
        //     }
        // },
        // {
        //     actor: 'Slide One',
        //     start: 0,
        //     stop: 1000,
        //     type: 'opacity',
        //     properties: {}
        // },
        // {
        //     actor: 'Demo Two',
        //     start: 1000,
        //     stop: 2000,
        //     type: 'scale',
        //     properties: {
        //         changeRatioX: 4,
        //         changeRatioY: 4,
        //         curve: 'easeOut'
        //     }
        // },
        // {
        //     actor: 'Demo Two',
        //     start: 1000,
        //     stop: 2000,
        //     type: 'rotateTo',
        //     properties: {
        //         axis: 'y',
        //         angleInDegrees: 540
        //     }
        // },
        // {
        //     actor: 'Demo Two',
        //     start: 1000,
        //     stop: 1600,
        //     type: 'position',
        //     properties: {
        //         scaleX: 0,
        //         scaleY: -1
        //     }
        // },
        // {
        //     actor: 'Demo Two',
        //     start: 1600,
        //     stop: 2000,
        //     type: 'moveTo',
        //     properties: {
        //         location: [720, 450]
        //     }
        // },
        // {
        //     actor: 'Demo Two',
        //     start: 1000,
        //     stop: 1200,
        //     type: 'opacity',
        //     properties: {
        //         curve: 'linear'
        //     }
        // }
    ];

    director.populateStage(stageView, actorDescriptions, actionDescriptions);

    mainContext.add(stageView);
});
