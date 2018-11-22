CimmerianDepths.equipmentState = function(game) {
    //Texts
this.recetasText;
this.forjadosText;
this.equipamientoText;
this.returnText;
this.style;
}
var iconsGroup;

CimmerianDepths.equipmentState.prototype = {

    preload: function() {
    },

    create: function() {

        iconsGroup=game.add.group();
        //iconsGroup.enableBody = true;
        //iconsGroup.physicsBodyType = Phaser.Physics.ARCADE;


     //Backgrounds
            //Fondo
            game.add.image(0,0,'titleScreenBG');
            //baul
            baulBg= game.add.sprite(10, game.height*0.4, 'BaulBg')
            //personaje
            game.add.sprite(game.width/2, 280, 'pjBg');
            //inventarios
 
        //Botones
        //((tam_img + x_pannin)* (n_cols +1)) + x_offset +aesthetic
        var x_offset= ((52 + 3) * 6) + 60 + 30;

       this.style= { font: "25px Averia Sans Libre", fill: "rgb(155,155,155)", align: "center" };
       
       this.recetasText= new createButton(x_offset,100,"Recetas",this.style);

       this.forjadosText= new createButton(x_offset,200,"Forjados",this.style);

       this.equipamientoText=new createButton(x_offset,300,"Equipamiento",this.style);

       this.returnText= new createButton(game.width-100,50,"Volver",this.style,
         function(){game.state.start("playerSelectState")});




        //personaje e inventarios
        
        personaje= new Personaje();
   


        personaje.recipeInventory= new Inventario(x_offset+100, 100, 3, 3, 1, 5, 'iconBg', 52);
        personaje.recipeInventory.Show();

        personaje.forgedInventory= new Inventario(x_offset+100, 200, 3, 3, 1, 5, 'iconBg', 52);
        personaje.forgedInventory.Show();

        //Cajon Recetas (o de lo que sea)
 
        personaje.cajonRecipes= new Inventario(60, game.height*0.4+100, 3, 3, 4, 5, 'iconBg', 52);
        personaje.addToCajonForged('antorcha');
        personaje.cajonRecipes.givenInventory= personaje.cajonForgedArray;
        personaje.cajonRecipes.Show();

        game.world.bringToTop(iconsGroup);

    },

    update: function() {

    }
}
