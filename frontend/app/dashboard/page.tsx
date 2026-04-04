'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/custom/Navbar';
import {
  Bell,
  BookOpen,
  Zap,
  TrendingUp,
  Trophy,
  Clock,
  Lightbulb,
  MessageSquare,
  Plus,
  ChevronRight,
  MoreVertical,
  Upload,
  Mail,
  FileText,
  Play,
  Sparkles,
  Calendar,
  AlertCircle,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard() {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="flex">
      <Navbar />
      <main className="flex-1 bg-slate-50 dark:bg-slate-900 overflow-auto transition-colors duration-300">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto p-8">
        {/* Header Section */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">Good morning, {user?.name || 'Virat'}! 👋</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              You're doing great! <span className="font-semibold">3 tasks due today</span> • 
              <span className="text-orange-600 ml-1">Math test tomorrow</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-950 px-4 py-2 rounded-lg">
              <span>🔥</span>
              <span className="font-bold text-orange-900 dark:text-orange-300">12 Day Streak</span>
            </div>
            <div className="flex items-center gap-2 bg-red-100 dark:bg-red-950 px-4 py-2 rounded-lg">
              <Bell className="w-5 h-5 text-red-600 dark:text-red-400" />
              <span className="text-red-900 dark:text-red-300 font-semibold">1</span>
            </div>
            <Link href={"/profile"}><div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold">{user?.name?.charAt(0) || 'A'}</span>
            </div></Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/50 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-4xl font-bold text-blue-600 dark:text-blue-400">3/8</p>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-2">Today's Tasks</p>
              </div>
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="mt-4 h-1 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: '37.5%' }} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/50 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-4xl font-bold text-green-600 dark:text-green-400">2h 45m</p>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-2">Focus Time</p>
              </div>
              <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-3">↑ 15% from yesterday</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/50 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-4xl font-bold text-cyan-600 dark:text-cyan-400">85%</p>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-2">Weekly Progress</p>
              </div>
              <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </div>
            <div className="mt-4 h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-600" style={{ width: '85%' }} />
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-black/50 transition-all">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-4xl font-bold text-yellow-600 dark:text-yellow-400">12 Days</p>
                <p className="text-slate-700 dark:text-slate-300 font-medium mt-2">Current Streak</p>
              </div>
              <Trophy className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-3">🔥 Keep it up!</p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Today's Schedule & Focus Mode */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Schedule */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-white" />
                  <h3 className="text-lg font-bold text-white">Today's Schedule</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-blue-500">
                  View Calendar
                </Button>
              </div>

              <div className="p-6 space-y-4">
                {[
                  {
                    time: '09:00',
                    task: 'Mathematics - Quadratic Equations',
                    priority: 'High Priority',
                    duration: '2 hours',
                    chapter: 'Chapter 4',
                  },
                  {
                    time: '11:30',
                    task: 'Physics - Lab Report',
                    priority: 'Completed',
                    duration: '1.5 hours',
                    chapter: 'Chapter 6',
                    completed: true,
                  },
                  {
                    time: '14:00',
                    task: 'Chemistry - Organic Compounds',
                    priority: 'Medium',
                    duration: '2 hours',
                    chapter: 'Chapter 3',
                  },
                  {
                    time: '16:00',
                    task: 'English - Essay Writing',
                    priority: 'Due Tomorrow',
                    duration: '1 hour',
                    chapter: 'Save Environment topic',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-4 rounded-lg border transition-all ${
                      item.completed
                        ? 'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800'
                        : 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500'
                    }`}
                  >
                    <div className="flex-shrink-0 pt-1">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.completed ? 'bg-green-500' : 'bg-blue-500'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{item.time}</p>
                          <p className={`font-semibold mt-1 ${item.completed ? 'line-through text-slate-500 dark:text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                            {item.task}
                          </p>
                          <p className="text-slate-600 dark:text-slate-400 text-xs mt-1">{item.duration} • {item.chapter}</p>
                        </div>
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded whitespace-nowrap ml-2 ${
                            item.priority === 'High Priority'
                              ? 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
                              : item.priority === 'Completed'
                              ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300'
                              : item.priority === 'Medium'
                              ? 'bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300'
                              : 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                          }`}
                        >
                          {item.priority}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Focus Mode */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-xl p-8 text-white shadow-lg">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Focus Mode</h3>
                  <p className="text-green-100 dark:text-green-200">Stay focused, grow your forest!</p>
                </div>
                <span className="text-3xl">🌲</span>
              </div>

              <div className="text-center mb-8">
                <p className="text-6xl font-bold font-mono">25:00</p>
                <p className="text-green-100 dark:text-green-200 mt-2">Pomodoro Timer</p>
              </div>

              <Button className="w-full bg-white text-green-600 hover:bg-green-50 dark:bg-slate-100 dark:text-green-700 dark:hover:bg-slate-200 font-semibold gap-2">
                <Play className="w-5 h-5" />
                Start Focus Session
              </Button>
            </div>

            {/* Progress Overview */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Progress Overview</h3>
                <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400">
                  This Week
                </Button>
              </div>

              {/* Simple Bar Chart */}
              <div className="flex items-end justify-around h-48 gap-4 mb-6">
                {[
                  { subject: 'Math', score: 85 },
                  { subject: 'Physics', score: 72 },
                  { subject: 'Chemistry', score: 90 },
                  { subject: 'English', score: 68 },
                  { subject: 'Biology', score: 88 },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-t" style={{ height: `${(item.score / 100) * 150}px` }} />
                    <p className="text-xs font-bold text-slate-900 dark:text-white mt-2">{item.score}%</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{item.subject}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* AI Study Assistant */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6" />
                  <h3 className="text-xl font-bold">AI Study<br />Assistant</h3>
                </div>
              </div>
              <p className="text-blue-100 dark:text-blue-200 mb-4 text-sm">Get help with your homework</p>
              <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 dark:bg-slate-100 dark:hover:bg-slate-200 font-semibold">
                Ask AI
              </Button>
            </div>

            {/* Parent Insights */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 rounded-xl p-6 text-white shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold">Parent Insights</h3>
                <Button variant="ghost" size="sm" className="text-white hover:bg-purple-500 dark:hover:bg-purple-600">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                <div className="bg-white/20 dark:bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-white/30 dark:bg-white/20 flex items-center justify-center text-lg">
                      📊
                    </div>
                    <div>
                      <p className="font-semibold">Great progress this week!</p>
                      <p className="text-sm text-purple-100 dark:text-purple-200">↑ 10% improvement</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/20 dark:bg-white/10 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/30 dark:bg-white/20 flex items-center justify-center text-lg">
                      ⏰
                    </div>
                    <div>
                      <p className="font-semibold">Alex has a Math test tomorrow</p>
                      <p className="text-sm text-purple-100 dark:text-purple-200">Suggested study time: 2 more hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 dark:from-red-800 dark:to-red-900 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-white" />
                  <h3 className="font-bold text-white">Recent Notifications</h3>
                </div>
                <Button variant="ghost" size="sm" className="text-white hover:bg-red-500 dark:hover:bg-red-700">
                  View All
                </Button>
              </div>

              <div className="p-4 space-y-3">
                {[
                  {
                    icon: '⏰',
                    title: 'Math test tomorrow at 10:00 AM',
                    time: '2 min ago',
                    type: 'alert',
                  },
                  {
                    icon: '📝',
                    title: 'New assignment: Physics Lab Report',
                    time: '1 hour ago',
                    type: 'assignment',
                    detail: 'Due: Dec 16, 2024',
                  },
                  {
                    icon: '🎉',
                    title: 'Focus goal achieved!',
                    time: '3 hours ago',
                    type: 'success',
                    detail: '2.5 hours completed today',
                  },
                ].map((notif, idx) => (
                  <div key={idx} className="flex items-start gap-3 pb-3 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                    <div className="text-xl">{notif.icon}</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{notif.title}</p>
                      {notif.detail && <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{notif.detail}</p>}
                      <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
}
