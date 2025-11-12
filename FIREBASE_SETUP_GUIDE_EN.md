# 🌍 Global Leaderboard Setup Guide (Firebase)

This guide explains how to configure Firebase Realtime Database to enable the global leaderboard in Le Coeur du Dragon.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Firebase Setup](#firebase-setup)
- [Game Integration](#game-integration)
- [Security and Rules](#security-and-rules)
- [Costs and Limits](#costs-and-limits)
- [Troubleshooting](#troubleshooting)

## Overview

The game now supports **three leaderboard modes**:

1. **🏠 Local** - Device-only leaderboard (localStorage)
2. **🌐 LAN** - Local network shared leaderboard (Node.js server)
3. **🌍 Global** - Worldwide online leaderboard (Firebase)

The global mode uses Firebase Realtime Database to synchronize player scores worldwide in real-time.

## Prerequisites

- A Google account (free)
- Access to [Firebase Console](https://console.firebase.google.com)
- The game deployed on an HTTPS domain (e.g., GitHub Pages)

## Firebase Setup

### Step 1: Create a Firebase Project

1. Visit [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"**
3. Enter a project name (e.g., `lecoeurdudragon`)
4. (Optional) Disable Google Analytics if not needed
5. Click **"Create project"**

### Step 2: Create a Realtime Database

1. In Firebase Console, select your project
2. In the left menu, click **"Realtime Database"**
3. Click **"Create Database"**
4. Choose a location (e.g., `us-central1` for North America)
5. Select **"Start in test mode"** (we'll configure rules later)
6. Click **"Enable"**

### Step 3: Get Firebase Credentials

1. In Firebase Console, click the **⚙️ Settings** icon > **Project settings**
2. Scroll to **"Your apps"**
3. Click the **</>** (Web) icon to add a web app
4. Give your app a name (e.g., `Le Coeur du Dragon Web`)
5. Check **"Also set up Firebase Hosting"** if desired
6. Click **"Register app"**
7. Copy the `firebaseConfig` object which looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

### Step 4: Configure Security Rules

1. In Firebase Console, go to **Realtime Database** > **Rules**
2. Copy the content from `firebase-rules.json` (included in repository)
3. Paste it into the rules editor
4. Click **"Publish"**

The included rules ensure that:
- ✅ Everyone can read the leaderboard
- ✅ Only valid data can be written
- ✅ Scores are validated (level 1-24, positive values, etc.)
- ✅ Player names are 1-50 characters
- ✅ Timestamps are recent (no backdated scores)

## Game Integration

### Method 1: Modify firebase-config.js (Recommended)

1. Open the file `/js/firebase-config.js`
2. Replace the configuration values with yours:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

3. Save the file
4. Deploy your game (e.g., push to GitHub Pages)
5. The global leaderboard will be automatically activated!

### Method 2: Use Environment Variables

For better security, you can use environment variables:

1. Create a `.env` file (do NOT commit to Git!)
2. Add your Firebase credentials
3. Use a bundler (Webpack, Vite, etc.) to inject the variables

## Security and Rules

### Validation Rules

Firebase rules (`firebase-rules.json`) automatically validate:

- **Player name**: 1-50 characters
- **Level**: Between 1 and 24
- **Kills**: Positive number
- **Score**: Calculated and verified client-side
- **Timestamp**: Maximum 1 minute in the future (to prevent cheaters)

### Rate Limiting

To prevent abuse, Firebase automatically applies:
- Simultaneous connection limits
- Bandwidth limits
- Storage limits

### Cheat Detection

The system includes basic validations:
- Scores must match the formula: `(level × 100) + (kills × 50) + (strength × 10) + (defense × 5)`
- Maximum level is 24
- Timestamps must be recent

**Note**: For advanced cheat protection, consider adding:
- Firebase Authentication to identify players
- Cloud Functions to validate scores server-side
- Community reporting system

## Costs and Limits

### Free Plan (Spark)

Firebase offers a generous free plan:

**Realtime Database**:
- ✅ 1 GB storage
- ✅ 10 GB/month download bandwidth
- ✅ 100 simultaneous connections

**Estimate for Le Coeur du Dragon**:
- Each score: ~300 bytes
- 1 GB = ~3.3 million scores
- 10 GB/month = ~33 million score reads/month

For an indie game, this is more than enough! 🎉

### Paid Plan (Blaze - Pay as you go)

If you exceed limits:
- $5/GB additional storage
- $1/GB additional bandwidth

**Important**: You can set budget alerts in Firebase Console.

## Usage in Game

### For Players

1. Open the game
2. Go to **"View Statistics"**
3. Click **"🏆 Leaderboard"**
4. If Firebase is configured, you'll see three tabs:
   - 🏠 **Local** - Your local scores
   - 🌐 **LAN** - Local network scores (if enabled)
   - 🌍 **Global** - Worldwide leaderboard!

### Automatic Score Submission

Scores are automatically submitted to the global leaderboard when:
- Player levels up
- Player defeats a boss
- Player achieves a new record

**Note**: Players need an active Internet connection.

### Manual Submission

Players can also manually submit their score:
1. Go to the Statistics menu
2. Click **"Submit to global leaderboard"**

## Troubleshooting

### Global leaderboard doesn't show

**Possible causes**:
1. Firebase not configured (default values in `firebase-config.js`)
2. Firebase rules too restrictive
3. Domain not authorized in Firebase Console
4. Content blocker/firewall

**Solutions**:
1. Verify you replaced the configuration values
2. Check that rules are published in Firebase Console
3. Go to Firebase Console > Project settings > Authorized domains
4. Test in another browser or disable blockers

### "Permission denied" error

**Cause**: Firebase rules too restrictive or misconfigured

**Solution**:
1. Go to Firebase Console > Realtime Database > Rules
2. Verify `.read: true` is set for `/leaderboard`
3. Check validation rules are correct
4. Use "Rules Simulator" tab to test

### Scores are not submitted

**Possible causes**:
1. No Internet connection
2. Invalid data (empty name, invalid level, etc.)
3. Firebase rate limits exceeded

**Solutions**:
1. Check Internet connection
2. Open browser console to see errors
3. Verify player data is valid
4. Wait a few minutes if limits exceeded

### Leaderboard doesn't update

**Cause**: Firebase synchronization issue

**Solution**:
1. Refresh the page
2. Switch tabs (Local/LAN/Global) to force update
3. Check Firebase console to see if data is saved correctly

## Support and Resources

- 📚 [Firebase Documentation](https://firebase.google.com/docs/database)
- 💬 [GitHub Discussions](https://github.com/SimonDesjardinsHogue/lecoeurdudragon/discussions)
- 🐛 [Report a Bug](https://github.com/SimonDesjardinsHogue/lecoeurdudragon/issues)
- 📧 Contact: Create an issue on GitHub

## Next Steps

After setting up Firebase, you can:

1. ✅ Test the global leaderboard locally
2. ✅ Deploy to your production domain
3. ✅ Configure cost alerts in Firebase Console
4. ✅ Add Firebase Analytics (optional)
5. ✅ Implement Firebase Authentication to link accounts (optional)

---

**Happy gaming and may the best hero reach the top of the global leaderboard! 🏆⚔️**
