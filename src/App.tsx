/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { SearchFilters } from './components/SearchFilters';
import { SkillCard } from './components/SkillCard';
import { Globe, Book, Users, Star, Search, Award, MessageSquare, Clock, ChevronRight, Mail, Twitter, Github, Linkedin } from 'lucide-react';

// Sample data for featured skills
const allSkills = [
  {
    title: "Advanced Web Development",
    category: "Technology",
    rating: 4.8,
    studentsCount: 1234,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Senior Developer"
    },
    pointsCost: 100
  },
  {
    title: "Japanese for Beginners",
    category: "Languages",
    rating: 4.9,
    studentsCount: 2156,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Yuki Tanaka",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      title: "Language Expert"
    },
    pointsCost: 80
  },
  {
    title: "Digital Photography Masterclass",
    category: "Arts",
    rating: 4.7,
    studentsCount: 1876,
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Maria Garcia",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      title: "Professional Photographer"
    },
    pointsCost: 120
  },
  {
    title: "Data Science Fundamentals",
    category: "Technology",
    rating: 4.9,
    studentsCount: 3421,
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      title: "Data Scientist"
    },
    pointsCost: 150
  },
  {
    title: "French Cuisine Mastery",
    category: "Culinary",
    rating: 4.8,
    studentsCount: 1543,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Sophie Laurent",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
      title: "Executive Chef"
    },
    pointsCost: 90
  },
  {
    title: "Guitar for Intermediates",
    category: "Music",
    rating: 4.6,
    studentsCount: 2187,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "James Wilson",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80",
      title: "Professional Musician"
    },
    pointsCost: 70
  },
  {
    title: "Digital Marketing Strategy",
    category: "Business",
    rating: 4.9,
    studentsCount: 4532,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Emma Thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      title: "Marketing Director"
    },
    pointsCost: 110
  },
  {
    title: "Yoga and Mindfulness",
    category: "Health",
    rating: 4.8,
    studentsCount: 3298,
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Sarah Parker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      title: "Certified Yoga Instructor"
    },
    pointsCost: 60
  },
  {
    title: "Mobile App Development",
    category: "Technology",
    rating: 4.7,
    studentsCount: 2876,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Michael Lee",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Mobile Developer"
    },
    pointsCost: 130
  },
  {
    title: "Oil Painting Techniques",
    category: "Arts",
    rating: 4.9,
    studentsCount: 1234,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Isabella Romano",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
      title: "Professional Artist"
    },
    pointsCost: 95
  },
  {
    title: "Public Speaking Mastery",
    category: "Professional Skills",
    rating: 4.8,
    studentsCount: 3567,
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Robert King",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Communication Coach"
    },
    pointsCost: 85
  },
  {
    title: "3D Animation Basics",
    category: "Design",
    rating: 4.7,
    studentsCount: 1987,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Chris Anderson",
      avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&q=80",
      title: "3D Artist"
    },
    pointsCost: 140
  },
  {
    title: "Creative Writing Workshop",
    category: "Arts",
    rating: 4.8,
    studentsCount: 2345,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Emily Brooks",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      title: "Author"
    },
    pointsCost: 75
  },
  {
    title: "Financial Planning 101",
    category: "Finance",
    rating: 4.9,
    studentsCount: 4123,
    duration: "5 weeks",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "William Scott",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Financial Advisor"
    },
    pointsCost: 120
  },
  {
    title: "Spanish Conversation",
    category: "Languages",
    rating: 4.7,
    studentsCount: 2876,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1460058418905-d61a1b4a55fe?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Ana Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      title: "Language Teacher"
    },
    pointsCost: 80
  },
  {
    title: "Interior Design Basics",
    category: "Design",
    rating: 4.8,
    studentsCount: 1765,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Laura White",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&q=80",
      title: "Interior Designer"
    },
    pointsCost: 95
  },
  {
    title: "Blockchain Development",
    category: "Technology",
    rating: 4.9,
    studentsCount: 1432,
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Daniel Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Blockchain Engineer"
    },
    pointsCost: 160
  },
  {
    title: "Social Media Management",
    category: "Business",
    rating: 4.7,
    studentsCount: 3298,
    duration: "4 weeks",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Rachel Green",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      title: "Social Media Strategist"
    },
    pointsCost: 70
  },
  {
    title: "Sustainable Gardening",
    category: "Lifestyle",
    rating: 4.8,
    studentsCount: 1876,
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Peter Brown",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      title: "Master Gardener"
    },
    pointsCost: 65
  },
  {
    title: "Machine Learning Basics",
    category: "Technology",
    rating: 4.9,
    studentsCount: 2543,
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    teacher: {
      name: "Alice Zhang",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      title: "ML Engineer"
    },
    pointsCost: 150
  }
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllSkills, setShowAllSkills] = useState(false);
  const displayedSkills = showAllSkills ? allSkills : allSkills.slice(0, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Navigation />

      {/* Hero Section with enhanced accessibility */}
      <main id="main-content" className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6" tabIndex={0}>
                Connect. Learn. Grow Together.
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto" tabIndex={0}>
                Join a global community of learners and teachers. Share your skills, learn from others, 
                and make meaningful connections across cultures.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Start learning new skills"
                >
                  Start Learning
                </button>
                <button
                  className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Become a teacher on our platform"
                >
                  Become a Teacher
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Search Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-24">
          <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-1 relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Search for skills to learn..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    aria-label="Search skills"
                  />
                </div>
                <SearchFilters />
                <button
                  className="w-full sm:w-auto bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-label="Search for skills"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Featured Skills Grid */}
          <section aria-labelledby="featured-skills-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex justify-between items-center mb-12">
              <h2 id="featured-skills-heading" className="text-3xl font-bold text-gray-900">
                {showAllSkills ? 'All Skills' : 'Featured Skills'}
              </h2>
              <button
                className="flex items-center text-indigo-600 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg px-4 py-2"
                aria-label={showAllSkills ? "Show fewer skills" : "View all available skills"}
                onClick={() => setShowAllSkills(!showAllSkills)}
              >
                {showAllSkills ? 'Show Less' : 'View All Skills'}
                <ChevronRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedSkills.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </section>

          {/* Stats Section with ARIA labels */}
          <section
            aria-labelledby="statistics-heading"
            className="bg-white py-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 id="statistics-heading" className="sr-only">
                Platform Statistics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                    <Users className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2" aria-label="Over 100,000 active users">100K+</p>
                  <p className="text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                    <Globe className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2" aria-label="Present in over 190 countries">190+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                    <Book className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2" aria-label="Over 500 skills available">500+</p>
                  <p className="text-gray-600">Skills Available</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full mb-4">
                    <MessageSquare className="w-6 h-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2" aria-label="Over 1 million sessions completed">1M+</p>
                  <p className="text-gray-600">Sessions Completed</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section
            aria-labelledby="cta-heading"
            className="bg-indigo-600 py-16"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2
                id="cta-heading"
                className="text-3xl font-bold text-white mb-4"
                tabIndex={0}
              >
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto" tabIndex={0}>
                Join thousands of learners and teachers worldwide. Start learning new skills or share your expertise today.
              </p>
              <button
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                aria-label="Get started with a free account"
              >
                Get Started for Free
              </button>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-gray-300 py-12" role="contentinfo">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                <nav aria-label="Platform navigation">
                  <h3 className="text-white font-semibold mb-4">Platform</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">How it Works</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">FAQ</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Support</a></li>
                  </ul>
                </nav>
                <nav aria-label="Community navigation">
                  <h3 className="text-white font-semibold mb-4">Community</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Blog</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Forum</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Events</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Success Stories</a></li>
                  </ul>
                </nav>
                <nav aria-label="Company navigation">
                  <h3 className="text-white font-semibold mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">About Us</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Careers</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Press</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Contact</a></li>
                  </ul>
                </nav>
                <nav aria-label="Legal navigation">
                  <h3 className="text-white font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Cookie Policy</a></li>
                    <li><a href="#" className="hover:text-white focus:outline-none focus:text-white">Security</a></li>
                  </ul>
                </nav>
              </div>
              <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm mb-4 md:mb-0">
                  © 2025 Global Skill Exchange. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="mailto:shanketk.work@gmail.com"
                    className="hover:text-white focus:outline-none focus:text-white"
                    aria-label="Email us"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://x.com/S_anketkumarrrr"
                    className="hover:text-white focus:outline-none focus:text-white"
                    aria-label="Follow us on X"
                  >
                    <Twitter className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://github.com/editorbymood"
                    className="hover:text-white focus:outline-none focus:text-white"
                    aria-label="View our GitHub profile"
                  >
                    <Github className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shanket-kumar-codeex/"
                    className="hover:text-white focus:outline-none focus:text-white"
                    aria-label="Connect with us on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    );
  }
  export default App;
