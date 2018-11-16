CimmerianDepths.playerSelectState = function(game) {

}

 function changeToSelected(phaserText)
    {
        //phaserText.fontStyles= this.selectedTextStyle;
    }

    function changeToUnselected(phaserText)
    {
        phaserText.fontStyles= this.unselectedTextStyle;
    }

CimmerianDepths.playerSelectState.prototype = {

    preload: function() {
        
    },

    create: function() {
         this.unselectedTextStyle= {fill:"rgb(155,155,155)", font: "40px Impact", align:"center"};
        this.selectedTextStyle= {fill:"rgb(255,255,255)", font: "40px Impact", align:"center"};

        this.equipar= new createButton(100, game.height*0.66, "EQUIPAR", this.unselectedTextStyle,
         function(){game.state.start("equipmentState")});
         //this.equipar.setOnClick(changeToSelected(this.equipar));

         this.jugar= new createButton(game.width/2, game.height-30, "JUGAR", this.unselectedTextStyle);
        
        
        
    },

    update: function() {

    }
}
