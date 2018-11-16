CimmerianDepths.dungeonState = function(game) {

}

var personaje;

CimmerianDepths.dungeonState.prototype = {

    preload: function() {
        game.load.image('bg', "/assets/debug.png");
        game.load.spritesheet('player', "/assets/pruebaPersonaje.png",30, 49, 36);
    },

    create: function() {
		  //Límites del mundo para la cámara
      game.world.setBounds(0, 0, 2240, 2240);

      var bg = game.add.sprite(0,0,'bg');

      personaje = new Jugador(50, 50, 'player');
      personaje.createInputs();

      //Cámara sigue al jugador
      game.camera.follow(personaje.sprite, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    },

    update: function() {
        personaje.updateInputs();
    }
}
