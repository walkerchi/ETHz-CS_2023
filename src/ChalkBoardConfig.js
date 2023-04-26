import Sponge from 'reveal.js-plugins/chalkboard/img/sponge.png';
import BlackBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-black.png';
import BlueBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-blue.png';
import RedBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-red.png';
import GreenBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-green.png';
import OrangeBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-orange.png';
import PurpleBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-purple.png';
import YellowBoardMarker from 'reveal.js-plugins/chalkboard/img/boardmarker-yellow.png';
import WhiteChalk from 'reveal.js-plugins/chalkboard/img/chalk-white.png';
import BlueChalk from 'reveal.js-plugins/chalkboard/img/chalk-blue.png';
import RedChalk from 'reveal.js-plugins/chalkboard/img/chalk-red.png';
import GreenChalk from 'reveal.js-plugins/chalkboard/img/chalk-green.png';
import OrangeChalk from 'reveal.js-plugins/chalkboard/img/chalk-orange.png';
import PurpleChalk from 'reveal.js-plugins/chalkboard/img/chalk-purple.png';
import YellowChalk from 'reveal.js-plugins/chalkboard/img/chalk-yellow.png';
import WhiteBoard from 'reveal.js-plugins/chalkboard/img/whiteboard.png';
import BlackBoard from 'reveal.js-plugins/chalkboard/img/blackboard.png';

export const ChalkBoardConfig = {
    background: BlackBoard,
    storage: "chalkboard",
    toggleChalkboardButton: { left: "80px" },
    toggleNotesButton: { left: "130px" },
    colorButtons: 5,
    eraser :  {
        src: Sponge,
        radius: 20
    },
    boardmarkers : [ {
            color: 'rgba(100,100,100,1)',
            cursor: 'url(' + BlackBoardMarker + '), auto'
        },
        {
            color: 'rgba(30,144,255, 1)',
            cursor: 'url(' + BlueBoardMarker + '), auto'
        },
        {
            color: 'rgba(220,20,60,1)',
            cursor: 'url(' + RedBoardMarker + '), auto'
        },
        {
            color: 'rgba(50,205,50,1)',
            cursor: 'url(' + GreenBoardMarker + '), auto'
        },
        {
            color: 'rgba(255,140,0,1)',
            cursor: 'url(' + OrangeBoardMarker + '), auto'
        },
        {
            color: 'rgba(150,0,20150,1)',
            cursor:  'url(' + PurpleBoardMarker + '), auto'
        },
        {
            color: 'rgba(255,220,0,1)',
            cursor: 'url(' + YellowBoardMarker + '), auto'
        }
    ],
    chalks : [ {
        color: 'rgba(255,255,255,0.5)',
        cursor: 'url(' + WhiteChalk + '), auto'
    },
    {
        color: 'rgba(96, 154, 244, 0.5)',
        cursor: 'url(' + BlueChalk + '), auto'
    },
    {
        color: 'rgba(237, 20, 28, 0.5)',
        cursor: 'url(' + RedChalk + '), auto'
    },
    {
        color: 'rgba(20, 237, 28, 0.5)',
        cursor: 'url(' + GreenChalk + '), auto'
    },
    {
        color: 'rgba(220, 133, 41, 0.5)',
        cursor: 'url(' + OrangeChalk + '), auto'
    },
    {
        color: 'rgba(220,0,220,0.5)',
        cursor: 'url(' + PurpleChalk + '), auto'
    },
    {
        color: 'rgba(255,220,0,0.5)',
        cursor: 'url(' + YellowChalk + '), auto'
    }
    ],
}