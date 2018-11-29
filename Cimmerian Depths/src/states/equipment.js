CimmerianDepths.equipmentState = function (game) {
    //Texts
    this.recetasButton;
    this.forjadosButton;
    this.equipamientoButton;
    this.returnText;
    this.style;
}
var iconsGroup;

CimmerianDepths.equipmentState.prototype = {

    preload: function () {
    },

    create: function () {

        iconsGroup = game.add.group();


        //Backgrounds
        //Fondo
        game.add.image(0, 0, 'titleScreenBG');
        //baul
        baulBg = game.add.sprite(10, game.height * 0.4, 'BaulBg')
        //personaje
        game.add.sprite(game.width / 2, 280, 'pjBg');
        //inventarios



        //Botones
        //((tam_img + x_pannin)* (n_cols +1)) + x_offset +aesthetic
        var x_offset = ((52 + 3) * 6) + 60 + 30;

        this.style = { font: "25px Averia Sans Libre", fill: "rgb(180,200,20)", align: "center" };

        this.recetasButton= new createSpriteButton(x_offset,100, 'recipe-icon');

        this.forjadosText = new createTextButton(x_offset, 200, "Forjados", this.style);

        this.equipamientoText = new createTextButton(x_offset, 300, "Equipamiento", this.style);

        this.returnText = new createTextButton(game.width - 100, 50, "Volver", this.style,
            function () { game.state.start("playerSelectState") });




        //personaje
        personaje = new Personaje();

        //inventarios
        personaje.createRecipeInv(x_offset + 100, 100, 3, 3, 1, 5, 52);
        personaje.recipeInventory.Show();

        personaje.createForgedInv(x_offset + 100, 200, 3, 3, 1, 5, 52);
        personaje.forgedInventory.Show();

        //Cajones
        personaje.createCajonRecipes(60, game.height * 0.4 + 100, 3, 3, 4, 5, 52);
        personaje.addToCajonRecipes(0, 0, 'torch-recipe');
        personaje.cajonRecipes.Show();

        game.world.bringToTop(iconsGroup);

    },

    update: function () {

    }
}
