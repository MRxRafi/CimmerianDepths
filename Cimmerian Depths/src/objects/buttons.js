

function createButton(posX, posY, text, style, onClickCallback, onMouseOverCallback)
{
    this.text =game.add.text(posX, posY, text, style);
    this.text.inputEnabled= true;
    this.text.anchor.x= 0.5;      this.text.anchor.y = 0.5;

    if(onClickCallback !=null)
    this.text.events.onInputDown.add(onClickCallback,this);
    if(onMouseOverCallback !=null)
    this.text.events.onInputOver.add(onMouseOverCallback, this);

    
    this.setOnClick= function(callback)
    {
        this.text.events.onInputDown.add(callback,this);
    }
    this.setOnOver= function(callback)
    {
        this.text.events.onInputOver.add(callback, this);
    }
}