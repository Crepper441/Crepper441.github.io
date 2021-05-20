const Playstation = '<ion-icon name="logo-playstation"></ion-icon>';
const Xbox ='<ion-icon name="logo-xbox"></ion-icon>'; 

let isGameRunning=true;
let field = ["e","e","e","e","e","e","e","e","e","e"];


function handleClick (fieldId)
{
    if(isGameRunning)
    {
        if(field[parseInt(fieldId)] == "e")
        {
            field[parseInt(fieldId)] = "x";
            document.getElementById(fieldId).innerHTML = Playstation;
            checkForWinner();
            setXbox();
        }
    }   
  
}

function checkForWinner()
{
    if( field [0] == "x" && field[1] == "x" && field[2] == "x" )
    {
        setWinner( "x", [0,1,2] );
        return true;
    }

    else if( field [3] == "x" && field[4] == "x" && field[5] == "x" )
    {
        setWinner( "x", [3,4,5] );
        return true;
    }

    else if( field [6] == "x" && field[7] == "x" && field[8] == "x" )
    {
        setWinner( "x", [6,7,8] );
        return true;
    }

    else if( field [0] == "x" && field[3] == "x" && field[6] == "x" )
    {
        setWinner( "x", [0,3,6] );
        return true;
    }

    else if( field [1] == "x" && field[4] == "x" && field[7] == "x" )
    {
        setWinner( "x", [1,4,7] );
        return true;
    }

    else if( field [2] == "x" && field[5] == "x" && field[8] == "x" )
    {   return true;
    }

    else if( field [0] == "x" && field[4] == "x" && field[8] == "x" )
    {
        setWinner( "x", [0,4,8] );
        return true;
    }

    else if( field [2] == "x" && field[4] == "x" && field[6] == "x" )
    {
        setWinner( "x", [2,4,6] );
        return true;
    }
     
    else if( field [0] == "o" && field[1] == "o" && field[2] == "o" )
    {
        setWinner( "o", [0,1,2] );
        return true;
    }

    else if( field [3] == "o" && field[4] == "o" && field[5] == "o" )
    {
        setWinner( "o", [3,4,5] );
        return true;
    }

    else if( field [6] == "o" && field[7] == "o" && field[8] == "o" )
    {
        setWinner( "o", [6,7,8] );
        return true;
    }

    else if( field [0] == "o" && field[3] == "o" && field[6] == "o" )
    {
        setWinner( "o", [0,3,6] );
        return true;
    }

    else if( field [1] == "o" && field[4] == "o" && field[7] == "o" )
    {
        setWinner( "0", [1,4,7] );
        return true;
    }

    else if( field [2] == "o" && field[5] == "o" && field[8] == "o" )
    {   return true;
    }

    else if( field [0] == "o" && field[4] == "o" && field[8] == "o" )
    {
        setWinner( "o", [0,4,8] );
        return true;
    }

    else if( field [2] == "o" && field[4] == "o" && field[6] == "o" )
    {
        setWinner( "o", [3,4,5] );
        return true;
    }
    else if 
    (
        field[0] != "e" &&
        field[1] != "e" &&
        field[2] != "e" &&
        field[3] != "e" &&
        field[4] != "e" &&
        field[5] != "e" &&
        field[6] != "e" &&
        field[7] != "e" &&
        field[8] != "e" 
    )
    {
        setWinner("d");
    }
}


function setXbox() 
{
    let fieldId = Math.round(Math.random() * 8);
    if(field[parseInt(fieldId)] == "e")
    {
        field[parseInt(fieldId)] = "o";
        document.getElementById(fieldId).innerHTML = Xbox;
        checkForWinner();
    }
    else 
    {
        setXbox(); 
    }
}
 
function setWinner( winner,winningLine )

{
    isGameRunning = false;

    if(winner == "x")
    {
        highlightWinner(winningLine);
        document.getElementById("status").innerHTML = "Du hast gewonnen!";
        document.getElementById("status").style.color = "red";
        document.getElementById("card").style.backgroundColor = "#66ff00";
    }
    else if(winner == "o")
    {
        highlightWinner(winningLine);
        document.getElementById("status").innerHTML = "Sie haben verloren"
        document.getElementById("card").style.backgroundColor = "red";
    }
    else
    {
        document.getElementById("status").innerHTML = "unentschieden! Versuchs nochmal";
    }
}

function highlightWinner( winningLine )
{
    document.getElementById( winningLine[0] ).style.backgroundColor = "black";
    document.getElementById( winningLine[1] ).style.backgroundColor = "black";
    document.getElementById( winningLine[2] ).style.backgroundColor = "black";
}

function reset()
{
    field = ["e","e","e","e","e","e","e","e","e","e"];

    for(let i = 0; i <= 8; i++)
    {
        document.getElementById( i ).innerHTML = "";
        document.getElementById( i ).style.backgroundColor = "white";
    }

    document.getElementById("status").innerHTML = " Lust auf Spielen?"  
    document.getElementById("status").style.color = "#lime";
        document.getElementById("card").style.backgroundColor = "black";

    isGameRunning = true;
}