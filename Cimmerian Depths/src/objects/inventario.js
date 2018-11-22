
function Inventario(x_init, y_init, x_offset, y_offset, rows, cols, sprite_name, sprite_tam)
{
    this.rows= rows;
    this.cols= cols;
    this.icons= [];
    //Posiciones rellenas con objetos de jugador
   this.givenInventory;
   this.posTracker=0;
for(i=0; i< rows; i++)
{
    this.icons[i]= [];
}

this.Show= function()
{
    var x = x_init;
    var y = y_init;
        for(i=0; i< rows; i++)
        {
            for(j=0; j< cols; j++)
            {
                if(this.givenInventory != undefined)
                {

                    if(this.givenInventory[this.posTracker] != undefined)
                    {
                        this.icons[i][j] = new Icon(x,y,this.givenInventory[this.posTracker]);
                    }else
                    {
                        this.icons[i][j]= new Icon(x,y);
                    }

                }else
                {
                     this.icons[i][j]= new Icon(x,y);
                }
                this.icons[i][j].coords= [x,y];
                this.posTracker++;
                x += x_offset + sprite_tam;
            }
            y+= y_offset + sprite_tam;
            x= x_init;
        }
}

this.clean= function()
{
    for(i=0; i< rows; i++)
    {
        for(j=0; j< cols; j++)
        {
            this.icons[i][j].clean();
        }
    }

}

}
