/*
ID# 620048556
October28,2013

Fifteen Puzzle
*/
var sq = 4, // gameboard size (squared)
    gameboard = {blank:0}, // the game tiles and the blank space

    dir = {north:0, east:1, south:2, west:3};

var init_tile = function(elt){
    /*
     Abstract data type for a tile.  It stores : 
        * the html element itself
        * the Number of the element (so we don't have to look it up)
        * the index aka position of the element in the grid
        The constructor takes an element
    */
    var numb, me, l, t; // l = left, t = top offsets

    numb = elt.textContent - 0;
    me = { elt:elt, number: numb, index:(numb -1) };
    l = me.index % sq;
    t = Math.floor(me.index/sq);

    // add css class
    me.elt.addClassName('puzzlepiece');
    // setting position within the  puzzle area
    me.elt.setStyle({
        left : ''+ l +'00px',
        top : '' + t + '00px',
        display: 'block',
        'background-position': '-' + l + '00px -' + t + '00px'
    });

    return me;
};

var get_tile = function(elt){
    // returns a tile object from the gameboard. elt is the prototype Element
    return gameboard[elt.textContent - 1];

};

var update_movable = function() {
    var i, current, tile,
        existing = $$('div.movablepiece');


    for (i=0; i< existing.length; i++ ){
        existing[i].removeClassName('movablepiece');
    }

    current = $$('div.puzzlepiece');
    for (i = 0; i < current.length; i++) {

        tile = get_tile(current[i]);
        if ( (tile.index % sq) == 0 ) { // first column


        }

        // current.elt.addClassName('movablepiece');
    }
};

var time_keeper = function(){};

var swap = function(){};

function slide(elt) {

    var diff, tile = get_tile(elt);
    diff = tile.index - gameboard.blank;

    if (Math.abs(diff) == 1) {

    }
    

}

var shuffle = function(){
    // randomize gameboard array
};


// ----------- INITIALIZE GAME --------------------------
var initialize = function(){

    var puzzle_area = $('puzzlearea'),
        i,tile;

    for (i=0;i<puzzle_area.childElementCount;i++){
        tile = init_tile( puzzle_area.childElements()[i] );
        gameboard[i] = tile;
    }
    
    gameboard.blank = i;
    update_movable();
};
 

Event.observe(window, 'load', function() {
    initialize();
});