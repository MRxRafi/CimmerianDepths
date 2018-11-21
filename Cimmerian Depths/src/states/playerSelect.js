CimmerianDepths.playerSelectState = function(game) {
    this.equipar;
    this.jugar;
    this.onOverTextStyle;
    this.onOutTextStyle;
}

    function changeToSelected(phaserText)
    {
        phaserText.fontStyles= this.selectedTextStyle;
        alert("hello");
    }

    function changeToUnselected(phaserText)
    {
        phaserText.fontStyles= this.unselectedTextStyle;
    }


CimmerianDepths.playerSelectState.prototype = {

    preload: function() {
        
    },

    create: function() {

        this.onOverTextStyle= {fill:"rgb(255,255,255)", font: "40px Impact", align:"center"};
        this.onOutTextStyle= {fill:"rgb(155,155,155)", font: "40px Impact", align:"center"};
 

        this.equipar= new createButton(100, game.height*0.66, "EQUIPAR",this.onOverTextStyle, this.onOutTextStyle,
         function(){game.state.start("equipmentState")});
        
        this.jugar= new createButton(game.width/2, game.height-30, "JUGAR",this.onOverTextStyle, this.onOutTextStyle,
         function(){game.state.start("dungeonState")});

    },

    update: function() {

    }
}
