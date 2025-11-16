// Dice System Module
// Responsibility: Handle all dice rolls in the game (d6-based system)
// The game uses 6-sided dice (d6) throughout, fitting the 4×6=24 level theme

/**
 * Roll a number of 6-sided dice
 * @param {number} numDice - Number of dice to roll
 * @param {number} bonus - Bonus to add to the total roll (default: 0)
 * @returns {object} - { total, rolls, bonus } where rolls is an array of individual die results
 */
export function rollDice(numDice, bonus = 0) {
    const rolls = [];
    let total = 0;
    
    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1; // 1-6
        rolls.push(roll);
        total += roll;
    }
    
    return {
        total: total + bonus,
        rolls: rolls,
        bonus: bonus,
        diceTotal: total
    };
}

/**
 * Format dice roll for display
 * @param {object} rollResult - Result from rollDice()
 * @param {string} label - Label to display (e.g., "Dégâts", "Initiative")
 * @returns {string} - Formatted string like "Initiative: 3d6 (4+5+2) +2 = 13"
 */
export function formatDiceRoll(rollResult, label = '') {
    const numDice = rollResult.rolls.length;
    const diceStr = rollResult.rolls.join('+');
    const bonusStr = rollResult.bonus >= 0 ? `+${rollResult.bonus}` : `${rollResult.bonus}`;
    
    if (label) {
        if (rollResult.bonus !== 0) {
            return `${label}: ${numDice}d6 (${diceStr}) ${bonusStr} = ${rollResult.total}`;
        } else {
            return `${label}: ${numDice}d6 (${diceStr}) = ${rollResult.total}`;
        }
    } else {
        if (rollResult.bonus !== 0) {
            return `${numDice}d6 (${diceStr}) ${bonusStr} = ${rollResult.total}`;
        } else {
            return `${numDice}d6 (${diceStr}) = ${rollResult.total}`;
        }
    }
}

/**
 * Roll for initiative in combat
 * Initiative uses 2d6 + dexterity modifier
 * @param {number} adresseModifier - Dexterity modifier
 * @returns {object} - Dice roll result
 */
export function rollInitiative(adresseModifier = 0) {
    return rollDice(2, adresseModifier);
}

/**
 * Roll for damage in combat
 * Damage varies based on character level and strength
 * @param {number} numDice - Number of damage dice (based on level/weapon)
 * @param {number} strengthModifier - Strength bonus to add
 * @returns {object} - Dice roll result
 */
export function rollDamage(numDice, strengthModifier = 0) {
    return rollDice(numDice, strengthModifier);
}

/**
 * Roll for health points
 * Used when leveling up or creating characters
 * @param {number} numDice - Number of hit dice (based on class/level)
 * @param {number} constitutionModifier - Constitution bonus
 * @returns {object} - Dice roll result
 */
export function rollHealth(numDice, constitutionModifier = 0) {
    return rollDice(numDice, constitutionModifier);
}

/**
 * Calculate number of damage dice based on player level
 * Early game: 1-2d6, Mid game: 3-4d6, Late game: 5-6d6
 * @param {number} level - Player level (1-24)
 * @returns {number} - Number of damage dice
 */
export function getDamageDiceForLevel(level) {
    if (level <= 4) return 1;       // Levels 1-4: 1d6
    if (level <= 8) return 2;       // Levels 5-8: 2d6
    if (level <= 12) return 3;      // Levels 9-12: 3d6
    if (level <= 16) return 4;      // Levels 13-16: 4d6
    if (level <= 20) return 5;      // Levels 17-20: 5d6
    return 6;                       // Levels 21-24: 6d6
}

/**
 * Calculate number of damage dice for an enemy based on their strength
 * @param {number} strength - Enemy strength value
 * @returns {number} - Number of damage dice
 */
export function getDamageDiceForEnemy(strength) {
    if (strength <= 10) return 1;   // Weak enemies: 1d6
    if (strength <= 20) return 2;   // Normal enemies: 2d6
    if (strength <= 30) return 3;   // Strong enemies: 3d6
    if (strength <= 40) return 4;   // Very strong: 4d6
    if (strength <= 50) return 5;   // Elite enemies: 5d6
    return 6;                       // Legendary: 6d6
}
