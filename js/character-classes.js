// Character Classes Module

export const characterClasses = {
    guerrier: {
        name: 'Guerrier',
        icon: '⚔️',
        description: 'Un combattant robuste avec beaucoup de points de vie et une bonne classe d\'armure',
        maxHealth: 148,
        puissance: 14,    // High power (strength + endurance)
        defense: 9,
        adresse: 10,      // Average skill
        esprit: 9,        // Low spirit
        presence: 10,     // Average presence
        maxEnergy: 100
    },
    magicien: {
        name: 'Magicien',
        icon: '🧙',
        description: 'Un lanceur de sorts puissant mais fragile',
        maxHealth: 122,
        puissance: 8,     // Low power
        defense: 6,
        adresse: 10,      // Average skill
        esprit: 16,       // High spirit (intelligence + wisdom)
        presence: 12,     // Good presence
        maxEnergy: 100
    },
    archer: {
        name: 'Archer',
        icon: '🏹',
        description: 'Un combattant équilibré avec une bonne dextérité',
        maxHealth: 128,
        puissance: 12,    // Good power
        defense: 8,
        adresse: 15,      // High skill (dexterity + agility)
        esprit: 11,       // Average spirit
        presence: 10,     // Average presence
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
    player.puissance = charClass.puissance;
    player.defense = charClass.defense;
    player.adresse = charClass.adresse;
    player.esprit = charClass.esprit;
    player.presence = charClass.presence;
    player.maxEnergy = charClass.maxEnergy;
    player.energy = charClass.maxEnergy;
}
