#!/usr/bin/env node
import { runBalanceTests } from './js/balance-tester.js';

console.log('Quick test with 10 games per combination...\n');

const startTime = Date.now();
const report = runBalanceTests(10);
const endTime = Date.now();
const duration = ((endTime - startTime) / 1000).toFixed(2);

console.log(`\n✓ Completed in ${duration} seconds!\n`);

console.log('═══════════════════════════════════════════════════════════════');
console.log('                  TEST RESULTS                                  ');
console.log('═══════════════════════════════════════════════════════════════');
console.log(`Total Simulations:  ${report.summary.totalSimulations.toLocaleString()}`);
console.log(`Average Level:      ${report.summary.avgLevel}`);
console.log(`% Reached Lvl 100:  ${report.summary.percentReachedLevel100}`);

console.log('\n📊 Class Balance:');
Object.entries(report.classStats).forEach(([key, stats]) => {
    console.log(`  ${stats.className.padEnd(12)} - Level: ${stats.avgLevel.toFixed(1)}, Max: ${stats.maxLevel}, Lvl100: ${stats.percentReachedLevel100.toFixed(1)}%`);
});
