// Game Events Data Module
// Random events
export const randomEvents = [
    {
        type: 'treasure',
        name: 'Coffre au Trésor',
        icon: '💰',
        description: 'Vous découvrez un coffre rempli de pièces d\'or !',
        effect: (p) => {
            const gold = 30 + Math.floor(Math.random() * 150);
            p.gold += gold;
            return `Vous gagnez ${gold} pièces d\'or !`;
        },
        location: 'forest'
    },
    {
        type: 'treasure',
        name: 'Gemme Magique',
        icon: '💎',
        description: 'Une gemme magique brille dans l\'obscurité...',
        effect: (p) => {
            const xp = 30 + Math.floor(Math.random() * 90);
            p.xp += xp;
            return `Vous absorbez son énergie et gagnez ${xp} XP !`;
        },
        location: 'forest'
    },
    {
        type: 'trap',
        name: 'Piège à Pointes',
        icon: '🗡️',
        description: 'Vous déclenchez un piège caché dans les fourrés !',
        effect: (p) => {
            const baseDamage = 15 + Math.floor(Math.random() * 20);
            const damage = Math.max(1, baseDamage - p.defense);
            p.health = Math.max(1, p.health - damage);
            return `Vous perdez ${damage} HP !`;
        },
        location: 'forest'
    },
    {
        type: 'trap',
        name: 'Gaz Toxique',
        icon: '☠️',
        description: 'Une brume toxique émane des plantes de la forêt !',
        effect: (p) => {
            const baseDamage = 10 + Math.floor(Math.random() * 15);
            const damage = Math.max(1, baseDamage - Math.floor(p.constitution / 2));
            p.health = Math.max(1, p.health - damage);
            return `Vous perdez ${damage} HP à cause du poison !`;
        },
        location: 'forest'
    },
    {
        type: 'trap',
        name: 'Piège à Collet',
        icon: '🪤',
        description: 'Vous êtes pris dans un collet de chasseur !',
        effect: (p) => {
            const baseDamage = 12 + Math.floor(Math.random() * 18);
            const damage = Math.max(1, baseDamage - p.defense);
            p.health = Math.max(1, p.health - damage);
            return `Vous vous débattez et perdez ${damage} HP avant de vous libérer !`;
        },
        location: 'forest'
    },
    {
        type: 'trap',
        name: 'Racines Traîtresses',
        icon: '🌿',
        description: 'Vous trébuchez sur des racines enchevêtrées !',
        effect: (p) => {
            const baseDamage = 8 + Math.floor(Math.random() * 12);
            const damage = Math.max(1, baseDamage - p.defense);
            p.health = Math.max(1, p.health - damage);
            return `Vous tombez lourdement et perdez ${damage} HP !`;
        },
        location: 'forest'
    },
    {
        type: 'special',
        name: 'Fontaine de Guérison',
        icon: '⛲',
        description: 'Vous trouvez une fontaine aux eaux cristallines...',
        effect: (p) => {
            const healingPercent = 0.40 + Math.random() * 0.30; // 40% to 70%
            const healing = Math.floor(p.maxHealth * healingPercent);
            p.health = Math.min(p.maxHealth, p.health + healing);
            return `Vous buvez l\'eau et récupérez ${healing} HP !`;
        },
        location: 'forest'
    },
    {
        type: 'special',
        name: 'Sanctuaire Ancien',
        icon: '⛪',
        description: 'Un sanctuaire ancien vous accorde sa bénédiction...',
        effect: (p) => {
            p.health = p.maxHealth;
            p.energy = Math.min(p.maxEnergy, p.energy + 20);
            return 'Vous êtes complètement guéri et recevez 20 énergie !';
        },
        location: 'forest'
    },
    {
        type: 'mystery',
        name: 'Inscription Mystérieuse',
        icon: '📜',
        description: 'Vous découvrez une inscription ancienne sur un arbre. Elle ressemble aux symboles que les M&M ont mentionnés...',
        effect: (p) => {
            const xp = 40 + Math.floor(Math.random() * 60);
            const gold = 20 + Math.floor(Math.random() * 40);
            p.xp += xp;
            p.gold += gold;
            return `En déchiffrant l\'inscription, vous gagnez ${xp} XP et trouvez ${gold} pièces d\'or cachées !`;
        },
        location: 'forest'
    },
    {
        type: 'mystery',
        name: 'Passage Secret',
        icon: '🚪',
        description: 'Vous trouvez un passage secret marqué du symbole des M&M ! Il mène à une grotte oubliée...',
        effect: (p) => {
            const gold = 80 + Math.floor(Math.random() * 120);
            const xp = 50 + Math.floor(Math.random() * 50);
            p.gold += gold;
            p.xp += xp;
            return `Dans la grotte secrète, vous découvrez ${gold} pièces d\'or et des artefacts anciens qui vous donnent ${xp} XP !`;
        },
        location: 'forest'
    },
    {
        type: 'mystery',
        name: 'Fragment du Savoir',
        icon: '🔮',
        description: 'Vous trouvez un parchemin laissé par les M&M. Il contient des connaissances sur les anciens gardiens de Valéria...',
        effect: (p) => {
            const wisdomBonus = 1 + Math.floor(Math.random() * 2);
            const intelligenceBonus = 1 + Math.floor(Math.random() * 2);
            p.wisdom += wisdomBonus;
            p.intelligence += intelligenceBonus;
            return `Vous étudiez le parchemin avec attention. Votre sagesse augmente de ${wisdomBonus} et votre intelligence de ${intelligenceBonus} !`;
        },
        location: 'forest'
    },
    // Village events
    {
        type: 'theft',
        name: 'Pickpocket',
        icon: '👤',
        description: 'Un pickpocket vous bouscule dans la foule du village !',
        effect: (p) => {
            const stolenGold = Math.floor(20 + Math.random() * 30); // 20-50 gold
            const actualLoss = Math.min(stolenGold, p.gold);
            p.gold = Math.max(0, p.gold - actualLoss);
            return actualLoss > 0 ? `Le voleur s\'enfuit avec ${actualLoss} pièces d\'or !` : 'Heureusement, vous n\'aviez pas d\'or sur vous !';
        },
        location: 'village'
    },
    {
        type: 'theft',
        name: 'Voleur Nocturne',
        icon: '🥷',
        description: 'Un voleur essaie de vous dérober vos biens dans une ruelle sombre !',
        effect: (p) => {
            const stolenGold = Math.floor(30 + Math.random() * 50); // 30-80 gold
            const actualLoss = Math.min(stolenGold, p.gold);
            p.gold = Math.max(0, p.gold - actualLoss);
            return actualLoss > 0 ? `Le voleur s\'échappe avec ${actualLoss} pièces d\'or avant que vous ne puissiez réagir !` : 'Le voleur part bredouille, vous n\'aviez pas d\'or !';
        },
        location: 'village'
    },
    {
        type: 'theft',
        name: 'Arnaqueur',
        icon: '🎭',
        description: 'Un marchand malhonnête essaie de vous arnaquer avec de fausses potions !',
        effect: (p) => {
            const stolenGold = Math.floor(15 + Math.random() * 25); // 15-40 gold
            const actualLoss = Math.min(stolenGold, p.gold);
            p.gold = Math.max(0, p.gold - actualLoss);
            return actualLoss > 0 ? `Vous réalisez trop tard l\'arnaque et perdez ${actualLoss} pièces d\'or !` : 'Heureusement, vous n\'avez pas d\'argent pour acheter ses fausses potions !';
        },
        location: 'village'
    },
    {
        type: 'treasure',
        name: 'Récompense du Village',
        icon: '🎁',
        description: 'Le maire du village vous remercie pour votre présence et vous offre une récompense !',
        effect: (p) => {
            const gold = 40 + Math.floor(Math.random() * 60);
            p.gold += gold;
            return `Vous recevez ${gold} pièces d\'or !`;
        },
        location: 'village'
    },
    {
        type: 'special',
        name: 'Fête du Village',
        icon: '🎉',
        description: 'Vous arrivez pendant une fête villageoise ! Les habitants partagent leur nourriture et leur joie.',
        effect: (p) => {
            const healing = Math.floor(p.maxHealth * 0.30);
            p.health = Math.min(p.maxHealth, p.health + healing);
            p.energy = Math.min(p.maxEnergy, p.energy + 10);
            return `Vous récupérez ${healing} HP et 10 énergie grâce à la générosité des villageois !`;
        },
        location: 'village'
    }
];

// Riddles
export const riddles = [
    {
        question: 'Je parle sans bouche et j\'entends sans oreilles. Je n\'ai pas de corps, mais je prends vie avec le vent. Qui suis-je ?',
        answers: ['écho', 'echo', 'l\'écho', "l'écho"],
        getReward: () => ({ gold: 80 + Math.floor(Math.random() * 40), xp: 60 + Math.floor(Math.random() * 30) })
    },
    {
        question: 'Plus on m\'enlève, plus je deviens grand. Que suis-je ?',
        answers: ['trou', 'un trou', 'le trou'],
        getReward: () => ({ gold: 65 + Math.floor(Math.random() * 30), xp: 50 + Math.floor(Math.random() * 20) })
    },
    {
        question: 'Je suis toujours devant toi mais tu ne peux jamais me voir. Qui suis-je ?',
        answers: ['futur', 'avenir', 'le futur', 'l\'avenir', "l'avenir"],
        getReward: () => ({ gold: 75 + Math.floor(Math.random() * 30), xp: 60 + Math.floor(Math.random() * 20) })
    }
];

// Moral choices
export const moralChoices = [
    {
        situation: 'Un mendiant affamé vous supplie de lui donner de la nourriture. Que faites-vous ?',
        choices: [
            {
                text: 'Donner 50 pièces d\'or',
                effect: (p) => {
                    if (p.gold >= 50) {
                        p.gold -= 50;
                        const charismaBonus = 1 + Math.floor(Math.random() * 3); // 1-3 charisma
                        p.charisma += charismaBonus;
                        return `Vous aidez le mendiant. Votre charisme augmente de ${charismaBonus} ! (-50 or)`;
                    } else {
                        return 'Vous n\'avez pas assez d\'or...';
                    }
                }
            },
            {
                text: 'Ignorer et continuer',
                effect: (p) => {
                    p.charisma -= 1;
                    return 'Vous ignorez le mendiant. Votre charisme diminue de 1.';
                }
            }
        ]
    },
    {
        situation: 'Vous trouvez une bourse remplie d\'or près d\'un cadavre. Que faites-vous ?',
        choices: [
            {
                text: 'Prendre l\'or',
                effect: (p) => {
                    const goldFound = 60 + Math.floor(Math.random() * 40); // 60-100 gold
                    p.gold += goldFound;
                    p.wisdom -= 1;
                    return `Vous prenez l\'or. Vous gagnez ${goldFound} pièces d\'or mais votre sagesse diminue de 1.`;
                }
            },
            {
                text: 'Laisser l\'or et prier pour le défunt',
                effect: (p) => {
                    const wisdomBonus = 1 + Math.floor(Math.random() * 2); // 1-2 wisdom
                    const xpBonus = 40 + Math.floor(Math.random() * 30); // 40-70 XP
                    p.wisdom += wisdomBonus;
                    p.xp += xpBonus;
                    return `Vous respectez les morts. Votre sagesse augmente de ${wisdomBonus} et vous gagnez ${xpBonus} XP.`;
                }
            }
        ]
    }
];
