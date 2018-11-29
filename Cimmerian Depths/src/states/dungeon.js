CimmerianDepths.dungeonState = function (game) {

}

var jugador;
var items;
var map;
var interfaz;
var oscuridad;
var salida;
var invForj, invRec;
var forjado, recipe;
var grupo; //Grupo de la interfaz que mantiene los sprites por encima

CimmerianDepths.dungeonState.prototype = {

    preload: function () {

    },

    create: function () {
        //Límites del mundo para la cámara
        game.world.setBounds(0, 0, 2240, 2240);

        map = new Mapa();
        map.createMap();

        items = new Array();

        items[0] = new Item(5, 600, 400, "palos", 'mat_palos');
        
        salida = game.add.sprite(320,1280,'salida');
        game.physics.enable(salida, Phaser.Physics.ARCADE);
        salida.body.immovable = true;
        
        jugador = new Jugador(400, 300, 'player');
        jugador.createInputs();

        interfaz = new Interfaz(jugador);
        interfaz.create();
        
        //Cosas de la cámara
        game.camera.follow(jugador.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    },

    update: function () {
        jugador.updateInputs();
        jugador.updateAnimations();

        checkCollisions();

        for(i = 0; i < jugador.textItems.length; i++){
            if(jugador.textItems[i] === undefined) { jugador.textItems.splice(1,i); }
            jugador.textItems[i].update();
        }
        
        interfaz.update();
    }
}

function checkCollisions(){
    for(i = 0; i < items.length; i++){
        if(items[i].sprite && jugador.sprite){
            if(game.physics.arcade.collide(jugador.sprite, items[i].sprite) && jugador.space.isDown){
                jugador.pickUp(items[i]);
                //jugador.debug();
            }
        }
    }
    if(salida && jugador.sprite){
        if(game.physics.arcade.collide(jugador.sprite, salida) && jugador.space.isDown){
            game.state.start('endingState');
        }
    }

    //Colisión jugador - mapa
    game.physics.arcade.collide(jugador.sprite, map.layers[0]);
    game.physics.arcade.collide(jugador.sprite, map.layers[1]);
    
}
