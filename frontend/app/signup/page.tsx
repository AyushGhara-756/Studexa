'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { setUser, setLoading, setError, clearError } from '@/store/authSlice';
import { signup } from '@/lib/api/auth';
import { Mail, Lock, AlertCircle, Eye, EyeOff, User, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  const [localError, setLocalError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalLoading(true);
    setLocalError('');
    dispatch(clearError());

    try {
      dispatch(setLoading(true));
      const response = await signup({
        name,
        email,
        password,
        contact,
        role: 'student',
      });

      // Store response in Redux store
      dispatch(
        setUser({
          user: response,
          // token: response.token,
        })
      );

      // Navigate to dashboard
      router.push('/dashboard');
    } catch (error: any) {
      const errorMessage = error.message || 'Failed to sign up. Please try again.';
      setLocalError(errorMessage);
      dispatch(setError(errorMessage));
    } finally {
      setLocalLoading(false);
      dispatch(setLoading(false));
    }
  };

  const isFormValid =
    name.trim() && email.trim() && password.trim() && contact.trim();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 dark:bg-blue-700 mb-4">
            <span className="text-2xl font-bold text-white">📚</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">STUDEXA</h1>
          <p className="text-slate-600 dark:text-slate-400">Create your account</p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700"
        >
          {/* Error Alert */}
          {localError && (
            <div className="mb-5 p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg flex gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-red-700 dark:text-red-300 text-sm">{localError}</p>
            </div>
          )}

          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-slate-400 dark:text-slate-500" />
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={localLoading}
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400 dark:text-slate-500" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={localLoading}
              />
            </div>
          </div>

          {/* Contact Field */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-slate-400 dark:text-slate-500" />
              <input
                id="contact"
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value.replace(/\D/g, ''))}
                placeholder="9876543210"
                required
                className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={localLoading}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Numbers only</p>
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-slate-700 dark:text-slate-300 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-slate-400 dark:text-slate-500" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required
                className="w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                disabled={localLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-400"
                disabled={localLoading}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-6 flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-slate-700"
              disabled={localLoading}
            />
            <label htmlFor="terms" className="text-slate-600 dark:text-slate-400 text-sm">
              I agree to the{' '}
              <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                Privacy Policy
              </Link>
            </label>
          </div>

          {/* Sign Up Button */}
          <Button
            type="submit"
            disabled={localLoading || !isFormValid}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {localLoading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Creating Account...
              </span>
            ) : (
              'Sign Up'
            )}
          </Button>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Already have an account?{' '}
              <Link
                href="/signin"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-600 dark:text-slate-500 text-sm">
          <p>© 2026 Studexa. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
