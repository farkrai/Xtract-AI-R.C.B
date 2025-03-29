import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-6">
          <BookOpen className="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to Library Assistant
        </h1>
        
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
          Your AI-powered guide to discovering your next favorite book. Get personalized recommendations based on your interests and reading preferences.
        </p>
        
        <div className="space-y-4">
          <Link
            to="/chat"
            className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Start Chatting
          </Link>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Ask about any genre, author, or topic to get tailored book recommendations
          </p>
        </div>
      </div>
      
      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Personalized Recommendations
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get book suggestions tailored to your unique reading preferences and interests.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Smart Conversations
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have natural conversations about books and get intelligent, context-aware responses.
          </p>
        </div>
        
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
            Reading History
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Keep track of your book discussions and easily revisit previous recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}