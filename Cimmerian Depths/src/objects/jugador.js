function Jugador(x, y, sprsheet){
    //Variables públicas
    this.sprite = game.add.sprite(x, y, sprsheet);

    //Variables privadas
    var leftAnimation = this.sprite.animations.add('walkLeft', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    var upAnimation = this.sprite.animations.add('walkUp', [10, 11, 12, 13, 14, 15, 16, 17, 18]);
    var downAnimation = this.sprite.animations.add('walkDown', [20, 21, 22, 23, 24, 25, 26, 27, 28]);
    var rightAnimation = this.sprite.animations.add('walkRight', [30, 31, 32, 33, 34, 35, 36, 37, 38]);

    //Creamos controles del jugador
    this.createInputs = function () {
        this.wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
    }

    this.updateInputs = function (){
        this.sprite.body.velocity.x = 0;
        this.sprite.body.velocity.y = 0;
        if (this.aKey.isDown) {
            this.sprite.body.velocity.x = -230;
        }
        if (this.dKey.isDown) {
            this.sprite.body.velocity.x = 230;
        }
        if (this.wKey.isDown) {
            //this.up = true;
            this.sprite.body.velocity.y = -230;
        }
        if (this.sKey.isDown) {
            //this.down = true;
            this.sprite.body.velocity.y = 230;
        }
    }

    //Activamos físicas arcade para el personaje
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.immovable = true;

    this.sprite.body.setSize(this.sprite.width / 2 + 10, this.sprite.height / 2, this.sprite.width / 2 - 13, this.sprite.height / 2);
}