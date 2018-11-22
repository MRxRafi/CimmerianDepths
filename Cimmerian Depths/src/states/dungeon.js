CimmerianDepths.dungeonState = function (game) {

}

var jugador;
var objeto;
var map;
var interfaz;
var oscuridad;

CimmerianDepths.dungeonState.prototype = {

    preload: function () {

    },

    create: function () {
        //Límites del mundo para la cámara
        game.world.setBounds(0, 0, 2240, 2240);

        map = new Mapa();
        map.createMap();

        jugador = new Jugador(300, 300, 'player');
        jugador.createInputs();

        objeto = new Item(-10);

        interfaz = new Interfaz(jugador);
        interfaz.create();
        
        //Cosas de la cámara
        game.camera.follow(jugador.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    },

    update: function () {
        jugador.updateInputs();
        jugador.updateAnimations();

        checkCollisions();
        
        interfaz.update();
    }
}

function checkCollisions(){
    if(objeto.sprite && jugador.sprite){
        if(game.physics.arcade.collide(jugador.sprite, objeto.sprite) && jugador.space.isDown){
            jugador.pickUp(objeto);
            jugador.debug();
        }
    }

    //Colisión jugador - mapa
    game.physics.arcade.collide(jugador.sprite, map.layers[0]);
    game.physics.arcade.collide(jugador.sprite, map.layers[1]);
    
}
