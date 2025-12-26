/**
 * Terms and Conditions Page - REIKI ENERGY
 * Legal terms for platform usage
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
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
            <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions</h1>
            <p className="text-lg text-muted-foreground">Last Updated: December 26, 2024</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-8">
              <p className="text-sm mb-0">
                <strong>Important Notice:</strong> By accessing and using REIKI ENERGY platform,
                you agree to be bound by these Terms and Conditions. Please read them carefully
                before using our services.
              </p>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms and Conditions ("Terms") govern your access to and use of the REIKI
              ENERGY fantasy cricket platform ("Platform") operated by REIKI ENERGY GLOBAL PRIVATE
              LIMITED ("Company", "we", "us", or "our"). By registering, accessing, or using the
              Platform, you agree to comply with and be bound by these Terms.
            </p>

            <h2>2. Eligibility</h2>
            <h3>2.1 Age Requirement</h3>
            <p>
              You must be at least 18 years of age to use this Platform. By using the Platform, you
              represent and warrant that you are 18 years or older.
            </p>

            <h3>2.2 Geographic Restrictions</h3>
            <p>
              The Platform is NOT available to residents of the following Indian states due to
              government compliance requirements:
            </p>
            <ul>
              <li>Andhra Pradesh</li>
              <li>Assam</li>
              <li>Nagaland</li>
              <li>Odisha</li>
              <li>Sikkim</li>
              <li>Telangana</li>
            </ul>
            <p>
              If you are a resident of any of these states, you are prohibited from registering or
              using the Platform.
            </p>

            <h2>3. Nature of Service</h2>
            <h3>3.1 Free-to-Play Platform</h3>
            <p>
              REIKI ENERGY is a completely free-to-play fantasy cricket platform. There are NO
              entry fees, NO deposits, NO withdrawals, and NO real money transactions of any kind.
            </p>

            <h3>3.2 No Real Money Prizes</h3>
            <p>
              This Platform does NOT offer any cash prizes, monetary rewards, or real money
              winnings. Winners are recognized on the leaderboard for educational and entertainment
              purposes only.
            </p>

            <h3>3.3 Educational Purpose</h3>
            <p>
              The Platform is designed for educational and entertainment purposes to help users
              learn fantasy cricket strategies, player analysis, and decision-making skills.
            </p>

            <h2>4. User Account</h2>
            <h3>4.1 Registration</h3>
            <p>
              To use the Platform, you must create an account by providing accurate, complete, and
              current information including your name, email address, date of birth, and state of
              residence.
            </p>

            <h3>4.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You must immediately notify us
              of any unauthorized use of your account.
            </p>

            <h3>4.3 Account Termination</h3>
            <p>
              We reserve the right to suspend or terminate your account at any time if we believe
              you have violated these Terms or engaged in fraudulent, abusive, or illegal activity.
            </p>

            <h2>5. User Conduct</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Provide false or misleading information during registration</li>
              <li>Create multiple accounts</li>
              <li>Use automated systems or bots to access the Platform</li>
              <li>Attempt to manipulate or exploit the scoring system</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Platform</li>
              <li>Use the Platform for any commercial purpose without our written consent</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of the Platform, including but not limited
              to text, graphics, logos, images, and software, are the exclusive property of REIKI
              ENERGY GLOBAL PRIVATE LIMITED and are protected by Indian and international copyright,
              trademark, and other intellectual property laws.
            </p>

            <h2>7. Third-Party Data</h2>
            <p>
              The Platform uses Cricket Data API to provide real-time match data, player statistics,
              and live scores. We are not responsible for the accuracy, completeness, or timeliness
              of third-party data.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
              EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED,
              ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, REIKI ENERGY GLOBAL PRIVATE LIMITED SHALL NOT
              BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
              ARISING OUT OF OR RELATED TO YOUR USE OF THE PLATFORM.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of
              significant changes by posting a notice on the Platform. Your continued use of the
              Platform after such modifications constitutes your acceptance of the updated Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising out of or related to these Terms shall be subject to the
              exclusive jurisdiction of the courts in Karnal, Haryana, India.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us:
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
                By clicking "I Accept" during registration or by using the Platform, you acknowledge
                that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
