Canvas = new fabric.Canvas("superhero");
console.log(Canvas)

PlayerX = 100;
PlayerY = 100;

BlockWidth = 30;
BlockHeight = 30;

PlayerObject = "";
BlockObject = "";

function playerupdate()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
        PlayerObject = Img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set(
            {
                top: PlayerY,
                left: PlayerX
            }
        );

        Canvas.add(PlayerObject);
    });
}

function blockupdate(getimage)
{
    fabric.Image.fromURL(getimage, function(Img)
    {
        BlockObject = Img;
        BlockObject.scaleToWidth(BlockWidth);
        BlockObject.scaleToHeight(BlockHeight);
        BlockObject.set(
            {
                top: PlayerY,
                left: PlayerX
            }
        );

        Canvas.add(BlockObject);
    });
}
window.addEventListener("keydown", mykeys);

function mykeys(e)
{
    key=e.keyCode;

    if(key == "70")
    {
        console.log("F");
        blockupdate("hulk_face.png");
    }
    if (key == "66")
    {
        console.log("B");
        blockupdate("ironman_body.png");
    }
    if (key == "76")
    {
        console.log("L");
        blockupdate("spiderman_legs.png");
    }
    if (key == "82")
    {
        console.log("R");
        blockupdate("thor_right_hand.png");
    }

    if (key == "72")
    {
        console.log("H");
        blockupdate("captain_america_left_hand.png");
    }
    
    if (key == "37")
    {
        console.log("left");
        Left();
    }

    if (key == "38")
    {
        console.log("up");
        Up();
    }

    if (key == "39")
    {
        console.log("right")
        Right();
    }

    if (key == "40")
    {
        console.log("down");
        Down();
    }
}

function Left()
{
    if (PlayerX >= 0)
    {
        PlayerX = PlayerX - BlockWidth;
        Canvas.remove(PlayerObject);
        playerupdate();
    }
}

function Up()
{
    if (PlayerY >= 0)
    {
        PlayerY = PlayerY - BlockHeight;
        Canvas.remove(PlayerObject);
        playerupdate();
    }
}

function Right()
{
    if (PlayerX <= 850)
    {
        PlayerX = PlayerX + BlockWidth;
        Canvas.remove(PlayerObject);
        playerupdate();
    }
}

function Down()
{
    if (PlayerY <= 460)
    {
        PlayerY = PlayerY + BlockHeight;
        Canvas.remove(PlayerObject);
        playerupdate();
    }
}