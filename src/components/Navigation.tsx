import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe, Bell, User } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navigation: NavItem[] = [
  {
    label: 'Explore',
    href: '#',
    children: [
      { label: 'Browse Skills', href: '#' },
      { label: 'Find Teachers', href: '#' },
      { label: 'Live Sessions', href: '#' },
      { label: 'Skill Paths', href: '#' },
    ],
  },
  {
    label: 'Teach',
    href: '#',
    children: [
      { label: 'Become a Teacher', href: '#' },
      { label: 'Teacher Guidelines', href: '#' },
      { label: 'Earning Points', href: '#' },
    ],
  },
  { label: 'Community', href: '#' },
  { label: 'About', href: '#' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrollPosition = useScrollPosition();
  const [notifications] = useState(3); // Example notification count

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrollPosition > 0 ? 'bg-white shadow-md' : 'bg-transparent'
  }`;

  const handleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleKeyDown = (e: React.KeyboardEvent, label: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleDropdown(label);
    }
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Globe className="h-8 w-8 text-indigo-600" aria-hidden="true" />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Global Skill Exchange
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      onClick={() => handleDropdown(item.label)}
                      onKeyDown={(e) => handleKeyDown(e, item.label)}
                      aria-expanded={activeDropdown === item.label}
                      aria-controls={`dropdown-${item.label}`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`ml-1 h-4 w-4 transform transition-transform ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div
                        id={`dropdown-${item.label}`}
                        className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        role="menu"
                        aria-orientation="vertical"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {item.children.map((child) => (
                              <a
                                key={child.label}
                                href={child.href}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                                role="menuitem"
                              >
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {child.label}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* User Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Notifications"
            >
              <div className="relative">
                <Bell className="h-6 w-6" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-xs text-white">
                    {notifications}
                  </span>
                )}
              </div>
            </button>
            <button
              className="p-2 text-gray-600 hover:text-indigo-600 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="User menu"
            >
              <User className="h-6 w-6" />
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">
                {isOpen ? 'Close main menu' : 'Open main menu'}
              </span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}