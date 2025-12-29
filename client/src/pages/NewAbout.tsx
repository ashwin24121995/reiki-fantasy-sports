/**
 * About Us Page - REIKI ENERGY
 * Deep detailed page including who we are, mission, story, values, legal info
 */

import { Building2, Heart, Shield, Users, Target, Award, MapPin, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewAbout() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">About REIKI ENERGY</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-muted-foreground">
              A free-to-play fantasy cricket platform dedicated to education, skill development, and transparent operations.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">REIKI ENERGY</strong> was founded with a simple but powerful belief: 
                <span className="text-primary font-semibold"> fantasy sports should be about learning, not gambling.</span>
              </p>

              <p>
                We saw countless cricket fans interested in fantasy sports but hesitant to risk real money. 
                Many wanted to learn the strategies, understand player selection, and improve their cricket knowledge—but 
                traditional platforms forced them to pay entry fees and compete for cash prizes.
              </p>

              <p>
                That's why we created REIKI ENERGY: a <strong className="text-foreground">100% free-to-play platform</strong> where 
                users can learn fantasy cricket without any financial pressure or risk.
              </p>

              <p>
                Backed by investors who believe in sports education, we've built a platform where knowledge is the only reward. 
                No entry fees. No prizes. No hidden costs. Just pure learning and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a safe, transparent, and educational fantasy cricket platform where users can learn 
                  strategies, develop skills, and enjoy cricket without any financial risk or pressure.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/20">
              <CardContent className="pt-8">
                <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become India's most trusted educational fantasy sports platform, helping millions of cricket fans 
                  understand the game better through strategic thinking and data-driven decision making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-16 w-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-bold text-lg mb-3">Transparency</h3>
                <p className="text-sm text-muted-foreground">
                  Complete honesty about our operations, funding, and purpose. No hidden agendas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-16 w-16 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-bold text-lg mb-3">Education First</h3>
                <p className="text-sm text-muted-foreground">
                  Learning and skill development are our only goals. Knowledge over money.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-16 w-16 mx-auto rounded-full bg-yellow-500/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="font-bold text-lg mb-3">User Safety</h3>
                <p className="text-sm text-muted-foreground">
                  Age verification, state compliance, and responsible gaming practices always.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="h-16 w-16 mx-auto rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="font-bold text-lg mb-3">Fair Play</h3>
                <p className="text-sm text-muted-foreground">
                  Anti-cheating measures, equal opportunities, and skill-based competition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Free */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why We're Completely Free</h2>
            
            <Card className="border-2">
              <CardContent className="pt-8">
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg">
                    <strong className="text-foreground">REIKI ENERGY is investor-backed.</strong> We're funded by 
                    individuals and organizations who believe in sports education and want to provide a safe learning 
                    environment for cricket fans.
                  </p>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                    <p className="font-semibold text-foreground mb-3">Our investors understand:</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Not everything needs to be monetized</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Education has value beyond profit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Users deserve a risk-free learning environment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Fantasy sports can be educational without gambling</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    This funding model allows us to operate without charging users, selling data, or pushing 
                    gambling-style mechanics. Our success is measured by how many people learn, not how much money we make.
                  </p>

                  <p className="text-primary font-semibold">
                    We will never introduce entry fees, paid features, or cash prizes. This is our permanent commitment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Legal Information</h2>
            
            <Card>
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-primary" />
                      Company Details
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground">Registered Name:</p>
                        <p>REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">CIN:</p>
                        <p>U86909HR2024PTC119844</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">PAN:</p>
                        <p>AANCR4715K</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">TAN:</p>
                        <p>RTKR20426A</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Incorporated:</p>
                        <p>March 14, 2024</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Registered Office
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div>
                        <p className="font-semibold text-foreground">Address:</p>
                        <p>H NO41, RESIDENCIAL COLONY</p>
                        <p>BAZIDA JATTAN, Karnal</p>
                        <p>Haryana - 132001</p>
                        <p>India</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">State:</p>
                        <p>Haryana</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-semibold text-lg mb-4">Compliance & Certifications</h3>
                  <div className="flex flex-wrap gap-4">
                    <Badge variant="outline" className="text-sm py-2 px-4">
                      <Shield className="h-4 w-4 mr-2" />
                      18+ Age Verified
                    </Badge>
                    <Badge variant="outline" className="text-sm py-2 px-4">
                      <Shield className="h-4 w-4 mr-2" />
                      State Compliant
                    </Badge>
                    <Badge variant="outline" className="text-sm py-2 px-4">
                      <Shield className="h-4 w-4 mr-2" />
                      No Real Money
                    </Badge>
                    <Badge variant="outline" className="text-sm py-2 px-4">
                      <Shield className="h-4 w-4 mr-2" />
                      Skill-Based Platform
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-sm text-muted-foreground">support@reikienergy.com</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 mx-auto rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-sm text-muted-foreground">Available on contact page</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-8">
                  <div className="h-12 w-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">Karnal, Haryana</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Built For Learners, By Believers
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              REIKI ENERGY exists because we believe fantasy sports can be educational, transparent, and free from 
              financial pressure. Join us in learning cricket strategy the right way.
            </p>
            <div className="flex items-center justify-center gap-4">
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
