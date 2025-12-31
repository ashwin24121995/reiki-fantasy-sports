/**
 * Contact Page - REIKI ENERGY
 * Contact form and company information with new design system
 */

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function NewContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Get In Touch</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions, feedback, or need support? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="What is this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us more about your question or feedback..."
                          rows={6}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          'Sending...'
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Company Details */}
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Company Details</h3>
                      <div className="space-y-3 text-sm">
                        <p>
                          <strong>Legal Name:</strong><br />
                          REIKI ENERGY GLOBAL PRIVATE LIMITED
                        </p>
                        <p>
                          <strong>CIN:</strong> U86909HR2024PTC119844
                        </p>
                        <p>
                          <strong>PAN:</strong> AANCR4715K
                        </p>
                        <p>
                          <strong>Incorporated:</strong> March 14, 2024
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact Methods */}
                  <Card>
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Email</h4>
                          <p className="text-sm text-muted-foreground">
                            support@reikienergy.com
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            We typically respond within 24-48 hours
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Registered Office</h4>
                          <p className="text-sm text-muted-foreground">
                            H NO41, RESIDENCIAL COLONY<br />
                            BAZIDA JATTAN, Karnal<br />
                            Haryana - 132001<br />
                            India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Common Queries */}
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-4">Common Queries</h3>
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong>Account Issues:</strong>
                          <p className="text-muted-foreground">
                            Login problems, password reset, profile updates
                          </p>
                        </div>
                        <div>
                          <strong>Technical Support:</strong>
                          <p className="text-muted-foreground">
                            Bugs, errors, website issues, match data problems
                          </p>
                        </div>
                        <div>
                          <strong>General Questions:</strong>
                          <p className="text-muted-foreground">
                            How to play, rules, scoring, platform features
                          </p>
                        </div>
                        <div>
                          <strong>Feedback & Suggestions:</strong>
                          <p className="text-muted-foreground">
                            Feature requests, improvements, user experience
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Before You Contact Us</h3>
            <p className="text-muted-foreground mb-6">
              Check our FAQ page first—you might find your answer immediately!
            </p>
            <a
              href="/faq"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
}
