/**
 * Privacy Policy Page - REIKI ENERGY
 * Data protection and privacy information
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last Updated: December 26, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
              <p className="text-sm mb-0">
                <strong>Your Privacy Matters:</strong> REIKI ENERGY GLOBAL PRIVATE LIMITED is
                committed to protecting your personal information and your right to privacy. This
                Privacy Policy explains how we collect, use, and safeguard your data.
              </p>
            </div>

            <h2>1. Information We Collect</h2>
            <h3>1.1 Information You Provide</h3>
            <p>When you register on our Platform, we collect:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, date of birth, state of
                residence
              </li>
              <li>
                <strong>Account Credentials:</strong> Username and password (encrypted)
              </li>
              <li>
                <strong>Optional Information:</strong> Phone number (if provided)
              </li>
            </ul>

            <h3>1.2 Information Automatically Collected</h3>
            <p>When you use the Platform, we automatically collect:</p>
            <ul>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Usage data (pages visited, time spent, features used)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h3>1.3 Information We Do NOT Collect</h3>
            <p>
              Since REIKI ENERGY is a free-to-play platform with no real money transactions, we do
              NOT collect:
            </p>
            <ul>
              <li>Payment information or credit/debit card details</li>
              <li>Bank account information</li>
              <li>Financial transaction data</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use your personal information to:</p>
            <ul>
              <li>Create and manage your user account</li>
              <li>Verify your age (18+ requirement)</li>
              <li>Verify your state of residence (compliance with restricted states)</li>
              <li>Provide and improve our Platform services</li>
              <li>Send you important updates and notifications</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Prevent fraud, abuse, and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>3. How We Share Your Information</h2>
            <h3>3.1 We Do NOT Sell Your Data</h3>
            <p>
              We do NOT sell, rent, or trade your personal information to third parties for
              marketing purposes.
            </p>

            <h3>3.2 Limited Sharing</h3>
            <p>We may share your information only in the following circumstances:</p>
            <ul>
              <li>
                <strong>Service Providers:</strong> With trusted third-party service providers who
                help us operate the Platform (e.g., hosting, analytics, Cricket Data API)
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court order, or
                government regulations
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale
                of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize us to share your
                information
              </li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data:</p>
            <ul>
              <li>Passwords are encrypted using bcrypt hashing</li>
              <li>Secure HTTPS connections for all data transmission</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Secure database storage with encryption</li>
            </ul>
            <p>
              However, no method of transmission over the internet is 100% secure. While we strive
              to protect your data, we cannot guarantee absolute security.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as your account is active or as needed
              to provide our services. You may request account deletion at any time by contacting
              us. Upon deletion request, we will remove your data within 30 days, except where
              retention is required by law.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of your personal data
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and data
              </li>
              <li>
                <strong>Opt-Out:</strong> Unsubscribe from marketing communications
              </li>
              <li>
                <strong>Data Portability:</strong> Request your data in a portable format
              </li>
            </ul>
            <p>To exercise these rights, contact us at support@smartplaydrafts.com</p>

            <h2>7. Cookies and Tracking</h2>
            <p>We use cookies and similar technologies to:</p>
            <ul>
              <li>Remember your login session</li>
              <li>Store your theme preference (light/dark mode)</li>
              <li>Analyze Platform usage and performance</li>
              <li>Improve user experience</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may
              affect Platform functionality.
            </p>

            <h2>8. Children's Privacy</h2>
            <p>
              Our Platform is NOT intended for users under 18 years of age. We do not knowingly
              collect personal information from anyone under 18. If we discover that a user under 18
              has provided personal information, we will immediately delete their account and data.
            </p>

            <h2>9. Third-Party Links</h2>
            <p>
              Our Platform may contain links to third-party websites (e.g., Cricket Data API). We
              are not responsible for the privacy practices of these external sites. We encourage
              you to read their privacy policies.
            </p>

            <h2>10. Changes to Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant
              changes by posting a notice on the Platform or sending an email. Your continued use of
              the Platform after changes constitutes acceptance of the updated policy.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your data, please
              contact us:
              <br />
              <br />
              <strong>REIKI ENERGY GLOBAL PRIVATE LIMITED</strong>
              <br />
              H NO41, RESIDENCIAL COLONY, BAZIDA JATTAN
              <br />
              Karnal, Haryana - 132001, India
              <br />
              Email: support@smartplaydrafts.com
              <br />
              CIN: U86909HR2024PTC119844
            </p>

            <div className="bg-muted p-6 rounded-lg mt-8">
              <p className="text-sm mb-0">
                <strong>Data Protection Officer:</strong> For privacy-related inquiries, you can
                reach our Data Protection Officer at privacy@smartplaydrafts.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
