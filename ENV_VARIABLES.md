# Environment Variables Documentation

This document lists all environment variables required for the REIKI Fantasy Sports Platform.

## Required for Deployment (Railway/Production)

### Database
```
DATABASE_URL=mysql://user:password@host:port/database
```
MySQL/TiDB connection string for the production database.

### Authentication
```
JWT_SECRET=your_random_secret_key_here
```
Secret key for signing JWT tokens. Generate a strong random string (32+ characters).

### Cricket API
```
CRIC_API_KEY=your_cricket_api_key_here
```
API key for fetching live cricket data. Obtain from:
- CricAPI (https://www.cricapi.com/)
- RapidAPI Cricket APIs
- CricketData.org
- Or any other cricket data provider

**Note:** The application will use mock data if this is not provided, but real match/player data requires a valid API key.

### Application URL (Optional)
```
NEXTAUTH_URL=https://your-domain.com
```
Only needed if using OAuth or external authentication providers.

### Cron Job Security (Optional)
```
CRON_SECRET=your_cron_secret_here
```
Secret for securing cron job endpoints (contest sync, point calculation).

## Auto-Injected by Manus (Development Only)

These are automatically provided by the Manus platform and should NOT be manually set:

```
BUILT_IN_FORGE_API_KEY
BUILT_IN_FORGE_API_URL
OAUTH_SERVER_URL
OWNER_NAME
OWNER_OPEN_ID
VITE_ANALYTICS_ENDPOINT
VITE_ANALYTICS_WEBSITE_ID
VITE_APP_ID
VITE_APP_LOGO
VITE_APP_TITLE
VITE_FRONTEND_FORGE_API_KEY
VITE_FRONTEND_FORGE_API_URL
VITE_OAUTH_PORTAL_URL
```

## Setting Environment Variables

### Local Development (.env.local)
Create a `.env.local` file in the project root:

```bash
DATABASE_URL="mysql://root:password@localhost:3306/reiki_fantasy"
JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
CRIC_API_KEY="your-cricket-api-key-here"
```

### Railway Deployment
1. Go to your Railway project
2. Click on your service
3. Go to "Variables" tab
4. Add each variable with its value
5. Railway will automatically restart the service

### GitHub Actions (CI/CD)
Add secrets in your GitHub repository:
1. Go to Settings → Secrets and variables → Actions
2. Add each variable as a repository secret
3. Reference in workflows as `${{ secrets.VARIABLE_NAME }}`

## Security Best Practices

1. **Never commit `.env` files** to version control
2. **Use strong, random values** for JWT_SECRET (32+ characters)
3. **Rotate secrets regularly** in production
4. **Use different values** for development and production
5. **Limit API key permissions** to only what's needed
6. **Monitor API usage** to detect unauthorized access

## Generating Secure Secrets

### JWT_SECRET
```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### CRON_SECRET
```bash
# Generate a random UUID
node -e "console.log(require('crypto').randomUUID())"
```

## Troubleshooting

### "DATABASE_URL is not defined"
- Ensure the variable is set in your deployment environment
- Check for typos in the variable name
- Verify the connection string format is correct

### "CRIC_API_KEY is missing"
- The app will work with mock data if this is not set
- To use real cricket data, obtain an API key from a provider
- Add the key to your environment variables

### "JWT_SECRET is not defined"
- This is required for authentication to work
- Generate a secure random string and set it
- Never use the default/example value in production

## Contact

For issues with environment variables or deployment, contact the development team or refer to the deployment documentation.
