// Enemy Data Module
// Enemy templates (20 types for levels 1-20)
// Note: isRanged indicates the enemy attacks from distance and needs to approach for melee
export const enemies = [
    // Early game enemies (levels 1-5)
    { name: 'Rat Géant', icon: '🐀', health: 30, strength: 7, defense: 2, gold: 14, xp: 20 },
    { name: 'Gobelin', icon: '👺', health: 50, strength: 9, defense: 4, gold: 22, xp: 32 },
    { name: 'Gobelin Archer', icon: '🏹👺', health: 45, strength: 10, defense: 3, gold: 24, xp: 34, isRanged: true },
    { name: 'Araignée Géante', icon: '🕷️', health: 55, strength: 10, defense: 5, gold: 26, xp: 36 },
    { name: 'Squelette', icon: '💀', health: 60, strength: 12, defense: 6, gold: 31, xp: 40 },
    { name: 'Squelette Archer', icon: '🏹💀', health: 55, strength: 13, defense: 5, gold: 33, xp: 42, isRanged: true },
    { name: 'Orc', icon: '👹', health: 80, strength: 15, defense: 8, gold: 44, xp: 56 },
    
    // Mid game enemies (levels 6-10)
    { name: 'Bandit', icon: '🗡️', health: 75, strength: 14, defense: 7, gold: 40, xp: 52 },
    { name: 'Bandit Arbalétrier', icon: '🎯🗡️', health: 70, strength: 16, defense: 6, gold: 42, xp: 54, isRanged: true },
    { name: 'Loup-Garou', icon: '🐺', health: 100, strength: 18, defense: 10, gold: 66, xp: 72 },
    { name: 'Zombie', icon: '🧟', health: 90, strength: 16, defense: 9, gold: 53, xp: 64 },
    { name: 'Sorcier Noir', icon: '🧙', health: 110, strength: 20, defense: 12, gold: 79, xp: 80, isRanged: true },
    { name: 'Dragon Mineur', icon: '🐉', health: 150, strength: 23, defense: 15, gold: 132, xp: 120 },
    
    // Advanced enemies (levels 11-15)
    { name: 'Golem de Pierre', icon: '🗿', health: 180, strength: 25, defense: 18, gold: 158, xp: 144 },
    { name: 'Vampire', icon: '🧛', health: 160, strength: 28, defense: 16, gold: 176, xp: 160 },
    { name: 'Élémentaire de Feu', icon: '🔥', health: 170, strength: 30, defense: 14, gold: 194, xp: 176, isRanged: true },
    { name: 'Spectre', icon: '👻', health: 150, strength: 32, defense: 12, gold: 211, xp: 192 },
    { name: 'Chevalier Noir', icon: '⚔️', health: 200, strength: 35, defense: 20, gold: 246, xp: 224 },
    { name: 'Archer Maudit', icon: '🏹👻', health: 185, strength: 34, defense: 18, gold: 236, xp: 216, isRanged: true },
    
    // Elite enemies (levels 16-20)
    { name: 'Démon Mineur', icon: '😈', health: 220, strength: 38, defense: 22, gold: 282, xp: 256 },
    { name: 'Dragon de Glace', icon: '🐲', health: 250, strength: 40, defense: 24, gold: 317, xp: 288, isRanged: true },
    { name: 'Liche Ancestrale', icon: '☠️', health: 240, strength: 42, defense: 23, gold: 352, xp: 320, isRanged: true },
    { name: 'Titan de Fer', icon: '🤖', health: 280, strength: 45, defense: 26, gold: 396, xp: 360 },
    { name: 'Tireur d\'Élite Démoniaque', icon: '🎯😈', health: 265, strength: 46, defense: 24, gold: 416, xp: 384, isRanged: true },
    { name: 'Archidémon', icon: '👿', health: 300, strength: 48, defense: 28, gold: 440, xp: 400 }
];

// Boss templates - appear every 5 levels
export const bosses = [
    { 
        name: 'Troll des Cavernes', 
        icon: '👹', 
        health: 200, 
        strength: 25, 
        defense: 15, 
        gold: 176, 
        xp: 200,
        description: 'Un troll massif avec une peau de pierre',
        ability: 'regeneration',
        abilityDescription: 'Se régénère de 4-7 HP chaque tour'
    },
    { 
        name: 'Seigneur Liche', 
        icon: '💀', 
        health: 250, 
        strength: 28, 
        defense: 18, 
        gold: 264, 
        xp: 280,
        description: 'Un sorcier mort-vivant aux pouvoirs nécromantiques',
        ability: 'life_drain',
        abilityDescription: 'Vole 15 HP et les ajoute à sa santé'
    },
    { 
        name: 'Hydre à Trois Têtes', 
        icon: '🐉', 
        health: 300, 
        strength: 33, 
        defense: 20, 
        gold: 352, 
        xp: 360,
        description: 'Une hydre féroce crachant du venin',
        ability: 'triple_attack',
        abilityDescription: 'Attaque trois fois de suite'
    },
    { 
        name: 'Démon des Flammes', 
        icon: '😈', 
        health: 350, 
        strength: 37, 
        defense: 22, 
        gold: 440, 
        xp: 440,
        description: 'Un démon entouré de flammes infernales',
        ability: 'fire_burst',
        abilityDescription: 'Inflige des dégâts de feu ignorant 50% de la défense'
    },
    { 
        name: 'Dragon Ancien', 
        icon: '🐲', 
        health: 400, 
        strength: 41, 
        defense: 25, 
        gold: 660, 
        xp: 560,
        description: 'Un dragon légendaire gardien des trésors',
        ability: 'breath_weapon',
        abilityDescription: 'Souffle de dragon infligeant des dégâts massifs'
    }
];
