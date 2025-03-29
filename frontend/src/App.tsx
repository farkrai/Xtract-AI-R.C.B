import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Chat from './pages/Chat';
import History from './pages/History';
import { ChatProvider } from './context/ChatContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ChatProvider>
      <Router>
        <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </Layout>
      </Router>
    </ChatProvider>
  );
}

export default App;