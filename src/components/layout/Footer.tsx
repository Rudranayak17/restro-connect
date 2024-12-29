import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'Youtube' }
];

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' }
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Safety Center', href: '/safety' },
    { label: 'Community Guidelines', href: '/guidelines' }
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Settings', href: '/cookies' }
  ]
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">QR Dine</h3>
            <p className="text-sm">Discover and enjoy the best restaurants near you with contactless dining experience.</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-sm hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="submit"
                  className="bg-purple-600 px-4 py-2 rounded-r-md hover:bg-purple-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} QR Dine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}