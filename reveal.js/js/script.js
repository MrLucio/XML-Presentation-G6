/* Event Listeners: Fragments */
var oshown = Array(15).fill(false);
var lshown = Array(20).fill(false);
var lshown = Array(10).fill(false);
var dshown = Array(10).fill(false);
var ashown = Array(10).fill(false);

authorIds = ['ovidiu-footer', 'david-footer', 'luciano-footer', 'angelo-footer'];

function startSpeaking(id, fontSize='1.5em', fontWeight='bolder', color='yellow'){

    authorIds.forEach(aId => {
        document.getElementById(aId).style.fontSize = '1em';
        document.getElementById(aId).style.fontWeight = 'normal';
        document.getElementById(aId).style.color = '';
    })

    document.getElementById(id).style.fontSize = fontSize;
    document.getElementById(id).style.fontWeight = fontWeight;
    document.getElementById(id).style.color = color;
}

Reveal.addEventListener('fragmentshown', function (event) {

    /*

        OVIDIU

    if (event.fragment.id === 'o-1' && !oshown[0]) {
        setTimeout(function () {
            consoleText(['program'], 'o-program', ['#76ff03'], 500, 'program');
            oshown[0] = true;
        }, 500);
    }
    */


    /*

        LUCIANO
      
    */

    if (event.fragment.id === 'l-1' && !lshown[0]) {
        startSpeaking('luciano-footer');
    }

    /*

        DAVID

    */

    if (event.fragment.id === 'd-1' && !dshown[1]) {
        startSpeaking('david-footer');
    }
    



    /*

        ANGELO

    if (event.fragment.id === 'a-1' && !ashown[0]) {

    }*/

});