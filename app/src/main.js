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
            position: ['75%', '50%'],
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
            position: ['25%', '50%'],
            classes: ['z2']
        },
        'Slide One': {
            type: 'image',
            content: 'content/images/scrollster-name-main.001.jpg',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: ['100%', '100%'],
            position: ['50%', '50%'],
            classes: ['z2'],
            zPosition: 1,
            opacity: 0
        },
        'Slide Two': {
            type: 'html',
            content: 'SCROLL ANIMATION COMPONENT?',
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center'
            },
            size: ['100%', '100%'],
            position: ['50%', 2 * 1080],
            classes: ['z2']
        },
        'Scrollarama': {
            type: 'image',
            content: 'content/images/scrollarama.png',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: [960, 240],
            position: ['50%', '150%'],
            classes: ['z1']
        },
        'Scrollmagic': {
            type: 'image',
            content: 'content/images/scrollmagic.png',
            properties: {
                backfaceVisibility: 'visible'
            },
            size: [960, 340],
            position: ['50%', '150%'],
            classes: ['z1']
        },
        'Why Famous': {
            type: 'html',
            content: 'WHY FAMOUS?',
            zPosition: 101,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center'
            },
            size: ['100%', '100%'],
            position: ['-150%', '60%'],
            classes: ['z2']
        },
        'Speed': {
            type: 'html',
            content: 'Speed',
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center',
                backgroundColor: 'rgb(240,240,240)'
            },
            size: ['100%', 120],
            position: ['-150%', '30%'],
            classes: ['z2']
        },
        'Easing': {
            type: 'html',
            content: 'Easing / Physics',
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center',
                backgroundColor: 'rgb(240,240,240)'
            },
            size: ['100%', 120],
            position: ['-150%', '50%'],
            classes: ['z2']
        },
        '3D': {
            type: 'html',
            content: '3D Transformations',
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center',
                backgroundColor: 'rgb(240,240,240)'
            },
            size: ['100%', 120],
            position: ['-150%', '70%'],
            classes: ['z2']
        },
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
                location: ['50%', '50%'],
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
                location: ['50%', '100%'],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Slide Two',
            start: 2001,
            stop: 3000,
            type: 'moveTo',
            properties: {
                location: ['50%', '60%'],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Scrollarama',
            start: 2001,
            stop: 3000,
            type: 'moveTo',
            properties: {
                location: ['50%', '50%']
            }
        },
        {
            actor: 'Scrollmagic',
            start: 2001,
            stop: 3000,
            type: 'moveTo',
            properties: {
                location: ['50%', '50%']
            }
        },
        {
            actor: 'Scrollarama',
            start: 3201,
            stop: 4000,
            type: 'moveTo',
            properties: {
                location: ['50%', '35%'],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Scrollmagic',
            start: 3201,
            stop: 4000,
            type: 'moveTo',
            properties: {
                location: ['50%', '75%'],
                curve: 'easeOutBounce'
            }
        },
        {
            actor: 'Slide Two',
            start: 4001,
            stop: 5000,
            type: 'moveTo',
            properties: {
                location: ['150%', '60%'],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Scrollarama',
            start: 4001,
            stop: 5000,
            type: 'moveTo',
            properties: {
                location: ['150%', '75%'],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Scrollmagic',
            start: 4001,
            stop: 5000,
            type: 'moveTo',
            properties: {
                location: ['150%', '35%'],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Why Famous',
            start: 4001,
            stop: 5000,
            type: 'moveTo',
            properties: {
                location: ['50%', '60%'],
                curve: 'easeIn'
            }
        },
        {
            actor: 'Speed',
            start: 5001,
            stop: 6000,
            type: 'moveTo',
            properties: {
                location: ['50%', '30%'],
                curve: 'easeIn'
            }
        },
        {
            actor: 'Easing',
            start: 6001,
            stop: 7000,
            type: 'moveTo',
            properties: {
                location: ['50%', '50%'],
                curve: 'spring'
            }
        },
        {
            actor: '3D',
            start: 7001,
            stop: 8000,
            type: 'moveTo',
            properties: {
                location: ['50%', '70%'],
                curve: 'linear'
            }
        },
        {
            actor: '3D',
            start: 7001,
            stop: 8000,
            type: 'rotateTo',
            properties: {
                axis: 'x',
                angleInDegrees: 720,
                curve: 'linear'
            }
        },
        {
            actor: 'Why Famous',
            start: 8001,
            stop: 9000,
            type: 'moveTo',
            properties: {
                location: ['50%', '150%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Speed',
            start: 8001,
            stop: 9000,
            type: 'moveTo',
            properties: {
                location: ['50%', '130%'],
                curve: 'easeIn'
            }
        },
        {
            actor: 'Easing',
            start: 8201,
            stop: 9000,
            type: 'moveTo',
            properties: {
                location: ['50%', '130%'],
                curve: 'easeIn'
            }
        },
        {
            actor: '3D',
            start: 8401,
            stop: 9000,
            type: 'moveTo',
            properties: {
                location: ['50%', '130%'],
                curve: 'easeIn'
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
