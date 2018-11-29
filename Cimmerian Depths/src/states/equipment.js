CimmerianDepths.equipmentState = function (game) {
    //Texts
    this.recetasButton;
    this.forjadosButton;
    this.equipmentButton;
    this.returnText;
    this.style;
}
var iconsGroup;
var popUpGroup;
CimmerianDepths.equipmentState.prototype = {

    preload: function () {
    },

    create: function () {

        iconsGroup = game.add.group();
        popUpGroup= game.add.group();

        //Backgrounds
        //Fondo
        game.add.image(0, 0, 'titleScreenBG');
        //baul
        baulBg = game.add.sprite(10, game.height * 0.4, 'BaulBg')
        tipoBaul = game.add.sprite(30, game.height*0.4 + 20, 'recipe-icon');
        tipoBaul.scale.setTo(0.8, 0.8);
        tipoBaul.alpha= 0.8;
        //personaje
        game.add.sprite(450, 280, 'pjBg');
        //inventarios



        //Botones
        //((tam_img + x_pannin)* (n_cols +1)) + x_offset +aesthetic
        var x_offset = ((52 + 3) * 6) + 60 + 30;

        this.style = { font: "25px Averia Sans Libre", fill: "rgb(180,200,20)", align: "center" };

        this.recetasButton = new createSpriteButton(x_offset, 100, 'recipe-icon');
        var recetasButtonText = "Las recetas sirven para crear\n Forjados dentro de la mazmorra.\n" +
            " son imprescindibles para llegar\n mas profundo.";
        this.recetasButton.popUp = new Popup(this.recetasButton.sprite.x - 300, this.recetasButton.sprite.y,
            'infoBg', recetasButtonText);
        this.recetasButton.popUp.sprite.scale.setTo(1, 0.5);


        this.forjadosButton = new createSpriteButton(x_offset, 200, 'forged-icon');

        var forjadosButtonText = "Podras usar los Forjados\n dentro de la mazmorra para \n" +
            "enfrentarte a enemigos\n o interactuar con el escenario.";
        this.forjadosButton.popUp = new Popup(this.forjadosButton.sprite.x - 300, this.forjadosButton.sprite.y,
            'infoBg', forjadosButtonText);
        this.forjadosButton.popUp.sprite.scale.setTo(1, 0.5);


        this.equipmentButton = new createSpriteButton(x_offset, 300, "equipment-icon");
        var equipmentButtonText = "El equipamiento afectara\n a las estadisticas del personaje, \n" +
            " lo podras encontrar\n dentro de la mazmorra.\n  NO IMPLEMENTADO";
        this.equipmentButton.popUp = new Popup(this.equipmentButton.sprite.x - 300, this.equipmentButton.sprite.y,
            'infoBg', equipmentButtonText);
        this.equipmentButton.popUp.sprite.scale.setTo(1, 0.5);

        this.returnText = new createTextButton(game.width - 100, 50, "Volver", this.style,
            function () { game.state.start("playerSelectState") });




        //personaje
        personaje = new Personaje();
        var player_sprt = game.add.sprite(450 + 48, 315, 'player');
        player_sprt.scale.setTo(3, 3);
        player_sprt.animations.add('frontWalk', [0, 1, 2, 3, 0, 4, 5, 6]);
        player_sprt.animations.play('frontWalk', 15, true);

        //inventarios
        personaje.createRecipeInv(x_offset + 50, 100, 3, 3, 1, 5, 52);
        personaje.recipeInventory.Show();

        personaje.createForgedInv(x_offset + 50, 200, 3, 3, 1, 5, 52);
        personaje.forgedInventory.Show();

        //Cajones
        personaje.createCajonRecipes(60, game.height * 0.4 + 100, 3, 3, 4, 5, 52);
        personaje.addToCajonRecipes(0, 0, 'torch-recipe');
        personaje.cajonRecipes.Show();

        game.world.bringToTop(iconsGroup);

        //Opciones
        var settings= new createSpriteButton(30,30,'ajustes');
        var help= new createSpriteButton(30, 100, 'ayuda');
        //TUTORIAL
        var text = "Lo que tienes a la derecha son\n los inventarios. Podras usar los objetos que lleves\n"+
         " en ellos dentro de la mazmorra.\nEquipa el objeto que tienes debajo\n arrastrandolo con el raton";
         var cajon_invPopup= new Popup(30,10, 'infoBg',text);
         cajon_invPopup.sprite.scale.setTo(1.25, 0.75);
        // cajon_invPopup.show();
        

    },

    update: function () {

    }
}

