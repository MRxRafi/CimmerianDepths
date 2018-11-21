CimmerianDepths.playerSelectState = function(game) {
    this.equipar;
    this.jugar;
    this.onOverTextStyle;
    this.onOutTextStyle;
}

    function changeToSelected(phaserText)
    {
        phaserText.fontStyles= this.selectedTextStyle;
    }

    function changeToUnselected(phaserText)
    {
        phaserText.fontStyles= this.unselectedTextStyle;
    }


CimmerianDepths.playerSelectState.prototype = {

    preload: function() {
        
    },

    create: function() {
        game.add.image(0,0,'titleScreenBG');

        this.onOverTextStyle= {fill:"rgb(255,255,255)", font: "40px Averia Sans Libre", align:"center"};
        this.onOutTextStyle= {fill:"rgb(155,155,155)", font: "40px Averia Sans Libre", align:"center"};
 

        this.equipar= new createButton(100, game.height*0.66, "EQUIPAR", this.onOutTextStyle,
        function(){game.state.start("equipmentState")});
        
         this.jugar= new createButton(game.width/2, game.height-30, "JUGAR",this.onOutTextStyle,
         function(){game.state.start("dungeonState")});
    },

    update: function() {

    }
}
