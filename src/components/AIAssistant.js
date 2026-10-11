import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaComment, FaSpinner } from 'react-icons/fa';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: 'Hi! 👋 I\'m VertexFlow\'s AI assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { 
      type: 'user', 
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setShowSuggestions(false);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setIsTyping(false);
      setShowSuggestions(true);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion) => {
    const cleanSuggestion = suggestion.replace(/[💰🚀📞🎨📅]/g, '').trim();
    setInput(cleanSuggestion);
    setTimeout(() => handleSend(), 100);
  };

  const getBotResponse = (message) => {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('pricing')) {
      return '💰 Our pricing varies by project:\n\n• Basic Websites: from $500\n• Mobile Apps: from $3,000\n• AI Solutions: from $5,000\n• Complex Apps: $10,000+\n\nWant a detailed quote for your project?';
    }
    if (lowerMsg.includes('contact') || lowerMsg.includes('call') || lowerMsg.includes('phone')) {
      return '📞 Here\'s how to reach us:\n\n• Phone: +92 300 1234567\n• Email: info@vertexflow.tech\n• Office: Islamabad, Pakistan\n\nWould you like me to schedule a call?';
    }
    if (lowerMsg.includes('service') || lowerMsg.includes('offer')) {
      return '🚀 We offer:\n\n• Mobile App Development\n• Web Development\n• AI & Automation\n• SaaS Development\n• Graphic Design\n• SEO & Digital Marketing\n\nWhich interests you?';
    }
    if (lowerMsg.includes('portfolio') || lowerMsg.includes('work')) {
      return '🎨 We\'ve completed 150+ projects! Check our portfolio page for case studies. Want me to share specific examples?';
    }
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
      return 'Hello! 👋 Welcome to VertexFlow! How can I help you today? Ask me about our services, pricing, or anything else!';
    }
    return 'Thanks for your message! 🙏 Let me connect you with our team. You can also book a free consultation call. Is there anything specific you\'d like to know?';
  };

  const suggestions = [
    '💰 Pricing & Packages',
    '🚀 Services Offered',
    '📞 Contact Information',
    '🎨 View Portfolio',
    '📅 Book Consultation'
  ];

  return (
    <>
      <style>{aiAssistantStyles}</style>
      
      {/* Chat Toggle Button - Positioned above WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`vai-toggle ${isOpen ? 'vai-toggle-open' : ''}`}
        aria-label={isOpen ? 'Close chat' : 'Open AI Chat'}
        title={isOpen ? 'Close AI Assistant' : 'Chat with AI'}
      >
        <div className="vai-toggle-icon">
          {isOpen ? <FaTimes /> : <FaComment />}
        </div>
        {!isOpen && <div className="vai-toggle-ripple"></div>}
      </button>

      {/* Chat Window - Opens from bottom right, stays within viewport */}
      <div className={`vai-window ${isOpen ? 'vai-window-open' : ''}`}>
        {/* Header */}
        <div className="vai-header">
          <div className="vai-header-left">
            <div className="vai-avatar">
              <FaRobot />
              <div className="vai-status-dot"></div>
            </div>
            <div>
              <h3 className="vai-name">VertexFlow AI</h3>
              <p className="vai-status-text">Online • Instant replies</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="vai-close-btn">
            <FaTimes />
          </button>
        </div>

        {/* Messages Body */}
        <div className="vai-body">
          {messages.length === 1 && (
            <div className="vai-welcome">
              <div className="vai-welcome-icon">
                <FaRobot />
              </div>
              <h4>Hi there! 👋</h4>
              <p>I'm here to help with pricing, services, and more. Ask me anything!</p>
            </div>
          )}

          {messages.map((msg, index) => (
            <div key={index} className={`vai-msg ${msg.type === 'user' ? 'vai-msg-right' : 'vai-msg-left'}`}>
              {msg.type === 'bot' && (
                <div className="vai-msg-avatar">
                  <FaRobot />
                </div>
              )}
              <div className="vai-msg-content">
                <div className={`vai-bubble ${msg.type === 'user' ? 'vai-bubble-user' : 'vai-bubble-bot'}`}>
                  {msg.text.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < msg.text.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
                <span className="vai-msg-time">{msg.timestamp}</span>
              </div>
              {msg.type === 'user' && (
                <div className="vai-msg-avatar vai-msg-avatar-user">
                  <span>U</span>
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="vai-msg vai-msg-left">
              <div className="vai-msg-avatar"><FaRobot /></div>
              <div className="vai-bubble vai-bubble-bot">
                <div className="vai-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}

          {showSuggestions && messages.length === 1 && (
            <div className="vai-suggestions">
              <p className="vai-suggestions-title">Quick suggestions:</p>
              {suggestions.map((s, i) => (
                <button key={i} onClick={() => handleSuggestionClick(s)} className="vai-suggestion-btn">
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Footer */}
        <div className="vai-footer">
          <div className="vai-input-wrap">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="vai-input"
              disabled={isTyping}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className={`vai-send-btn ${input.trim() && !isTyping ? 'vai-send-ready' : ''}`}
            >
              {isTyping ? <FaSpinner className="vai-spin" /> : <FaPaperPlane />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ============================================
// CUSTOM CSS FOR AI ASSISTANT - PERFECT BOTTOM POSITION
// ============================================
const aiAssistantStyles = `
  /* Toggle Button - Right side, between WhatsApp and Back to Top */
  .vai-toggle {
    position: fixed;
    bottom: 180px;
    right: 30px;
    width: 58px;
    height: 58px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    z-index: 999;
    box-shadow: 0 6px 20px rgba(37,150,190,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  }

  .vai-toggle:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(37,150,190,0.5);
  }

  .vai-toggle-open {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    box-shadow: 0 6px 20px rgba(239,68,68,0.4);
  }

  .vai-toggle-open:hover {
    box-shadow: 0 10px 30px rgba(239,68,68,0.5);
  }

  .vai-toggle-icon {
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }

  .vai-toggle-ripple {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: rgba(37,150,190,0.3);
    animation: vaiRipple 2.5s ease-out infinite;
    transform: translate(-50%, -50%);
  }

  @keyframes vaiRipple {
    0% { width: 100%; height: 100%; opacity: 0.5; }
    100% { width: 200%; height: 200%; opacity: 0; }
  }

  /* ============================================
     CHAT WINDOW - FIXED BOTTOM RIGHT POSITION
     ============================================ */
  .vai-window {
    position: fixed;
    bottom: 20px;
    right: 100px;
    width: 400px;
    height: 500px;
    max-height: calc(100vh - 100px);
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.25);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  }

  .vai-window-open {
    opacity: 1;
    transform: translateY(0) scale(1);
    pointer-events: all;
  }

  /* MOBILE: Full screen */
  @media (max-width: 768px) {
    .vai-window {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      max-height: 100vh;
      border-radius: 0;
    }
    
    .vai-toggle {
      bottom: 160px;
      right: 20px;
      width: 52px;
      height: 52px;
    }

    .vai-toggle-icon {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    .vai-toggle {
      bottom: 140px;
      right: 15px;
      width: 48px;
      height: 48px;
    }

    .vai-toggle-icon {
      font-size: 18px;
    }
  }

  /* Header */
  .vai-header {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    z-index: 2;
  }

  .vai-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .vai-avatar {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #ffffff;
    position: relative;
  }

  .vai-status-dot {
    position: absolute;
    bottom: 1px;
    right: 1px;
    width: 10px;
    height: 10px;
    background: #10b981;
    border-radius: 50%;
    border: 2px solid #2596be;
  }

  .vai-name {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
    line-height: 1.2;
  }

  .vai-status-text {
    font-size: 11px;
    color: rgba(255,255,255,0.8);
    margin: 2px 0 0;
  }

  .vai-close-btn {
    width: 30px;
    height: 30px;
    background: rgba(255,255,255,0.15);
    border: none;
    border-radius: 50%;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    transition: all 0.2s ease;
  }

  .vai-close-btn:hover {
    background: rgba(255,255,255,0.3);
    transform: rotate(90deg);
  }

  /* Body */
  .vai-body {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    background: #f8fafc;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .vai-body::-webkit-scrollbar { width: 4px; }
  .vai-body::-webkit-scrollbar-track { background: transparent; }
  .vai-body::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 2px; }

  /* Welcome Card */
  .vai-welcome {
    text-align: center;
    padding: 20px 16px;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.04);
    margin-bottom: 4px;
  }

  .vai-welcome-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 10px;
    font-size: 22px;
    color: #ffffff;
  }

  .vai-welcome h4 {
    font-family: 'Space Grotesk', sans-serif;
    margin: 0 0 4px;
    font-size: 15px;
    color: #1a1a1a;
  }

  .vai-welcome p {
    margin: 0;
    font-size: 12px;
    color: #6b7280;
  }

  /* Messages */
  .vai-msg {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    animation: vaiMsgIn 0.3s ease;
  }

  @keyframes vaiMsgIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .vai-msg-right {
    flex-direction: row-reverse;
  }

  .vai-msg-avatar {
    width: 26px;
    height: 26px;
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 11px;
    flex-shrink: 0;
  }

  .vai-msg-avatar-user {
    background: linear-gradient(135deg, #374151, #1a1a1a);
  }

  .vai-msg-avatar-user span {
    font-weight: 700;
    font-size: 10px;
  }

  .vai-bubble {
    padding: 10px 14px;
    border-radius: 14px;
    font-size: 13px;
    line-height: 1.5;
    max-width: 240px;
    word-wrap: break-word;
  }

  .vai-bubble-bot {
    background: #ffffff;
    color: #1a1a1a;
    border-bottom-left-radius: 4px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
  }

  .vai-bubble-user {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    color: #ffffff;
    border-bottom-right-radius: 4px;
  }

  .vai-msg-time {
    font-size: 9px;
    color: #9ca3af;
    display: block;
    margin-top: 3px;
    padding: 0 4px;
  }

  .vai-msg-right .vai-msg-time {
    text-align: right;
  }

  /* Typing */
  .vai-typing {
    display: flex;
    gap: 3px;
    padding: 3px 0;
  }

  .vai-typing span {
    width: 5px;
    height: 5px;
    background: #9ca3af;
    border-radius: 50%;
    animation: vaiTypeBounce 1.4s infinite;
  }

  .vai-typing span:nth-child(2) { animation-delay: 0.2s; }
  .vai-typing span:nth-child(3) { animation-delay: 0.4s; }

  @keyframes vaiTypeBounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-5px); }
  }

  /* Suggestions */
  .vai-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding-top: 4px;
  }

  .vai-suggestions-title {
    width: 100%;
    font-size: 11px;
    color: #9ca3af;
    margin: 0 0 2px;
  }

  .vai-suggestion-btn {
    padding: 7px 12px;
    background: #ffffff;
    border: 1px solid #e4e4e7;
    border-radius: 50px;
    font-size: 11px;
    color: #374151;
    cursor: pointer;
    transition: all 0.2s ease;
    font-family: 'Inter', sans-serif;
    white-space: nowrap;
  }

  .vai-suggestion-btn:hover {
    background: #2596be;
    color: #ffffff;
    border-color: #2596be;
  }

  /* Footer */
  .vai-footer {
    padding: 10px 16px;
    background: #ffffff;
    border-top: 1px solid #f4f4f5;
    flex-shrink: 0;
  }

  .vai-input-wrap {
    display: flex;
    gap: 8px;
    align-items: center;
    background: #f4f4f5;
    border-radius: 50px;
    padding: 3px 3px 3px 14px;
    border: 1px solid transparent;
    transition: all 0.2s ease;
  }

  .vai-input-wrap:focus-within {
    background: #ffffff;
    border-color: #2596be;
    box-shadow: 0 0 0 2px rgba(37,150,190,0.08);
  }

  .vai-input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 9px 0;
    font-size: 13px;
    outline: none;
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
  }

  .vai-input::placeholder { color: #9ca3af; }
  .vai-input:disabled { opacity: 0.5; }

  .vai-send-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: #d4d4d8;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    flex-shrink: 0;
    font-size: 12px;
  }

  .vai-send-ready {
    background: linear-gradient(135deg, #2596be, #1a7a9e);
    box-shadow: 0 3px 10px rgba(37,150,190,0.3);
  }

  .vai-send-ready:hover {
    transform: scale(1.08);
    box-shadow: 0 5px 15px rgba(37,150,190,0.4);
  }

  .vai-send-btn:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .vai-spin {
    animation: vaiSpin 1s linear infinite;
    font-size: 11px;
  }

  @keyframes vaiSpin {
    to { transform: rotate(360deg); }
  }

  /* Reduced Motion */
  @media (prefers-reduced-motion: reduce) {
    .vai-toggle-ripple,
    .vai-msg,
    .vai-typing span {
      animation: none;
    }
  }

  /* Print */
  @media print {
    .vai-window,
    .vai-toggle {
      display: none !important;
    }
  }
`;

export default AIAssistant;