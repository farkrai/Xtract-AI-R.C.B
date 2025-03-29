import React from 'react';
import { useChatContext } from '../context/ChatContext';
import { RefreshCw } from 'lucide-react';

export default function History() {
  const { chatHistory, regenerateResponse } = useChatContext();

  if (chatHistory.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300">
            No chat history yet. Start a conversation to see your history here!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Chat History
      </h2>
      
      {chatHistory.map((entry) => (
        <div
          key={entry.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {entry.query}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(entry.timestamp).toLocaleString()}
              </p>
            </div>
            
            <button
              onClick={() => regenerateResponse(entry)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-2">
            {entry.messages.map((message) => (
              <div
                key={message.id}
                className={`p-2 rounded ${
                  message.role === 'user'
                    ? 'bg-blue-50 dark:bg-blue-900/20 ml-auto w-fit'
                    : 'bg-gray-50 dark:bg-gray-700/50 w-fit'
                }`}
              >
                <p className={`text-sm ${
                  message.role === 'user'
                    ? 'text-blue-800 dark:text-blue-200'
                    : 'text-gray-800 dark:text-gray-200'
                }`}>
                  {message.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}