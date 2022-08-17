var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyRobots = ["Sephiroth", "Salamence", "Apple"];
var enemyHealth = 50;
var enemyAttack = 12;

function fight(enemyRobot)
{
    //window.alert("Welcome to Robot Gladiators!");

   while(enemyHealth>0 && playerHealth>0)
   {
     var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle?");

        if(promptFight==="skip" || promptFight==="SKIP")
        {
            //penalty for fight skipping
            var confirmSkip = window.confirm("Are you sure you want to skip?");

            if(confirmSkip)
            {
                window.alert(playerName + " has decided to skip fight");
                playerMoney = playerMoney - 10;
            
                console.log(" Player Money: "+playerMoney);
                break;
            }
        }         
    
        //player turn
        enemyHealth=enemyHealth-playerAttack;
        console.log(
            playerName + " atatcked "+ enemyRobot
            +". "+enemyRobot+ " now has "+ enemyHealth+ " health remaining"
        );

        if(enemyHealth<=0)
        {
            window.alert(enemyRobot + " has died!");
            break;
        }
        else
        {
            window.alert(enemyRobot + " still has "+enemyHealth+ " health left");
        }

        //ai turn
        playerHealth=playerHealth-enemyAttack;
        console.log(
            enemyRobot+ " atatcked "+playerName+". "+playerName+ 
        " now has "+playerHealth+ " health ramianing"
        );

        if(playerHealth<=0)
        {
            window.alert(playerName+ " has died!");
            break;
        }
        else
        {
            window.alert(playerName+ " still has "+ playerHealth+ " health left. ");
        } 
   }
}

//loop that starts the game and sets default values
function startGame()
{
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;

    for(var i = 0;i< enemyRobots.length;i++)
    {
        if(playerHealth>0)
        {
            window.alert("Welcome to Robot Gladiators!Round: "+(i+1));
            var pickedEnemyName = enemyRobots[i];
            enemyHealth = 50;

            fight(pickedEnemyName);

            //calls shop
            if( (i<enemyRobots.length-1) && (playerHealth>0) )
            {
                var shopConfirm = window.confirm("Would you like to enter the shop?");

                if(shopConfirm)
                {
                    shop();
                }
            }
        }
        else
        {
            window.alert("You have lost your robor!Game Over!");
            break;
        }
    }

    endGame();
}

//loop that asks the player of they want to replay
function endGame()
{   
    if(playerHealth>0)
    {
        window.alert("Great job you have survived the games! Here is your stats:");
    }
    else
    {
        window.alert("You lose!");
    }

    var playAgain = window.confirm("Would you like to replay?");

    if(playAgain)
    {
        startGame();
    }
    else
    {
        window.alert("Exiting game");
    }
}

//shop function

function shop()
{
    var shopPrompt = window.prompt("Enter REFILL for health, UPGRADE for attack boost or LEAVE to exit shop");

    switch(shopPrompt)
    {
        case "refill":
        case "REFILL":
            if(playerMoney>=7)
            {
                window.alert("Refilling health by 20 for 7 gils");

                playerHealth = playerHealth+20;
                playerMoney = playerMoney-7;
                break;
            }
            else
            {
                window.alert("Not enough gils");
            }

        case "upgrade":
        case "UPGRADE":
            if(playerMoney>=7)
            {
                window.alert("Upgrading attack by 6 for 7 gils");
                playerAttack = playerAttack+6;
                playerMoney = playerMoney-7;
                break;
            }
            else
            {
                window.alert("Not enough gils");
            }

        case "leave":
        case "LEAVE":
            window.alert("Left the shop");

            break;

        default:
            window.alert("Please pick an option");
            shop();
            break;
    }
}



startGame();


