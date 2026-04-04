'use client';

import { Button } from '@/components/ui/button';
import { TrendingUp, Plus, BarChart3, LineChart, PieChart } from 'lucide-react';

export default function Progress() {
  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-auto pb-8">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">📊 Progress Overview</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Track your academic performance and growth</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Upload Assignment
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Overall Score</p>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">82%</p>
            <p className="text-xs text-green-600 dark:text-green-400 mt-2">↑ 5% improvement</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Assignments Done</p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400">24/30</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">80% completion</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Study Streak</p>
            <p className="text-3xl font-bold text-orange-600 dark:text-orange-400">12 days</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">🔥 Keep going!</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Focus Hours</p>
            <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">45.5h</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">This month</p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Subject Performance */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-6">Subject Performance</h3>
            
            <div className="space-y-4">
              {[
                { subject: 'Mathematics', score: 85, color: 'bg-blue-500' },
                { subject: 'Physics', score: 78, color: 'bg-cyan-500' },
                { subject: 'Chemistry', score: 90, color: 'bg-orange-500' },
                { subject: 'English', score: 72, color: 'bg-purple-500' },
                { subject: 'History', score: 88, color: 'bg-green-500' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-slate-700 dark:text-slate-300 font-medium">{item.subject}</p>
                    <p className="text-slate-900 dark:text-slate-50 font-bold">{item.score}%</p>
                  </div>
                  <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div
                      className={`${item.color} h-full rounded-full transition-all`}
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-6">Weekly Activity</h3>
            
            <div className="grid grid-cols-7 gap-2 h-40">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => {
                const heights = [60, 75, 50, 85, 90, 70, 55];
                return (
                  <div key={day} className="flex flex-col items-center justify-end">
                    <div
                      className="w-full bg-blue-500 rounded-t transition-all hover:bg-blue-600"
                      style={{ height: `${heights[idx]}%` }}
                    />
                    <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mt-2">{day}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Assignment Submissions */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-6">Recent Submissions</h3>

          <div className="space-y-3">
            {[
              { subject: 'Mathematics', assignment: 'Quadratic Equations Problem Set', submitted: '2024-12-15', status: 'Completed', grade: '95%' },
              { subject: 'Physics', assignment: 'Lab Report - Electromagnetism', submitted: '2024-12-14', status: 'Graded', grade: '88%' },
              { subject: 'Chemistry', assignment: 'Organic Compounds Essay', submitted: '2024-12-13', status: 'Graded', grade: '92%' },
              { subject: 'English', assignment: 'Environment Essay', submitted: '2024-12-12', status: 'Pending', grade: '-' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
                <div className="flex-1">
                  <p className="font-medium text-slate-900 dark:text-slate-50">{item.assignment}</p>
                  <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400 mt-1">
                    <span>{item.subject}</span>
                    <span>Submitted: {item.submitted}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.status === 'Completed' ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300' :
                    item.status === 'Graded' ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' :
                    'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                  }`}>
                    {item.status}
                  </span>
                  {item.grade !== '-' && (
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">{item.grade}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
