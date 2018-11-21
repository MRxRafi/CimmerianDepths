CimmerianDepths.equipmentState = function(game) {
    //Texts
this.recetasText;
this.forjadosText;
this.equipamientoText;
this.returnText;
this.style;
}

CimmerianDepths.equipmentState.prototype = {

    preload: function() {
    },

    create: function() {
        game.add.image(0,0,'titleScreenBG');

        this.style= { font: "30px Averia Sans Libre", fill: "rgb(155,155,155)", align: "center" };
       
       this.recetasText= new createButton(game.width*0.33,100,"Recetas",this.style);

       this.forjadosText= new createButton(game.width*0.33,250,"Forjados",this.style);

       this.equipamientoText=new createButton(game.width*0.33,400,"Equipamiento",this.style);

       this.returnText= new createButton(game.width-100,50,"Volver",this.style,
         function(){game.state.start("playerSelectState")});

    },

    update: function() {

    }
}
