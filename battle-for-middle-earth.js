const combatants = {
    hobbits: 1,
    orcs: 1,
    men: 2,
    wargs: 2,
    goblins: 2,
    elves: 3,
    dwarves: 3,
    urukHai: 3,
    eagles: 4,
    trolls: 5,
    wizards: 10
}

let goodCombatantsArray
let evilCombatantsArray

let goodWorth
let evilWorth


function returnWinnerGoodvsEvil(goodCombatantsString, evilCombatantsString) {

    declareGoodCombatants(goodCombatantsString)
    declareEvilCombatants(evilCombatantsString)

    if (goodWorth > evilWorth) {
        console.log('\nBattle Result: Good triumphs over evil. Middle Earth is saved!\n')
    } else if (goodWorth < evilWorth) {
        console.log('\nBattle Result: Evil eradicates all trace of Good. This loss spells doom for Middle Earth...\n')
    } else if (goodWorth === evilWorth) {
        console.log('\nBattle Result: There were many deaths, but no victor on this day.\n')
    }

}

function declareGoodCombatants(goodCombatantsString) {
    goodCombatantsArray = goodCombatantsString.split(" ").map(combatantsWorth => parseFloat(combatantsWorth))
    calculateGoodWorth()
}

function declareEvilCombatants(evilCombatantsString) {
    evilCombatantsArray = evilCombatantsString.split(" ").map(combatantsWorth => parseFloat(combatantsWorth))
    calculateEvilWorth()
}

function calculateGoodWorth() {
    goodWorth =
        (goodCombatantsArray[0] * combatants.hobbits) +
        (goodCombatantsArray[1] * combatants.men) +
        (goodCombatantsArray[2] * combatants.elves) +
        (goodCombatantsArray[3] * combatants.dwarves) +
        (goodCombatantsArray[4] * combatants.eagles) +
        (goodCombatantsArray[5] * combatants.wizards);
}

function calculateEvilWorth() {
    evilWorth =
        (evilCombatantsArray[0] * combatants.orcs) +
        (evilCombatantsArray[1] * combatants.men) +
        (evilCombatantsArray[2] * combatants.wargs) +
        (evilCombatantsArray[3] * combatants.goblins) +
        (evilCombatantsArray[4] * combatants.urukHai) +
        (evilCombatantsArray[5] * combatants.trolls) +
        (evilCombatantsArray[6] * combatants.wizards)
}

returnWinnerGoodvsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
returnWinnerGoodvsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
returnWinnerGoodvsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')