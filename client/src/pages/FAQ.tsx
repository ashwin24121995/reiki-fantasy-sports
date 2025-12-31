/**
 * Comprehensive FAQ Page - REIKI ENERGY
 * 40+ Detailed Questions Covering All Aspects
 */

import React, { useState } from 'react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { 
  HelpCircle, Search, ArrowLeft, BookOpen, Users, Trophy,
  Shield, Settings, Smartphone, AlertCircle, MessageCircle,
  FileText, Lock
} from 'lucide-react';

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'Getting Started',
      icon: BookOpen,
      color: 'text-emerald-600',
      questions: [
        {
          q: 'What is REIKI ENERGY and what makes it different?',
          a: 'REIKI ENERGY is India\'s first 100% free-to-play fantasy cricket platform. Unlike traditional fantasy platforms that require entry fees and offer cash prizes, we provide a completely risk-free environment where cricket fans can practice and master fantasy cricket strategies without spending a single rupee. We\'re funded by investors who believe in making fantasy sports accessible to everyone, allowing us to operate without charging users. Our platform is skill-based, transparent, and permanently free.',
        },
        {
          q: 'How do I create an account on REIKI ENERGY?',
          a: 'Creating an account is simple and takes less than 2 minutes: (1) Click the "Register" button in the top-right corner, (2) Fill in your basic details: full name, email address, password (minimum 8 characters), date of birth, and state of residence, (3) Confirm that you are 18 years or older (mandatory legal requirement), (4) Accept our Terms & Conditions and Privacy Policy, (5) Click "Create Account". You\'ll be logged in immediately and can start exploring matches and creating teams. No payment information is ever requested during registration or at any point on the platform.',
        },
        {
          q: 'Do I need to download an app to play?',
          a: 'No app download is required! REIKI ENERGY is a fully responsive web-based platform that works seamlessly on any device with a modern web browser. Simply visit our website from your desktop computer, laptop, tablet, or smartphone, and you\'re ready to play. The mobile web experience is optimized for touch navigation and smaller screens, providing the same features as the desktop version. We may launch dedicated iOS and Android apps in the future, but the web platform will always remain our primary offering.',
        },
        {
          q: 'Is there a tutorial or guide for beginners?',
          a: 'Yes! We provide multiple learning resources for beginners: (1) Visit our "About Us" page for a detailed 6-step guide on how the platform works, (2) Check the "How to Play" section for rules and team composition requirements, (3) Read through this FAQ for answers to common questions, (4) Our scoring system is fully documented with point values for every player action. Additionally, when you create your first team, you\'ll see helpful tooltips explaining player roles, captain selection, and team composition rules. We recommend starting by creating a team for an upcoming match—hands-on practice is the best way to learn!',
        },
      ],
    },
    {
      category: 'Account & Registration',
      icon: Users,
      color: 'text-blue-600',
      questions: [
        {
          q: 'Why do I need to verify my age (18+)?',
          a: 'Age verification is a strict legal requirement under Indian gaming regulations. Fantasy sports platforms, including free-to-play platforms like REIKI ENERGY, must ensure all users are 18 years or older. This protects minors from exposure to competitive gaming environments and ensures compliance with state and central government regulations. During registration, you provide your date of birth, and our system automatically calculates your age. We take this seriously—accounts found to belong to minors will be immediately suspended. This policy applies nationwide regardless of state-specific rules.',
        },
        {
          q: 'Which Indian states are restricted from playing?',
          a: 'Users from the following six states cannot register or play on REIKI ENERGY due to state-specific gaming regulations: Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. These states have laws that prohibit or restrict fantasy sports platforms, and we comply fully with these regulations. During registration, you must select your state of residence, and the system will automatically block registrations from restricted states. If you attempt to access the platform from a restricted state using a VPN or false information, your account will be permanently banned. We respect state sovereignty and legal frameworks.',
        },
        {
          q: 'Can I change my registered state or date of birth later?',
          a: 'No. Your state of residence and date of birth are permanently locked after registration for legal compliance and fraud prevention purposes. These fields cannot be edited through your profile settings or by contacting support. If you genuinely move to a different state (e.g., for work or education), you would need to create a new account with your new state information—however, note that if you move TO a restricted state, you will no longer be able to play. We understand this may be inconvenient, but it\'s necessary to maintain regulatory compliance and prevent misuse of the platform.',
        },
        {
          q: 'How do I reset my password if I forget it?',
          a: 'If you forget your password: (1) Go to the Login page, (2) Click "Forgot Password?" link below the login form, (3) Enter the email address you used during registration, (4) Check your email inbox for a password reset link (it may take 1-2 minutes to arrive; check spam/junk folder if needed), (5) Click the link in the email, which will take you to a secure password reset page, (6) Enter your new password (minimum 8 characters, must include letters and numbers for security), (7) Confirm the new password and submit. You\'ll be automatically logged in with your new password. The reset link expires after 1 hour for security reasons.',
        },
        {
          q: 'Can I have multiple accounts?',
          a: 'No. Our Terms of Service strictly prohibit creating multiple accounts. Each user is allowed only ONE account per email address and per person. Creating multiple accounts (also known as "multi-accounting") is considered cheating and unfair play, as it could be used to manipulate leaderboards or gain unfair advantages. If we detect multiple accounts linked to the same person (through IP address, device fingerprinting, or behavioral patterns), all associated accounts will be permanently banned. If you accidentally created a duplicate account, contact our support team immediately to resolve the issue before it\'s flagged by our automated systems.',
        },
        {
          q: 'How do I delete my account permanently?',
          a: 'To permanently delete your account and all associated data: (1) Log in to your account, (2) Go to Profile Settings, (3) Scroll to the bottom and click "Delete Account" (red button), (4) You\'ll be asked to confirm your decision and provide a reason (optional feedback), (5) Enter your password to confirm, (6) Click "Permanently Delete My Account". This action is irreversible. All your teams, contest history, and personal information will be permanently erased from our database within 30 days (as per data retention policies). You can create a new account in the future, but your previous data cannot be recovered. If you\'re having issues with the platform, consider contacting support before deleting your account.',
        },
      ],
    },
    {
      category: 'Team Creation & Management',
      icon: Trophy,
      color: 'text-orange-600',
      questions: [
        {
          q: 'How do I create a fantasy cricket team?',
          a: 'Creating a team is a 5-step process: (1) Navigate to the "Matches" page from the main menu, (2) Browse live or upcoming matches and click on the match you want to play, (3) Click the "Create Team" button on the match detail page, (4) You\'ll see a player selection interface showing all players from both teams. Select exactly 11 players following the composition rules (1-4 Wicket-Keepers, 3-6 Batsmen, 1-4 All-Rounders, 3-6 Bowlers), (5) Choose one player as Captain (earns 2x points) and another as Vice-Captain (earns 1.5x points), (6) Give your team a name and click "Save Team". Your team is now created and will automatically be entered into the public contest for that match.',
        },
        {
          q: 'What are the team composition rules I must follow?',
          a: 'Every fantasy team must have exactly 11 players with the following role distribution: **Wicket-Keepers (WK)**: Minimum 1, Maximum 4 | **Batsmen (BAT)**: Minimum 3, Maximum 6 | **All-Rounders (AR)**: Minimum 1, Maximum 4 | **Bowlers (BOWL)**: Minimum 3, Maximum 6. Additionally, you can select a maximum of 7 players from one team (meaning at least 4 must be from the opposing team). These rules ensure balanced team composition and prevent users from stacking their team with players from only one side. The system will automatically validate your selections and prevent you from saving an invalid team.',
        },
        {
          q: 'Is there a budget or credit system for selecting players?',
          a: 'No, REIKI ENERGY does NOT use a budget or credit system. Unlike paid fantasy platforms that assign artificial "credit values" to players (forcing you to make trade-offs based on budget constraints), we allow you to select any 11 players you want based purely on skill, form, and strategy. This design choice allows you to focus on understanding player performance, match conditions, and strategic thinking, not on managing an arbitrary budget. You have complete freedom to pick the best possible team without financial constraints.',
        },
        {
          q: 'What is the difference between Captain and Vice-Captain?',
          a: 'Captain and Vice-Captain are multiplier roles that significantly impact your team\'s total score: **Captain**: Earns 2x (double) points for all actions. If your captain scores 50 runs, you get 100 points. **Vice-Captain**: Earns 1.5x points for all actions. If your vice-captain takes 3 wickets worth 75 points, you get 112.5 points. Choosing the right captain and vice-captain is the most critical strategic decision in fantasy cricket. Typically, you should select players who are in good form, have favorable match conditions (e.g., batsmen on batting-friendly pitches), or have a high probability of contributing significantly (e.g., opening batsmen, strike bowlers). You can only have ONE captain and ONE vice-captain per team.',
        },
        {
          q: 'Can I edit my team after creating it?',
          a: 'Yes, but only BEFORE the match starts. You can edit your team composition, change your captain/vice-captain, or completely rebuild your team up until the moment the match begins (first ball is bowled). To edit: (1) Go to "My Teams" page, (2) Find the team you want to edit, (3) Click "Edit Team", (4) Make your changes, (5) Save. Once the match starts, your team is permanently locked and cannot be modified. This rule ensures fairness—no one can change their team based on live match developments (e.g., seeing which team won the toss or which players are performing well). Plan your team carefully before the match begins!',
        },
        {
          q: 'How many teams can I create for a single match?',
          a: 'You can create unlimited teams for any match. There are no restrictions on the number of teams you can create, allowing you to experiment with different strategies, test various captain choices, or hedge your bets across multiple player combinations. Each team you create will be entered into the public contest for that match, and all your teams will appear on the leaderboard independently. This flexibility is perfect for learning—you can create one "safe" team with proven performers and another "risky" team with dark horse picks to see which strategy works better.',
        },
        {
          q: 'Can I copy or clone an existing team?',
          a: 'Currently, the platform does not have a "clone team" feature, but it\'s on our roadmap for future updates. For now, if you want to create a similar team with minor changes, you\'ll need to manually recreate it by selecting players again. We understand this can be time-consuming, especially if you\'re creating multiple teams for the same match. As a workaround, you can keep a note of your player selections (screenshot or write them down) and use that as a reference when creating variations. We\'re actively working on adding team cloning, templates, and saved lineups in upcoming releases.',
        },
        {
          q: 'What happens if a player I selected doesn\'t play in the match?',
          a: 'If a player you selected is not included in the playing XI (doesn\'t take the field), they will score 0 points for your team. This is a common risk in fantasy cricket—team lineups are often announced just before the match starts, and sometimes players are rested, injured, or dropped. To minimize this risk: (1) Check team news and probable XIs before creating your team, (2) Avoid selecting players who are injury-prone or out of form, (3) Edit your team right before the match starts if lineup announcements reveal surprises. Unfortunately, we cannot allow team edits after the match begins, even if a player doesn\'t play. This is part of the strategic challenge of fantasy cricket.',
        },
      ],
    },
    {
      category: 'Scoring System',
      icon: FileText,
      color: 'text-purple-600',
      questions: [
        {
          q: 'How are fantasy points calculated for batsmen?',
          a: 'Batsmen earn points based on runs scored, strike rate, and milestones: **Runs**: +1 point per run | **Boundary Bonus**: +1 point for every four, +2 points for every six | **Milestones**: +8 points for half-century (50 runs), +16 points for century (100 runs) | **Strike Rate Bonus** (for T20/ODI): +2 points if strike rate is between 80-100, +4 points if strike rate is 100-120, +6 points if strike rate is above 120 | **Dismissal**: -2 points for getting out (duck = 0 runs and out). Example: A batsman who scores 75 runs (75 points) with 8 fours (+8) and 2 sixes (+4), reaches a half-century (+8), and has a strike rate of 125 (+6) would earn 101 points (202 if captain, 151.5 if vice-captain).',
        },
        {
          q: 'How are fantasy points calculated for bowlers?',
          a: 'Bowlers earn points based on wickets taken, economy rate, and milestones: **Wickets**: +25 points per wicket | **Bonus Wickets**: +8 points for 4-wicket haul, +16 points for 5-wicket haul | **Maiden Overs**: +12 points per maiden over | **Economy Rate Bonus** (for T20/ODI): +4 points if economy rate is between 5-6, +7 points if economy rate is between 4-5, +10 points if economy rate is below 4 | **LBW/Bowled Bonus**: +8 points for getting a batsman out LBW or bowled (in addition to wicket points). Example: A bowler who takes 3 wickets (75 points), bowls 1 maiden over (+12), and maintains an economy rate of 5.5 (+4) would earn 91 points (182 if captain, 136.5 if vice-captain).',
        },
        {
          q: 'How do all-rounders and wicket-keepers earn points?',
          a: '**All-Rounders** earn points from BOTH batting and bowling actions. They get full batting points (runs, boundaries, strike rate bonuses) AND full bowling points (wickets, economy bonuses, maidens). This makes in-form all-rounders extremely valuable, especially as captain choices. **Wicket-Keepers** earn points from batting (same as batsmen) PLUS fielding actions: +8 points per catch, +12 points per stumping, +8 points per run-out (direct hit). A wicket-keeper who scores 40 runs, takes 2 catches, and completes 1 stumping would earn 40 + 16 + 12 = 68 points.',
        },
        {
          q: 'What fielding points can players earn?',
          a: 'All players (regardless of role) can earn fielding points: **Catch**: +8 points | **Stumping** (wicket-keepers only): +12 points | **Run-Out** (direct hit): +12 points | **Run-Out** (thrower): +6 points | **Run-Out** (catcher): +6 points. Fielding points can significantly boost a player\'s total score, especially for players who may not contribute much with bat or ball. For example, a substitute fielder who takes 3 catches would earn 24 points just from fielding. When selecting your team, consider players known for their fielding prowess, especially in T20 matches where fielding plays a crucial role.',
        },
        {
          q: 'When are points updated during a live match?',
          a: 'Points are updated in real-time as the match progresses. Our system fetches live match data from Cricket Data API every 60 seconds during active matches and recalculates all team scores automatically. You can watch your team\'s points accumulate ball-by-ball by visiting the "My Teams" page or "Leaderboard" during the match. There may be a slight delay (30-90 seconds) between a real-world event (e.g., a wicket) and its reflection in your score due to API data propagation, but this delay is minimal. Final scores are locked once the match officially ends and all data is verified.',
        },
        {
          q: 'Why did my team score change after the match ended?',
          a: 'Occasionally, final scores may be adjusted after a match ends due to: (1) **Data Corrections**: Cricket Data API may correct errors in initial data (e.g., a catch initially credited to the wrong player), (2) **Umpire Decisions**: Runs or wickets may be revised based on post-match reviews, (3) **Penalty Runs**: Penalty runs awarded for no-balls, wides, or other infractions may be recalculated. These adjustments are rare but can happen. If you notice a significant discrepancy that seems incorrect, please contact our support team with details (match ID, player name, expected vs. actual points), and we\'ll investigate. We rely on official data sources and cannot manually override scores without verification.',
        },
      ],
    },
    {
      category: 'Contests & Leaderboards',
      icon: Trophy,
      color: 'text-yellow-600',
      questions: [
        {
          q: 'How do contests work on REIKI ENERGY?',
          a: 'Every match has a public contest that all users can join for free. When you create a team for a match, it\'s automatically entered into that match\'s contest. All teams compete against each other, and the leaderboard ranks teams based on total fantasy points scored. There are no entry fees, no cash prizes, and no limits on the number of participants. Contests close when the match starts (no more teams can be added), and final rankings are determined after the match ends. Top performers are displayed on the leaderboard, showcasing their strategic skills and cricket knowledge. We may introduce private contests (where you can challenge specific friends) in the future.',
        },
        {
          q: 'What do I win if I rank #1 on the leaderboard?',
          a: 'REIKI ENERGY does not offer cash prizes, rewards, or any form of monetary compensation. Ranking #1 on the leaderboard is a recognition of your strategic thinking, cricket knowledge, and fantasy skills—nothing more. Your achievement is displayed publicly on the leaderboard, and you can take pride in outperforming thousands of other users. This is a free-to-play gaming platform, not a gambling or prize-money platform. If you\'re looking to win money, REIKI ENERGY is not the right platform for you. Our goal is to help you learn and improve your fantasy cricket skills in a risk-free environment.',
        },
        {
          q: 'Can I see other users\' team compositions?',
          a: 'No. Team compositions are private and cannot be viewed by other users. You can only see usernames and total scores on the leaderboard, not the specific players they selected or their captain/vice-captain choices. This privacy policy ensures fair play and prevents users from copying successful teams. After the match ends, you can analyze your own team\'s performance in detail (which players scored well, which didn\'t), but you cannot see other users\' teams. This encourages independent strategic thinking and prevents "bandwagon" behavior where everyone copies the top-ranked teams.',
        },
        {
          q: 'How are leaderboard rankings calculated?',
          a: 'Leaderboard rankings are determined purely by total fantasy points scored by your team. The formula is simple: (Sum of all 11 players\' points) + (Captain bonus: captain\'s points × 1) + (Vice-captain bonus: vice-captain\'s points × 0.5) = Total Team Score. Higher total score = higher rank. In case of a tie (two teams with the exact same score), the team that was created earlier (timestamp) ranks higher. Rankings are updated in real-time during the match and finalized once the match ends. You can track your rank throughout the match by visiting the Leaderboard page.',
        },
      ],
    },
    {
      category: 'Legal & Compliance',
      icon: Shield,
      color: 'text-red-600',
      questions: [
        {
          q: 'Is fantasy cricket legal in India?',
          a: 'Yes, fantasy cricket is legal in most of India. The Supreme Court of India and various High Courts have recognized fantasy sports as a "game of skill" (not gambling or a game of chance), making it legal under Indian law. However, some states have enacted their own laws restricting or banning fantasy sports platforms. REIKI ENERGY complies with all applicable central and state regulations by: (1) Restricting access from states where fantasy sports are prohibited (AP, Assam, Odisha, Telangana, Nagaland, Sikkim), (2) Enforcing strict 18+ age verification, (3) Operating as a free-to-play platform (no real money involved), (4) Maintaining transparent operations and data practices. We are a legally registered company (CIN: U86909HR2024PTC119844) and fully compliant with Indian law.',
        },
        {
          q: 'Why is REIKI ENERGY completely free? What\'s the catch?',
          a: 'There is no catch. REIKI ENERGY is genuinely 100% free because we are funded by investors who believe in making fantasy sports accessible and want to provide a safe environment for cricket fans. Our investors understand that not everything needs to be monetized and that education has value beyond profit. We do not charge users, sell data, or push gambling-style mechanics. Our success is measured by user engagement and satisfaction, not by revenue. In the future, we may introduce optional premium features (like advanced analytics tools or cricket merchandise partnerships), but the core platform will always remain free. This is our permanent commitment, documented in our Terms of Service.',
        },
        {
          q: 'How do you protect my personal data and privacy?',
          a: 'We take data privacy extremely seriously and implement multiple layers of protection: (1) **Encryption**: All data transmitted between your device and our servers is encrypted using TLS/SSL (bank-grade security), (2) **Secure Storage**: Personal information is stored in encrypted databases with restricted access, (3) **No Data Selling**: We never sell, share, or monetize user data. Your information is used only for account management and platform functionality, (4) **Compliance**: We comply with India\'s data protection regulations and industry best practices, (5) **Minimal Collection**: We only collect data necessary for the platform to function (name, email, age, state). We don\'t ask for phone numbers, addresses, or financial information. Read our Privacy Policy for complete details on data collection, usage, and your rights.',
        },
        {
          q: 'What happens if I violate the Terms of Service?',
          a: 'Violations of our Terms of Service can result in account suspension or permanent ban, depending on severity: **Minor Violations** (e.g., inappropriate username): Warning + forced correction | **Moderate Violations** (e.g., creating multiple accounts): Temporary suspension (7-30 days) | **Severe Violations** (e.g., cheating, using bots, harassment): Permanent ban with no appeal. We have automated systems and manual review processes to detect violations. If your account is banned, you will receive an email explaining the reason. Bans are final and non-negotiable in cases of severe violations. To avoid issues, please read our Terms of Service carefully and play fairly. If you believe you were banned in error, contact support with evidence.',
        },
      ],
    },
    {
      category: 'Technical & Platform',
      icon: Settings,
      color: 'text-cyan-600',
      questions: [
        {
          q: 'Which web browsers are supported?',
          a: 'REIKI ENERGY works best on modern web browsers released within the last 2 years. **Fully Supported**: Google Chrome (version 90+), Mozilla Firefox (version 88+), Safari (version 14+), Microsoft Edge (version 90+), Opera (version 76+), Brave (version 1.25+). **Not Supported**: Internet Explorer (discontinued by Microsoft), very old browser versions. For the best experience, we recommend using Google Chrome or Mozilla Firefox on desktop, and Chrome or Safari on mobile devices. If you encounter display issues or broken functionality, first try updating your browser to the latest version. Most browser-related problems are resolved by simply updating.',
        },
        {
          q: 'Where does your cricket match data come from?',
          a: 'We use Cricket Data API (https://cricketdata.org), a premium paid subscription service that provides real-time cricket data for international and domestic matches. This API is used by professional sports platforms worldwide and offers: (1) Live scores updated every few seconds, (2) Detailed player statistics and performance data, (3) Match schedules, team lineups, and venue information, (4) Ball-by-ball commentary and events. All data is sourced from official cricket boards and verified by Cricket Data API\'s data team. We do not manually enter or modify any match data—everything is automated and authentic. This ensures fairness and accuracy for all users.',
        },
        {
          q: 'Why are some matches not available on the platform?',
          a: 'Not all cricket matches are available on REIKI ENERGY due to data licensing and API coverage limitations. Cricket Data API provides coverage for: (1) All international matches (T20I, ODI, Test) involving major cricket nations, (2) Major T20 leagues (IPL, BBL, CPL, PSL, etc.), (3) Select domestic tournaments. However, smaller domestic leagues, club-level matches, or exhibition games may not be covered. Additionally, we only display matches that have confirmed schedules and squad information. If you don\'t see a specific match you\'re looking for, it\'s likely not covered by our data provider. We\'re constantly working to expand coverage as our platform grows.',
        },
        {
          q: 'What should I do if the website is slow or not loading?',
          a: 'If you experience slow loading or performance issues, try these troubleshooting steps: (1) **Refresh the page**: Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac) to force-refresh and clear cache, (2) **Check your internet connection**: Run a speed test (speedtest.net) to ensure you have stable internet, (3) **Clear browser cache**: Go to browser settings and clear cached images and files, (4) **Try a different browser**: Test if the issue persists in another browser (Chrome, Firefox, Safari), (5) **Disable browser extensions**: Ad blockers or privacy extensions may interfere with the site, (6) **Check our status**: Visit our social media or contact page for service status updates. If none of these steps work, contact our support team with details (browser, device, error messages).',
        },
        {
          q: 'Do you have a mobile app for iOS or Android?',
          a: 'Currently, REIKI ENERGY does not have dedicated mobile apps for iOS or Android. However, our website is fully responsive and mobile-optimized, providing an excellent experience on smartphones and tablets through your mobile browser (Chrome, Safari, Firefox). You can add the website to your home screen for quick access: **iOS**: Open Safari, tap the Share button, select "Add to Home Screen" | **Android**: Open Chrome, tap the three-dot menu, select "Add to Home Screen". This creates an app-like icon on your home screen that opens the website in full-screen mode. We may develop native mobile apps in the future based on user demand, but the mobile web experience is our current priority.',
        },
      ],
    },
    {
      category: 'Account Management',
      icon: Lock,
      color: 'text-indigo-600',
      questions: [
        {
          q: 'How do I change my email address?',
          a: 'To change your registered email address: (1) Log in to your account, (2) Go to Profile Settings, (3) Click "Change Email" in the Account section, (4) Enter your new email address, (5) Enter your current password to confirm, (6) Click "Update Email". You\'ll receive a verification email at your NEW email address with a confirmation link. Click the link to complete the email change. Your old email will receive a notification about the change for security purposes. If you no longer have access to your old email and need to change it, contact our support team with proof of identity (account details, registration information) for manual verification.',
        },
        {
          q: 'Can I change my username or display name?',
          a: 'Yes, you can change your display name (the name shown on leaderboards and in your profile) at any time: (1) Go to Profile Settings, (2) Edit the "Display Name" field, (3) Click "Save Changes". However, your username (used for login) cannot be changed once your account is created. Display names must be appropriate and cannot contain offensive language, impersonation attempts, or promotional content. If your display name violates our community guidelines, it will be reset to a default name, and you may receive a warning. Choose a display name that represents you positively in the REIKI ENERGY community.',
        },
        {
          q: 'What should I do if my account is hacked or compromised?',
          a: 'If you suspect your account has been hacked or accessed without your permission: (1) **Change your password immediately**: Go to Profile Settings > Security > Change Password, (2) **Log out all sessions**: Click "Log Out All Devices" to force logout from all active sessions, (3) **Check account activity**: Review your recent teams, profile changes, and any suspicious activity, (4) **Contact support**: Email us immediately at support@reikienergy.com with details (when you noticed the issue, what changed, any suspicious emails you received), (5) **Enable two-factor authentication** (if available in the future). For prevention, use a strong, unique password (not reused from other websites), never share your password, and be cautious of phishing emails pretending to be from REIKI ENERGY.',
        },
      ],
    },
    {
      category: 'Troubleshooting',
      icon: AlertCircle,
      color: 'text-pink-600',
      questions: [
        {
          q: 'Why can\'t I save my team? I get an error message.',
          a: 'If you\'re unable to save your team, check for these common issues: (1) **Invalid team composition**: Ensure you have exactly 11 players with correct role distribution (1-4 WK, 3-6 BAT, 1-4 AR, 3-6 BOWL), (2) **No captain/vice-captain selected**: You must choose both a captain and vice-captain, (3) **Too many players from one team**: Maximum 7 players from one team allowed, (4) **Match already started**: You cannot create or edit teams after the match begins, (5) **Network issue**: Check your internet connection and try again. The error message should indicate the specific problem. If the error persists and you\'ve verified all rules are followed, contact support with a screenshot of the error and your team composition.',
        },
        {
          q: 'My team\'s points don\'t match what I calculated. Why?',
          a: 'Discrepancies in point calculations can occur due to: (1) **Misunderstanding scoring rules**: Double-check our scoring system documentation—some bonuses (strike rate, economy rate) have specific thresholds, (2) **Captain/vice-captain multipliers**: Remember that captain gets 2x points (not 1x + bonus) and vice-captain gets 1.5x, (3) **Negative points**: Batsmen lose 2 points for getting out, which may reduce their total, (4) **Data delays**: Live scores may have a 30-90 second delay during matches, (5) **Post-match corrections**: Final scores may be adjusted after the match if official data is corrected. If you still believe there\'s an error after verifying these factors, contact support with specific details (match ID, player name, expected points, actual points shown).',
        },
        {
          q: 'I didn\'t receive the password reset email. What should I do?',
          a: 'If you requested a password reset but didn\'t receive the email: (1) **Check spam/junk folder**: Reset emails are sometimes filtered as spam, (2) **Wait 5 minutes**: Email delivery can sometimes be delayed, (3) **Verify email address**: Make sure you entered the correct email address you used during registration, (4) **Check email provider**: Some email providers (especially corporate or school emails) may block automated emails, (5) **Try again**: Request another password reset—the previous link will be invalidated. If you still don\'t receive the email after 10 minutes and checking all folders, contact our support team at support@reikienergy.com from the email address you used to register. We can manually verify your identity and reset your password.',
        },
      ],
    },
    {
      category: 'Contact & Support',
      icon: MessageCircle,
      color: 'text-green-600',
      questions: [
        {
          q: 'How do I contact REIKI ENERGY support?',
          a: 'You can reach our support team through multiple channels: (1) **Contact Form**: Visit our Contact page and fill out the form with your query—we typically respond within 24 hours, (2) **Email**: Send detailed questions to support@reikienergy.com, (3) **Social Media**: Follow us on Twitter/Facebook for updates and quick responses to general questions. When contacting support, please provide: Your account email, a clear description of the issue, screenshots (if applicable), browser and device information, and any error messages you received. The more details you provide, the faster we can help resolve your issue. For urgent account security issues (hacked account, unauthorized access), email us immediately with "URGENT" in the subject line.',
        },
        {
          q: 'What is your response time for support queries?',
          a: 'Our support team aims to respond to all queries within 24 hours on business days (Monday-Friday, 9 AM - 6 PM IST). Complex technical issues may take 48-72 hours to fully resolve. During major cricket tournaments (IPL, World Cup, etc.), response times may be slightly longer due to high volume. We do not provide phone support at this time—all support is handled via email and contact form. For general questions, check this FAQ first, as most common issues are already answered here. If your question is urgent and time-sensitive (e.g., match starting soon and you can\'t create a team), mention "URGENT" in your subject line, and we\'ll prioritize your request.',
        },
        {
          q: 'Can I suggest new features or improvements?',
          a: 'Absolutely! We actively encourage user feedback and feature suggestions. REIKI ENERGY is built for the community, and your input directly shapes our development roadmap. To suggest features: (1) Visit our Contact page and select "Feature Suggestion" as the category, (2) Describe your idea in detail: what problem it solves, how it would work, and why it would benefit users, (3) Submit the form. We review all suggestions and prioritize based on user demand, technical feasibility, and platform goals. Popular requested features include: team cloning, private contests, advanced player statistics, mobile apps, and multi-language support. While we can\'t implement every suggestion, we appreciate your creativity and involvement in making REIKI ENERGY better!',
        },
      ],
    },
  ];

  // Filter FAQs based on search query
  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq =>
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-sm px-4 py-1">Help Center</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 flex items-center justify-center gap-3 flex-wrap">
              <HelpCircle className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600" />
              <span>Frequently Asked Questions</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              Everything you need to know about REIKI ENERGY fantasy cricket platform. 40+ detailed answers covering registration, gameplay, scoring, legal compliance, and technical support.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search questions... (e.g., 'how to create team', 'scoring system', 'age verification')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-full border-2 focus:border-emerald-500"
              />
            </div>

            {searchQuery && (
              <p className="mt-4 text-sm text-muted-foreground">
                Found {filteredFaqs.reduce((acc, cat) => acc + cat.questions.length, 0)} results for "{searchQuery}"
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16">
                <AlertCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">No results found</h3>
                <p className="text-muted-foreground mb-6">
                  Try different keywords or browse all categories below
                </p>
                <Button onClick={() => setSearchQuery('')} variant="outline">
                  Clear Search
                </Button>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredFaqs.map((category, categoryIndex) => {
                  const IconComponent = category.icon;
                  return (
                    <div key={categoryIndex} className="scroll-mt-20" id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-muted">
                          <IconComponent className={`h-6 w-6 ${category.color}`} />
                        </div>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold">{category.category}</h2>
                          <p className="text-sm text-muted-foreground">{category.questions.length} questions</p>
                        </div>
                      </div>
                      
                      <Accordion type="single" collapsible className="space-y-3">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`${categoryIndex}-${faqIndex}`}
                            className="border-2 rounded-xl px-6 py-2 hover:border-emerald-500/50 transition-colors bg-card"
                          >
                            <AccordionTrigger className="text-left hover:no-underline py-5">
                              <span className="font-semibold text-base sm:text-lg pr-4">{faq.q}</span>
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-5">
                              {faq.a}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Still Have Questions CTA */}
            <div className="mt-20 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 rounded-2xl p-8 sm:p-12 text-center border-2 border-emerald-500/20">
              <MessageCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Can't find what you're looking for? Our support team is here to help. We typically respond within 24 hours on business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="px-8 py-6 text-base">
                    Contact Support
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-base">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
