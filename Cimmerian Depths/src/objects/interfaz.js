
function Interfaz(jugador){
    var grupo; //Grupo de la interfaz que mantiene los sprites por encima
    var oscuridad;
    var healthBar;
    var barConfig;
    var anteriorVida;
    var barExp, barMana;
    var barForj, barRec;
    var invForj, invRec;
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
        barForj = game.add.sprite(game.camera.x + 210, game.camera.y + game.camera.height - 74, 'inventarioBg');
        barForj.anchor.x = 0.5; barForj.anchor.y = 0.5;
        barForj.scale.setTo(1.15, 1.15);
        barForj.alpha = 0.6;
        grupo.add(barForj);
        barForj.fixedToCamera = true;

        invForj = new Inventario(barForj.x - 125, barForj.y, 10, 10, 1, 5, 52);
        
        var forjado;
        for(var i = 0; i < invForj.cols; i++){
            if(personaje.forgedInventory.iconNamesArray[0][i] != undefined) { forjado = personaje.forgedInventory.iconNamesArray[0][i]; invForj.addItem(0,i,forjado); }
        }
        invForj.Show();
        for(var i = 0; i < invForj.cols; i++){
            grupo.add(invForj.icons[0][i].background);
            invForj.icons[0][i].background.fixedToCamera = true;
        }
        
        ////// FIN BARRA DE FORJADOS //////

        ////// BARRA DE RECETAS //////
        barRec = game.add.sprite(game.camera.width + game.camera.x - 74, game.camera.y + 270, 'inventarioBg');
        barRec.anchor.x = 0.5; barRec.anchor.y = 0.5;
        barRec.scale.setTo(1.1, 1.1);
        barRec.angle = 90;
        barRec.alpha = 0.6;
        grupo.add(barRec);
        barRec.fixedToCamera = true;

        invRec = new Inventario(barRec.x, barRec.y - 125, 10, 10, 5, 1, 52);
        
        var recipe;
        for(var i = 0; i < invRec.rows; i++){
            if(personaje.recipeInventory.iconNamesArray[0][i] != undefined) { recipe = personaje.recipeInventory.iconNamesArray[0][i]; invRec.addItem(i,0,recipe); }
        }
        invRec.Show();
        for(var i = 0; i < invRec.rows; i++){
            grupo.add(invRec.icons[i][0].background);
            invRec.icons[i][0].background.fixedToCamera = true;
        }
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
        //game.world.bringToTop(iconsGroup);
        game.world.bringToTop(grupo);
    }
}
