function Item(num){

    var numero = num;
    this.sprite = game.add.sprite(500,700,'bs');

    this.recoger = function(player){
        player.objeto += numero;
        this.sprite.destroy();
        delete this;
    }

    //Activamos Physics
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.immovable = true;
}