# GitHub Copilot Instructions - Le Coeur du Dragon

## Project Overview

"Le Coeur du Dragon" (The Heart of the Dragon) is an open-source, browser-based RPG game written in French, inspired by the classic Legend of the Red Dragon (LORD). It features a modular ES6 JavaScript architecture with no external dependencies.

## Core Technology Stack

- **Language**: Vanilla JavaScript (ES6+ modules)
- **Architecture**: Modular ES6 with explicit imports/exports
- **No Build Tools**: Code runs directly in modern browsers
- **No External Dependencies**: Pure vanilla JavaScript
- **Styling**: Pure CSS (no frameworks)
- **Storage**: localStorage for game saves
- **Audio**: Web Audio API

## Project Structure

```
lecoeurdudragon/
├── index.html              # Main HTML entry point
├── style.css               # Global styles
├── js/                     # JavaScript modules
│   ├── main.js            # Entry point, exports to window
│   ├── core/
│   │   └── game-state.js  # Central game state management
│   ├── data/              # Game data modules
│   │   ├── enemies.js     # Enemy definitions
│   │   ├── shop-items.js  # Shop items and equipment
│   │   ├── npcs.js        # NPCs and dialogue
│   │   └── events.js      # Random events
│   ├── game-logic.js      # Main game logic and flow
│   ├── combat.js          # Combat system
│   ├── character-classes.js # Character classes (Guerrier, Magicien, etc.)
│   ├── ui.js              # UI management and updates
│   ├── save-load.js       # Save/load system (localStorage)
│   ├── audio.js           # Audio management
│   ├── particles.js       # Visual effects
│   └── keyboard-handler.js # Keyboard shortcuts
├── server/                # Multiplayer LAN server (Node.js)
├── assets/                # Images, icons, sounds
└── docs/                  # Documentation
```

## Game Features

- **24 levels** of progression
- **4 character classes**: Guerrier, Magicien, Archer, Voleur
- **3 races**: Humain, Elfe, Nain
- **4 epic boss battles** (levels 6, 12, 18, 24)
- **Combat system** with attack, defend, flee mechanics
- **Shop system** with weapons, armor, potions, special items
- **NPC interactions** with dialogue and quests
- **Random events** for added variety
- **Multiplayer LAN mode** via WebSocket server
- **PWA support** for mobile devices
- **Save/load system** with export/import

## Code Architecture Principles

### 1. Modular Structure
- Each module has a single, clear responsibility
- Use named exports (avoid default exports)
- Explicit import/export declarations
- No circular dependencies

### 2. State Management
- Centralized game state in `game-state.js`
- Always update state before UI
- Call `saveGame()` after state changes
- Call `updateUI()` after visual changes

### 3. Module Import Chain
```
main.js → imports all modules → exposes functions to window (for onclick)
game-logic.js → imports game-state, ui, combat, etc.
combat.js → imports game-state, ui
ui.js → imports game-state
```

### 4. Naming Conventions
- **Functions**: camelCase (`startGame`, `showShop`)
- **Variables**: camelCase (`playerHealth`, `enemyStrength`)
- **Constants**: camelCase for objects/arrays, UPPER_SNAKE_CASE for primitives
- **Files**: kebab-case (`game-state.js`, `character-classes.js`)
- **French content**: All UI text, descriptions, dialogues in French

## Language Guidelines

### Code
- Variable names: English (e.g., `playerHealth`, `enemyStrength`)
- Function names: English (e.g., `startGame`, `attack`)
- Comments: French or English acceptable

### Content
- All UI text: French
- Game descriptions: French
- NPC dialogues: French
- Item names: French
- Enemy names: French
- Documentation: French (with English versions when available)

## Development Workflow

### Adding New Features
1. Identify the appropriate module(s)
2. Update `game-state.js` for new data
3. Add logic to relevant modules
4. Update UI in `ui.js` if needed
5. Export functions from `main.js` if needed for onclick
6. Test thoroughly
7. Update documentation

### Common Patterns

#### Adding an Enemy
```javascript
// In js/data/enemies.js
export const enemies = [
  {
    name: 'Nouveau Monstre',
    icon: '👾',
    health: 75,
    strength: 16,
    defense: 7,
    gold: 40,
    xp: 60
  }
];
```

#### Adding a Shop Item
```javascript
// In js/data/shop-items.js
export const shopItems = [
  {
    name: 'Nouvel Objet',
    icon: '🎁',
    description: 'Description de l\'objet',
    cost: 100,
    category: 'weapon', // or 'armor', 'heal', 'special'
    type: 'sword',
    strength: 'strong', // or 'normal', 'weak'
    effect: null // Set in initializeShopItems()
  }
];
```

#### Creating a New Screen
1. Add HTML section in `index.html`
2. Create show function in `game-logic.js`
3. Export from `main.js`

## Testing Checklist

- [ ] Game loads without console errors
- [ ] "Commencer l'Aventure" button works
- [ ] Combat system functions (attack, defend, flee)
- [ ] Shop displays and items can be purchased
- [ ] Save/load persists correctly
- [ ] Level progression works
- [ ] Boss battles trigger at correct levels
- [ ] Audio system works (no errors when muted/unmuted)
- [ ] Mobile PWA functionality
- [ ] French text displays correctly (accents, etc.)

## Custom Agents Available

This repository has specialized custom agents for different aspects of development:

- **@dragon-heart-agent**: General game development coordinator
- **@javascript-expert**: ES6 module architecture and code quality
- **@french-localization-expert**: French language content and localization
- **@game-balance-expert**: Game balance, stats, and progression
- **@documentation-writer**: Technical documentation and guides
- **@code-review-expert**: Code review and quality assurance

See `CUSTOM_AGENTS.md` for detailed information on using these agents.

## Best Practices

### Do:
✅ Keep modules focused on single responsibilities
✅ Use const/let instead of var
✅ Write French text with proper accents and grammar
✅ Test in multiple browsers (Chrome, Firefox, Safari, Edge)
✅ Call saveGame() after state changes
✅ Call updateUI() after visual changes
✅ Use meaningful variable names
✅ Add comments for complex logic

### Don't:
❌ Create circular dependencies between modules
❌ Use default exports
❌ Mix French and English in UI text
❌ Modify state without saving
❌ Update UI without updating state first
❌ Add external dependencies without discussion
❌ Remove or modify working code unnecessarily

## Performance Considerations

- Minimize DOM manipulation (batch updates)
- Use event delegation for dynamic elements
- Avoid global variables (use modules)
- Cache DOM queries when possible
- Use requestAnimationFrame for animations
- Optimize for mobile browsers

## Browser Compatibility

- **Modern browsers required**: Chrome 61+, Firefox 60+, Safari 11+, Edge 79+
- **ES6 modules** need native support
- **LocalStorage** must be available
- **Service Workers** for PWA (optional)

## Security Considerations

- Sanitize user input (especially for import save feature)
- Use localStorage safely (validate JSON)
- No eval() or innerHTML with user content
- Validate all player actions before processing

## Contributing

See `CONTRIBUTING.md` for detailed contribution guidelines.

## Documentation

- `README.md`: Project overview and setup
- `ARCHITECTURE.md`: Detailed architecture documentation
- `CONTRIBUTING.md`: Contribution guidelines
- `CUSTOM_AGENTS.md`: Custom agents usage guide
- `CHANGELOG.md`: Version history

---

**Remember**: This is a French-language RPG game with a focus on simplicity, modularity, and player enjoyment. Keep the code clean, the French authentic, and the gameplay fun!
