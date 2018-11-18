CimmerianDepths.dungeonState = function (game) {

}

var personaje;
var objeto;

CimmerianDepths.dungeonState.prototype = {

    preload: function () {

    },

    create: function () {
        //Límites del mundo para la cámara
        game.world.setBounds(0, 0, 2240, 2240);

        var bg = game.add.sprite(0, 0, 'bg');

        personaje = new Jugador(50, 50, 'player');
        personaje.createInputs();

        objeto = new Item(5);

        //Cámara sigue al jugador
        game.camera.follow(personaje.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    },

    update: function () {
        personaje.updateInputs();
        personaje.updateAnimations();

        checkCollisions();
    }
}

function checkCollisions(){
    if(objeto.sprite && personaje.sprite){
        if(game.physics.arcade.collide(personaje.sprite, objeto.sprite)){
            objeto.recoger(personaje);
            personaje.debug();
        }
    }
    
}