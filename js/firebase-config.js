// Firebase Configuration Module
// Handles Firebase initialization and global leaderboard functionality

let firebaseApp = null;
let database = null;
let isFirebaseEnabled = false;

// Firebase configuration - to be filled by the developer
// Get these values from Firebase Console (https://console.firebase.google.com)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
export async function initializeFirebase() {
    // Check if Firebase config is set
    if (firebaseConfig.apiKey === "YOUR_API_KEY") {
        console.log('Firebase not configured. Global leaderboard will be disabled.');
        isFirebaseEnabled = false;
        return false;
    }

    try {
        // Dynamically import Firebase modules
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
        const { getDatabase, ref, set, push, get, query, orderByChild, limitToFirst, onValue } = 
            await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');

        // Initialize Firebase
        firebaseApp = initializeApp(firebaseConfig);
        database = getDatabase(firebaseApp);
        
        // Store database functions for later use
        window.firebaseDB = {
            ref,
            set,
            push,
            get,
            query,
            orderByChild,
            limitToFirst,
            onValue
        };

        isFirebaseEnabled = true;
        console.log('✓ Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('Failed to initialize Firebase:', error);
        isFirebaseEnabled = false;
        return false;
    }
}

// Check if Firebase is enabled
export function isFirebaseReady() {
    return isFirebaseEnabled;
}

// Submit score to global leaderboard
export async function submitGlobalScore(playerData) {
    if (!isFirebaseEnabled) {
        return { success: false, error: 'Firebase not initialized' };
    }

    try {
        const { ref, push, set } = window.firebaseDB;
        
        // Validate player data
        if (!playerData.name || !playerData.level || typeof playerData.kills !== 'number') {
            return { success: false, error: 'Invalid player data' };
        }

        // Calculate score
        const score = (playerData.level * 100) + (playerData.kills * 50) + 
                     ((playerData.strength || 10) * 10) + ((playerData.defense || 5) * 5);

        // Create score entry
        const scoreEntry = {
            playerName: playerData.name,
            level: playerData.level,
            kills: playerData.kills,
            gold: playerData.gold || 0,
            xp: playerData.xp || 0,
            className: playerData.className || 'Guerrier',
            race: playerData.race || 'Humain',
            gender: playerData.gender || 'male',
            strength: playerData.strength || 10,
            defense: playerData.defense || 5,
            score: score,
            timestamp: Date.now(),
            date: new Date().toISOString()
        };

        // Add score to Firebase
        const scoresRef = ref(database, 'leaderboard');
        const newScoreRef = push(scoresRef);
        await set(newScoreRef, scoreEntry);

        return { success: true, score: scoreEntry };
    } catch (error) {
        console.error('Error submitting global score:', error);
        return { success: false, error: error.message };
    }
}

// Fetch global leaderboard
export async function fetchGlobalLeaderboard(limit = 50) {
    if (!isFirebaseEnabled) {
        return { success: false, error: 'Firebase not initialized' };
    }

    try {
        const { ref, get, query, orderByChild, limitToFirst } = window.firebaseDB;
        
        // Query top scores
        const scoresRef = ref(database, 'leaderboard');
        const topScoresQuery = query(scoresRef, orderByChild('score'), limitToFirst(limit));
        
        const snapshot = await get(topScoresQuery);
        
        if (!snapshot.exists()) {
            return { success: true, scores: [] };
        }

        // Convert to array and sort (Firebase returns in ascending order)
        const scores = [];
        snapshot.forEach((childSnapshot) => {
            scores.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        // Sort by score descending
        scores.sort((a, b) => b.score - a.score);

        return { success: true, scores: scores };
    } catch (error) {
        console.error('Error fetching global leaderboard:', error);
        return { success: false, error: error.message };
    }
}

// Subscribe to real-time leaderboard updates
export function subscribeToGlobalLeaderboard(callback, limit = 50) {
    if (!isFirebaseEnabled) {
        return null;
    }

    try {
        const { ref, query, orderByChild, limitToFirst, onValue } = window.firebaseDB;
        
        const scoresRef = ref(database, 'leaderboard');
        const topScoresQuery = query(scoresRef, orderByChild('score'), limitToFirst(limit));
        
        // Listen for changes
        const unsubscribe = onValue(topScoresQuery, (snapshot) => {
            if (!snapshot.exists()) {
                callback({ success: true, scores: [] });
                return;
            }

            const scores = [];
            snapshot.forEach((childSnapshot) => {
                scores.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            // Sort by score descending
            scores.sort((a, b) => b.score - a.score);

            callback({ success: true, scores: scores });
        }, (error) => {
            console.error('Error in leaderboard subscription:', error);
            callback({ success: false, error: error.message });
        });

        return unsubscribe;
    } catch (error) {
        console.error('Error subscribing to leaderboard:', error);
        return null;
    }
}

export { database };
