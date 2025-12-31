# PDF Implementation Notes - Match Display Fix

## Key Finding: Match Status Field

**From PDF Part 4.2 (CricScore API Route)**:

The Cricket API uses the `ms` field for match status with these values:
- `"live"` - Live/ongoing matches
- `"fixture"` - Upcoming/scheduled matches
- `"result"` - Completed matches

## Current Implementation Issue

Our current code might be:
1. Using wrong field name for match status filtering
2. Not properly mapping Cricket API response to our database schema
3. Missing proper status filtering in cricket sync service

## Required Fix

Update `server/cricketSync.ts` and `server/cricketRouters.ts` to:
1. Use `ms` field from Cricket API response
2. Map values correctly:
   - `ms === "live"` → status = "live"
   - `ms === "fixture"` → status = "upcoming"
   - `ms === "result"` → status = "completed"
3. Ensure all match types are synced to database
4. Filter matches correctly in tRPC procedures

## PDF Reference Code

```typescript
const live = matches.filter((m: any) => m.ms === "live");
const upcoming = matches.filter((m: any) => m.ms === "fixture").sort((a: any, b: any) => 
  new Date(a.sdt).getTime() - new Date(b.sdt).getTime()
);
const completed = matches.filter((m: any) => m.ms === "result").sort((a: any, b: any) => 
  new Date(b.sdt).getTime() - new Date(a.sdt).getTime()
);
```

## Next Steps

1. Check current cricket sync implementation
2. Verify field mapping from API to database
3. Fix status filtering logic
4. Test with live Cricket API data
