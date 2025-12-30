import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, AlertTriangle, Ban, Eye, Scale, Flag, CheckCircle, Mail } from "lucide-react";

export default function FairPlay() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Fair Play Policy</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            REIKI ENERGY is committed to maintaining a fair, transparent, and enjoyable environment for all users. This policy outlines our rules and enforcement measures.
          </p>
          <p className="text-sm text-green-200 mt-4">
            <strong>Last Updated:</strong> December 30, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 leading-relaxed">
                Fair play is the foundation of REIKI ENERGY. We believe that every user deserves an equal opportunity to learn, compete, and enjoy fantasy cricket without unfair advantages or manipulation. This Fair Play Policy explains what constitutes fair play, prohibited activities, and the consequences of violations.
              </p>
            </div>
          </section>

          {/* 1. Our Commitment to Fair Play */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Our Commitment to Fair Play</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                REIKI ENERGY is dedicated to providing a level playing field for all users. We achieve this through:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">✓ Transparent Scoring</h3>
                  <p className="text-sm text-green-800">All scoring rules are publicly available. Points are calculated automatically based on official cricket data with no manual intervention.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">✓ Equal Access</h3>
                  <p className="text-sm text-green-800">All users have access to the same information, features, and opportunities. No premium tiers or pay-to-win mechanics.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">✓ Real-Time Updates</h3>
                  <p className="text-sm text-green-800">Live scores and points are updated in real-time from official sources, ensuring accuracy and fairness.</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">✓ Active Monitoring</h3>
                  <p className="text-sm text-green-800">We use automated systems and manual reviews to detect suspicious activity and maintain platform integrity.</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Prohibited Activities */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Prohibited Activities</h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The following activities are strictly prohibited and will result in penalties:
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-3">A. Cheating and Unfair Advantages</h3>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Automation:</strong> Using bots, scripts, macros, or any automated tools to create teams, join contests, or interact with the Platform.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Exploits:</strong> Exploiting bugs, glitches, or vulnerabilities to gain unfair advantages.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Data Scraping:</strong> Using automated tools to extract data from the Platform without permission.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Reverse Engineering:</strong> Attempting to reverse engineer, decompile, or extract source code from the Platform.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-3">B. Collusion and Manipulation</h3>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Collusion:</strong> Coordinating with other users to manipulate contest outcomes or leaderboard rankings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Insider Information:</strong> Using or sharing non-public information about player availability, injuries, or team selections before official announcements.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Match-Fixing Knowledge:</strong> Creating teams based on knowledge or suspicion of match-fixing or spot-fixing.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Coordinated Teams:</strong> Creating identical or nearly identical teams across multiple accounts to dominate contests.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-3">C. Multiple Accounts and Identity Fraud</h3>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Multiple Accounts:</strong> Creating or operating more than one account per person.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Account Sharing:</strong> Sharing your account credentials with others or accessing someone else's account.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>False Information:</strong> Providing false, misleading, or fraudulent information during registration or verification.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Identity Theft:</strong> Using someone else's name, email, or personal information to create an account.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-red-900 mb-3">D. Abuse and Misconduct</h3>
                <ul className="space-y-2 text-red-900">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Harassment:</strong> Harassing, threatening, or abusing other users through any means.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Hate Speech:</strong> Posting content that promotes hatred, discrimination, or violence based on race, religion, gender, nationality, or other protected characteristics.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Spam:</strong> Sending unsolicited messages, advertisements, or promotional content.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold mt-1">✗</span>
                    <span><strong>Platform Disruption:</strong> Attempting to disrupt, damage, or impair the Platform's operation through DDoS attacks, malware, or other means.</span>
                  </li>
                </ul>
              </div>

            </div>
          </section>

          {/* 3. Detection and Monitoring */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. Detection and Monitoring</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We employ multiple methods to detect and prevent violations of this Fair Play Policy:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-4">Detection Methods:</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Automated Systems:</strong> Machine learning algorithms analyze user behavior patterns, team creation speed, login patterns, and other metrics to identify suspicious activity.
                  </li>
                  <li>
                    <strong>Manual Reviews:</strong> Our moderation team conducts regular manual reviews of flagged accounts, unusual score patterns, and user reports.
                  </li>
                  <li>
                    <strong>Device Fingerprinting:</strong> We track device identifiers to detect multiple accounts from the same device.
                  </li>
                  <li>
                    <strong>IP Monitoring:</strong> We monitor IP addresses to identify suspicious login patterns and multiple accounts from the same location.
                  </li>
                  <li>
                    <strong>Behavioral Analysis:</strong> We analyze gameplay patterns, team composition similarities, and timing of actions to detect collusion.
                  </li>
                  <li>
                    <strong>User Reports:</strong> We investigate all user reports of suspicious activity or rule violations.
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <p className="text-blue-900">
                  <strong>Privacy Note:</strong> All monitoring is conducted in accordance with our Privacy Policy. We only collect and analyze data necessary for maintaining platform integrity.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Penalties and Consequences */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Penalties and Consequences</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Violations of this Fair Play Policy will result in penalties proportionate to the severity and frequency of the violation:
              </p>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-bold text-yellow-900 mb-2">⚠️ First Warning (Minor Violations)</h3>
                  <p className="text-sm text-yellow-900 mb-2">For unintentional or minor violations (e.g., inappropriate team name):</p>
                  <ul className="text-sm text-yellow-800 space-y-1 ml-4">
                    <li>• Email warning with explanation of violation</li>
                    <li>• Required correction of the issue</li>
                    <li>• No account suspension</li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                  <h3 className="font-bold text-orange-900 mb-2">🔶 Temporary Suspension (Moderate Violations)</h3>
                  <p className="text-sm text-orange-900 mb-2">For moderate violations (e.g., suspected multiple accounts, minor automation):</p>
                  <ul className="text-sm text-orange-800 space-y-1 ml-4">
                    <li>• Account suspended for 7-30 days</li>
                    <li>• All active contests disqualified</li>
                    <li>• Required acknowledgment of violation</li>
                    <li>• Closer monitoring upon reinstatement</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h3 className="font-bold text-red-900 mb-2">🚫 Permanent Ban (Severe Violations)</h3>
                  <p className="text-sm text-red-900 mb-2">For severe violations (e.g., confirmed cheating, collusion, harassment):</p>
                  <ul className="text-sm text-red-800 space-y-1 ml-4">
                    <li>• Permanent account termination</li>
                    <li>• All associated accounts banned</li>
                    <li>• IP and device ban to prevent re-registration</li>
                    <li>• Forfeiture of all rankings and achievements</li>
                    <li>• Possible legal action for serious violations</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-gray-700">
                  <strong>Repeat Offenders:</strong> Users who violate this policy multiple times will face escalating penalties, including permanent bans regardless of violation severity.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Appeal Process */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Appeal Process</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you believe your account was suspended or banned in error, you have the right to appeal:
              </p>
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="font-bold text-green-900 mb-4">How to Appeal:</h3>
                <ol className="space-y-3 text-green-900">
                  <li>
                    <strong>1. Submit Appeal:</strong> Send an email to <a href="mailto:appeals@reikienergy.in" className="text-green-700 hover:underline">appeals@reikienergy.in</a> within 30 days of the penalty with:
                    <ul className="ml-6 mt-2 space-y-1 text-sm">
                      <li>• Your registered email address</li>
                      <li>• Date of suspension/ban</li>
                      <li>• Detailed explanation of why you believe the penalty was incorrect</li>
                      <li>• Any supporting evidence</li>
                    </ul>
                  </li>
                  <li>
                    <strong>2. Review:</strong> Our appeals team will review your case within 7-14 business days. We may request additional information during this process.
                  </li>
                  <li>
                    <strong>3. Decision:</strong> You will receive a written decision via email. If your appeal is successful, your account will be reinstated. If denied, the decision is final.
                  </li>
                </ol>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-amber-900">
                  <strong>Important:</strong> Appeals are only accepted for suspensions and bans. We do not accept appeals for warnings or contest disqualifications. Submitting false information in an appeal may result in additional penalties.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Reporting Violations */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Flag className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Reporting Violations</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                We rely on our community to help maintain a fair environment. If you suspect another user is violating this Fair Play Policy, please report it:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4">How to Report:</h3>
                <ul className="space-y-2 text-blue-900">
                  <li>
                    <strong>Email:</strong> Send detailed information to <a href="mailto:report@reikienergy.in" className="text-blue-700 hover:underline">report@reikienergy.in</a>
                  </li>
                  <li>
                    <strong>Include:</strong> Username of suspected violator, type of violation, date/time, and any evidence (screenshots, descriptions)
                  </li>
                  <li>
                    <strong>Confidentiality:</strong> All reports are kept confidential. We do not disclose reporter identities.
                  </li>
                  <li>
                    <strong>Response Time:</strong> We investigate all reports within 48 hours and take appropriate action.
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-900">
                  <strong>False Reports:</strong> Submitting false or malicious reports to harm other users is itself a violation of this policy and will result in penalties.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Contact Information */}
          <section className="mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">7. Contact Information</h2>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-gray-700 mb-4">
                For questions about this Fair Play Policy or to report violations, contact us:
              </p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Fair Play Team:</strong> REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                <p><strong>Report Violations:</strong> <a href="mailto:report@reikienergy.in" className="text-green-600 hover:underline">report@reikienergy.in</a></p>
                <p><strong>Appeals:</strong> <a href="mailto:appeals@reikienergy.in" className="text-green-600 hover:underline">appeals@reikienergy.in</a></p>
                <p><strong>General Support:</strong> <a href="mailto:support@reikienergy.in" className="text-green-600 hover:underline">support@reikienergy.in</a></p>
                <p className="text-sm text-gray-600 mt-4">We are committed to maintaining a fair and enjoyable platform for all users. Thank you for playing fair!</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
