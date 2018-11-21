function Jugador(x, y, sprsheet){
    //Variables públicas
    this.sprite = game.add.sprite(x, y, sprsheet);
    this.objeto = 0;
    this.recipes= [];
    this.forjados= [];

    //Variables privadas
    var leftAnimation = this.sprite.animations.add('walkLeft', [0, 1, 2, 3, 4, 5, 6, 7, 8]);
    var upAnimation = this.sprite.animations.add('walkUp', [10, 11, 12, 13, 14, 15, 16, 17, 18]);
    var downAnimation = this.sprite.animations.add('walkDown', [20, 21, 22, 23, 24, 25, 26, 27, 28]);
    var rightAnimation = this.sprite.animations.add('walkRight', [30, 31, 32, 33, 34, 35, 36, 37, 38]);

    var up = false; /* Estas variables sirven para administrar que animación debe ir y si está o no activada */
    var down = false;/* Por defecto, todas desactivadas */
    var left = false;
    var right = false;
    this.space;
    //Creamos controles del jugador
    this.createInputs = function () {
        this.wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
       this.space= game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
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
            up = true;
            this.sprite.body.velocity.y = -230;
        }
        if (this.sKey.isDown) {
            down = true;
            this.sprite.body.velocity.y = 230;
        }

        //Activamos animaciones left o right
        if (this.aKey.isDown && !this.wKey.isDown && !this.sKey.isDown) { left = true; }
        if (this.dKey.isDown && !this.wKey.isDown && !this.sKey.isDown) { right = true; }
    }

    this.updateAnimations = function () {
        if (up) { this.sprite.animations.play('walkUp', 30, true); } else { this.sprite.animations.stop('walkUp', true); }
        if (down) { this.sprite.animations.play('walkDown', 30, true); } else { this.sprite.animations.stop('walkDown', true); }
        if (left) { this.sprite.animations.play('walkLeft', 30, true); } else { this.sprite.animations.stop('walkLeft', true); }
        if (right) { this.sprite.animations.play('walkRight', 30, true); } else { this.sprite.animations.stop('walkRight', true); }
        up = down = right = left = false; //Reiniciamos variables
    }


    this.debug = function(){ //Para debug, borrar en futuras versiones
        console.log(this.objeto);
    }


    this.pickUp= function(item)
    {
        this.objeto += item.numero;
        item.sprite.destroy();
    }


    //Activamos físicas arcade para el personaje
    game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.immovable = true;

    this.sprite.body.setSize(this.sprite.width / 2 + 10, this.sprite.height / 2, this.sprite.width / 2 - 13, this.sprite.height / 2);




}
