/**
 * Global Dynamic Footer Component - REIKI ENERGY
 * Displays company information, links, legal disclaimer, and compliance badges
 * Changes links based on user authentication state
 */

import { Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  // Quick Links for logged OUT users
  const publicLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.faq'), path: '/faq' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  // Quick Links for logged IN users
  const privateLinks = [
    { label: t('nav.dashboard'), path: '/dashboard' },
    { label: t('nav.matches'), path: '/matches' },
    { label: t('nav.myTeams'), path: '/my-teams' },
    { label: t('nav.leaderboard'), path: '/leaderboard' },
    { label: t('nav.profile'), path: '/profile' },
  ];

  const quickLinks = isAuthenticated ? privateLinks : publicLinks;

  // Legal Links (always same)
  const legalLinks = [
    { label: t('common.terms'), path: '/terms' },
    { label: t('common.privacy'), path: '/privacy' },
    { label: t('common.fairPlay'), path: '/fair-play' },
    { label: t('common.responsibleGaming'), path: '/responsible-gaming' },
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo-dark.webp"
                alt="REIKI ENERGY"
                className="w-[71px] h-20 object-contain dark:hidden"
              />
              <img
                src="/logo-light.webp"
                alt="REIKI ENERGY"
                className="w-[71px] h-20 object-contain hidden dark:block"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p className="font-semibold">REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
              <p>CIN: U86909HR2024PTC119844</p>
              <p>PAN: AANCR4715K</p>
              <p className="pt-2">
                H NO41, RESIDENCIAL COLONY,<br />
                BAZIDA JATTAN, Karnal,<br />
                Haryana - 132001, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.path}>
                  <Link href={link.path}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance Badges */}
          <div>
            <h3 className="font-semibold text-sm mb-4">{t('footer.compliance')}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/18plus-badge.png"
                  alt="18+"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold">{t('footer.ageRestriction')}</p>
                  <p className="text-xs text-muted-foreground">{t('footer.onlyAdults')}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/fair-play-badge.png"
                  alt="Fair Play"
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold">{t('footer.fairPlay')}</p>
                  <p className="text-xs text-muted-foreground">{t('footer.skillBased')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 pt-8 border-t">
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-xs font-semibold text-yellow-700 dark:text-yellow-400 mb-2">
              {t('footer.legalDisclaimer')}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('footer.disclaimerText')}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            © {currentYear} REIKI ENERGY GLOBAL PRIVATE LIMITED. {t('footer.allRightsReserved')}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t('footer.freeToPlay')}
          </p>
        </div>
      </div>
    </footer>
  );
}
