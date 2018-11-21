function createButton(posX, posY, text, style, onClickCallback)
{
    this.text =game.add.text(posX, posY, text, style);
    this.text.inputEnabled= true;
    this.text.anchor.x= 0.5;      this.text.anchor.y = 0.5;

    if(onClickCallback !=undefined)
    this.text.events.onInputDown.add(onClickCallback,this);


    this.setOnClick= function(callback)
    {
        this.text.events.onInputDown.add(callback,this);
    }

    
    this.text.events.onInputOver.add(function()
    {
        this.text.fill= "rgb(255,255,255)";

    }, this);

    this.text.events.onInputOut.add(function()
    {

        this.text.fill= "rgb(155,155,155)";
    },this);
}
