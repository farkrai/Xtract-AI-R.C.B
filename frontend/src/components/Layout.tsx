import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, MessageSquare, History, Moon, Sun } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Layout({ children, darkMode, toggleDarkMode }: LayoutProps) {
  const location = useLocation();

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} md:relative md:top-0`}>
        <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <h1 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} hidden md:block`}>
              Library Assistant
            </h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                location.pathname === '/'
                  ? darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="hidden md:inline">Home</span>
            </Link>
            
            <Link
              to="/chat"
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                location.pathname === '/chat'
                  ? darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="hidden md:inline">Chat</span>
            </Link>
            
            <Link
              to="/history"
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                location.pathname === '/history'
                  ? darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  : darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <History className="w-5 h-5" />
              <span className="hidden md:inline">History</span>
            </Link>
            
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      <main className="max-w-4xl mx-auto p-4 pb-20 md:pb-4">
        {children}
      </main>
    </div>
  );
}