CimmerianDepths.initialScreenState = function(game) {

}

var pressed;

CimmerianDepths.initialScreenState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	text = "Presiona cualquier tecla para comenzar";
        style = { font: "25px Times New Roman", fill: "#FFFFFF", align: "center" };
        spr_text = game.add.text(100, 300, text, style);

        pressed = false;

        any_key = game.input.keyboard.onPressCallback = function(){ pressed = true; }
    },

    update: function() {
    	if(pressed) { game.state.start('playerSelectState'); }
    }
}