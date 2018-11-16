CimmerianDepths.playerSelectState = function(game) {

}

CimmerianDepths.playerSelectState.prototype = {

    preload: function() {
        
    },

    create: function() {
    	game.state.start('equipmentState');
    	//game.state.start('dungeonState');
    },

    update: function() {

    }
}