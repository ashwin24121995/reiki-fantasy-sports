import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, Shield, AlertCircle, Users, BookOpen, Phone, Mail, ExternalLink } from "lucide-react";

export default function ResponsibleGaming() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Responsible Gaming</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            REIKI ENERGY is committed to promoting responsible gaming practices and ensuring a safe, educational environment for all users.
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
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                REIKI ENERGY is a <strong>100% free educational platform</strong> designed to help users learn and improve their fantasy cricket skills. We do not involve any form of gambling, betting, or real money transactions. This Responsible Gaming Policy outlines our commitment to maintaining a safe, healthy, and educational environment for all users.
              </p>
            </div>
          </section>

          {/* 1. Our Educational Mission */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">1. Our Educational Mission</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                REIKI ENERGY exists to provide a skill-based learning environment where users can:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">📚 Learn Cricket Strategy</h3>
                  <p className="text-sm text-blue-800">Understand player performance, match conditions, and strategic team building without financial risk.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">🎯 Develop Analytical Skills</h3>
                  <p className="text-sm text-blue-800">Practice data analysis, pattern recognition, and decision-making in a safe environment.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">🏆 Compete Fairly</h3>
                  <p className="text-sm text-blue-800">Test your skills against others based purely on cricket knowledge, not luck or money.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-2">🤝 Build Community</h3>
                  <p className="text-sm text-blue-800">Connect with fellow cricket enthusiasts and learn from each other's strategies.</p>
                </div>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg mt-4">
                <p className="text-green-900">
                  <strong>Important:</strong> REIKI ENERGY will <strong>always remain 100% free</strong>. We will never introduce real money transactions, entry fees, or paid prizes. Our focus is education, not gambling.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Age Restrictions */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">2. Age Restrictions</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                To ensure a safe and appropriate environment, we enforce strict age restrictions:
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                <h3 className="font-bold text-amber-900 mb-3">Minimum Age: 18 Years</h3>
                <p className="text-amber-900 mb-4">
                  You must be at least 18 years old to create an account and use REIKI ENERGY. This requirement applies even though our platform is free and educational.
                </p>
                <h4 className="font-bold text-amber-900 mb-2">Why 18+?</h4>
                <ul className="space-y-2 text-amber-900">
                  <li>
                    <strong>Legal Compliance:</strong> Fantasy sports platforms in India must comply with state-specific laws, many of which require users to be 18+.
                  </li>
                  <li>
                    <strong>Maturity:</strong> Fantasy sports require analytical thinking, strategic planning, and emotional maturity to handle competition.
                  </li>
                  <li>
                    <strong>Responsible Use:</strong> Users must understand the difference between skill-based games and gambling, and use the platform responsibly.
                  </li>
                  <li>
                    <strong>Future Protection:</strong> While we're free now, maintaining 18+ ensures users won't be exposed to real-money fantasy sports elsewhere before they're ready.
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-bold text-red-900 mb-2">Age Verification</h3>
                <p className="text-sm text-red-900">
                  During registration, you must confirm you are 18+ years old. We may request identity verification documents if we suspect underage use. Accounts found to belong to users under 18 will be permanently banned.
                </p>
              </div>
            </div>
          </section>

          {/* 3. State Restrictions */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">3. State Restrictions</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Fantasy sports are regulated differently across Indian states. To ensure legal compliance, REIKI ENERGY is <strong>not available</strong> to residents of the following states:
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-bold text-red-900 mb-3">Restricted States:</h3>
                <div className="grid md:grid-cols-2 gap-2 text-red-900">
                  <div>• Andhra Pradesh</div>
                  <div>• Assam</div>
                  <div>• Nagaland</div>
                  <div>• Odisha</div>
                  <div>• Sikkim</div>
                  <div>• Telangana</div>
                </div>
                <p className="text-sm text-red-800 mt-4">
                  <strong>Why?</strong> These states have laws that prohibit or heavily restrict fantasy sports platforms, even free educational ones. We respect local regulations and do not operate in these regions.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-900">
                  <strong>State Verification:</strong> During registration, you must select your state of residence. We verify this information and may request proof of residence. Providing false state information will result in account termination.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Healthy Gaming Practices */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
              <h2 className="text-2xl font-bold text-gray-900">4. Healthy Gaming Practices</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Even though REIKI ENERGY is free and educational, we encourage all users to maintain healthy gaming habits:
              </p>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2">✓ Set Time Limits</h3>
                  <p className="text-sm text-green-800">
                    Spend a reasonable amount of time on the platform. Don't let fantasy cricket interfere with work, studies, family, or other responsibilities.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2">✓ Take Breaks</h3>
                  <p className="text-sm text-green-800">
                    Step away from the platform regularly. Don't spend hours continuously creating teams or checking scores. Balance is important.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2">✓ Keep It Fun</h3>
                  <p className="text-sm text-green-800">
                    Remember, this is a learning platform. Don't take losses personally or let competition affect your mood or relationships.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2">✓ Learn, Don't Obsess</h3>
                  <p className="text-sm text-green-800">
                    Focus on improving your cricket knowledge and analytical skills, not just winning contests. The journey matters more than the destination.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold text-green-900 mb-2">✓ Avoid Real-Money Platforms</h3>
                  <p className="text-sm text-green-800">
                    If you're learning on REIKI ENERGY, don't immediately jump to real-money fantasy sports platforms. Understand the risks and ensure you're ready before considering paid platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Warning Signs of Unhealthy Behavior */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">5. Warning Signs of Unhealthy Behavior</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Even on a free platform, it's possible to develop unhealthy habits. Watch for these warning signs:
              </p>
              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <ul className="space-y-3 text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">⚠</span>
                    <span><strong>Neglecting Responsibilities:</strong> Missing work, school, or family obligations to check scores or create teams.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">⚠</span>
                    <span><strong>Emotional Distress:</strong> Feeling anxious, depressed, or angry when your team loses or ranks poorly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">⚠</span>
                    <span><strong>Excessive Time:</strong> Spending multiple hours daily on the platform, unable to stop or reduce usage.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">⚠</span>
                    <span><strong>Relationship Strain:</strong> Conflicts with family or friends due to time spent on fantasy cricket.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">⚠</span>
                    <span><strong>Chasing Validation:</strong> Obsessively checking leaderboards or seeking validation through rankings.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold mt-1">⚠</span>
                    <span><strong>Moving to Real Money:</strong> Feeling tempted to join real-money fantasy sports platforms despite not being ready.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-red-900">
                  <strong>If you notice these signs in yourself or someone you know, take action immediately. Seek support from friends, family, or professional counselors.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* 6. Self-Exclusion Options */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">6. Self-Exclusion Options</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you feel you need a break from REIKI ENERGY, we offer self-exclusion options:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4">Self-Exclusion Options:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Temporary Break (7-90 days)</h4>
                    <p className="text-sm text-blue-800">
                      Request a temporary account suspension for 7 to 90 days. During this period, you cannot log in or access the platform. Your account and data remain intact.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Permanent Deletion</h4>
                    <p className="text-sm text-blue-800">
                      Request permanent account deletion. All your data will be erased after 30 days (as per our Privacy Policy). This action is irreversible.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-blue-900 mt-4">
                  <strong>How to Request:</strong> Email <a href="mailto:support@reikienergy.in" className="text-blue-700 hover:underline">support@reikienergy.in</a> with your request. We'll process it within 24 hours.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Support Resources */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">7. Support Resources</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you or someone you know is struggling with gaming-related issues, these resources can help:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-bold text-purple-900 mb-4">Mental Health & Gaming Support:</h3>
                <div className="space-y-3 text-purple-900">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <strong>NIMHANS Helpline (India):</strong> +91-80-46110007<br />
                      <span className="text-sm text-purple-700">24/7 mental health support and counseling</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <strong>Vandrevala Foundation:</strong> 1860-2662-345<br />
                      <span className="text-sm text-purple-700">Free 24/7 mental health helpline</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ExternalLink className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <strong>Gamblers Anonymous India:</strong> <a href="https://www.gamblersanonymous.org.in" target="_blank" rel="noopener noreferrer" className="text-purple-700 hover:underline">gamblersanonymous.org.in</a><br />
                      <span className="text-sm text-purple-700">Support for compulsive gambling (applicable to gaming addiction)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-purple-600 mt-1" />
                    <div>
                      <strong>REIKI ENERGY Support:</strong> <a href="mailto:support@reikienergy.in" className="text-purple-700 hover:underline">support@reikienergy.in</a><br />
                      <span className="text-sm text-purple-700">For platform-specific concerns or self-exclusion requests</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Parents & Guardians */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">8. Parents & Guardians</h2>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                If you're a parent or guardian concerned about a young adult's use of REIKI ENERGY:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-4">Tips for Parents:</h3>
                <ul className="space-y-2 text-blue-900">
                  <li>
                    <strong>Open Communication:</strong> Talk to your child about their fantasy cricket activities. Understand why they enjoy it and what they're learning.
                  </li>
                  <li>
                    <strong>Monitor Time:</strong> Ensure they're not spending excessive time on the platform. Set reasonable limits.
                  </li>
                  <li>
                    <strong>Check for Warning Signs:</strong> Watch for signs of unhealthy behavior listed in Section 5.
                  </li>
                  <li>
                    <strong>Educate About Real Money:</strong> Make sure they understand the difference between free educational platforms like REIKI ENERGY and real-money gambling sites.
                  </li>
                  <li>
                    <strong>Report Underage Use:</strong> If you discover someone under 18 using the platform, report it to <a href="mailto:support@reikienergy.in" className="text-blue-700 hover:underline">support@reikienergy.in</a>.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 9. Contact Information */}
          <section className="mb-0">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">9. Contact Information</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-gray-700 mb-4">
                For questions about Responsible Gaming or to request support:
              </p>
              <div className="space-y-2 text-gray-800">
                <p><strong>Responsible Gaming Team:</strong> REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                <p><strong>Email:</strong> <a href="mailto:support@reikienergy.in" className="text-blue-600 hover:underline">support@reikienergy.in</a></p>
                <p><strong>Self-Exclusion Requests:</strong> <a href="mailto:support@reikienergy.in" className="text-blue-600 hover:underline">support@reikienergy.in</a></p>
                <p><strong>Report Underage Use:</strong> <a href="mailto:report@reikienergy.in" className="text-blue-600 hover:underline">report@reikienergy.in</a></p>
                <p className="text-sm text-gray-600 mt-4">
                  We're committed to maintaining a safe, healthy, and educational environment. Your well-being is our priority.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
