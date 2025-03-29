import React, { createContext, useContext, useState } from 'react';
import { ChatHistoryEntry, Message } from '../types';

interface ChatContextType {
  chatHistory: ChatHistoryEntry[];
  addToHistory: (entry: ChatHistoryEntry) => void;
  regenerateResponse: (historyEntry: ChatHistoryEntry) => Promise<void>;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [chatHistory, setChatHistory] = useState<ChatHistoryEntry[]>([]);

  const addToHistory = (entry: ChatHistoryEntry) => {
    setChatHistory(prev => [entry, ...prev]);
  };

  const regenerateResponse = async (historyEntry: ChatHistoryEntry) => {
    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1000));
    const regeneratedMessage: Message = {
      id: Date.now().toString(),
      content: `Regenerated response for: ${historyEntry.query}`,
      role: 'assistant',
      timestamp: new Date()
    };
    
    const updatedEntry: ChatHistoryEntry = {
      ...historyEntry,
      messages: [...historyEntry.messages, regeneratedMessage],
      timestamp: new Date()
    };

    setChatHistory(prev =>
      prev.map(entry => (entry.id === historyEntry.id ? updatedEntry : entry))
    );
  };

  return (
    <ChatContext.Provider value={{ chatHistory, addToHistory, regenerateResponse }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}