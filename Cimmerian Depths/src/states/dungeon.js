CimmerianDepths.dungeonState = function (game) {

}

var personaje;
var objeto;
var map;

CimmerianDepths.dungeonState.prototype = {

    preload: function () {

    },

    create: function () {
        //Límites del mundo para la cámara
        game.world.setBounds(0, 0, 2240, 2240);

        map = new Mapa();
        map.createMap();

        personaje = new Jugador(300, 300, 'player');
        personaje.createInputs();

        objeto = new Item(5);

        //Cosas de la cámara
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
        if(game.physics.arcade.collide(personaje.sprite, objeto.sprite)&& personaje.space.isDown){
            objeto.recoger(personaje);
            personaje.debug();
        }
    }

    //Colisión jugador - mapa
    game.physics.arcade.collide(personaje.sprite, map.layers[0]);
    game.physics.arcade.collide(personaje.sprite, map.layers[1]);
    
}
