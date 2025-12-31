# Railway Deployment Guide

## Required Environment Variables

When deploying to Railway, you need to set these environment variables:

### 1. DATABASE_URL
**Required**: Yes  
**Description**: MySQL connection string from Railway MySQL plugin  
**Format**: `mysql://user:password@host:port/database`  
**Example**: `mysql://root:mypassword@containers-us-west-123.railway.app:3306/railway`

**How to get it**:
1. Add MySQL plugin in Railway
2. Copy the `DATABASE_URL` from the plugin's "Connect" tab

### 2. JWT_SECRET
**Required**: Yes  
**Description**: Secret key for signing JWT authentication tokens  
**Format**: Random 64-character string  
**Example**: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6`

**How to generate**:
```bash
openssl rand -hex 32
```

### 3. CRICKET_API_KEY
**Required**: Yes  
**Description**: API key for cricket data service  
**Where to get**: Sign up at https://cricketdata.org or your cricket API provider

### 4. PORT
**Required**: No (Railway sets automatically)  
**Description**: Server port  
**Default**: 3000

### 5. NODE_ENV
**Required**: Yes  
**Description**: Environment mode  
**Value**: `production`

### 6. FRONTEND_URL
**Required**: Yes for CORS  
**Description**: Your Railway app URL  
**Format**: `https://your-app-name.up.railway.app`

---

## Railway Deployment Steps

### Step 1: Prepare MySQL Database

1. In Railway dashboard, click "New" → "Database" → "Add MySQL"
2. Wait for MySQL to provision
3. Copy the `DATABASE_URL` from MySQL plugin
4. The database will be created automatically

### Step 2: Set Environment Variables

In Railway project settings → Variables tab, add:

```
DATABASE_URL=<from MySQL plugin>
JWT_SECRET=<generate using openssl rand -hex 32>
CRICKET_API_KEY=<your cricket API key>
NODE_ENV=production
FRONTEND_URL=https://your-app.up.railway.app
```

### Step 3: Deploy from GitHub

1. Push your code to GitHub
2. In Railway, click "New" → "GitHub Repo"
3. Select your repository
4. Railway will automatically detect and deploy

### Step 4: Run Database Migrations

After first deployment, run migrations:

1. Go to Railway project → Your service
2. Click "Settings" → "Deploy"  
3. Migrations run automatically on startup via `pnpm db:push`

---

## Database Schema

The app will automatically create these tables on first run:

- `users` - User accounts and profiles
- `matches` - Cricket match data
- `players` - Cricket player information
- `teams` - User fantasy teams
- `contests` - Fantasy contests
- `contest_entries` - User contest participations
- `leaderboards` - Contest rankings

---

## Troubleshooting

### Database Connection Errors

**Error**: `ECONNREFUSED` or `Connection refused`
- **Solution**: Make sure `DATABASE_URL` is correctly set and MySQL plugin is running

### Migration Errors

**Error**: `Table already exists`
- **Solution**: This is normal if redeploying. The app handles this automatically.

### Authentication Not Working

**Error**: `Invalid token` or `Unauthorized`
- **Solution**: Make sure `JWT_SECRET` is set and is the same across all deployments

### Cricket API Errors

**Error**: `API key invalid` or `403 Forbidden`
- **Solution**: Verify your `CRICKET_API_KEY` is correct and has not expired

---

## Post-Deployment Checklist

- [ ] MySQL database is running
- [ ] All environment variables are set
- [ ] App is deployed and accessible
- [ ] Database tables are created
- [ ] User registration works
- [ ] User login works
- [ ] Cricket matches are syncing
- [ ] Contests can be created
- [ ] Teams can be created

---

## Monitoring

### View Logs
Railway Dashboard → Your Service → "Deployments" tab → Click latest deployment → "View Logs"

### Check Database
Railway Dashboard → MySQL Plugin → "Data" tab → Browse tables

---

## Scaling

Railway automatically scales based on usage. For high traffic:

1. Upgrade Railway plan for more resources
2. Consider adding Redis for session storage
3. Add CDN for static assets
4. Enable database connection pooling

---

## Security Checklist

- [ ] `JWT_SECRET` is strong and random (64+ characters)
- [ ] `DATABASE_URL` is not exposed in client-side code
- [ ] `CRICKET_API_KEY` is not exposed in client-side code
- [ ] CORS is properly configured with `FRONTEND_URL`
- [ ] HTTPS is enabled (Railway does this automatically)
- [ ] SQL injection protection is enabled (Drizzle ORM handles this)

---

## Support

For Railway-specific issues: https://railway.app/help  
For app issues: Check application logs in Railway dashboard
