// Character Races Module

export const characterRaces = {
    humain: {
        name: 'Humain',
        icon: '👤',
        description: 'Polyvalent et équilibré',
        adresseMod: 0,
        puissanceMod: 0
    },
    elfe: {
        name: 'Elfe',
        icon: '🧝',
        description: 'Agile et gracieux',
        adresseMod: 2,
        puissanceMod: -2
    },
    nain: {
        name: 'Nain',
        icon: '🧔',
        description: 'Robuste et résistant',
        adresseMod: -2,
        puissanceMod: 2
    }
};

// Apply race modifiers to player
export function applyRaceModifiers(player, raceKey) {
    const race = characterRaces[raceKey];
    if (!race) {
        console.error(`Unknown character race: ${raceKey}`);
        return;
    }
    
    player.race = raceKey;
    player.raceName = race.name;
    player.raceIcon = race.icon;
    
    // Apply stat modifiers
    player.adresse += race.adresseMod;
    player.puissance += race.puissanceMod;
    
    // Puissance affects max health (each point of puissance = 5 HP, similar to constitution)
    const puissanceHealthBonus = race.puissanceMod * 5;
    player.maxHealth += puissanceHealthBonus;
    player.health = player.maxHealth;
}
