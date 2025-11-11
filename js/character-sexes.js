// Character Sexes Module
// Provides base stats for male and female characters

export const characterSexes = {
    male: {
        name: 'Masculin',
        icon: '♂️',
        puissance: 14,     // PUI (average of old FOR 15 + CON 13)
        adresse: 16,       // ADR (from old DEX)
        esprit: 14,        // ESP (average of old INT 18 + SAG 10)
        presence: 11       // PRE (from old CHA)
    },
    female: {
        name: 'Féminin',
        icon: '♀️',
        puissance: 13,     // PUI (average of old FOR 14 + CON 13)
        adresse: 16,       // ADR (from old DEX)
        esprit: 14,        // ESP (average of old INT 18 + SAG 10)
        presence: 12       // PRE (from old CHA)
    }
};

// Apply sex-based base stats to player
// This should be called BEFORE applying class and race modifiers
export function applySexBaseStats(player, sexKey) {
    const sex = characterSexes[sexKey];
    if (!sex) {
        console.error(`Unknown character sex: ${sexKey}`);
        return;
    }
    
    // Set base stats from sex
    player.puissance = sex.puissance;
    player.adresse = sex.adresse;
    player.esprit = sex.esprit;
    player.presence = sex.presence;
}
