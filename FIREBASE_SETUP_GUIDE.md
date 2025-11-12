# 🌍 Guide de Configuration du Classement Mondial (Firebase)

Ce guide explique comment configurer Firebase Realtime Database pour activer le classement mondial dans Le Coeur du Dragon.

## 📋 Table des Matières

- [Vue d'ensemble](#vue-densemble)
- [Prérequis](#prérequis)
- [Configuration Firebase](#configuration-firebase)
- [Intégration dans le jeu](#intégration-dans-le-jeu)
- [Sécurité et Règles](#sécurité-et-règles)
- [Coûts et Limites](#coûts-et-limites)
- [Dépannage](#dépannage)

## Vue d'ensemble

Le jeu supporte maintenant **trois modes de classement** :

1. **🏠 Local** - Classement sur l'appareil uniquement (localStorage)
2. **🌐 LAN** - Classement partagé sur réseau local (serveur Node.js)
3. **🌍 Mondial** - Classement global en ligne (Firebase)

Le mode mondial utilise Firebase Realtime Database pour synchroniser les scores de tous les joueurs à travers le monde en temps réel.

## Prérequis

- Un compte Google (gratuit)
- Accès à [Firebase Console](https://console.firebase.google.com)
- Le jeu déployé sur un domaine HTTPS (ex: GitHub Pages)

## Configuration Firebase

### Étape 1 : Créer un Projet Firebase

1. Visitez [Firebase Console](https://console.firebase.google.com)
2. Cliquez sur **"Ajouter un projet"** ou **"Add project"**
3. Entrez un nom de projet (ex: `lecoeurdudragon`)
4. (Optionnel) Désactivez Google Analytics si non nécessaire
5. Cliquez sur **"Créer le projet"**

### Étape 2 : Créer une Realtime Database

1. Dans la console Firebase, sélectionnez votre projet
2. Dans le menu de gauche, cliquez sur **"Realtime Database"**
3. Cliquez sur **"Créer une base de données"** ou **"Create Database"**
4. Choisissez l'emplacement (ex: `us-central1` pour l'Amérique du Nord)
5. Sélectionnez **"Démarrer en mode test"** (nous configurerons les règles plus tard)
6. Cliquez sur **"Activer"**

### Étape 3 : Obtenir les Identifiants Firebase

1. Dans Firebase Console, cliquez sur l'icône **⚙️ Paramètres** > **Paramètres du projet**
2. Faites défiler jusqu'à **"Vos applications"**
3. Cliquez sur l'icône **</>** (Web) pour ajouter une application web
4. Donnez un nom à votre app (ex: `Le Coeur du Dragon Web`)
5. Cochez **"Configurer aussi Firebase Hosting"** si vous le souhaitez
6. Cliquez sur **"Enregistrer l'application"**
7. Copiez l'objet `firebaseConfig` qui ressemble à ceci :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "votre-projet.firebaseapp.com",
  databaseURL: "https://votre-projet-default-rtdb.firebaseio.com",
  projectId: "votre-projet",
  storageBucket: "votre-projet.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### Étape 4 : Configurer les Règles de Sécurité

1. Dans Firebase Console, allez dans **Realtime Database** > **Règles**
2. Copiez le contenu du fichier `firebase-rules.json` (inclus dans le dépôt)
3. Collez-le dans l'éditeur de règles
4. Cliquez sur **"Publier"**

Les règles incluses assurent que :
- ✅ Tout le monde peut lire le classement
- ✅ Seulement des données valides peuvent être écrites
- ✅ Les scores sont validés (niveau 1-24, valeurs positives, etc.)
- ✅ Les noms de joueurs ont entre 1 et 50 caractères
- ✅ Les timestamps sont récents (pas de scores antidatés)

## Intégration dans le Jeu

### Méthode 1 : Modifier le fichier firebase-config.js (Recommandé)

1. Ouvrez le fichier `/js/firebase-config.js`
2. Remplacez les valeurs de configuration par les vôtres :

```javascript
const firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://VOTRE_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_PROJECT_ID.appspot.com",
    messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
    appId: "VOTRE_APP_ID"
};
```

3. Sauvegardez le fichier
4. Déployez votre jeu (ex: push sur GitHub Pages)
5. Le classement mondial sera automatiquement activé !

### Méthode 2 : Utiliser des Variables d'Environnement

Pour plus de sécurité, vous pouvez utiliser des variables d'environnement :

1. Créez un fichier `.env` (ne le commitez PAS dans Git !)
2. Ajoutez vos identifiants Firebase
3. Utilisez un bundler (Webpack, Vite, etc.) pour injecter les variables

## Sécurité et Règles

### Règles de Validation

Les règles Firebase (`firebase-rules.json`) valident automatiquement :

- **Nom du joueur** : 1-50 caractères
- **Niveau** : Entre 1 et 24
- **Kills** : Nombre positif
- **Score** : Calculé et vérifié côté client
- **Timestamp** : Maximum 1 minute dans le futur (pour éviter les tricheurs)

### Limites de Taux (Rate Limiting)

Pour éviter les abus, Firebase applique automatiquement :
- Limite de connexions simultanées
- Limite de bande passante
- Limite de stockage

### Détection de Triche

Le système inclut des validations de base :
- Les scores doivent correspondre à la formule : `(niveau × 100) + (kills × 50) + (force × 10) + (défense × 5)`
- Le niveau maximum est 24
- Les timestamps doivent être récents

**Note** : Pour une protection avancée contre la triche, envisagez d'ajouter :
- Firebase Authentication pour identifier les joueurs
- Cloud Functions pour valider les scores côté serveur
- Système de signalement par la communauté

## Coûts et Limites

### Plan Gratuit (Spark)

Firebase offre un plan gratuit généreux :

**Realtime Database** :
- ✅ 1 GB de stockage
- ✅ 10 GB/mois de bande passante descendante
- ✅ 100 connexions simultanées

**Estimation pour Le Coeur du Dragon** :
- Chaque score : ~300 octets
- 1 GB = ~3,3 millions de scores
- 10 GB/mois = ~33 millions de lectures de scores/mois

Pour un jeu indie, c'est largement suffisant ! 🎉

### Plan Payant (Blaze - Pay as you go)

Si vous dépassez les limites :
- $5/GB de stockage supplémentaire
- $1/GB de bande passante supplémentaire

**Important** : Vous pouvez définir des alertes de budget dans Firebase Console.

## Utilisation dans le Jeu

### Pour les Joueurs

1. Ouvrir le jeu
2. Aller dans **"Voir Statistiques"**
3. Cliquer sur **"🏆 Classement"**
4. Si Firebase est configuré, vous verrez trois onglets :
   - 🏠 **Local** - Vos scores locaux
   - 🌐 **LAN** - Scores du réseau local (si activé)
   - 🌍 **Mondial** - Classement global !

### Soumission Automatique des Scores

Les scores sont automatiquement soumis au classement mondial quand :
- Le joueur monte de niveau
- Le joueur bat un boss
- Le joueur atteint un nouveau record

**Note** : Les joueurs doivent avoir une connexion Internet active.

### Soumission Manuelle

Les joueurs peuvent aussi soumettre leur score manuellement :
1. Aller dans le menu Statistiques
2. Cliquer sur **"Soumettre au classement mondial"**

## Dépannage

### Le classement mondial ne s'affiche pas

**Causes possibles** :
1. Firebase pas configuré (valeurs par défaut dans `firebase-config.js`)
2. Règles Firebase trop restrictives
3. Domaine non autorisé dans Firebase Console
4. Bloqueur de contenu/firewall

**Solutions** :
1. Vérifiez que vous avez bien remplacé les valeurs de configuration
2. Vérifiez que les règles sont publiées dans Firebase Console
3. Allez dans Firebase Console > Paramètres du projet > Domaines autorisés
4. Testez dans un autre navigateur ou désactivez les bloqueurs

### Erreur "Permission denied"

**Cause** : Règles Firebase trop restrictives ou mal configurées

**Solution** :
1. Allez dans Firebase Console > Realtime Database > Règles
2. Vérifiez que `.read: true` est défini pour `/leaderboard`
3. Vérifiez que les règles de validation sont correctes
4. Consultez l'onglet "Simulateur de règles" pour tester

### Les scores ne sont pas soumis

**Causes possibles** :
1. Pas de connexion Internet
2. Données invalides (nom vide, niveau invalide, etc.)
3. Limites de taux Firebase dépassées

**Solutions** :
1. Vérifiez la connexion Internet
2. Ouvrez la console du navigateur pour voir les erreurs
3. Vérifiez que les données du joueur sont valides
4. Attendez quelques minutes si limites dépassées

### Le classement ne se met pas à jour

**Cause** : Problème de synchronisation Firebase

**Solution** :
1. Rafraîchissez la page
2. Changez d'onglet (Local/LAN/Mondial) pour forcer une mise à jour
3. Vérifiez la console Firebase pour voir si les données sont bien enregistrées

## Support et Ressources

- 📚 [Documentation Firebase](https://firebase.google.com/docs/database)
- 💬 [Discussions GitHub](https://github.com/SimonDesjardinsHogue/lecoeurdudragon/discussions)
- 🐛 [Signaler un Bug](https://github.com/SimonDesjardinsHogue/lecoeurdudragon/issues)
- 📧 Contact : Créez une issue sur GitHub

## Prochaines Étapes

Après avoir configuré Firebase, vous pouvez :

1. ✅ Tester le classement mondial localement
2. ✅ Déployer sur votre domaine de production
3. ✅ Configurer des alertes de coûts dans Firebase Console
4. ✅ Ajouter Firebase Analytics (optionnel)
5. ✅ Implémenter Firebase Authentication pour lier les comptes (optionnel)

---

**Bon jeu et que le meilleur héro monte au sommet du classement mondial ! 🏆⚔️**
