
function Interfaz(jugador){
    var grupo; //Grupo de la interfaz que mantiene los sprites por encima
    var healthBar;
    var barConfig;
    var anteriorVida;
    var barExp, barMana;
    var bufos = new Array();

    this.create = function(){
        grupo = game.add.group();

        ////// BARRA DE VIDA //////
        barConfig = {width: 200, height: 20, x: game.camera.x + 120, y: game.camera.y + 20,
                     bg: {color: 'red'}, bar: {color: 'green'}};
        healthBar = new HealthBar(game, barConfig);
        healthBar.setToGroup(grupo);
        healthBar.setFixedToCamera(true);
        anteriorVida = 100;
        ////// FIN BARRA DE VIDA //////

        ////// BARRA DE EXP + MANA ////// --> En esta versión, deshabilitadas
        barExp = game.add.sprite(game.camera.x + 20, game.camera.y + 34, 'exp');
        barMana = game.add.sprite(game.camera.x + 20, game.camera.y + 56, 'exp');
        grupo.add(barExp);
        grupo.add(barMana);
        barExp.fixedToCamera = true;
        barMana.fixedToCamera = true;
        ////// FIN BARRA DE EXP + MANA //////

        ////// BUFOS //////
        bufos[0] = game.add.sprite(game.camera.x + 20, game.camera.y + 78, 'bufo');
        bufos[1] = game.add.sprite(game.camera.x + 60, game.camera.y + 78, 'bufo');
        bufos[2] = game.add.sprite(game.camera.x + 100, game.camera.y + 78, 'bufo');
        for(var i = 0; i < 3; i++){
            grupo.add(bufos[i]);
            bufos[i].fixedToCamera = true;
        }
        ////// FIN BUFOS //////

        ////// BARRA DE FORJADOS //////
        ////// FIN BARRA DE FORJADOS //////

        ////// BARRA DE RECETAS //////
        ////// FIN BARRA DE RECETAS //////

        ////// ESTADÍSTICAS //////
        ////// FIN ESTADÍSTICAS //////

        ////// PISO //////
        text = "PISO -1";
        style = { font: "50px Averia Sans Libre", fill: "#3e3e3e", align: "left" };
        piso = game.add.text(0, 0, text, style);
        piso.alpha = 0.6;
        piso.fixedToCamera = true;
        piso.cameraOffset.setTo(game.camera.width - 180, 20);
        grupo.add(piso);
        ////// FIN PISO //////
    }

    this.update = function(){
        if(anteriorVida != jugador.vida){
            healthBar.setPercent((jugador.vida * 100)/jugador.maxVida);
            anteriorVida = jugador.vida;
        }
        game.world.bringToTop(grupo);
    }
}