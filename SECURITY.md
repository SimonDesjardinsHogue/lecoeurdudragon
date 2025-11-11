# Politique de Sécurité

## Versions Supportées

Nous nous engageons à maintenir la sécurité de notre jeu. Voici les versions actuellement supportées avec des mises à jour de sécurité :

| Version | Supportée          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Signaler une Vulnérabilité

Nous prenons la sécurité très au sérieux. Si vous découvrez une vulnérabilité de sécurité dans Le Coeur du Dragon, merci de nous en informer de manière responsable.

### Comment Signaler

**NE PAS** créer une issue publique sur GitHub pour les vulnérabilités de sécurité.

À la place, veuillez :

1. **Créer une Security Advisory** sur GitHub :
   - Allez sur l'onglet "Security" du dépôt
   - Cliquez sur "Report a vulnerability"
   - Remplissez le formulaire avec les détails de la vulnérabilité

2. **Ou envoyer un email privé** aux mainteneurs du projet via la page GitHub

### Informations à Inclure

Pour nous aider à comprendre et résoudre le problème rapidement, veuillez inclure :

- Une description détaillée de la vulnérabilité
- Les étapes pour reproduire le problème
- Les versions affectées
- L'impact potentiel
- Des suggestions de correction (si vous en avez)

### Processus de Réponse

- Nous accuserons réception de votre rapport dans les **48 heures**
- Nous vous tiendrons informé de nos progrès
- Nous travaillerons sur un correctif dès que possible
- Nous publierons une mise à jour de sécurité et créditerons votre découverte (si vous le souhaitez)

### Politique de Divulgation

- Nous demandons que vous nous donniez un délai raisonnable pour corriger la vulnérabilité avant toute divulgation publique
- Nous nous engageons à publier un correctif dans les 90 jours suivant le signalement initial
- Nous reconnaîtrons publiquement votre contribution responsable (sauf si vous préférez rester anonyme)

## Bonnes Pratiques de Sécurité

Si vous hébergez ce jeu sur votre propre serveur, nous recommandons :

### Pour le Jeu Principal
- Utilisez HTTPS pour servir le jeu
- Gardez tous les fichiers à jour avec les dernières versions
- Ne modifiez pas les fichiers de sécurité (CSP, CORS)
- Validez toujours les données côté serveur si vous ajoutez des fonctionnalités backend

### Pour le Serveur Multijoueur
- Utilisez des variables d'environnement pour les secrets (jamais dans le code)
- Limitez les connexions réseau au LAN si possible
- Utilisez un reverse proxy (nginx, Apache) en production
- Activez les logs pour surveiller les activités suspectes
- Gardez Node.js et les dépendances npm à jour

### Pour les Joueurs
- Téléchargez le jeu uniquement depuis des sources officielles
- Vérifiez l'URL avant de saisir des informations
- Utilisez un navigateur moderne et à jour
- Soyez prudent avec les sauvegardes partagées (ne pas importer de codes de sources inconnues)

## Remerciements

Nous remercions tous ceux qui signalent de manière responsable les problèmes de sécurité et contribuent à rendre Le Coeur du Dragon plus sûr pour tous.

---

**Dernière mise à jour** : Novembre 2024
