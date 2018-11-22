
function Interfaz(jugador){
    var grupo; //Grupo de la interfaz que mantiene los sprites por encima
    var oscuridad;
    var healthBar;
    var barConfig;
    var anteriorVida;
    var barExp, barMana;
    var mochila;
    var bufos = new Array();
    var texto_estadisticas = new Array();
    var estadisticas = new Array();

    this.create = function(){
        grupo = game.add.group();

        ////////////CAMPO DE VISION///////////////
        oscuridad = game.add.sprite(0, 0, 'oscuridad_antorcha');
        oscuridad.animations.add('anim', [0,1,2,3]);
        oscuridad.animations.play('anim', 6, true);
        oscuridad.anchor.setTo(0.5);
        grupo.add(oscuridad);
        //////////FIN CAMPO DE VISION/////////////

        ////// MOCHILA //////
        mochila = game.add.sprite(0, 0, 'mochila');
        mochila.scale.setTo(0.25,0.25);
        grupo.add(mochila);
        mochila.fixedToCamera = true;
        mochila.cameraOffset.setTo(5, 5);

        ////// FIN MOCHILA //////

        ////// BARRA DE VIDA //////
        barConfig = {width: 200, height: 20, x: game.camera.x + 220, y: game.camera.y + 20,
                     bg: {color: 'red'}, bar: {color: 'green'}};
        healthBar = new HealthBar(game, barConfig);
        healthBar.setToGroup(grupo);
        healthBar.setFixedToCamera(true);
        anteriorVida = 100;
        ////// FIN BARRA DE VIDA //////

        ////// BARRA DE EXP + MANA ////// --> En esta versión, deshabilitadas
        barExp = game.add.sprite(game.camera.x + 120, game.camera.y + 34, 'exp');
        barMana = game.add.sprite(game.camera.x + 120, game.camera.y + 56, 'exp');
        grupo.add(barExp);
        grupo.add(barMana);
        barExp.fixedToCamera = true;
        barMana.fixedToCamera = true;
        ////// FIN BARRA DE EXP + MANA //////

        ////// BUFOS //////
        bufos[0] = game.add.sprite(game.camera.x + 120, game.camera.y + 78, 'bufo');
        bufos[1] = game.add.sprite(game.camera.x + 160, game.camera.y + 78, 'bufo');
        bufos[2] = game.add.sprite(game.camera.x + 200, game.camera.y + 78, 'bufo');
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
        style = { font: "25px Averia Sans Libre", fill: "#a8a8a8", align: "left" };
        texto_estadisticas[0] = "Fuerza: 5";
        texto_estadisticas[1] = "Inteligencia: 5";
        texto_estadisticas[2] = "Def. Física: 7";
        texto_estadisticas[3] = "Def. Mágica: 9";
        texto_estadisticas[4] = "Velocidad: 15";
        
        for(var i = 0; i < 5; i++){
            estadisticas[i] = game.add.text(0, 0, texto_estadisticas[i], style);
            estadisticas[i].alpha = 0.7;
            estadisticas[i].fixedToCamera = true;
            switch(i){
                case 0:
                estadisticas[i].cameraOffset.setTo(10, 200);
                break;

                case 1:
                estadisticas[i].cameraOffset.setTo(10, 240);
                break;

                case 2:
                estadisticas[i].cameraOffset.setTo(10, 280);
                break;

                case 3:
                estadisticas[i].cameraOffset.setTo(10, 320);
                break;

                case 4:
                estadisticas[i].cameraOffset.setTo(10, 360);
                break;
            }
            grupo.add(estadisticas[i]);
        }
        ////// FIN ESTADÍSTICAS //////

        ////// PISO //////
        text = "PISO -1";
        style = { font: "50px Averia Sans Libre", fill: "#7a7a7a", align: "left" };
        piso = game.add.text(0, 0, text, style);
        piso.alpha = 0.7;
        piso.fixedToCamera = true;
        piso.cameraOffset.setTo(game.camera.width - 180, 20);
        grupo.add(piso);
        ////// FIN PISO //////
    }

    this.update = function(){
        oscuridad.x = jugador.sprite.x + (jugador.sprite.width/2);
        oscuridad.y = jugador.sprite.y + (jugador.sprite.height/2);

        if(anteriorVida != jugador.vida){
            healthBar.setPercent((jugador.vida * 100)/jugador.maxVida);
            anteriorVida = jugador.vida;
        }
        game.world.bringToTop(grupo);
    }
}