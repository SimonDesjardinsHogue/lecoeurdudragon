#!/usr/bin/env node
// Quick verification test with 500 games per combination (6,000 total)
import { runBalanceTests } from './js/balance-tester.js';

console.log('Running verification test (500 games per combination = 6,000 total)...\n');

const startTime = Date.now();
const report = runBalanceTests(500);
const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log(`\n✓ Completed in ${duration} seconds!\n`);

console.log('═══════════════════════════════════════════════════════════════');
console.log('                  VERIFICATION RESULTS                         ');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`Total Simulations:  ${report.summary.totalSimulations.toLocaleString()}`);
console.log(`Average Win Rate:   ${report.summary.avgWinRate} (target: 60-85%)`);
console.log(`Average Level:      ${report.summary.avgLevel}`);
console.log(`Average Kills:      ${report.summary.avgKills}`);

console.log('\n📊 Class Balance:');
Object.entries(report.classStats).forEach(([key, stats]) => {
    console.log(`  ${stats.className.padEnd(12)} - WinRate: ${(stats.avgWinRate * 100).toFixed(1)}%, Deaths: ${stats.avgDeaths.toFixed(1)}, Gold: ${stats.avgFinalGold.toFixed(0)}`);
});

const avgWinRate = parseFloat(report.summary.avgWinRate);
const improvement = avgWinRate > 41.7 ? 'IMPROVED ✓' : 'needs more work';
const targetMet = avgWinRate >= 60 && avgWinRate <= 85 ? 'TARGET MET ✓' : 'not yet in target range';

console.log(`\n🎯 Balance Status: ${improvement} - ${targetMet}`);
console.log(`   Win rate: ${report.summary.avgWinRate} (was 41.67%, target: 60-85%)\n`);
