/**
 * FAQ Page - REIKI ENERGY
 * Frequently Asked Questions with new design system
 */

import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewFAQ() {
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is REIKI ENERGY?',
          a: 'REIKI ENERGY is India\'s first completely free-to-play fantasy cricket platform focused on education and skill development. We provide a safe environment for cricket fans to learn fantasy cricket without any financial risk.',
        },
        {
          q: 'Is REIKI ENERGY really free?',
          a: 'Yes! REIKI ENERGY is 100% free to play. There are no deposits, no withdrawals, no entry fees, and no hidden charges. You will never be asked to pay money on our platform.',
        },
        {
          q: 'Can I win real money on REIKI ENERGY?',
          a: 'No. REIKI ENERGY is a free-to-play educational platform. There are no cash prizes or real money rewards. Winners are recognized on our leaderboard for their skills and strategic thinking.',
        },
        {
          q: 'Who can play on REIKI ENERGY?',
          a: 'Anyone who is 18 years or older and resides in India (except restricted states) can play on REIKI ENERGY. Age verification is mandatory during registration.',
        },
      ],
    },
    {
      category: 'Account & Registration',
      questions: [
        {
          q: 'How do I create an account?',
          a: 'Click on "Register" button, fill in your details (name, email, password, date of birth, state), verify that you are 18+, accept our terms, and submit. You\'ll receive a confirmation and can start playing immediately.',
        },
        {
          q: 'Why do I need to verify my age?',
          a: 'As per Indian regulations and our responsible gaming policy, only users 18 years and older are permitted to play fantasy sports. Age verification ensures compliance with these regulations.',
        },
        {
          q: 'Which states are restricted?',
          a: 'Users from Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim cannot register or play on REIKI ENERGY due to state-specific gaming regulations.',
        },
        {
          q: 'Can I change my registered state later?',
          a: 'No. Your state information is locked during registration for compliance purposes. If you move to a different state, you must create a new account.',
        },
        {
          q: 'Is my personal information safe?',
          a: 'Yes. We use industry-standard encryption and security measures to protect your data. We never sell or share your information with third parties. Read our Privacy Policy for complete details.',
        },
      ],
    },
    {
      category: 'Playing Fantasy Cricket',
      questions: [
        {
          q: 'How do I create a fantasy team?',
          a: 'Go to "Matches" page, select an upcoming match, click "Create Team", and choose 11 players from both teams. Select your captain (2x points) and vice-captain (1.5x points), then save your team.',
        },
        {
          q: 'What are the team composition rules?',
          a: 'You must select 11 players with: 1-4 Wicket-Keepers, 3-6 Batsmen, 1-4 All-Rounders, and 3-6 Bowlers. You can pick maximum 7 players from one team.',
        },
        {
          q: 'Is there a budget or credit system?',
          a: 'No. Unlike paid platforms, REIKI ENERGY does not use artificial budget constraints. Select players based purely on skill and strategy, not arbitrary credit limits.',
        },
        {
          q: 'Can I edit my team after creating it?',
          a: 'You can edit your team until the match starts. Once the match begins, your team is locked and cannot be modified.',
        },
        {
          q: 'How many teams can I create?',
          a: 'You can create unlimited teams for different matches. There are no restrictions on the number of teams you can manage.',
        },
      ],
    },
    {
      category: 'Scoring & Points',
      questions: [
        {
          q: 'How is scoring calculated?',
          a: 'Points are awarded based on real match performance: runs scored, wickets taken, catches, run-outs, strike rate bonuses, economy rate bonuses, and milestones (50s, 100s, 4-wicket hauls, etc.).',
        },
        {
          q: 'What is the captain and vice-captain bonus?',
          a: 'Your captain earns 2x points (double) and vice-captain earns 1.5x points. Choose wisely based on player form and match conditions.',
        },
        {
          q: 'When are points updated?',
          a: 'Points are updated in real-time during live matches. You can watch your team\'s performance and points accumulate as the match progresses.',
        },
        {
          q: 'Where can I see my team\'s score?',
          a: 'Go to "My Teams" page to see all your teams and their scores. You can also check the "Leaderboard" to see your rank compared to other users.',
        },
      ],
    },
    {
      category: 'Leaderboard & Rankings',
      questions: [
        {
          q: 'How does the leaderboard work?',
          a: 'The leaderboard ranks all users based on their team\'s total points for a specific match. Higher points = higher rank. Top performers are displayed at the top.',
        },
        {
          q: 'Do I win anything for being on top of the leaderboard?',
          a: 'No cash prizes or rewards. REIKI ENERGY is purely educational. Top performers are recognized for their strategic skills and cricket knowledge.',
        },
        {
          q: 'Can I see other users\' teams?',
          a: 'No. Team compositions are private. You can only see usernames and scores on the leaderboard, not their player selections.',
        },
      ],
    },
    {
      category: 'Technical & Support',
      questions: [
        {
          q: 'Where does match data come from?',
          a: 'We use Cricket Data API (paid subscription) to provide real-time match data, player information, and live scores. All data is authentic and updated in real-time.',
        },
        {
          q: 'What if I find a bug or error?',
          a: 'Please contact us through the "Contact" page with details about the issue. We actively fix bugs and improve the platform based on user feedback.',
        },
        {
          q: 'Which devices can I use?',
          a: 'REIKI ENERGY works on all devices: desktop computers, laptops, tablets, and mobile phones. The website is fully responsive and mobile-friendly.',
        },
        {
          q: 'Do I need to download an app?',
          a: 'No. REIKI ENERGY is a web-based platform. Simply visit smartplaydrafts.com from any browser. No app download required.',
        },
      ],
    },
    {
      category: 'Privacy & Legal',
      questions: [
        {
          q: 'Is fantasy cricket legal in India?',
          a: 'Yes. Fantasy cricket is recognized as a game of skill (not gambling) and is legal in most Indian states. REIKI ENERGY complies with all applicable regulations and restricts access from states where fantasy sports are not permitted.',
        },
        {
          q: 'Do you sell my data?',
          a: 'Absolutely not. We never sell, share, or monetize user data. Your information is used only for age verification, account management, and platform functionality.',
        },
        {
          q: 'How do you make money if it\'s free?',
          a: 'REIKI ENERGY is investor-backed. We are funded by investors who believe in sports education and want to provide a safe learning environment. We do not charge users or sell data.',
        },
        {
          q: 'Will you ever start charging users?',
          a: 'No. Our free-to-play model is permanent. We have no plans to introduce entry fees, paid features, or any form of monetization from users. This is our commitment.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Help Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
              <HelpCircle className="h-10 w-10 text-primary" />
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about REIKI ENERGY fantasy cricket platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    {category.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-16 text-center bg-muted/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Contact our support team and we'll be happy to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
