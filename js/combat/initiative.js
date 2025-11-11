// Initiative Module
// Responsibility: Handle combat initiative rolls and turn order

import { gameState, getStatModifier } from '../game-state.js';
import { addCombatLog } from '../ui.js';

// Roll initiative for combat
// Returns the initiative roll (d10 + adresse modifier)
export function rollInitiative(character) {
    const d10Roll = Math.floor(Math.random() * 10) + 1; // Roll 1d10
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
    return d10Roll + dexMod;
}

// Determine who goes first in combat and display initiative results
export function determineInitiative() {
    const player = gameState.player;
    const enemy = gameState.currentEnemy;
    
    // Roll initiative for both combatants
    const playerInitiative = rollInitiative(player);
    const enemyInitiative = rollInitiative(enemy);
    
    // Store initiative results
    gameState.playerInitiative = playerInitiative;
    gameState.enemyInitiative = enemyInitiative;
    
    // Display initiative rolls
    const playerAdresseMod = getStatModifier(player.adresse);
    
    // Calculate enemy adresse for display
    let enemyAdresse = enemy.adresse;
    if (enemyAdresse === undefined) {
        if (enemy.isRanged) {
            enemyAdresse = 14;
        } else if (enemy.name.includes('Golem') || enemy.name.includes('Titan')) {
            enemyAdresse = 8;
        } else {
            enemyAdresse = 10;
        }
    }
    const enemyAdresseMod = getStatModifier(enemyAdresse);
    
    addCombatLog(`⚡ Jets d'initiative !`, 'info');
    addCombatLog(`Vous : ${playerInitiative} (Bonus DEX: ${playerAdresseMod >= 0 ? '+' : ''}${playerAdresseMod})`, 'player-damage');
    addCombatLog(`${enemy.name} : ${enemyInitiative} (Bonus DEX: ${enemyAdresseMod >= 0 ? '+' : ''}${enemyAdresseMod})`, 'damage');
    
    // Determine who goes first
    if (playerInitiative > enemyInitiative) {
        gameState.playerHasInitiative = true;
        addCombatLog(`✨ Vous agissez en premier !`, 'special');
        return true; // Player goes first
    } else if (enemyInitiative > playerInitiative) {
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
