import React, { useState } from 'react'
import { Hash, Users, Settings, Plus, Search, Send, Smile, Paperclip, Gift, Mic, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Chat() {
  const [selectedChannel, setSelectedChannel] = useState('general')
  const [message, setMessage] = useState('')
  
  const channels = [
    { id: 'general', name: 'general', type: 'text' },
    { id: 'random', name: 'random', type: 'text' },
    { id: 'announcements', name: 'announcements', type: 'text' },
  ]
  
  const messages = [
    { id: 1, user: 'User1', avatar: 'U1', content: 'Hey everyone!', timestamp: '10:30 AM' },
    { id: 2, user: 'User2', avatar: 'U2', content: 'Welcome to the chat!', timestamp: '10:31 AM' },
    { id: 3, user: 'User1', avatar: 'U1', content: 'Thanks! Excited to be here.', timestamp: '10:32 AM' },
  ]
  
  return (
    <div className="flex h-screen bg-[hsl(var(--discord-dark))] overflow-hidden">
      {/* Server Sidebar */}
      <div className="w-[72px] bg-[hsl(var(--discord-darker))] flex flex-col items-center py-3 gap-2">
        <div className="w-12 h-12 bg-[hsl(var(--discord-blurple))] rounded-2xl flex items-center justify-center text-white font-bold hover:rounded-xl transition-all cursor-pointer">
          S
        </div>
        <div className="w-8 h-[2px] bg-[hsl(var(--discord-gray))] rounded-full" />
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-12 h-12 bg-[hsl(var(--discord-gray))] rounded-[50%] hover:rounded-xl hover:bg-[hsl(var(--discord-blurple))] flex items-center justify-center text-[hsl(var(--discord-text))] font-semibold transition-all cursor-pointer"
          >
            S{i}
          </div>
        ))}
        <button className="w-12 h-12 bg-[hsl(var(--discord-gray))] rounded-[50%] hover:rounded-xl hover:bg-[hsl(var(--discord-green))] flex items-center justify-center text-[hsl(var(--discord-green))] hover:text-white transition-all cursor-pointer">
          <Plus size={24} />
        </button>
      </div>

      {/* Channel Sidebar */}
      <div className="w-60 bg-[hsl(var(--discord-gray))] flex flex-col">
        {/* Server Header */}
        <div className="h-12 px-4 flex items-center justify-between border-b border-[hsl(var(--discord-darker))] shadow-sm cursor-pointer hover:bg-[hsl(var(--discord-light-gray))] transition-colors">
          <h2 className="text-[hsl(var(--discord-text))] font-bold">My Server</h2>
          <button className="text-[hsl(var(--discord-text))] hover:text-white">
            ×
          </button>
        </div>
        
        {/* Channels List */}
        <div className="flex-1 overflow-y-auto px-2 py-2">
          <div className="flex items-center justify-between px-2 py-1 text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase hover:text-[hsl(var(--discord-text))] cursor-pointer">
            <span>Text Channels</span>
            <Plus size={14} />
          </div>
          
          {channels.map((channel) => (
            <div
              key={channel.id}
              onClick={() => setSelectedChannel(channel.id)}
              className={`flex items-center gap-2 px-2 py-1.5 mx-1 rounded cursor-pointer ${
                selectedChannel === channel.id
                  ? 'bg-[hsl(var(--discord-light-gray))] text-white'
                  : 'text-[hsl(var(--discord-text-muted))] hover:bg-[hsl(var(--discord-light-gray))] hover:text-[hsl(var(--discord-text))]'
              } transition-colors`}
            >
              <Hash size={20} className="shrink-0" />
              <span className="font-medium">{channel.name}</span>
            </div>
          ))}
        </div>
        
        {/* User Area */}
        <div className="h-[52px] bg-[hsl(var(--discord-darker))] px-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[hsl(var(--discord-blurple))] flex items-center justify-center text-white text-sm font-bold">
              U
            </div>
            <div className="flex flex-col">
              <span className="text-[hsl(var(--discord-text))] text-sm font-medium">Username</span>
              <span className="text-[hsl(var(--discord-text-muted))] text-xs">#1234</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
              <Mic size={18} />
            </button>
            <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
              <Settings size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="h-12 px-4 flex items-center gap-2 border-b border-[hsl(var(--discord-darker))] shadow-sm">
          <Hash size={24} className="text-[hsl(var(--discord-text-muted))]" />
          <h3 className="text-[hsl(var(--discord-text))] font-bold">{selectedChannel}</h3>
          <div className="ml-auto flex items-center gap-4">
            <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
              <Users size={20} />
            </button>
            <div className="relative">
              <Search size={16} className="absolute left-2 top-1/2 -translate-y-1/2 text-[hsl(var(--discord-text-muted))]" />
              <input
                type="text"
                placeholder="Search"
                className="w-36 h-6 bg-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] text-xs rounded px-7 focus:outline-none focus:w-60 transition-all"
              />
            </div>
          </div>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Hash size={48} className="text-[hsl(var(--discord-text-muted))]" />
              <div>
                <h2 className="text-[hsl(var(--discord-text))] font-bold text-3xl">Welcome to #{selectedChannel}!</h2>
                <p className="text-[hsl(var(--discord-text-muted))] text-sm">This is the start of the #{selectedChannel} channel.</p>
              </div>
            </div>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className="flex gap-4 px-4 py-2 hover:bg-[hsl(var(--discord-gray)/0.3)] message-hover group">
              <div className="w-10 h-10 rounded-full bg-[hsl(var(--discord-blurple))] flex items-center justify-center text-white font-bold shrink-0">
                {msg.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[hsl(var(--discord-text))] font-medium hover:underline cursor-pointer">
                    {msg.user}
                  </span>
                  <span className="text-[hsl(var(--discord-text-muted))] text-xs">
                    {msg.timestamp}
                  </span>
                </div>
                <p className="text-[hsl(var(--discord-text))]">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Message Input */}
        <div className="px-4 pb-6">
          <div className="bg-[hsl(var(--discord-light-gray))] rounded-lg px-4 py-3">
            <div className="flex items-center gap-2">
              <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
                <Plus size={20} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={`Message #${selectedChannel}`}
                className="flex-1 bg-transparent text-[hsl(var(--discord-text))] placeholder:text-[hsl(var(--discord-text-muted))] outline-none"
              />
              <div className="flex items-center gap-2">
                <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
                  <Gift size={20} />
                </button>
                <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
                  <Paperclip size={20} />
                </button>
                <button className="text-[hsl(var(--discord-text-muted))] hover:text-[hsl(var(--discord-text))]">
                  <Smile size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="w-60 bg-[hsl(var(--discord-gray))] overflow-y-auto">
        <div className="p-4">
          <h3 className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">Online — 3</h3>
          {['User1', 'User2', 'User3'].map((user, i) => (
            <div key={i} className="flex items-center gap-3 px-2 py-1.5 rounded hover:bg-[hsl(var(--discord-light-gray))] cursor-pointer transition-colors group">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[hsl(var(--discord-blurple))] flex items-center justify-center text-white text-sm font-bold">
                  {user[0]}
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[hsl(var(--discord-green))] rounded-full border-2 border-[hsl(var(--discord-gray))] group-hover:border-[hsl(var(--discord-light-gray))]" />
              </div>
              <span className="text-[hsl(var(--discord-text))] text-sm font-medium">{user}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Chat
