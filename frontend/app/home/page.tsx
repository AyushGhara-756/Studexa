'use client';

import Image from 'next/image';
import Logo from '@/images/Logo.jpeg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { toggleTheme } from '@/store/authSlice';
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Brain,
  Award,
  Target,
  MessageCircle,
  Zap,
  TrendingUp,
  Sun,
  Moon,
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const theme = useSelector((state: RootState) => state.auth.theme);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <main className="flex-1 bg-white dark:bg-slate-950 overflow-auto">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 bg-white dark:bg-slate-900/80 dark:border-slate-800/50 backdrop-blur-md border-b border-slate-200 px-8 py-4 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={isAuthenticated ? "/dashboard" : "/home"}>
            <div className="flex items-center gap-2">
              <Image
                src={Logo}
                alt="STUDEXA Logo"
                width={100}
                className="object-contain h-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                STUDEXA
              </span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(toggleTheme())}
              className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            {isAuthenticated ? (
              <Button onClick={() => router.push('/dashboard')} className="gap-2">
                Dashboard <ArrowRight className="w-4 h-4" />
              </Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => router.push('/signin')}>
                  Sign In
                </Button>
                <Button onClick={() => router.push('/signup')} className="gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20 text-center">
          <div className="mb-6 inline-block">
            <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              🎓 Your Academic Companion
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            Master Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Academic Journey
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Combine automated scheduling, parent verification, AI-driven career guidance, and mental health support into one intelligent platform. From stress to success in seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
              onClick={() => router.push(isAuthenticated ? '/dashboard' : '/signup')}
            >
              {isAuthenticated ? 'Go to Dashboard' : 'Start Your Journey'}
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
              onClick={() => window.alert('Demo video coming soon!')}
            >
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-lg p-4 border border-slate-200">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">10K+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Active Students</p>
            </div>
            <div className="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-lg p-4 border border-slate-200">
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">95%</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Satisfaction</p>
            </div>
            <div className="bg-white dark:bg-slate-800 dark:border-slate-700 rounded-lg p-4 border border-slate-200">
              <p className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-1">24/7</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Problems Section */}
      <div className="py-24 px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Problems We Solve
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Facing academic stress? We have solutions for all your challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                problem: 'Last-Minute Panic',
                solution: 'AI auto-schedules your work so you never rush again',
              },
              {
                problem: 'Poor Time Management',
                solution: 'Smart time allocation keeps you balanced and productive',
              },
              {
                problem: 'Parental Stress',
                solution: 'Parents track progress securely without hovering',
              },
              {
                problem: 'Career Confusion',
                solution: 'AI suggests careers based on your skills and interests',
              },
              {
                problem: 'Study Burnout',
                solution: 'Healthy rhythm focus prevents mental exhaustion',
              },
              {
                problem: 'Skill Gaps',
                solution: 'Learn beyond curriculum with structured guidance',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.problem}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Powerful Features for Success
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to excel academically and plan your future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Smart Scheduling',
                description: 'AI-powered time allocation adapts to your tasks and deadlines',
                color: 'from-blue-500 to-blue-600',
              },
              {
                icon: Users,
                title: 'Parent Monitoring',
                description: 'Real-time progress tracking with secure proof uploads',
                color: 'from-green-500 to-green-600',
              },
              {
                icon: Brain,
                title: 'AI Career Guide',
                description: 'Personalized career paths based on your strengths',
                color: 'from-purple-500 to-purple-600',
              },
              {
                icon: Target,
                title: 'Goal Tracking',
                description: 'Visual progress for milestones and long-term objectives',
                color: 'from-orange-500 to-orange-600',
              },
              {
                icon: Award,
                title: 'Skill Development',
                description: 'Structured learning beyond traditional curriculum',
                color: 'from-pink-500 to-pink-600',
              },
              {
                icon: MessageCircle,
                title: 'AI Assistant',
                description: 'Get homework help and study tips instantly',
                color: 'from-indigo-500 to-indigo-600',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-lg transition-all group hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-24 px-8 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How STUDEXA Works
            </h2>
            <p className="text-xl text-blue-100">
              Simple steps to transform your academic life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                number: '1',
                title: 'Input',
                description: 'Tell us your assignments, goals, and timeline',
              },
              {
                number: '2',
                title: 'Plan',
                description: 'Our AI creates your perfect study schedule',
              },
              {
                number: '3',
                title: 'Execute',
                description: 'Follow the plan with guidance and tracking',
              },
              {
                number: '4',
                title: 'Succeed',
                description: 'Achieve goals with less stress and more balance',
              },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur border border-white/20 dark:border-white/10 rounded-lg p-8 text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/20 dark:bg-white/10 text-white font-bold flex items-center justify-center mx-auto mb-4 text-lg border border-white/40 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-white mb-2 text-lg">{step.title}</h4>
                  <p className="text-blue-100 dark:text-blue-200 text-sm leading-relaxed">{step.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-1 bg-white/40 dark:bg-white/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 px-8 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Why Students Choose STUDEXA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Stress-Free Approach</h3>
                  <p className="text-slate-600 dark:text-slate-400">No more academic anxiety. Our intelligent system removes the guesswork from planning.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Proven Results</h3>
                  <p className="text-slate-600 dark:text-slate-400">Students using STUDEXA improve grades by 25% on average within 3 months.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">All-in-One Solution</h3>
                  <p className="text-slate-600 dark:text-slate-400">Academics, career, parent communication, and wellness in one unified platform.</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">24/7 Support</h3>
                  <p className="text-slate-600 dark:text-slate-400">Our AI assistant and human support team are always ready to help you succeed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-24 px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your
            <br />
            Academic Life?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of students who are already managing their academics stress-free. Start your journey today—no credit card required.
          </p>
          <Button
            size="lg"
            className="gap-2 bg-white text-purple-600 hover:bg-blue-50 dark:hover:bg-slate-100 font-semibold"
            onClick={() => router.push(isAuthenticated ? '/dashboard' : '/signup')}
          >
            {isAuthenticated ? 'Open Dashboard' : 'Start Free Today'}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 dark:text-slate-500 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-slate-800 dark:border-slate-900">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src={Logo}
                  alt="STUDEXA Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
                <span className="text-lg font-bold text-white dark:text-slate-100">STUDEXA</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-600 leading-relaxed">
                Integrated Student Life & Academic Management. Supporting students globally in their journey to success.
              </p>
            </div>
            <div>
              <h4 className="text-white dark:text-slate-200 font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white dark:text-slate-200 font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white dark:text-slate-200 font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white dark:hover:text-slate-300 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm text-slate-600 dark:text-slate-700">
            <p>&copy; 2026 STUDEXA. All rights reserved. | Made with ❤️ for students worldwide</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
