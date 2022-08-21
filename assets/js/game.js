var playerInfo = 
{
    name:getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset:function()
    {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() 
    {
        if (this.money >= 7) {
          window.alert("Refilling player's health by 20 for 7 dollars.");
          this.health += 20;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() 
    {
        if (this.money >= 7) {
          window.alert("Upgrading player's attack by 6 for 7 dollars.");
          this.attack += 6;
          this.money -= 7;
        } 
        else {
          window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name:"Sephiroth",
        attack:randomNumber(10,14)
    },
    {
        name: "Goku",
        attack:randomNumber(10,14)
    },
    {
        name:"meep mop",
        attack:randomNumber(10,14)
    }
];

function fight(enemy)
{
    //window.alert("Welcome to Robot Gladiators!");

   while(enemy.health>0 && playerInfo.health>0)
   {
      
    if(fightOrSkip())
    {
        break;
    }
        //player turn
        var damage = randomNumber(playerInfo.attack-3,playerInfo.attack);
        enemy.health=Math.max(0,enemy.health-damage);
        console.log(
            playerInfo.name + " atatcked "+ enemy.name
            +". "+enemy.name+ " now has "+ enemy.health+ " health remaining"
        );

        if(enemy.health<=0)
        {
            window.alert(enemy.name + " has died!");
            break;
        }
        else
        {
            window.alert(enemy.name + " still has "+enemy.health+ " health left");
        }

        //ai turn
        var damage = randomNumber(enemy.attack-3,enemy.attack);
        playerInfo.health=Math.max(0,playerInfo.health-damage);
        console.log(
            enemy.name+ " atatcked "+playerInfo.name+". "+playerInfo.name+ 
        " now has "+playerInfo.health+ " health ramianing"
        );

        if(playerInfo.health<=0)
        {
            window.alert(playerInfo.name+ " has died!");
            break;
        }
        else
        {
            window.alert(playerInfo.name+ " still has "+ playerInfo.health+ " health left. ");
        } 
   }
}

//loop that starts the game and sets default values
function startGame()
{
    playerInfo.reset();

    for(var i = 0;i< enemyInfo.length;i++)
    {
        if(playerInfo.health>0)
        {
            window.alert("Welcome to Robot Gladiators!Round: "+(i+1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);

            fight(pickedEnemyObj);

            //calls shop
            if( (i<enemyInfo.length-1) && (playerInfo.health>0) )
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
    if(playerInfo.health>0)
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
            playerInfo.refillHealth();
            break;

        case "upgrade":
        case "UPGRADE":
           playerInfo.upgradeAttack();
           break;

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

//random function
function randomNumber(min,max)
{
    var value = Math.floor(Math.random()*(max-min+1)+min);

    return value;
}

function getPlayerName()
{
    var name = "";
    while(name===""||name===null)
    {
        name=prompt("What is your robot's name?");
    }

    console.log("You robot's name is "+name);
    return name;
}

function fightOrSkip()
{
    var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle?");

    if(promptFight===""||promptFight===null)
    {
        window.alert("Please provide a valid response");
        return fightOrSkip();
    }

    promptFight = promptFight.toLocaleLowerCase();
    if(promptFight==="skip")
    {
        //penalty for fight skipping
        var confirmSkip = window.confirm("Are you sure you want to skip?");

        if(confirmSkip)
        {
            window.alert(playerInfo.name + " has decided to skip fight");
            playerInfo.money = Math.max(0,playerInfo.money - 10);
        
            return true;
        }
    }   
    return false;    
}

startGame();


