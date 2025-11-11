// Balance Testing Orchestrator Module
// Responsibility: Coordinate balance testing operations

import { simulateGame } from './balance/simulation.js';
import { analyzeResults } from './balance/analysis.js';
export { formatReportAsHTML } from './balance/report-formatter.js';

// Run balance tests (synchronous version for CLI)
export function runBalanceTests(iterations = 2500) {
    const results = {
        byClass: {
            guerrier: [],
            magicien: [],
            archer: []
        },
        byRace: {
            humain: [],
            elfe: [],
            nain: []
        },
        bySex: {
            male: [],
            female: []
        },
        byCombination: {}
    };
    
    const classes = ['guerrier', 'magicien', 'archer'];
    const races = ['humain', 'elfe', 'nain'];
    const sexes = ['male', 'female'];
    
    console.log(`Starting balance tests with ${iterations} iterations per class-race-sex combination...`);
    console.log(`Total simulations: ${classes.length * races.length * sexes.length * iterations} (${classes.length} classes × ${races.length} races × ${sexes.length} sexes × ${iterations} games)`);
    
    let totalGames = 0;
    const totalSimulations = classes.length * races.length * sexes.length * iterations;
    
    for (const classKey of classes) {
        for (const raceKey of races) {
            for (const sexKey of sexes) {
                const comboKey = `${classKey}_${raceKey}_${sexKey}`;
                results.byCombination[comboKey] = [];
                
                console.log(`Testing ${classKey} + ${raceKey} + ${sexKey}...`);
                
                for (let i = 0; i < iterations; i++) {
                    if (i % 100 === 0) {
                        totalGames = ((classes.indexOf(classKey) * races.length + races.indexOf(raceKey)) * sexes.length + sexes.indexOf(sexKey)) * iterations + i;
                        const progress = ((totalGames / totalSimulations) * 100).toFixed(1);
                        console.log(`  Progress: ${progress}% (${totalGames}/${totalSimulations}) - ${classKey}+${raceKey}+${sexKey}: ${i}/${iterations}`);
                    }
                    
                    const result = simulateGame(classKey, raceKey, sexKey);
                    results.byClass[classKey].push(result);
                    results.byRace[raceKey].push(result);
                    results.bySex[sexKey].push(result);
                    results.byCombination[comboKey].push(result);
                }
            }
        }
    }
    
    console.log(`Completed all ${totalSimulations} simulations!`);
    
    return analyzeResults(results);
}

// Run balance tests asynchronously with progress callbacks (for UI)
export async function runBalanceTestsAsync(iterations = 100, progressCallback = null) {
    const results = {
        byClass: {
            guerrier: [],
            magicien: [],
            archer: []
        },
        byRace: {
            humain: [],
            elfe: [],
            nain: []
        },
        bySex: {
            male: [],
            female: []
        },
        byCombination: {}
    };
    
    const classes = ['guerrier', 'magicien', 'archer'];
    const races = ['humain', 'elfe', 'nain'];
    const sexes = ['male', 'female'];
    
    console.log(`Starting balance tests with ${iterations} iterations per class-race-sex combination...`);
    console.log(`Total simulations: ${classes.length * races.length * sexes.length * iterations} (${classes.length} classes × ${races.length} races × ${sexes.length} sexes × ${iterations} games)`);
    
    let totalGames = 0;
    const totalSimulations = classes.length * races.length * sexes.length * iterations;
    
    for (const classKey of classes) {
        for (const raceKey of races) {
            for (const sexKey of sexes) {
                const comboKey = `${classKey}_${raceKey}_${sexKey}`;
                results.byCombination[comboKey] = [];
                
                console.log(`Testing ${classKey} + ${raceKey} + ${sexKey}...`);
                
                for (let i = 0; i < iterations; i++) {
                    // Yield to browser every 10 simulations to keep UI responsive
                    if (i % 10 === 0) {
                        totalGames = ((classes.indexOf(classKey) * races.length + races.indexOf(raceKey)) * sexes.length + sexes.indexOf(sexKey)) * iterations + i;
                        const progress = (totalGames / totalSimulations) * 100;
                        
                        if (progressCallback) {
                            progressCallback({
                                progress: progress,
                                currentGames: totalGames,
                                totalGames: totalSimulations,
                                currentCombo: `${classKey}+${raceKey}+${sexKey}`,
                                currentIteration: i,
                                totalIterations: iterations
                            });
                        }
                        
                        // Yield control to browser to update UI and prevent freezing
                        await new Promise(resolve => setTimeout(resolve, 0));
                    }
                    
                    const result = simulateGame(classKey, raceKey, sexKey);
                    results.byClass[classKey].push(result);
                    results.byRace[raceKey].push(result);
                    results.bySex[sexKey].push(result);
                    results.byCombination[comboKey].push(result);
                }
            }
        }
    }
    
    console.log(`Completed all ${totalSimulations} simulations!`);
    
    return analyzeResults(results);
}
