'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User, Briefcase, Calendar, Badge, Edit2, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '@/store/authSlice';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/signin');
  };

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-auto pb-8">
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">👤 Profile</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Manage your account information</p>
          </div>
          <Button variant="outline" className="gap-2" onClick={handleLogout}>
            <LogOut className="w-4 h-4" />
            Sign Out
          </Button>
        </div>

        {/* Profile Card */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-8 mb-8">
          {/* Avatar Section */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{user?.name || 'User Name'}</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-1">🎓 Student</p>
                <p className="text-sm text-slate-500 dark:text-slate-500 mt-2">Member since Dec 2024</p>
              </div>
            </div>
            <Button variant="outline" className="gap-2">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Button>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Email Address</p>
                <p className="text-slate-900 dark:text-slate-50 font-semibold mt-1">{user?.email || 'student@example.com'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Phone Number</p>
                <p className="text-slate-900 dark:text-slate-50 font-semibold mt-1">{user?.contact || '9876543210'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Profession</p>
                <p className="text-slate-900 dark:text-slate-50 font-semibold mt-1">{user?.role || 'Student'}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Member Since</p>
                <p className="text-slate-900 dark:text-slate-50 font-semibold mt-1">December 2024</p>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">Academic Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
                <p className="text-slate-600 dark:text-slate-400 text-sm">Grade</p>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-300 mt-2">10 • A</p>
              </div>

              <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 border border-green-100 dark:border-green-800">
                <p className="text-slate-600 dark:text-slate-400 text-sm">Overall Score</p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-300 mt-2">82%</p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-6 border border-purple-100 dark:border-purple-800">
                <p className="text-slate-600 dark:text-slate-400 text-sm">Assignments Done</p>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-300 mt-2">24/30</p>
              </div>
            </div>
          </div>

          {/* Skills & Achievements */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-6">Top Skills</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { skill: 'Problem Solving', level: '85%', color: 'bg-blue-500' },
                { skill: 'Time Management', level: '78%', color: 'bg-green-500' },
                { skill: 'Critical Thinking', level: '82%', color: 'bg-purple-500' },
                { skill: 'Collaboration', level: '90%', color: 'bg-orange-500' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-slate-900 dark:text-slate-50">{item.skill}</p>
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-50">{item.level}</span>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full`}
                      style={{ width: item.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">Security Settings</h3>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-100 dark:border-slate-700">
              <span className="text-slate-900 dark:text-slate-50 font-medium">Change Password</span>
              <span className="text-slate-400 dark:text-slate-600">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-100 dark:border-slate-700">
              <span className="text-slate-900 dark:text-slate-50 font-medium">Two-Factor Authentication</span>
              <span className="text-slate-400 dark:text-slate-600">→</span>
            </button>
            <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-100 dark:border-slate-700">
              <span className="text-slate-900 dark:text-slate-50 font-medium">Active Sessions</span>
              <span className="text-slate-400 dark:text-slate-600">→</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
