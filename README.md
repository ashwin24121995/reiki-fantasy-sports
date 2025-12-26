# REIKI ENERGY - Fantasy Cricket Platform

**Company**: REIKI ENERGY GLOBAL PRIVATE LIMITED  
**Domain**: smartplaydrafts.com  
**CIN**: U86909HR2024PTC119844  
**Type**: Free-to-play Fantasy Cricket (Educational & Entertainment)

## Overview

REIKI ENERGY is India's first truly free fantasy cricket platform focused on education and skill development. No real money, no prizes - just pure learning and fun!

### Key Features

- ✅ **Free to Play**: No deposits, no withdrawals, no real money
- ✅ **Educational**: Learn fantasy cricket strategies and player analysis
- ✅ **Real-time Data**: Live match data from Cricket Data API
- ✅ **Custom Authentication**: Secure JWT-based login system
- ✅ **Age Verification**: 18+ only with mandatory verification
- ✅ **State Compliance**: Restricted in 6 states as per government regulations
- ✅ **Multi-language**: English, Hindi, Tamil, Telugu, Bengali
- ✅ **Light/Dark Theme**: User-preferred theme toggle

## Technology Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **shadcn/ui** - Beautiful component library
- **Wouter** - Lightweight routing
- **tRPC** - End-to-end type-safe APIs

### Backend
- **Node.js** - Runtime environment
- **Express** - Web server
- **tRPC** - Type-safe API layer
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing

### Database
- **MySQL** - Relational database (Railway)
- **Drizzle ORM** - Type-safe database queries

### External APIs
- **Cricket Data API** - Real-time cricket match data (Paid subscription)

## Prerequisites

- Node.js 22.x or higher
- pnpm 10.x or higher
- MySQL database (Railway provides this)
- Cricket Data API key (paid subscription)

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/reiki-fantasy-sports.git
   cd reiki-fantasy-sports
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=mysql://user:password@localhost:3306/reiki_energy
   JWT_SECRET=your-super-secret-jwt-key-min-32-characters
   CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
   NODE_ENV=development
   ```

4. **Run database migrations**
   ```bash
   pnpm db:push
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

6. **Open in browser**
   ```
   http://localhost:3000
   ```

## Railway Deployment

### Step 1: Prepare GitHub Repository

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: REIKI ENERGY Fantasy Cricket Platform"
   git push origin main
   ```

### Step 2: Set Up Railway Project

1. Go to [Railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `reiki-fantasy-sports` repository
5. Railway will automatically detect the Node.js project

### Step 3: Add MySQL Database

1. In your Railway project, click "New"
2. Select "Database" → "MySQL"
3. Railway will provision a MySQL database
4. Copy the `DATABASE_URL` connection string

### Step 4: Configure Environment Variables

In Railway project settings, add these environment variables:

```env
DATABASE_URL=<Railway MySQL connection string>
JWT_SECRET=<generate-a-secure-random-string-min-32-chars>
CRICKET_API_KEY=1a822521-d7e0-46ff-98d3-3e51020863f3
NODE_ENV=production
```

**Important**: Generate a strong JWT_SECRET using:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 5: Run Database Migrations

1. In Railway, open the project terminal
2. Run:
   ```bash
   pnpm db:push
   ```

### Step 6: Deploy

1. Railway will automatically deploy on every push to `main` branch
2. Get your deployment URL from Railway dashboard
3. Test the deployment

### Step 7: Connect Custom Domain

1. In Railway project settings, go to "Domains"
2. Click "Custom Domain"
3. Add `smartplaydrafts.com`
4. Update your domain's DNS records:
   - Type: CNAME
   - Name: @
   - Value: <railway-provided-domain>
5. Wait for DNS propagation (5-30 minutes)

## Project Structure

```
reiki-fantasy-sports/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (logo, images, badges)
│   └── src/
│       ├── components/    # Reusable UI components
│       ├── contexts/      # React contexts (Auth, Theme)
│       ├── pages/         # Page components
│       └── lib/           # Utilities and tRPC client
├── server/                # Backend Express + tRPC
│   ├── _core/            # Core server infrastructure
│   ├── auth.ts           # Custom JWT authentication
│   ├── authRouters.ts    # Auth API routes
│   ├── cricketApi.ts     # Cricket Data API integration
│   ├── cricketRouters.ts # Cricket API routes
│   └── routers.ts        # Main tRPC router
├── drizzle/              # Database schema and migrations
│   └── schema.ts         # Database tables definition
└── shared/               # Shared types and constants
```

## Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot reload

# Database
pnpm db:push          # Generate and run migrations

# Build
pnpm build            # Build for production

# Production
pnpm start            # Start production server

# Code Quality
pnpm check            # TypeScript type checking
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run tests
```

## API Endpoints

### Authentication
- `POST /api/trpc/customAuth.register` - Register new user
- `POST /api/trpc/customAuth.login` - Login user
- `GET /api/trpc/customAuth.me` - Get current user
- `POST /api/trpc/customAuth.logout` - Logout user
- `GET /api/trpc/customAuth.bannedStates` - Get list of banned states

### Cricket Data
- `GET /api/trpc/cricket.currentMatches` - Get current matches
- `GET /api/trpc/cricket.matchDetails` - Get match details
- `GET /api/trpc/cricket.fantasySquad` - Get player squad
- `GET /api/trpc/cricket.fantasyPoints` - Get fantasy points

## Database Schema

### Users Table
- `id` - Primary key
- `name` - Full name
- `email` - Unique email (login)
- `password` - Hashed password
- `phone` - Phone number (optional)
- `dateOfBirth` - Date of birth (age verification)
- `state` - User's state (compliance check)
- `ageVerified` - Boolean (18+ verified)
- `role` - user | admin
- `createdAt`, `updatedAt`, `lastSignedIn`

### Matches Table
- Stores cached match data from Cricket API
- Auto-syncs with live matches

### Players Table
- Player information from Cricket API
- Stats and performance data

### Fantasy Teams Table
- User-created teams
- 11 players per team
- Captain and vice-captain selection

### Contests & Leaderboards
- Contest management
- Real-time scoring
- Rank calculations

## Legal Compliance

### Age Restriction
- Only users 18 years and older are allowed
- Mandatory age verification during registration
- Date of birth validation

### State Restrictions
The following states are NOT allowed due to government compliance:
- Andhra Pradesh
- Assam
- Nagaland
- Odisha
- Sikkim
- Telangana

### No Real Money
- This is a FREE-TO-PLAY platform
- No deposits or withdrawals
- No cash prizes
- Educational and entertainment purposes only

## Cricket Data API

### Subscription Details
- **API Key**: `1a822521-d7e0-46ff-98d3-3e51020863f3`
- **Type**: Paid subscription (Fantasy APIs enabled)
- **Valid Until**: January 18, 2026
- **Provider**: [cricketdata.org](https://cricketdata.org)

### Available Endpoints
1. Current Matches API - Live and upcoming matches
2. Fantasy Squad API - Player lists for matches
3. Fantasy Match Points API - Real-time scoring
4. Fantasy Scorecard API - Detailed match data
5. Ball by Ball API - Live ball-by-ball updates
6. Match Calendar API - Upcoming fixtures

## Security

- ✅ JWT-based authentication
- ✅ Password hashing with bcrypt (10 rounds)
- ✅ SQL injection prevention (Drizzle ORM)
- ✅ XSS protection
- ✅ CORS configuration
- ✅ Environment variables for secrets
- ✅ HTTPS enforced in production

## Support & Contact

**Company**: REIKI ENERGY GLOBAL PRIVATE LIMITED  
**Address**: H NO41, RESIDENCIAL COLONY, BAZIDA JATTAN, Karnal, Haryana - 132001, India  
**CIN**: U86909HR2024PTC119844  
**PAN**: AANCR4715K  

For support, visit the Contact Us page on the website.

## License

© 2024 REIKI ENERGY GLOBAL PRIVATE LIMITED. All rights reserved.

---

**Built with ❤️ for cricket fans across India**
