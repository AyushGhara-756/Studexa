'use client';

import { Bell, Trash2, Check } from 'lucide-react';
import { useState } from 'react';

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: '📝',
      title: 'Math test tomorrow at 10:00 AM',
      description: 'Grade 10 • A • Suggested study time: 2 more hours',
      time: '2 min ago',
      read: false,
      type: 'deadline',
    },
    {
      id: 2,
      icon: '📋',
      title: 'New assignment: Physics Lab Report',
      description: 'Due: Dec 16, 2024 • Chemistry Compounds',
      time: '1 hour ago',
      read: false,
      type: 'assignment',
    },
    {
      id: 3,
      icon: '🎉',
      title: 'Focus goal achieved!',
      description: '2.5 hours completed today • Streak: 12 days',
      time: '3 hours ago',
      read: true,
      type: 'achievement',
    },
    {
      id: 4,
      icon: '✅',
      title: 'Assignment Graded',
      description: 'Physics Lab Report - Score: 88%',
      time: '1 day ago',
      read: true,
      type: 'grade',
    },
    {
      id: 5,
      icon: '📚',
      title: 'New course available',
      description: 'AI & Machine Learning Basics - Recommended for you',
      time: '2 days ago',
      read: true,
      type: 'course',
    },
  ]);

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 overflow-auto pb-8">
      <div className="p-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50">🔔 Notifications</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Stay updated with your academic progress</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-slate-200 dark:border-slate-700">
          <button className="pb-3 px-4 font-semibold text-blue-600 border-b-2 border-blue-600">
            All
          </button>
          <button className="pb-3 px-4 font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200">
            Unread
          </button>
          <button className="pb-3 px-4 font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200">
            Deadlines
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 rounded-lg border transition-all ${
                notif.read
                  ? 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'
                  : 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700 shadow-sm'
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-1">{notif.icon}</span>

                <div className="flex-1 min-w-0">
                  <p className={`font-semibold text-slate-900 dark:text-slate-50`}>
                    {notif.title}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{notif.description}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">{notif.time}</p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {!notif.read && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      className="p-2 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-lg transition-colors"
                      title="Mark as read"
                    >
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notif.id)}
                    className="p-2 hover:bg-red-100 dark:hover:bg-red-900 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5 text-red-600 dark:text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <Bell className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400 text-lg">No notifications</p>
          </div>
        )}
      </div>
    </main>
  );
}
