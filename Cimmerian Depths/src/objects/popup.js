function Popup(x, y, image, t){ // 't' es el texto que va dentro del popup, 'x' e 'y' coordenadas dentro de la camara
    //La imagen seguramente sea la misma para todos los popups
    //Creamos ya el sprite que va asociado al popup que al principio no es visible
    /* APUNTE SOBRE COORDENADAS DE LA IMAGEN Y DEL TEXTO
        -Imagen: coordenadas del mundo
        -Texto: coordenadas de la ventana de juego
    */

    this.sprite = game.add.sprite(x + game.camera.x, y + game.camera.y, image);
    this.sprite.visible = false;
    this.sprite.fixedToCamera = true;
    this.textString = t;
    var text;

    var textStyle = { font: '16px Averia Sans Libre', fill:"rgb(120,120,120)"}
    that = this;

    this.show = function(){
        that.sprite.visible = true;

        var x = (that.sprite.x - game.camera.x) + 5;
        var y = (that.sprite.y - game.camera.y) + 5;

        text = game.add.text(x, y, that.textString, textStyle);
        text.fixedToCamera = true;
    }

    this.hide = function(){
        that.sprite.visible = false;
        text.fixedToCamera = false;
        text.destroy();
    }

    this.changeCoord = function(x, y){
        that.sprite.fixedToCamera = false;
        that.sprite.x = x + game.camera.x;
        that.sprite.y = y + game.camera.y;
        that.sprite.fixedToCamera = true;
        if(text) {
            text.fixedToCamera = false;
            text.x = x + 5;
            text.y = y + 5;
            text.fixedToCamera = true;
        }
    }
}