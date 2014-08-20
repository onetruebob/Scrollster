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

    var actorExampleText = " \
        <pre> \
'Presenter Name': { \n\
    type: 'html', \n\
    content: 'BOB OWEN', \n\
    properties: { \n\
        backfaceVisibility: 'visible', \n\
        fontSize: '6.5em', \n\
        textAlign: 'center' \n\
    }, \n\
    size: [700, 140], \n\
    position: ['75%', '50%'], \n\
    classes: ['z2'] \n\
}, \n\
        </pre>";

    var actionExampleText = " \
<pre> \
{ \n\
    actor: 'Presenter Name', \n\
    start: 7001, \n\
    stop: 8000, \n\
    type: 'rotateTo', \n\
    properties: { \n\
        axis: 'x', \n\
        angleInDegrees: 720, \n\
    } \n\
}, \n\
</pre>";

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
        'How It Works': {
            type: 'html',
            content: 'HOW IT WORKS',
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center'
            },
            size: ['100%', '100%'],
            position: ['50%', '60%'],
            classes: ['z2'],
            opacity: 0
        },
        'Action': {
            type: 'html',
            content: 'Action',
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center',
                backgroundColor: 'rgb(83,83,83)',
                paddingTop: '1.2em',
                color: 'rgb(240,240,240)'
            },
            size: [400, 400],
            position: ['70%', '50%'],
            classes: ['z2'],
            opacity: 0
        },
        'Actor': {
            type: 'html',
            content: 'Actor',
            zPosition: 100,
            size: [400, 400],
            position: ['30%', '50%'],
            classes: ['z2'],
            opacity: 0,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '6.5em',
                textAlign: 'center',
                backgroundColor: 'rgb(240,240,240)',
                paddingTop: '1.2em'
            }
        },
        'Actor Example': {
            type: 'html',
            content: actorExampleText,
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '1.5em',
                backgroundColor: 'black',
                color: 'white',
                padding : '1em',
                paddingTop: '3.3em',
                fontFamily: '"Lucida Console", Monaco, monospace'
            },
            size: [500, 500],
            position: ['70%', '50%'],
            classes: ['z2'],
            opacity: 0
        },
        'Action Example': {
            type: 'html',
            content: actionExampleText,
            zPosition: 100,
            properties: {
                backfaceVisibility: 'visible',
                fontSize: '1.5em',
                backgroundColor: 'white',
                color: 'black',
                padding : '1em',
                paddingTop: '3.3em',
                fontFamily: '"Lucida Console", Monaco, monospace'
            },
            size: [500, 500],
            position: ['150%', '50%'],
            classes: ['z2'],
            opacity: 1
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
        {
            actor: 'How It Works',
            start: 8000,
            stop: 9000,
            type: 'opacity',
            properties: {
                finalOpacity: 1
            }
        },
        {
            actor: 'Actor',
            start: 9000,
            stop: 10000,
            type: 'opacity',
            properties: {
                finalOpacity: 1
            }
        },
        {
            actor: 'Action',
            start: 10000,
            stop: 11000,
            type: 'opacity',
            properties: {
                finalOpacity: 1
            }
        },
        {
            actor: 'Action',
            start: 11000,
            stop: 12000,
            type: 'moveTo',
            properties: {
                location: ['150%', '50%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Actor Example',
            start: 11000,
            stop: 12000,
            type: 'opacity',
            properties: {
                finalOpacity: 1
            }
        },
        {
            actor: 'Actor',
            start: 12000,
            stop: 12500,
            type: 'moveTo',
            properties: {
                location: ['150%', '50%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Actor Example',
            start: 12000,
            stop: 12500,
            type: 'moveTo',
            properties: {
                location: ['150%', '50%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Action',
            start: 12500,
            stop: 13000,
            type: 'moveTo',
            properties: {
                location: ['30%', '50%'],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Action Example',
            start: 12500,
            stop: 13000,
            type: 'moveTo',
            properties: {
                location: ['70%', '50%'],
                curve: 'easeOut'
            }
        },
        {
            actor: 'Action Example',
            start: 13000,
            stop: 13500,
            type: 'opacity',
            properties: {
                finalOpacity: 0
            }
        },
        {
            actor: 'Actor',
            start: 13000,
            stop: 13500,
            type: 'moveTo',
            properties: {
                location: ['70%', '50%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Action',
            start: 13500,
            stop: 15000,
            type: 'rotateTo',
            properties: {
                axis: 'z',
                angleInDegrees: '1080'
            }
        },
        {
            actor: 'Actor',
            start: 14000,
            stop: 14500,
            type: 'moveTo',
            properties: {
                location: ['50%', '50%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Action',
            start: 14000,
            stop: 14500,
            type: 'moveTo',
            properties: {
                location: ['50%', '50%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Actor',
            start: 14500,
            stop: 15000,
            type: 'rotateTo',
            properties: {
                axis: 'z',
                angleInDegrees: '360'
            }
        },
        {
            actor: 'Actor',
            start: 14500,
            stop: 15000,
            type: 'moveTo',
            properties: {
                location: ['50%', '150%'],
                curve: 'linear'
            }
        },
        {
            actor: 'Action',
            start: 14500,
            stop: 15000,
            type: 'moveTo',
            properties: {
                location: ['50%', '150%'],
                curve: 'linear'
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
