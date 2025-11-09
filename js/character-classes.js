// Character Classes Module

export const characterClasses = {
    ranger: {
        name: 'Ranger',
        icon: '🏹',
        description: 'Un aventurier polyvalent maîtrisant le combat et la magie',
        maxHealth: 115,
        strength: 14,
        defense: 8,
        dexterity: 14,
        constitution: 12,
        intelligence: 12,
        wisdom: 12,
        charisma: 11,
        maxEnergy: 100
    }
};

// Apply character class to player
export function applyCharacterClass(player, classKey) {
    const charClass = characterClasses[classKey];
    if (!charClass) {
        console.error(`Unknown character class: ${classKey}`);
        return;
    }
    
    player.class = classKey;
    player.className = charClass.name;
    player.classIcon = charClass.icon;
    player.maxHealth = charClass.maxHealth;
    player.health = charClass.maxHealth;
    player.strength = charClass.strength;
    player.defense = charClass.defense;
    player.dexterity = charClass.dexterity;
    player.constitution = charClass.constitution;
    player.intelligence = charClass.intelligence;
    player.wisdom = charClass.wisdom;
    player.charisma = charClass.charisma;
    player.maxEnergy = charClass.maxEnergy;
    player.energy = charClass.maxEnergy;
}
