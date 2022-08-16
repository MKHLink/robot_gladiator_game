var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyRobots = ["Sephiroth", "Salamence", "Apple"];
var enemyHealth = 50;
var enemyAttack = 12;

function fight(enemyRobot)
{
    window.alert("Welcome to Robot Gladiators!");

    var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle?");


    if(promptFight === "fight" || promptFight ==="FIGHT")
    {
        //player turn
        enemyHealth=enemyHealth-playerAttack;
        console.log(
            playerName + " atatcked "+ enemyRobot
            +". "+enemyRobot+ " now has "+ enemyHealth+ " health remaining"
        );

        if(enemyHealth<=0)
        {
            window.alert(enemyRobot + " has died!");
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
        }
        else
        {
            window.alert(playerName+ " still has "+ playerHealth+ " health left. ");
        }
    }
    else if(promptFight==="skip" || promptFight==="SKIP")
    {
       //penalty for fight skipping
        var confirmSkip = window.confirm("Are you sure you want to skip?");

        if(confirmSkip)
        {
            window.alert(playerName + " has decided to skip fight");
            playerMoney = playerMoney - 2;
        }
        else
        {
            fight();   
        }
    }
    else
    {
        window.alert("You need to choose a valid option. Try again!");
    }

}

for(var i = 0;i< enemyRobots.length;i++)
{
    fight(enemyRobots[i]);
}


