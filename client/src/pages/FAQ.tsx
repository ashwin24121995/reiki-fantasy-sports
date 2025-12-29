/**
 * FAQ Page - REIKI ENERGY
 * Frequently Asked Questions
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowLeft, HelpCircle } from 'lucide-react';

export default function FAQ() {
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
          q: 'Which states are not allowed to play?',
          a: 'Due to government compliance requirements, users from the following states cannot play: Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.',
        },
        {
          q: 'I forgot my password. What should I do?',
          a: 'Click on "Forgot Password" on the login page, enter your registered email address, and follow the instructions sent to your email to reset your password.',
        },
      ],
    },
    {
      category: 'Playing Fantasy Cricket',
      questions: [
        {
          q: 'How do I create a fantasy team?',
          a: 'Go to "Matches" section, select an upcoming match, click "Create Team", choose 11 players (following composition rules), select your captain and vice-captain, and save your team before the match starts.',
        },
        {
          q: 'What are the team composition rules?',
          a: 'Your 11-player team must include: 1-4 Wicket-Keepers, 3-6 Batsmen, 1-4 All-Rounders, and 3-6 Bowlers. You can select a maximum of 7 players from any one team.',
        },
        {
          q: 'How does the scoring system work?',
          a: 'Players earn points based on their real match performance: runs scored, wickets taken, catches, etc. Your captain gets 2x points and vice-captain gets 1.5x points. Check our "How to Play" page for detailed scoring rules.',
        },
        {
          q: 'Can I edit my team after creating it?',
          a: 'Yes, you can edit your team until the match starts. Once the match begins, your team is locked and cannot be changed.',
        },
        {
          q: 'How many teams can I create for one match?',
          a: 'Currently, you can create one team per match. This helps maintain a fair and educational environment for all users.',
        },
      ],
    },
    {
      category: 'Scoring & Leaderboard',
      questions: [
        {
          q: 'How are points calculated?',
          a: 'Points are calculated based on real match performance data from Cricket Data API. Runs, wickets, catches, boundaries, and other actions earn points. Captain gets 2x points and vice-captain gets 1.5x points.',
        },
        {
          q: 'When will I see my points?',
          a: 'Points are updated in real-time during live matches. You can track your team\'s performance and rank on the leaderboard as the match progresses.',
        },
        {
          q: 'What happens if a player doesn\'t play?',
          a: 'If a player in your team doesn\'t play in the actual match, they will score 0 points. It\'s important to check playing XI announcements before the match starts.',
        },
        {
          q: 'How is the leaderboard ranking determined?',
          a: 'Leaderboard ranking is based on total fantasy points scored by your team. Higher points = higher rank. In case of a tie, the user who created their team first gets the higher rank.',
        },
      ],
    },
    {
      category: 'Technical & Support',
      questions: [
        {
          q: 'Which devices can I use to play?',
          a: 'REIKI ENERGY works on all modern devices - desktop computers, laptops, tablets, and smartphones. We recommend using the latest version of Chrome, Firefox, Safari, or Edge browsers.',
        },
        {
          q: 'Do you have a mobile app?',
          a: 'Currently, REIKI ENERGY is available as a web application. You can access it through your mobile browser. A dedicated mobile app may be launched in the future.',
        },
        {
          q: 'Where does the match data come from?',
          a: 'We use Cricket Data API, a professional cricket data provider, to get real-time match data, player statistics, and live scores. This ensures accuracy and reliability.',
        },
        {
          q: 'I found a bug or issue. How do I report it?',
          a: 'Please contact us through our "Contact Us" page with details about the issue you encountered. Our team will investigate and resolve it as soon as possible.',
        },
      ],
    },
    {
      category: 'Privacy & Security',
      questions: [
        {
          q: 'Is my personal information safe?',
          a: 'Yes. We take data security seriously. Your personal information is encrypted and stored securely. We never share your data with third parties without your consent. Read our Privacy Policy for more details.',
        },
        {
          q: 'Do you store my payment information?',
          a: 'No. Since REIKI ENERGY is completely free-to-play with no real money involved, we do not collect or store any payment information.',
        },
        {
          q: 'Can I delete my account?',
          a: 'Yes. You can request account deletion by contacting us through the "Contact Us" page. We will process your request within 7 business days.',
        },
      ],
    },
  ];

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
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about REIKI ENERGY
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, catIndex) => (
              <div key={catIndex}>
                <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, qIndex) => (
                    <AccordionItem
                      key={qIndex}
                      value={`${catIndex}-${qIndex}`}
                      className="border rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="font-semibold">{faq.q}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}

            {/* Still Have Questions */}
            <div className="text-center py-8 bg-muted rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Contact our support team.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
