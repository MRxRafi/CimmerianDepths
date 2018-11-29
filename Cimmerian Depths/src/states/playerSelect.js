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
        var style= {fill:"rgb(180,200,20)", font: "30px Averia Sans Libre", align:"center"};

        game.add.image(0,0,'titleScreenBG');
        //jugar bg
       var jugar=  game.add.image(game.width/2, game.height-50, 'botonJugar');
        jugar.anchor.x= 0.5; jugar.anchor.y= 0.5;

        //equipar bg
        var equipar= game.add.image(game.width*0.15, game.height*0.66,'botonJugar');
        equipar.anchor.x= 0.5; equipar.anchor.y= 0.5;

        //pj background
         var pjbg=game.add.image(game.width/2, game.height*0.5,'pjBg');
         pjbg.anchor.x= 0.5; pjbg.anchor.y= 0.5;

         //pj level
         var lvl= game.add.text(game.width/2, game.height* 0.73, 'Nivel: 1', style);
         lvl.anchor.x= 0.5; lvl.anchor.y= 0.5;
        //player anim
       var player_sprt= game.add.sprite(game.width/2,game.height*0.5,'player');
       player_sprt.scale.setTo(3,3);
       player_sprt.anchor.x= 0.5;   player_sprt.anchor.y= 0.5;
       player_sprt.animations.add('frontWalk',[0,1,2,3,0,4,5,6]);
       player_sprt.animations.play('frontWalk', 15, true);
       //equipar icono
       var equip_icon=game.add.sprite(game.width*0.15,game.height*0.45,'mochila');
       equip_icon.scale.setTo(0.5, 0.5);
       equip_icon.anchor.x= 0.5;   equip_icon.anchor.y= 0.5;


        //stats background
        var stats_bg= game.add.image(game.width* 0.80, game.height* 0.5, 'statsBg');
        stats_bg.anchor.x= 0.5;   stats_bg.anchor.y= 0.5;

        var texto_estadisticas=[];
        texto_estadisticas[0]= "Vida: 100";
        texto_estadisticas[1]= "Mana: 50";
        texto_estadisticas[2] = "Fuerza: 5";
        texto_estadisticas[3] = "Inteligencia: 5";
        texto_estadisticas[4] = "Def. Física: 7";
        texto_estadisticas[5] = "Def. Mágica: 9";
        texto_estadisticas[6] = "Velocidad: 15";

        var x= game.width * 0.7+ 20;
        var y= game.height* 0.3 +20;
        var y_paddin= 30;
        for(i=0; i< texto_estadisticas.length; i++)
        {
           var txt= game.add.text(x,y,texto_estadisticas[i],style);
            y += y_paddin;
        }

        this.settingsButton = game.add.sprite(30,30,'ajustes');
        this.settingsButton.alpha = 0.3;
        
        this.onOverTextStyle= {fill:"rgb(255,255,255)", font: "40px Averia Sans Libre", align:"center"};
        this.onOutTextStyle= {fill:"rgb(180,200,20)", font: "40px Averia Sans Libre", align:"center"};
 

        this.equipar= new createTextButton(game.width*0.15, game.height*0.66, "EQUIPAR", this.onOutTextStyle,
        function(){game.state.start("equipmentState")});
        
         this.jugar= new createTextButton(game.width/2, game.height-50, "JUGAR",this.onOutTextStyle,
         function(){game.state.start("dungeonState")});
    },

    update: function() {

    }
}
