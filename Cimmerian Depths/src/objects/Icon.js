function Icon(x,y,sprite_name)
{
    this.stored= false;
    this.initX= x;
    this.initY= y;

    this.background= game.add.sprite(x,y, 'iconBg');
    game.physics.enable(this.background, Phaser.Physics.ARCADE);
    this.background.inputEnabled= true;
    this.background.alpha= 0.6;
    this.background.anchor.x= 0.5;  this.background.anchor.y= 0.5;
    this.background.body.inmovable=true;
    this.sprite;

    if(sprite_name != undefined)
    {
        this.sprite= game.add.sprite(x,y,sprite_name);

        game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
        iconsGroup.add(this.sprite);
        this.sprite.inputEnabled= true;
        this.sprite.alpha= 0.6;
        this.sprite.input.enableDrag(true);

    
        this.sprite.anchor.x= 0.5;  this.sprite.anchor.y= 0.5;
   



  

    this.sprite.events.onInputOut.add(function()
    {
        if(this.sprite !=undefined)
        this.sprite.alpha = 0.6
    }, this);
    this.sprite.events.onInputOver.add(function()
    {
        if(this.sprite !=undefined)
        this.sprite.alpha = 1.0
    }, this);
    this.sprite.events.onDragStop.add(
        function()
        {

var whereToLook;
            if(!this.stored)
            {
                whereToLook= personaje.cajonRecipes;
            }else
                {
                    whereToLook= personaje.recipeInventory;
                }

if(!this.stored)
{
 //Miro si colisiona con algun objeto del array de recipes del personaje
 if(whereToLook)
 {
  var collision=false;
  var xPos;
  var yPos;
  for(i=0; i < whereToLook.rows; i++)
  {
      for(j=0; j < whereToLook.cols; j++)
      {
          if(game.physics.arcade.collide(this.sprite, whereToLook.icons[i][j].background))
          {
              collision=true;
              xPos=i;
              yPos=j;
          }
          
          if(collision===true)break;
      }
      if(collision===true)break;
  }
 }
  if(xPos != undefined && yPos != undefined)
  var swapped =personaje.swapRecipes(xPos, yPos, this.sprite, whereToLook);
  if(swapped) { this.switch();}
  if(this.sprite !=undefined)
  {
      this.sprite.x= this.initX;
      this.sprite.y= this.initY;
      this.sprite.alpha = 0.6;
  }
}
       

        }, this);
  
    }

this.switch= function()
{
    if(this.stored) this.stored=false;
    else this.stored=true;
}
this.clean= function()
{
    this.background.destroy();
    this.sprite.destroy();
}

this.setToInterfazCoords= function(x,y)
{
    if(this.sprite != undefined)
    {
        this.sprite.x= x;
        this.sprite.y= y;
        this.sprite.alpha = 0.6;
    }
        this.background.x= x;
        this.background.y= y;
        
}

}