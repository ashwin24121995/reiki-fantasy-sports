/**
 * Fair Play Policy Page - REIKI ENERGY
 * Fair play guidelines and anti-cheating measures
 */

import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FairPlay() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Legal</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <Award className="h-10 w-10 text-primary" />
              Fair Play Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Ensuring integrity, transparency, and fair competition
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-8">
              <p className="text-sm mb-0">
                <strong>Our Commitment:</strong> REIKI ENERGY is committed to maintaining a fair,
                transparent, and ethical fantasy cricket platform where all users compete on equal
                terms based on skill and knowledge.
              </p>
            </div>

            <h2>1. Core Principles</h2>
            <h3>1.1 Equal Opportunity</h3>
            <p>
              Every user has equal access to all features, match data, and player statistics. There
              are no premium tiers, paid advantages, or hidden information.
            </p>

            <h3>1.2 Transparency</h3>
            <p>
              All scoring rules, team composition requirements, and point calculations are clearly
              documented and publicly available. We do not make arbitrary changes to scoring after
              matches begin.
            </p>

            <h3>1.3 Skill-Based Competition</h3>
            <p>
              Success on REIKI ENERGY is based purely on your cricket knowledge, player analysis,
              and strategic decision-making—not luck, money, or unfair advantages.
            </p>

            <h2>2. Prohibited Activities</h2>
            <p>The following activities are strictly prohibited and will result in account suspension or termination:</p>

            <h3>2.1 Multiple Accounts</h3>
            <p>
              Creating or operating multiple accounts is not allowed. Each user is permitted only
              ONE account. Multiple accounts give unfair advantages and violate our fair play
              principles.
            </p>

            <h3>2.2 Automated Systems & Bots</h3>
            <p>
              Using automated scripts, bots, or any software to create teams, access data, or
              interact with the Platform is prohibited. All team selection must be done manually by
              humans.
            </p>

            <h3>2.3 Collusion & Match-Fixing</h3>
            <p>
              Any form of collusion between users, sharing of accounts, or coordinated team creation
              to manipulate leaderboards is strictly forbidden.
            </p>

            <h3>2.4 Exploitation of Bugs</h3>
            <p>
              Exploiting technical bugs, glitches, or vulnerabilities in the Platform for unfair
              advantage is prohibited. If you discover a bug, report it immediately—do not exploit
              it.
            </p>

            <h3>2.5 Harassment & Abuse</h3>
            <p>
              Harassing, threatening, or abusing other users through any means is not tolerated. We
              maintain a respectful and inclusive community.
            </p>

            <h2>3. Data Integrity</h2>
            <h3>3.1 Accurate Match Data</h3>
            <p>
              We use Cricket Data API, a professional and reliable source, to ensure all match data,
              player statistics, and live scores are accurate and up-to-date.
            </p>

            <h3>3.2 Real-Time Scoring</h3>
            <p>
              Fantasy points are calculated in real-time based on actual match performance. There
              are no delays, manipulations, or manual adjustments to scores.
            </p>

            <h3>3.3 Transparent Scoring Rules</h3>
            <p>
              All scoring rules are published on our "How to Play" page. Points are awarded
              consistently according to these rules for all users without exception.
            </p>

            <h2>4. Anti-Cheating Measures</h2>
            <p>We employ multiple systems to detect and prevent cheating:</p>
            <ul>
              <li>
                <strong>Account Verification:</strong> Age and state verification during
                registration
              </li>
              <li>
                <strong>IP Monitoring:</strong> Detection of multiple accounts from same IP address
              </li>
              <li>
                <strong>Behavioral Analysis:</strong> Monitoring for suspicious patterns or
                automated activity
              </li>
              <li>
                <strong>Manual Reviews:</strong> Investigation of reported violations
              </li>
              <li>
                <strong>Security Audits:</strong> Regular platform security assessments
              </li>
            </ul>

            <h2>5. Reporting Violations</h2>
            <p>If you suspect another user is violating our Fair Play Policy, please report it:</p>
            <ul>
              <li>Email: fairplay@smartplaydrafts.com</li>
              <li>Subject: "Fair Play Violation Report"</li>
              <li>
                Include: User details, description of violation, and any supporting evidence
              </li>
            </ul>
            <p>
              All reports are investigated confidentially. False reports made with malicious intent
              may result in action against the reporter.
            </p>

            <h2>6. Consequences of Violations</h2>
            <h3>6.1 First Offense</h3>
            <p>
              Warning issued and temporary account suspension (7-30 days) depending on severity.
            </p>

            <h3>6.2 Second Offense</h3>
            <p>Extended suspension (30-90 days) and removal from current contests.</p>

            <h3>6.3 Severe or Repeated Violations</h3>
            <p>
              Permanent account termination and ban from the Platform. In cases involving illegal
              activity, we may report to authorities.
            </p>

            <h2>7. Appeals Process</h2>
            <p>
              If you believe your account was suspended or terminated in error, you may appeal:
            </p>
            <ul>
              <li>Email: appeals@smartplaydrafts.com</li>
              <li>Include: Your account details and explanation</li>
              <li>Response time: Within 7 business days</li>
            </ul>
            <p>Appeal decisions are final and binding.</p>

            <h2>8. Educational Focus</h2>
            <p>
              Remember, REIKI ENERGY is an educational platform. Our goal is to help you learn and
              improve your fantasy cricket skills in a fair environment. Cheating defeats the
              purpose of learning and ruins the experience for everyone.
            </p>

            <h2>9. Updates to Fair Play Policy</h2>
            <p>
              We may update this Fair Play Policy to address new challenges or improve our systems.
              Users will be notified of significant changes.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions about Fair Play Policy:
              <br />
              <br />
              <strong>REIKI ENERGY GLOBAL PRIVATE LIMITED</strong>
              <br />
              Email: fairplay@smartplaydrafts.com
              <br />
              CIN: U86909HR2024PTC119844
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <p className="text-sm mb-0">
                <strong>Remember:</strong> Fair play is everyone's responsibility. By following
                these guidelines, you help create a better experience for all users. Play fair,
                learn, and enjoy!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
