var CimmerianDepths = {}

CimmerianDepths.bootState = function(game) {

}

CimmerianDepths.bootState.prototype = {

    preload: function() {
        game.load.image('button', "assets/button-sprite.png");
    },

    create: function() {
        var text= "hello world";
        var style= {font: "20px Times New Roman", fill:"rgb(100,0,0)", align:"center"};

        var button =  new myButton(100, 100,style,text,'button');
    },

    update: function() {

    }
}