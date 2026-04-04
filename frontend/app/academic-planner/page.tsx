'use client';

import { Button } from '@/components/ui/button';
import { Plus, ChevronLeft, ChevronRight, Clock, MapPin, Users } from 'lucide-react';
import { useState } from 'react';

export default function AcademicPlanner() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const scheduleItems = [
    { time: '09:00', duration: '2h', subject: 'Mathematics', topic: 'Quadratic Equations', type: 'Study', priority: 'High', chapter: 'Chapter 4' },
    { time: '11:30', duration: '1.5h', subject: 'Physics', topic: 'Lab Report', type: 'Lab Work', priority: 'Completed', chapter: 'Chapter 6' },
    { time: '14:00', duration: '2h', subject: 'Chemistry', topic: 'Organic Compounds', type: 'Study', priority: 'Medium', chapter: 'Chapter 3' },
    { time: '16:00', duration: '1h', subject: 'English', topic: 'Essay Writing', type: 'Assignment', priority: 'Due Tomorrow', chapter: 'Save Environment' },
    { time: '17:30', duration: '1.5h', subject: 'History', topic: 'Project Research', type: 'Research', priority: 'Medium', chapter: 'Ancient Civilizations' },
  ];

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-auto pb-8">
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">📚 Academic Planner</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Plan your study sessions and assignments</p>
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add Study Session
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-4">Calendar</h3>
            
            <div className="flex items-center justify-between mb-4">
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                <ChevronLeft className="w-5 h-5 dark:text-slate-300" />
              </button>
              <span className="font-semibold text-slate-900 dark:text-slate-50">
                {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
              <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded">
                <ChevronRight className="w-5 h-5 dark:text-slate-300" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-xs font-semibold text-slate-600 dark:text-slate-400 py-2">
                  {day}
                </div>
              ))}
              {[...Array(35)].map((_, i) => (
                <button
                  key={i}
                  className={`aspect-square rounded text-sm font-medium transition-colors ${
                    i === 14
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50 mb-6">Today's Schedule</h3>

              <div className="space-y-4">
                {scheduleItems.map((item, idx) => (
                  <div key={idx} className="border-l-4 border-blue-500 bg-slate-50 dark:bg-slate-700 p-4 rounded hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{item.time}</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-slate-50">{item.subject}</p>
                        <p className="text-slate-600 dark:text-slate-400">{item.topic}</p>
                      </div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.priority === 'High' ? 'bg-red-100 text-red-700' :
                        item.priority === 'Completed' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.priority}
                      </span>
                    </div>

                    <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {item.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                <p className="text-sm text-blue-700 dark:text-blue-300">Study Hours Today</p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100 mt-1">7.5h</p>
              </div>
              <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-100 dark:border-green-800">
                <p className="text-sm text-green-700 dark:text-green-300">Completed</p>
                <p className="text-2xl font-bold text-green-900 dark:text-green-100 mt-1">1/5</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-950 rounded-lg p-4 border border-orange-100 dark:border-orange-800">
                <p className="text-sm text-orange-700 dark:text-orange-300">Pending</p>
                <p className="text-2xl font-bold text-orange-900 dark:text-orange-100 mt-1">4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
