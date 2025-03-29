export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

export interface ChatHistoryEntry {
  id: string;
  query: string;
  timestamp: Date;
  messages: Message[];
}