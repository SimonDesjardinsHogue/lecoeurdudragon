# 🎲 Système de Dés à 6 Faces - Le Coeur du Dragon

## Vue d'ensemble

Le Coeur du Dragon utilise un système de jeu basé sur les **dés à 6 faces (d6)**, en harmonie avec la progression du jeu en **24 niveaux (4×6=24)**. Ce document explique comment les dés fonctionnent dans le jeu et pourquoi ce système a été choisi.

## Philosophie du Design

### Pourquoi les dés à 6 faces ?

1. **Cohérence thématique**: Les 24 niveaux du jeu correspondent à 4 groupes de 6 (4×6=24), reflétant le système de dés
2. **Transparence**: Les joueurs voient exactement quels dés sont lancés et leurs résultats
3. **Prévisibilité**: Les joueurs peuvent calculer approximativement leurs chances
4. **Progression naturelle**: Plus de dés sont ajoutés à mesure que le joueur progresse
5. **Rejouabilité**: Chaque combat est unique grâce à la variabilité des dés

## Notation des Dés

- **1d6**: Un dé à 6 faces (résultat: 1-6)
- **2d6**: Deux dés à 6 faces (résultat: 2-12)
- **3d6**: Trois dés à 6 faces (résultat: 3-18)
- **Xd6+Y**: X dés à 6 faces plus un bonus de Y

### Exemples
- `2d6 (5+2) +1 = 8` signifie: lancé 2 dés qui ont donné 5 et 2, total 7, plus un bonus de +1 = 8
- `3d6 (4+3+6) +2 = 15` signifie: lancé 3 dés qui ont donné 4, 3 et 6, total 13, plus un bonus de +2 = 15

## Systèmes de Combat

### Initiative (Qui attaque en premier)

**Formule**: `2d6 + Modificateur d'Adresse`

- Les deux combattants lancent 2d6
- Le modificateur d'adresse (dextérité) s'ajoute au résultat
- Le résultat le plus élevé attaque en premier
- En cas d'égalité, le joueur attaque en premier

**Exemple**:
```
Joueur: 2d6 (5+2) +1 = 8
Ennemi: 2d6 (3+6) -1 = 8
→ Égalité ! Le joueur attaque en premier.
```

### Dégâts du Joueur

**Formule**: `Xd6 + Modificateur de Puissance - Défense de l'ennemi`

Le nombre de dés (X) dépend du niveau du joueur:

| Niveaux | Dés de Dégâts | Dégâts Moyens (sans bonus) |
|---------|---------------|----------------------------|
| 1-4     | 1d6          | 3.5                        |
| 5-8     | 2d6          | 7                          |
| 9-12    | 3d6          | 10.5                       |
| 13-16   | 4d6          | 14                         |
| 17-20   | 5d6          | 17.5                       |
| 21-24   | 6d6          | 21                         |

**Exemple (Niveau 1)**:
```
Attaque: 1d6 (6) +2 = 8
Défense ennemie: -2 (-4 modificateur)
Dégâts finaux: 8 - (-2) = 10 dégâts
```

### Dégâts des Ennemis

**Formule**: `Xd6 + Modificateur de Force - Défense du joueur`

Le nombre de dés (X) dépend de la force de l'ennemi:

| Force de l'Ennemi | Dés de Dégâts |
|-------------------|---------------|
| 1-10              | 1d6          |
| 11-20             | 2d6          |
| 21-30             | 3d6          |
| 31-40             | 4d6          |
| 41-50             | 5d6          |
| 51+               | 6d6          |

### Coups Critiques

- **Chance de base**: 10%
- **Effet**: Les dégâts sont multipliés par 1.5
- **Affichage**: `💥 COUP CRITIQUE !`

**Exemple**:
```
💥 COUP CRITIQUE !
🎲 Dégâts: 1d6 (3) +2 = 5 - -2 défense × 1.5 = 10
```

## Compétences Spéciales

Chaque classe a des compétences uniques qui utilisent également des dés:

### ⚔️ Guerrier

1. **Charge Puissante** (3d6 + modificateur de puissance ×2)
   - Dégâts massifs avec attaque brutale
   - Exemple: `3d6 (5+4+3) +4 = 16 dégâts`

2. **Coup de Bouclier** (2d6 + modificateur de puissance)
   - Dégâts modérés + défense augmentée
   - Exemple: `2d6 (4+6) +2 = 12 dégâts + 5 défense`

### 🧙 Magicien

1. **Boule de Feu** (4d6 + modificateur d'esprit ×1.5)
   - Ignore la défense de l'ennemi
   - Exemple: `4d6 (3+5+2+6) +3 = 19 dégâts magiques`

2. **Éclair Foudroyant** (5d6 + modificateur d'esprit ×2)
   - Dégâts électriques massifs, ignore la défense
   - Exemple: `5d6 (4+6+3+2+5) +4 = 24 dégâts`

3. **Lance de Glace** (4d6 + modificateur d'esprit ×1.5)
   - Dégâts glacials, ignore la défense
   - Exemple: `4d6 (2+4+5+6) +3 = 20 dégâts`

4. **Bouclier de Mana** (3d6 + modificateur d'esprit ×2)
   - Absorbe les dégâts pendant 3 tours
   - Exemple: `3d6 (5+3+4) +4 = 16 points d'absorption`

### 🏹 Archer

1. **Tir Multiple** (3 × 1d6)
   - Tire 3 flèches indépendantes
   - Exemple: 
     ```
     Flèche 1: 1d6 (4) +1 = 3 dégâts
     Flèche 2: 1d6 (6) +1 = 5 dégâts
     Flèche 3: 1d6 (2) +1 = 1 dégâts
     Total: 9 dégâts
     ```

2. **Tir Visé** (4d6 + modificateur d'adresse ×2)
   - Coup critique garanti avec précision
   - Exemple: `4d6 (3+5+6+4) +4 = 22 dégâts critiques`

### 🌀 Enchanteur

1. **Illusion Persuasive** (4d6 + modificateurs combinés)
   - Dégâts psychiques, ignore la défense
   - Exemple: `4d6 (5+2+6+3) +5 = 21 dégâts psychiques`

## Capacités Spéciales des Boss

Les boss ont des capacités uniques basées sur les dés:

### Hydre à Trois Têtes
- **Attaque Triple**: Chaque tête lance 1d6
- Exemple: `Tête 1: 1d6 (4) = 2 dégâts, Tête 2: 1d6 (6) = 4 dégâts, Tête 3: 1d6 (2) = 1 dégâts`

### Seigneur Liche
- **Drain de Vie**: 2d6+3 HP drainés et ajoutés à sa santé
- Exemple: `2d6 (5+4) +3 = 12 HP drainés`

### Démon des Flammes
- **Explosion de Feu**: 3d6 avec ignorance de 50% de la défense
- Exemple: `3d6 (6+3+5) +5 = 19 dégâts de feu`

### Le Cœur du Dragon Corrompu
- **Souffle Destructeur**: 4d6 avec bonus massif
- Exemple: `4d6 (5+6+4+6) +7 = 28 dégâts`

### Régénération (Boss Trolls)
- **Régénération**: 1d6+1 HP par tour
- Exemple: `1d6 (4) +1 = 5 HP régénérés`

## Modificateurs de Stats

Les statistiques du joueur fournissent des modificateurs basés sur leur valeur:

| Valeur de Stat | Modificateur |
|----------------|--------------|
| 2-3            | -4           |
| 4-5            | -3           |
| 6-7            | -3           |
| 8-9            | -2           |
| 10-11          | -1           |
| 12-13          | +0           |
| 14-15          | +1           |
| 16-17          | +2           |
| 18-19          | +3           |
| 20+            | +4           |

## Probabilités et Stratégie

### Moyennes par Jet
- **1d6**: Moyenne = 3.5
- **2d6**: Moyenne = 7
- **3d6**: Moyenne = 10.5
- **4d6**: Moyenne = 14
- **5d6**: Moyenne = 17.5
- **6d6**: Moyenne = 21

### Distribution des Probabilités (2d6)
- Résultat de 2: 2.8%
- Résultat de 7: 16.7% (le plus probable)
- Résultat de 12: 2.8%

### Conseils Stratégiques

1. **Améliorer les Modificateurs**: Les bonus de stats s'additionnent à chaque jet
2. **Timing des Compétences**: Les compétences spéciales utilisent plus de dés que les attaques normales
3. **Gestion de la Défense**: Améliorer la défense réduit les dégâts de chaque attaque ennemie
4. **Équipement**: Les armes et armures ajoutent des bonus fixes qui s'appliquent à tous les jets

## Affichage dans le Jeu

Les jets de dés sont affichés dans le journal de combat avec le format suivant:

```
🎲 [Nom]: XdY (résultat1+résultat2+...) +bonus = total
```

Exemples:
- `🎲 Vous : 2d6 (5+2) +1 = 8`
- `🎲 Attaque: 1d6 (6) +2 = 8 - -2 défense = 10 dégâts`
- `🎲 Boule de Feu: 4d6 (3+5+2+6) +3 = 19 dégâts magiques`

## Équilibrage du Jeu

Le système de dés a été conçu pour:

1. **Progression Graduelle**: Les joueurs gagnent des dés progressivement (pas d'augmentation brutale)
2. **Variabilité Contrôlée**: Plus de dés = moins de variance relative
3. **Montée en Puissance**: À niveau 24, les joueurs lancent 6d6 (en lien avec 4×6=24)
4. **Boss Challenges**: Les boss ont des mécaniques spéciales pour rester dangereux

## Conclusion

Le système de dés à 6 faces de "Le Coeur du Dragon" offre:

✅ Transparence totale des calculs  
✅ Cohérence avec la structure du jeu (4×6=24 niveaux)  
✅ Progression naturelle et satisfaisante  
✅ Stratégie basée sur les probabilités  
✅ Rejouabilité grâce à la variabilité  

Que les dés soient avec vous, brave aventurier ! 🎲⚔️
