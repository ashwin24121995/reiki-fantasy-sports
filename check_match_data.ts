import { db } from './server/db';
import { matches } from './drizzle/schema';

async function checkMatches() {
  const allMatches = await db.select().from(matches).limit(1);
  console.log('Sample match data:');
  console.log(JSON.stringify(allMatches[0], null, 2));
  process.exit(0);
}

checkMatches();
