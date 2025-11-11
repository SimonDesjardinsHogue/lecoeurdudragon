// NPC Data Module
export const npcs = [
    { 
        name: 'Sage Mystérieux',
        icon: '🧙‍♂️',
        dialogue: 'Je sens en toi un grand potentiel, jeune aventurier. Chaque combat te rendra plus fort !',
        reward: null,
        location: 'both' // Can appear in both forest and village
    },
    { 
        name: 'Forgeron',
        icon: '⚒️',
        dialogue: 'Mes armes sont les meilleures du royaume de Valéria ! Visite ma boutique si tu as de l\'or.',
        reward: null,
        location: 'village'
    },
    { 
        name: 'Prêtre',
        icon: '⛪',
        dialogue: 'Que la lumière te guide dans les ténèbres de la forêt. Tiens, prends cette bénédiction !',
        reward: { type: 'heal', amount: 30 },
        location: 'village'
    },
    { 
        name: 'Chasseur de Trésors',
        icon: '🗺️',
        dialogue: 'J\'ai trouvé quelques pièces d\'or en explorant. Tiens, prends-les, j\'en ai assez !',
        reward: { type: 'gold', amount: 25 },
        location: 'both'
    },
    { 
        name: 'Vieux Guerrier',
        icon: '🛡️',
        dialogue: 'La classe d\'armure est tout aussi importante que l\'attaque. N\'oublie jamais cela !',
        reward: null,
        location: 'village'
    },
    {
        name: 'Marchand Itinérant',
        icon: '🧙‍♂️',
        dialogue: 'Psst... J\'ai des objets rares à vendre. Intéressé ?',
        reward: null,
        special: 'wandering_merchant',
        location: 'village'
    },
    {
        name: 'Bijoutier',
        icon: '💎',
        dialogue: 'Bienvenue dans ma bijouterie ! J\'achète et vends des métaux précieux. Mes prix varient selon le marché du jour...',
        reward: null,
        special: 'jeweler',
        location: 'village'
    },
    {
        name: 'Le garçon M&M',
        icon: '🔍',
        dialogue: 'Salutations, aventurier ! Je suis le cadet des M&M. Ma sœur et moi explorons les mystères anciens de Valéria. Nous avons découvert qu\'un réseau de passages secrets traverse toute la forêt. Cherche les symboles gravés sur les arbres... ils pourraient te sauver la vie !',
        reward: { type: 'gold', amount: 50 },
        location: 'forest'
    },
    {
        name: 'La fille M&M',
        icon: '📜',
        dialogue: 'Ah, un nouveau héros ! Je suis l\'aînée des M&M. Mon frère et moi avons déchiffré d\'anciennes inscriptions. Savais-tu que le Cœur du Dragon fut autrefois divisé en trois fragments ? Les gardiens de la forêt détiennent peut-être des indices sur les autres morceaux... Tiens, prends ceci pour t\'aider.',
        reward: { type: 'gold', amount: 75 },
        location: 'forest'
    },
    {
        name: 'Ermite de la Forêt',
        icon: '🧙',
        dialogue: 'La forêt parle à ceux qui savent écouter. Je vis ici depuis des décennies et je peux sentir la magie ancienne qui t\'entoure. Prends ces herbes curatives.',
        reward: { type: 'heal', amount: 40 },
        location: 'forest'
    },
    {
        name: 'Elfe Chasseur',
        icon: '🧝',
        dialogue: 'Les créatures de la forêt sont devenues plus agressives ces derniers temps. Reste vigilant, voyageur, et évite les pièges cachés dans les fourrés.',
        reward: null,
        location: 'forest'
    },
    {
        name: 'Druide',
        icon: '🍃',
        dialogue: 'Les esprits de la nature m\'ont parlé de toi. Tu cherches le Cœur du Dragon, n\'est-ce pas ? Voici un peu de mon pouvoir pour t\'aider.',
        reward: { type: 'heal', amount: 50 },
        location: 'forest'
    },
    {
        name: 'Aubergiste',
        icon: '🍺',
        dialogue: 'Bienvenue au village, étranger ! Un bon repas et une bonne nuit de sommeil te feront du bien. Tiens, prends ce ragoût, c\'est la maison qui offre !',
        reward: { type: 'heal', amount: 35 },
        location: 'village'
    },
    {
        name: 'Garde du Village',
        icon: '💂',
        dialogue: 'Nous avons eu des problèmes avec des voleurs ces derniers temps. Fais attention à tes poches quand tu te promènes dans le village la nuit.',
        reward: null,
        location: 'village'
    },
    {
        name: 'Vieille Sage',
        icon: '👵',
        dialogue: 'J\'ai vécu bien des années et j\'ai vu beaucoup de héros passer. Tu as quelque chose de spécial en toi, jeune aventurier. Prends ces quelques pièces.',
        reward: { type: 'gold', amount: 30 },
        location: 'village'
    }
];
