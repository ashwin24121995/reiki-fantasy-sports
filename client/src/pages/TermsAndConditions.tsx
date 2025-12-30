import { useLanguage } from "@/contexts/LanguageContext";
import { ScrollText, Shield, AlertTriangle, Scale, FileText, Mail } from "lucide-react";

export default function TermsAndConditions() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <ScrollText className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-xl text-emerald-100 max-w-3xl">
            Please read these terms carefully before using REIKI ENERGY. By accessing or using our platform, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-emerald-200 mt-4">
            <strong>Last Updated:</strong> December 30, 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
          
          {/* 1. Acceptance of Terms */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                Welcome to REIKI ENERGY, operated by <strong>REIKI ENERGY GLOBAL PRIVATE LIMITED</strong> (CIN: U86909HR2024PTC119844). These Terms and Conditions ("Terms") govern your access to and use of our fantasy cricket platform, website, and related services (collectively, the "Platform").
              </p>
              <p>
                By creating an account, accessing, or using any part of the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, Fair Play Policy, and Responsible Gaming guidelines. If you do not agree with any part of these Terms, you must not use the Platform.
              </p>
              <p>
                We reserve the right to modify, update, or replace these Terms at any time. Your continued use of the Platform after any changes constitutes acceptance of the new Terms. We will notify users of significant changes via email or platform notifications.
              </p>
            </div>
          </section>

          {/* 2. User Eligibility */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">2. User Eligibility</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                To use REIKI ENERGY, you must meet the following eligibility requirements:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-amber-900 mb-3">Eligibility Requirements:</h3>
                <ul className="space-y-2 text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Age:</strong> You must be at least 18 years old. We require age verification during registration.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Location:</strong> You must NOT be a resident of the following Indian states: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, or Telangana. These states have specific regulations that restrict fantasy sports platforms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Legal Capacity:</strong> You must have the legal capacity to enter into binding contracts under applicable law.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">•</span>
                    <span><strong>Compliance:</strong> You must comply with all applicable local, state, and national laws regarding online gaming and fantasy sports.</span>
                  </li>
                </ul>
              </div>
              <p>
                By registering, you represent and warrant that you meet all eligibility requirements. Providing false information about your age, location, or identity is strictly prohibited and will result in immediate account termination.
              </p>
            </div>
          </section>

          {/* 3. Account Registration and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                <strong>Account Creation:</strong> To access certain features of the Platform, you must create an account by providing accurate, current, and complete information, including your name, email address, date of birth, and state of residence.
              </p>
              <p>
                <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account credentials (username and password). You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use a strong, unique password</li>
                <li>Not share your account credentials with anyone</li>
                <li>Notify us immediately of any unauthorized access or security breach</li>
                <li>Log out from your account at the end of each session on shared devices</li>
              </ul>
              <p>
                <strong>One Account Per Person:</strong> You may only create and maintain one account. Creating multiple accounts to gain unfair advantages, manipulate leaderboards, or circumvent restrictions is strictly prohibited and will result in permanent ban of all associated accounts.
              </p>
              <p>
                <strong>Account Termination:</strong> We reserve the right to suspend or terminate your account at any time, with or without notice, if we believe you have violated these Terms or engaged in fraudulent, abusive, or illegal activity.
              </p>
            </div>
          </section>

          {/* 4. Platform Usage Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Platform Usage Rules</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                When using REIKI ENERGY, you agree to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="font-bold text-green-900 mb-2">✓ Permitted Activities</h3>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>• Create fantasy cricket teams</li>
                    <li>• Join free contests</li>
                    <li>• View leaderboards and rankings</li>
                    <li>• Learn fantasy cricket strategies</li>
                    <li>• Interact respectfully with other users</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h3 className="font-bold text-red-900 mb-2">✗ Prohibited Activities</h3>
                  <ul className="space-y-1 text-sm text-red-800">
                    <li>• Use bots, scripts, or automation tools</li>
                    <li>• Collude with other users</li>
                    <li>• Share insider information</li>
                    <li>• Harass or abuse other users</li>
                    <li>• Attempt to hack or disrupt the Platform</li>
                  </ul>
                </div>
              </div>
              <p>
                <strong>Educational Purpose:</strong> REIKI ENERGY is a free-to-play educational platform designed to help users learn fantasy cricket strategies. There are no entry fees, no cash prizes, and no real money involved. Any attempt to monetize the platform or engage in gambling activities is strictly prohibited.
              </p>
            </div>
          </section>

          {/* 5. Intellectual Property Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                <strong>Platform Ownership:</strong> All content, features, functionality, software, code, designs, graphics, logos, text, and other materials on the Platform are owned by REIKI ENERGY GLOBAL PRIVATE LIMITED or our licensors and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal, non-commercial, educational purposes only. You may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Copy, modify, distribute, sell, or lease any part of the Platform</li>
                <li>Reverse engineer, decompile, or attempt to extract source code</li>
                <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                <li>Use the Platform for commercial purposes without written permission</li>
              </ul>
              <p>
                <strong>User Content:</strong> By submitting content (team names, profile information, etc.) to the Platform, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute such content in connection with operating the Platform.
              </p>
            </div>
          </section>

          {/* 6. Disclaimer of Warranties */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-3xl font-bold text-gray-900">6. Disclaimer of Warranties</h2>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 text-lg leading-loose mb-4">
                THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.
              </p>
              <p className="text-gray-700 text-lg leading-loose mb-4">
                We do not warrant that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>The Platform will be uninterrupted, timely, secure, or error-free</li>
                <li>The results obtained from using the Platform will be accurate or reliable</li>
                <li>Any errors in the Platform will be corrected</li>
                <li>The Platform will meet your specific requirements</li>
              </ul>
              <p className="text-gray-700 text-lg leading-loose mt-4">
                <strong>Cricket Data:</strong> We obtain cricket match data from third-party APIs. While we strive for accuracy, we cannot guarantee the completeness, accuracy, or timeliness of such data. We are not responsible for any errors, delays, or omissions in cricket data.
              </p>
            </div>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, REIKI ENERGY GLOBAL PRIVATE LIMITED, ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your access to or use of (or inability to access or use) the Platform</li>
                <li>Any conduct or content of any third party on the Platform</li>
                <li>Any content obtained from the Platform</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>
              <p>
                IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID US IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED RUPEES (₹100).
              </p>
              <p className="text-sm italic">
                Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages. In such jurisdictions, our liability will be limited to the maximum extent permitted by law.
              </p>
            </div>
          </section>

          {/* 8. Governing Law and Dispute Resolution */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">8. Governing Law and Dispute Resolution</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. The courts of Haryana, India shall have exclusive jurisdiction over any disputes arising from these Terms or your use of the Platform.
              </p>
              <p>
                <strong>Dispute Resolution:</strong> Before filing any legal claim, you agree to first attempt to resolve the dispute informally by contacting us at <a href="mailto:legal@reikienergy.in" className="text-emerald-600 hover:underline">legal@reikienergy.in</a>. We will work with you in good faith to resolve the issue within 30 days.
              </p>
              <p>
                <strong>Arbitration:</strong> If informal resolution fails, any dispute shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted in English in Haryana, India, by a single arbitrator mutually agreed upon by both parties.
              </p>
              <p>
                <strong>Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
              </p>
            </div>
          </section>

          {/* 9. Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-loose">
              <p>
                We reserve the right to modify, update, or replace these Terms at any time at our sole discretion. When we make changes, we will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Update the "Last Updated" date at the top of this page</li>
                <li>Notify registered users via email to their registered email address</li>
                <li>Display a prominent notice on the Platform for at least 7 days</li>
              </ul>
              <p>
                <strong>Material Changes:</strong> For significant changes that materially affect your rights or obligations, we will provide at least 30 days' notice before the changes take effect. Your continued use of the Platform after the effective date of any changes constitutes your acceptance of the new Terms.
              </p>
              <p>
                If you do not agree with the modified Terms, you must stop using the Platform and may request account deletion by contacting us.
              </p>
            </div>
          </section>

          {/* 10. Contact Information */}
          <section className="mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-emerald-600" />
              <h2 className="text-3xl font-bold text-gray-900">10. Contact Information</h2>
            </div>
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <p className="text-gray-700 mb-4">
                If you have any questions, concerns, or feedback about these Terms, please contact us:
              </p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Company Name:</strong> REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                <p><strong>CIN:</strong> U86909HR2024PTC119844</p>
                <p><strong>PAN:</strong> AANCR4715K</p>
                <p><strong>Registered Address:</strong> H NO-41, RESIDENTIAL COLONY, BAZIDA JATTAN, Karnal, Haryana - 132001, India</p>
                <p><strong>Email:</strong> <a href="mailto:legal@reikienergy.in" className="text-emerald-600 hover:underline">legal@reikienergy.in</a></p>
                <p><strong>Support Email:</strong> <a href="mailto:support@reikienergy.in" className="text-emerald-600 hover:underline">support@reikienergy.in</a></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
