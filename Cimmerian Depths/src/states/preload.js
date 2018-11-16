CimmerianDepths.preloadState = function(game) {

}

CimmerianDepths.preloadState.prototype = {

	ready: false,
    fontsReady: false,

    preload: function() {
        var loadingText="Loading...";
        var loadingStyle= {font:"50px Courier New", fill:"rgb(120,120,120)",boundsAlignH: "center",boundsAlignV: "middle"};
        var text = game.add.text(0,0, loadingText, loadingStyle);
        text.setTextBounds(0,0,game.world.width,game.world.height);
    	this.loadFonts();
        this.loadAssets();
        game.load.onLoadComplete.addOnce(this.loadComplete,this);
    },

    create: function() {


    },

    update: function() {
    	if (this.ready && this.fontsReady)
            game.state.start('initialScreenState');

    },
    //Comunica que se han cargado las fuentes
    fontIsReady: function() {
        console.log('Fonts Loaded');
        this.fontsReady = true;
    },
    //Comunica que se han cargado los assets
    loadComplete: function() {
        console.log('Assets Ready');
        this.ready = true;
    },
    //Carga las fuentes de google
    loadFonts: function() {
        const WebFontConfig = {
            active: this.fontIsReady.bind(this),

            google: {
                families:['Averia Sans Libre']
            }
        };
        //Script necesario para cargar las fuentes
        game.load.script('webfont',
        	"https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js",
        	() => WebFont.load(WebFontConfig));   
    },
    loadAssets: function(){
        
    }
}