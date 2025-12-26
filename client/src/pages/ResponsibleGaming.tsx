/**
 * Responsible Gaming Page - REIKI ENERGY
 * Responsible gaming guidelines and support
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Heart, AlertTriangle, Clock, Users } from 'lucide-react';

export default function ResponsibleGaming() {
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
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Responsible Gaming</h1>
            <p className="text-lg text-muted-foreground">
              Your well-being is our priority
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <p className="text-sm mb-0">
                  <strong>Our Philosophy:</strong> REIKI ENERGY is designed as a free-to-play
                  educational platform with NO real money involved. However, we still believe in
                  promoting healthy gaming habits and responsible behavior.
                </p>
              </div>

              <h2>Why Responsible Gaming Matters</h2>
              <p>
                Even though REIKI ENERGY involves no real money, it's important to maintain a
                healthy balance between fantasy cricket and other aspects of your life. Excessive
                gaming of any kind can impact your time, relationships, and well-being.
              </p>
            </div>

            {/* Key Principles */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Responsible Gaming Principles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <Clock className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Play in Moderation</h3>
                    <p className="text-sm text-muted-foreground">
                      Set time limits for yourself. Fantasy cricket should be a fun hobby, not an
                      obsession. Balance it with work, family, and other activities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Heart className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Prioritize Well-Being</h3>
                    <p className="text-sm text-muted-foreground">
                      If fantasy cricket starts affecting your mood, sleep, or relationships,
                      take a break. Your mental health is more important than any game.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Learn and Grow</h3>
                    <p className="text-sm text-muted-foreground">
                      Use REIKI ENERGY as a learning tool. Focus on improving your cricket
                      knowledge and analytical skills, not just winning.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <AlertTriangle className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Recognize Warning Signs</h3>
                    <p className="text-sm text-muted-foreground">
                      Be aware of unhealthy patterns like spending excessive time, neglecting
                      responsibilities, or feeling anxious about results.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Guidelines */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Healthy Gaming Guidelines</h2>
              <h3>1. Set Time Limits</h3>
              <ul>
                <li>Decide in advance how much time you'll spend on the Platform each day</li>
                <li>Use timers or reminders to stick to your limits</li>
                <li>Take regular breaks during extended sessions</li>
              </ul>

              <h3>2. Maintain Balance</h3>
              <ul>
                <li>Don't let fantasy cricket interfere with work, studies, or family time</li>
                <li>Ensure you're getting enough sleep, exercise, and social interaction</li>
                <li>Keep fantasy cricket as one of many hobbies, not your only interest</li>
              </ul>

              <h3>3. Manage Expectations</h3>
              <ul>
                <li>Remember that even skilled players don't win every contest</li>
                <li>Don't take losses personally or let them affect your mood</li>
                <li>Focus on learning and improvement, not just leaderboard position</li>
              </ul>

              <h3>4. Stay Social</h3>
              <ul>
                <li>Share your interest with friends and family in a healthy way</li>
                <li>Don't isolate yourself or prioritize gaming over real relationships</li>
                <li>Engage in offline activities and hobbies regularly</li>
              </ul>

              <h2>Warning Signs of Unhealthy Behavior</h2>
              <p>Seek help if you notice any of these patterns:</p>
              <ul>
                <li>Spending more time on fantasy cricket than intended repeatedly</li>
                <li>Neglecting work, studies, or personal responsibilities</li>
                <li>Feeling anxious, irritable, or depressed about game results</li>
                <li>Lying to others about time spent on the Platform</li>
                <li>Using fantasy cricket to escape from problems or negative feelings</li>
                <li>Experiencing sleep problems due to late-night gaming</li>
                <li>Conflicts with family or friends over time spent on the Platform</li>
              </ul>

              <h2>Age Restrictions</h2>
              <p>
                REIKI ENERGY is strictly for users 18 years and older. This age restriction exists
                because:
              </p>
              <ul>
                <li>Fantasy sports require mature decision-making and self-control</li>
                <li>Younger users may be more vulnerable to excessive gaming</li>
                <li>It's required by Indian regulations for fantasy sports platforms</li>
              </ul>
              <p>
                Parents and guardians: Please ensure minors do not access this Platform. We employ
                age verification, but parental supervision is also important.
              </p>

              <h2>State Restrictions</h2>
              <p>
                REIKI ENERGY is NOT available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim,
                and Telangana due to government compliance requirements. These restrictions exist to
                respect local regulations and protect users in those states.
              </p>

              <h2>Taking a Break</h2>
              <p>
                If you feel you need a break from fantasy cricket, you can:
              </p>
              <ul>
                <li>Simply stop logging in for a while—your account will remain active</li>
                <li>Contact us to temporarily deactivate your account</li>
                <li>Request permanent account deletion if you want to stop completely</li>
              </ul>
              <p>
                There's no penalty for taking breaks. Your well-being is more important than any
                game.
              </p>

              <h2>Support Resources</h2>
              <p>If you're struggling with gaming-related issues, these resources can help:</p>
              <ul>
                <li>
                  <strong>National Mental Health Helpline (India):</strong> 1800-599-0019
                </li>
                <li>
                  <strong>NIMHANS (Bangalore):</strong> +91-80-26995000
                </li>
                <li>
                  <strong>Vandrevala Foundation:</strong> 1860-2662-345
                </li>
                <li>
                  <strong>Your Healthcare Provider:</strong> Consult your doctor or a mental health
                  professional
                </li>
              </ul>

              <h2>Our Commitment</h2>
              <p>REIKI ENERGY is committed to:</p>
              <ul>
                <li>Maintaining a free-to-play platform with no financial pressure</li>
                <li>Promoting fantasy cricket as an educational tool, not an obsession</li>
                <li>Providing clear information about responsible gaming</li>
                <li>Responding to user concerns about gaming behavior</li>
                <li>Continuously improving our platform to support healthy usage</li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                If you have concerns about your gaming behavior or need support:
                <br />
                <br />
                <strong>REIKI ENERGY GLOBAL PRIVATE LIMITED</strong>
                <br />
                Email: support@smartplaydrafts.com
                <br />
                Subject: "Responsible Gaming Support"
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mt-8">
                <p className="text-sm mb-0">
                  <strong>Remember:</strong> Fantasy cricket should enhance your life, not control
                  it. Play responsibly, learn, have fun, and maintain a healthy balance. If you
                  ever feel it's becoming a problem, don't hesitate to seek help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
