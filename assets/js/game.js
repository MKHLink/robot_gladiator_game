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
        }
        else
        {
            window.alert("You have lost your robor!Game Over!");
            break;
        }
    }

    endGame();
}

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



startGame();


