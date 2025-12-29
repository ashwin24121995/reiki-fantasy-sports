/**
 * Why We Are Free Page - REIKI ENERGY
 * Complete transparency about business model and investor backing
 */

import { Heart, DollarSign, Users, TrendingUp, Shield, CheckCircle, XCircle, HelpCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewWhyFree() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Business Model Transparency</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Why We Are 100% Free
            </h1>
            <p className="text-xl text-muted-foreground">
              Complete honesty about how REIKI ENERGY operates without charging users a single rupee.
            </p>
          </div>
        </div>
      </section>

      {/* The Simple Answer */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">The Simple Answer</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="text-center mb-8">
                  <div className="h-20 w-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">We're Investor-Backed</h3>
                  <p className="text-lg text-muted-foreground">
                    REIKI ENERGY is funded by investors who believe in <strong className="text-foreground">sports education</strong> and 
                    want to provide a safe learning environment for cricket fans.
                  </p>
                </div>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Our investors understand that <strong className="text-foreground">not everything needs to be monetized</strong>. 
                    They've provided capital specifically to create an educational platform where users can learn fantasy cricket 
                    without financial pressure, gambling mechanics, or hidden costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who Are Our Investors */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Who Are Our Investors?</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our investors are <strong className="text-foreground">individuals and organizations</strong> who:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        'Believe in sports education',
                        'Want to reduce gambling in fantasy sports',
                        'Support skill-based learning platforms',
                        'Value transparency and honesty',
                        'Understand long-term social impact',
                        'Don\'t expect immediate financial returns',
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert>
                <HelpCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Why invest in a free platform?</strong> Our investors see value in creating social impact, 
                  not just financial profit. They believe education has intrinsic worth beyond monetary returns.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </div>
      </section>

      {/* What Investors Understand */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Investors Understand</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Heart,
                  title: 'Education Has Value',
                  desc: 'Learning cricket strategy and player analysis has inherent value, even without monetary prizes.',
                  color: 'text-red-500',
                  bg: 'bg-red-500/10',
                },
                {
                  icon: Shield,
                  title: 'Users Deserve Safety',
                  desc: 'Cricket fans should have a risk-free environment to learn fantasy sports without gambling pressure.',
                  color: 'text-blue-500',
                  bg: 'bg-blue-500/10',
                },
                {
                  icon: Users,
                  title: 'Social Impact Matters',
                  desc: 'Helping thousands learn responsibly is more valuable than short-term profit from a few.',
                  color: 'text-green-500',
                  bg: 'bg-green-500/10',
                },
                {
                  icon: TrendingUp,
                  title: 'Long-Term Thinking',
                  desc: 'Building trust and reputation takes time. Quick monetization would destroy our mission.',
                  color: 'text-purple-500',
                  bg: 'bg-purple-500/10',
                },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`h-14 w-14 rounded-full ${item.bg} flex items-center justify-center mb-4`}>
                      <item.icon className={`h-7 w-7 ${item.color}`} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Sustain Operations */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How We Sustain Operations</h2>
            <Card>
              <CardHeader>
                <CardTitle>Financial Sustainability Model</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Our Operating Costs:</h4>
                    <div className="space-y-2">
                      {[
                        { item: 'Cricket Data API subscription', cost: 'Paid annually' },
                        { item: 'Server hosting and infrastructure', cost: 'Monthly cloud costs' },
                        { item: 'Database management', cost: 'Included in hosting' },
                        { item: 'Domain and SSL certificates', cost: 'Annual renewal' },
                        { item: 'Development and maintenance', cost: 'Covered by investors' },
                      ].map((expense, index) => (
                        <div key={index} className="flex items-center justify-between border-b pb-2">
                          <span className="text-sm text-muted-foreground">{expense.item}</span>
                          <span className="text-sm font-semibold">{expense.cost}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">✓ All costs covered by investor funding</p>
                    <p className="text-sm text-muted-foreground">
                      We don't need user revenue to operate. Our investors provide sufficient capital to cover 
                      all infrastructure, API subscriptions, and operational expenses.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">What We Don't Spend On:</h4>
                    <div className="space-y-2">
                      {[
                        'Marketing and advertising (organic growth only)',
                        'Prize pools or cash rewards (educational only)',
                        'Sales teams or commissions (no monetization)',
                        'Payment processing fees (no transactions)',
                        'Customer acquisition costs (free registration)',
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison with Paid Platforms */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">REIKI ENERGY vs Paid Platforms</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold text-primary">REIKI ENERGY</th>
                        <th className="text-center p-4 font-semibold text-muted-foreground">Paid Platforms</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: 'Entry Fees', reiki: '₹0 Forever', paid: '₹25 - ₹10,000+' },
                        { feature: 'Cash Prizes', reiki: 'None (Educational)', paid: 'Yes (Gambling)' },
                        { feature: 'Purpose', reiki: 'Learning & Education', paid: 'Profit & Winnings' },
                        { feature: 'Financial Risk', reiki: 'Zero Risk', paid: 'High Risk' },
                        { feature: 'Age Requirement', reiki: '18+ (Verified)', paid: '18+ (Often not verified)' },
                        { feature: 'State Compliance', reiki: '6 States Blocked', paid: 'Often operate everywhere' },
                        { feature: 'Pressure to Pay', reiki: 'Never', paid: 'Constant upselling' },
                        { feature: 'Data Source', reiki: 'Real Cricket API', paid: 'Real Cricket API' },
                        { feature: 'Team Creation', reiki: 'No Budget Limits', paid: 'Artificial Credit System' },
                        { feature: 'Learning Focus', reiki: 'Primary Goal', paid: 'Not a priority' },
                      ].map((row, index) => (
                        <tr key={index} className="border-b hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 text-center text-primary font-semibold">{row.reiki}</td>
                          <td className="p-4 text-center text-muted-foreground">{row.paid}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Permanent Commitment */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Permanent Commitment</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">We Will Never Charge Users</h3>
                  </div>

                  <div className="bg-primary/5 border-l-4 border-primary p-6 rounded">
                    <p className="font-semibold mb-3">This is not a temporary promotional offer.</p>
                    <p className="text-muted-foreground mb-4">
                      REIKI ENERGY's free-to-play model is our <strong className="text-foreground">permanent business structure</strong>, 
                      backed by investors who understand and support this mission long-term.
                    </p>
                    <p className="text-muted-foreground">
                      We will <strong className="text-foreground">never</strong> introduce:
                    </p>
                    <ul className="mt-3 space-y-2">
                      {[
                        'Entry fees or paid contests',
                        'Premium memberships or subscriptions',
                        'Cash prizes or monetary rewards',
                        'Advertising or sponsored content',
                        'Data selling to third parties',
                        'Any form of monetization from users',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 text-center">
                    <p className="font-semibold text-lg mb-2">Our Promise to You</p>
                    <p className="text-muted-foreground">
                      If we ever change this model, we will shut down the platform rather than betray user trust. 
                      Education and integrity are non-negotiable.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Will you ever start charging in the future?',
                  a: 'No. Our investor-backed model is permanent. We have no plans or need to charge users ever.',
                },
                {
                  q: 'How long will investor funding last?',
                  a: 'Our investors are committed long-term. They understand this is an educational mission, not a short-term experiment.',
                },
                {
                  q: 'Do you sell user data to make money?',
                  a: 'Absolutely not. We never sell, share, or monetize user data. Your information is used only for age verification and account management.',
                },
                {
                  q: 'Why don\'t you just add optional paid features?',
                  a: 'Because that would create pressure and inequality. Everyone gets the same experience—complete and free.',
                },
                {
                  q: 'What if investors pull funding?',
                  a: 'We have contingency plans and multiple investors. If funding ever becomes an issue, we\'ll communicate transparently with users.',
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold mb-2 flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      {item.q}
                    </h4>
                    <p className="text-sm text-muted-foreground pl-7">{item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10">
        <div className="container px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Transparency is Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've shared everything about how REIKI ENERGY operates financially because we believe users deserve 
              complete honesty. No hidden agendas, no future monetization plans, no tricks.
            </p>
            <p className="text-xl font-semibold text-primary">
              100% Free. 100% Educational. 100% Transparent. Forever.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <img src="/18plus-badge.png" alt="18+" className="h-16 w-16 object-contain" />
              <img src="/fair-play-badge.png" alt="Fair Play" className="h-16 w-16 object-contain" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
