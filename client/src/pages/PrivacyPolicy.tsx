import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Lock, Eye, Database, Cookie, UserCheck, Globe, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your privacy is important to us. This policy explains how we collect, use, protect, and share your personal information.
          </p>
          <p className="text-sm text-blue-200 mt-4">
            <strong>Last Updated:</strong> December 30, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
              <p className="text-gray-700 text-lg leading-loose">
                REIKI ENERGY GLOBAL PRIVATE LIMITED ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our fantasy cricket platform ("Platform"). By using the Platform, you consent to the data practices described in this policy.
              </p>
            </div>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">1. Information We Collect</h2>
            </div>
            <div className="space-y-6 text-gray-700 text-lg leading-loose">
              
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">A. Information You Provide Directly</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-3"><strong>Account Registration:</strong> When you create an account, we collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Date of birth (for age verification)</li>
                    <li>State of residence (for legal compliance)</li>
                    <li>Password (encrypted and securely stored)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">B. Information Collected Automatically</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-3">When you use the Platform, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Device Information:</strong> IP address, browser type, operating system, device model</li>
                    <li><strong>Usage Data:</strong> Pages visited, time spent, features used, click patterns</li>
                    <li><strong>Log Data:</strong> Access times, error logs, performance data</li>
                    <li><strong>Location Data:</strong> Approximate location based on IP address (for state verification)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-3">C. Gameplay Information</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-3">We collect information about your fantasy cricket activities:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Teams created and player selections</li>
                    <li>Contests joined and rankings achieved</li>
                    <li>Points earned and leaderboard positions</li>
                    <li>Match preferences and playing patterns</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>We use the collected information for the following purposes:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">Platform Operations</h3>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Create and manage your account</li>
                    <li>• Process team creation and contest entries</li>
                    <li>• Calculate points and update leaderboards</li>
                    <li>• Provide customer support</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">Legal Compliance</h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Verify age (18+ requirement)</li>
                    <li>• Verify state of residence</li>
                    <li>• Prevent fraud and abuse</li>
                    <li>• Comply with legal obligations</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-2">Platform Improvement</h3>
                  <ul className="space-y-1 text-sm text-purple-800">
                    <li>• Analyze usage patterns</li>
                    <li>• Improve user experience</li>
                    <li>• Develop new features</li>
                    <li>• Fix bugs and optimize performance</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <h3 className="font-bold text-orange-900 mb-2">Communication</h3>
                  <ul className="space-y-1 text-sm text-orange-800">
                    <li>• Send account notifications</li>
                    <li>• Provide contest updates</li>
                    <li>• Share platform news</li>
                    <li>• Respond to inquiries</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6">
                <p className="text-amber-900">
                  <strong>Important:</strong> We will NEVER sell your personal information to third parties for marketing purposes. We are an educational platform, not a data broker.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Data Storage and Security */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">3. Data Storage and Security</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                <strong>Data Storage:</strong> Your personal information is stored on secure servers provided by Railway (railway.app), a reputable cloud infrastructure provider. Our database uses MySQL with encryption at rest and in transit.
              </p>
              <p>
                <strong>Security Measures:</strong> We implement industry-standard security measures to protect your data:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption:</strong> All sensitive data (passwords, personal information) is encrypted using bcrypt and AES-256</li>
                <li><strong>HTTPS:</strong> All data transmission is secured with SSL/TLS encryption</li>
                <li><strong>Access Control:</strong> Strict access controls limit who can view your data</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and vulnerability assessments</li>
                <li><strong>Monitoring:</strong> 24/7 monitoring for suspicious activity and unauthorized access attempts</li>
              </ul>
              <p>
                <strong>Data Breach Protocol:</strong> In the unlikely event of a data breach, we will notify affected users within 72 hours via email and provide guidance on protective measures.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-900">
                  <strong>Important:</strong> While we take extensive measures to protect your data, no method of transmission over the internet or electronic storage is 100% secure. You are responsible for maintaining the confidentiality of your account credentials.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                We use the following third-party services to operate the Platform:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Cricket Data API</h3>
                  <p className="text-sm">We use third-party cricket data APIs to fetch live match information, player statistics, and scores. These providers may collect usage data but do not have access to your personal information.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Cloud Hosting (Railway)</h3>
                  <p className="text-sm">Our platform is hosted on Railway's infrastructure. Railway has access to server logs and technical data but not to your encrypted personal information. Railway complies with SOC 2 Type II and GDPR standards.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">Email Service</h3>
                  <p className="text-sm">We use email service providers to send account notifications and updates. Your email address is shared with these providers solely for delivery purposes.</p>
                </div>
              </div>
              <p>
                <strong>Third-Party Links:</strong> The Platform may contain links to external websites. We are not responsible for the privacy practices of these third-party sites. We encourage you to read their privacy policies.
              </p>
            </div>
          </section>

          {/* 5. Cookies and Tracking */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">5. Cookies and Tracking Technologies</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                We use cookies and similar tracking technologies to enhance your experience on the Platform.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Types of Cookies We Use:</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for authentication, session management, and platform functionality. These cannot be disabled.
                  </li>
                  <li>
                    <strong>Performance Cookies:</strong> Help us understand how users interact with the Platform to improve performance.
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings (language, theme) for a better experience.
                  </li>
                </ul>
              </div>
              <p>
                <strong>Managing Cookies:</strong> You can control cookies through your browser settings. However, disabling essential cookies may affect Platform functionality. Most browsers allow you to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>View and delete cookies</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from specific websites</li>
                <li>Accept cookies before they are stored</li>
              </ul>
            </div>
          </section>

          {/* 6. Your Rights and Choices */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">6. Your Rights and Choices</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">✓ Access</h3>
                  <p className="text-sm text-blue-800">Request a copy of all personal information we hold about you</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">✓ Correction</h3>
                  <p className="text-sm text-blue-800">Update or correct inaccurate information in your profile settings</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">✓ Deletion</h3>
                  <p className="text-sm text-blue-800">Request permanent deletion of your account and associated data</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">✓ Portability</h3>
                  <p className="text-sm text-blue-800">Export your data in a machine-readable format (JSON/CSV)</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">✓ Objection</h3>
                  <p className="text-sm text-blue-800">Object to certain data processing activities</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-900 mb-2">✓ Restriction</h3>
                  <p className="text-sm text-blue-800">Request restriction of processing in certain circumstances</p>
                </div>
              </div>
              <p>
                <strong>How to Exercise Your Rights:</strong> To exercise any of these rights, please contact us at <a href="mailto:privacy@reikienergy.in" className="text-blue-600 hover:underline">privacy@reikienergy.in</a>. We will respond to your request within 30 days.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-amber-900">
                  <strong>Note:</strong> We may need to verify your identity before processing certain requests. We may also retain certain information as required by law or for legitimate business purposes.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Data Retention Policy</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Retention Periods:</h3>
                <ul className="space-y-2">
                  <li><strong>Active Accounts:</strong> Data retained while your account is active</li>
                  <li><strong>Inactive Accounts:</strong> Data retained for 2 years after last login, then automatically deleted</li>
                  <li><strong>Deleted Accounts:</strong> Most data deleted immediately; some data retained for 90 days for legal compliance</li>
                  <li><strong>Legal Requirements:</strong> Certain data (age verification, state verification) retained for 7 years as required by Indian law</li>
                  <li><strong>Anonymized Data:</strong> Aggregated, anonymized usage statistics may be retained indefinitely for research and improvement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 8. Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-red-900 leading-relaxed">
                <strong>18+ Only:</strong> REIKI ENERGY is strictly for users aged 18 and above. We do not knowingly collect personal information from anyone under 18 years of age. If we discover that we have collected information from a minor, we will delete it immediately. If you believe we have inadvertently collected information from a minor, please contact us at <a href="mailto:privacy@reikienergy.in" className="text-red-700 hover:underline">privacy@reikienergy.in</a>.
              </p>
            </div>
          </section>

          {/* 9. International Data Transfers */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">9. International Data Transfers</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                <strong>Data Location:</strong> Your personal information is primarily stored on servers located in India. However, some third-party services we use (such as Railway) may store data on servers in other countries, including the United States and Europe.
              </p>
              <p>
                <strong>Data Protection:</strong> When we transfer data internationally, we ensure that appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard Contractual Clauses (SCCs) approved by regulatory authorities</li>
                <li>Ensuring third-party providers comply with GDPR, SOC 2, or equivalent standards</li>
                <li>Encryption of data in transit and at rest</li>
              </ul>
            </div>
          </section>

          {/* 10. Changes to This Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Update the "Last Updated" date at the top of this page</li>
                <li>Notify registered users via email for material changes</li>
                <li>Display a prominent notice on the Platform</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically. Your continued use of the Platform after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </section>

          {/* 11. Contact Us */}
          <section className="mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">11. Contact Us</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Privacy Officer:</strong> REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                <p><strong>Email:</strong> <a href="mailto:privacy@reikienergy.in" className="text-blue-600 hover:underline">privacy@reikienergy.in</a></p>
                <p><strong>Support Email:</strong> <a href="mailto:support@reikienergy.in" className="text-blue-600 hover:underline">support@reikienergy.in</a></p>
                <p><strong>Registered Address:</strong> H NO-41, RESIDENTIAL COLONY, BAZIDA JATTAN, Karnal, Haryana - 132001, India</p>
                <p className="text-sm text-gray-600 mt-4">We aim to respond to all privacy-related inquiries within 30 days.</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
