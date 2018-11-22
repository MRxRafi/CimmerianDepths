function Item(num){

    this.numero = num;
    this.sprite = game.add.sprite(500,700,'bs');

    //Activamos Physics
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.immovable = true;
}
