var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 5;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(enemyHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight == "skip" || promptFight == 'SKIP') {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is defeated!");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
            window.alert(enemyName + " still has "+ enemyHealth + " health left.");
        }
        playerHealth = playerHealth - enemyAttack;
        // check player's health
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <=0) {
            window.alert(playerName + " is defeated.");
            break;
        }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    };

for(var i=0; i<enemyNames.length; i++){
    if (playerHealth>0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        debugger;
        fight(pickedEnemyName)
    }
    else {
        window.alert("You have lost your robot battle! Game Over!");
        break;
    }
}

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

// for each robot in array
// if robot health > 0
//      fight