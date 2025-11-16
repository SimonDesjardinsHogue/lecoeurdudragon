// Initiative Module
// Responsibility: Handle combat initiative rolls and turn order

import { gameState, getStatModifier } from '../game-state.js';
import { addCombatLog } from '../ui.js';
import { rollInitiative as rollInitiativeDice, formatDiceRoll } from '../dice.js';

// Roll initiative for combat
// Returns the initiative roll result object (2d6 + adresse modifier)
export function rollInitiative(character) {
    // Use character's adresse if available, otherwise estimate based on enemy type
    let adresse = character.adresse;
    if (adresse === undefined && character.name) {
        // Enemies don't have explicit adresse, estimate based on type
        // Ranged enemies get bonus adresse, heavy enemies get penalty
        if (character.isRanged) {
            adresse = 14; // Ranged enemies are more agile
        } else if (character.name.includes('Golem') || character.name.includes('Titan')) {
            adresse = 8; // Heavy enemies are slower
        } else {
            adresse = 10; // Default adresse for enemies
        }
    } else if (adresse === undefined) {
        adresse = 10; // Fallback default
    }
    const dexMod = getStatModifier(adresse);
    
    // Roll 2d6 + dexterity modifier for initiative
    const rollResult = rollInitiativeDice(dexMod);
    
    // Store the roll details for display
    rollResult.adresse = adresse;
    rollResult.modifier = dexMod;
    
    return rollResult;
}

// Determine who goes first in combat and display initiative results
export function determineInitiative() {
    const player = gameState.player;
    const enemy = gameState.currentEnemy;
    
    // Roll initiative for both combatants
    const playerInitiativeRoll = rollInitiative(player);
    const enemyInitiativeRoll = rollInitiative(enemy);
    
    // Store initiative results (store the total for compatibility)
    gameState.playerInitiative = playerInitiativeRoll.total;
    gameState.enemyInitiative = enemyInitiativeRoll.total;
    
    // Store full roll details for potential future use
    gameState.playerInitiativeRoll = playerInitiativeRoll;
    gameState.enemyInitiativeRoll = enemyInitiativeRoll;
    
    // Display initiative rolls with dice details
    addCombatLog(`⚡ Jets d'initiative !`, 'info');
    addCombatLog(`🎲 Vous : ${formatDiceRoll(playerInitiativeRoll)}`, 'player-damage');
    addCombatLog(`🎲 ${enemy.name} : ${formatDiceRoll(enemyInitiativeRoll)}`, 'damage');
    
    // Determine who goes first
    if (playerInitiativeRoll.total > enemyInitiativeRoll.total) {
        gameState.playerHasInitiative = true;
        addCombatLog(`✨ Vous agissez en premier !`, 'special');
        return true; // Player goes first
    } else if (enemyInitiativeRoll.total > playerInitiativeRoll.total) {
        gameState.playerHasInitiative = false;
        addCombatLog(`⚠️ ${enemy.name} agit en premier !`, 'damage');
        return false; // Enemy goes first
    } else {
        // Tie - player wins
        gameState.playerHasInitiative = true;
        addCombatLog(`⚖️ Égalité ! Vous agissez en premier par défaut.`, 'special');
        return true; // Player goes first on tie
    }
}
