function Personaje()
{
    this.recipeInventory;
    this.forgedInventory;
    this.equipmentInventory;

    this.cajonRecipes;
    this.cajonForged;
    this.cajonEquipment;

    this.maxRecipes=5;
    this.maxForged=5;
    this.maxEquipment=5;

    this.currentRecipe=0;
    this.currentForged=0;
    this.currentEquipment=0;

    this.currentCajonRecipes= 0;
    this.currentCajonForged= 0;
    this.currentCajonEquipment= 0;

    this.recipeArray=[];
    this.forgedArray=[];
    this.equipmentArray=[];

    this.cajonRecipesArray= [];
    this.cajonForgedArray= [];
    this.cajonEquipmentArray= [];

    this.addToCajonForged= function(obj_sprite)
    {
      this.cajonForgedArray[this.currentCajonForged] = obj_sprite;
      this.currentCajonForged++;
    }

this.addToRecipes= function(obj)
{
  if(this.currentRecipe < this.maxRecipes -1)
  {
    this.recipeArray[this.currentRecipe]=obj;
    this.currentRecipe ++;
  }  else return -1;
}

this.addToForged= function(obj)
{
    if(this.currentForged < this.maxForged -1)
    {
      this.forgedArray[this.currentForged]= obj;
      this.currentForged ++;
    }  else return -1;
}

this.addToEquipment= function(obj)
{
    if(this.currentEquipment < this.maxEquipment -1)
    {
      this.equipmentArray[this.currentEquipment]= obj;
      this.currentEquipment ++;
    }  else return -1;
}


this.swapRecipes= function(iPos,jPos, target_sprite, alreadyLooked)
{
var whereToLook;
if(alreadyLooked === this.cajonRecipes)
{
  whereToLook= this.recipeInventory;
}else
{
  whereToLook= this.cajonRecipes;
}

  var found=false;
 for(i=0; i< whereToLook.rows; i++)
  {
    for(j=0; j< whereToLook.cols; j++)
    {

      if(whereToLook.icons[i][j].sprite=== target_sprite)
      {
        var auxInventory= target_sprite;
        var auxCajon =  alreadyLooked.icons[iPos][jPos].sprite;

        var cajonCoordX= alreadyLooked.icons[iPos][jPos].coords[0];
        var cajonCoordY= alreadyLooked.icons[iPos][jPos].coords[1];
  
        var inventoryCoordX= whereToLook.icons[i][j].coords[0];
        var inventoryCoordY= whereToLook.icons[i][j].coords[1];
  
        whereToLook.icons[i][j].sprite=auxCajon;
        alreadyLooked.icons[iPos][jPos].sprite= auxInventory;
  
        whereToLook.icons[i][j].setToInterfazCoords(inventoryCoordX,inventoryCoordY);
        alreadyLooked.icons[iPos][jPos].setToInterfazCoords(cajonCoordX,cajonCoordY);

        found=true;
        break;
      }
    }
    if(found===true) break;
  }
  return found;
}
}