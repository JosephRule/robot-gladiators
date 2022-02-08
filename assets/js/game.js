var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");

    promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight == "fight" || promptFight == 'FIGHT') {

        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " is defeated!");
        }
        else {
            window.alert(enemyName + " still has "+ enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        // check player's health
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <=0) {
            window.alert(playerName + " is defeated.");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight == "skip" || promptFight == 'SKIP') {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again.")
    }
};

for(var i=0; i<enemyNames.length; i++){
    fight(enemyNames[i]);
}

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots

// for each robot in array
// if robot health > 0
//      fight