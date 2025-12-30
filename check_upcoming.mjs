import Database from 'better-sqlite3';

const db = new Database(process.env.DATABASE_URL?.replace('file:', '') || './data.db');

const allMatches = db.prepare('SELECT id, name, matchStarted, matchEnded, dateTimeGMT FROM matches').all();
const upcoming = allMatches.filter(m => !m.matchStarted && !m.matchEnded);
const live = allMatches.filter(m => m.matchStarted && !m.matchEnded);
const completed = allMatches.filter(m => m.matchEnded);

console.log('Total matches:', allMatches.length);
console.log('Upcoming matches:', upcoming.length);
console.log('Live matches:', live.length);
console.log('Completed matches:', completed.length);
console.log('\nUpcoming matches:');
upcoming.forEach(m => console.log(`- ${m.name} (matchStarted: ${m.matchStarted}, matchEnded: ${m.matchEnded}, date: ${m.dateTimeGMT})`));

db.close();
