import React, { useState } from 'react'
import { Camera, Edit2, Shield, Bell, Key, User as UserIcon, Mail, Calendar, AtSign } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    username: 'CoolUser',
    tag: '1234',
    email: 'user@example.com',
    bio: 'Just another Discord user enjoying the platform!',
    createdAt: 'Jan 15, 2020',
  })

  return (
    <div className="min-h-screen bg-[hsl(var(--discord-dark))] overflow-y-auto">
      <div className="max-w-6xl mx-auto p-8">
        {/* Profile Header */}
        <div className="relative mb-8">
          {/* Banner */}
          <div className="h-32 bg-[hsl(var(--discord-blurple))] rounded-t-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--discord-blurple))] to-[hsl(235,86%,50%)]" />
          </div>
          
          {/* Avatar and Info */}
          <div className="bg-[hsl(var(--discord-gray))] rounded-b-lg p-6 pt-16">
            <div className="absolute top-20 left-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-[hsl(var(--discord-blurple))] border-8 border-[hsl(var(--discord-gray))] flex items-center justify-center text-white text-4xl font-bold">
                  {userData.username[0]}
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-[hsl(var(--discord-darker))] rounded-full flex items-center justify-center border-2 border-[hsl(var(--discord-gray))] hover:bg-[hsl(var(--discord-light-gray))] transition-colors">
                  <Camera size={16} className="text-[hsl(var(--discord-text))]" />
                </button>
              </div>
            </div>
            
            <div className="ml-32 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-[hsl(var(--discord-text))] text-2xl font-bold">{userData.username}</h1>
                  <span className="text-[hsl(var(--discord-text-muted))] text-xl">#{userData.tag}</span>
                </div>
                <p className="text-[hsl(var(--discord-text-muted))] mt-2 max-w-2xl">{userData.bio}</p>
                <div className="flex items-center gap-4 mt-3 text-sm text-[hsl(var(--discord-text-muted))]">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <span>Joined {userData.createdAt}</span>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => setIsEditing(!isEditing)}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <Edit2 size={16} />
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* User Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[hsl(var(--discord-text))]">
                  <UserIcon size={20} />
                  User Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
                    Username
                  </Label>
                  {isEditing ? (
                    <Input
                      value={userData.username}
                      onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-[hsl(var(--discord-text))]">{userData.username}#{userData.tag}</p>
                  )}
                </div>
                
                <div>
                  <Label className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
                    Email
                  </Label>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={userData.email}
                      onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                      className="mt-1"
                    />
                  ) : (
                    <p className="text-[hsl(var(--discord-text))]">{userData.email}</p>
                  )}
                </div>
                
                <div>
                  <Label className="text-[hsl(var(--discord-text-muted))] text-xs font-bold uppercase mb-2">
                    About Me
                  </Label>
                  {isEditing ? (
                    <textarea
                      value={userData.bio}
                      onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                      className="w-full bg-[hsl(var(--discord-darker))] border border-[hsl(var(--discord-darker))] text-[hsl(var(--discord-text))] rounded-[3px] px-3 py-2 h-24 resize-none focus:border-[hsl(var(--discord-blurple))] focus:outline-none transition-colors"
                    />
                  ) : (
                    <p className="text-[hsl(var(--discord-text))]">{userData.bio}</p>
                  )}
                </div>
                
                {isEditing && (
                  <div className="flex gap-3 pt-4">
                    <Button variant="default" className="flex-1">
                      Save Changes
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[hsl(var(--discord-text))]">
                  <Shield size={20} />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[hsl(var(--discord-darker))]">
                  <div>
                    <h3 className="text-[hsl(var(--discord-text))] font-medium">Two-Factor Authentication</h3>
                    <p className="text-[hsl(var(--discord-text-muted))] text-sm">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Enable
                  </Button>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-[hsl(var(--discord-darker))]">
                  <div>
                    <h3 className="text-[hsl(var(--discord-text))] font-medium">Change Password</h3>
                    <p className="text-[hsl(var(--discord-text-muted))] text-sm">Update your account password</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>
                
                <div className="flex items-center justify-between py-3">
                  <div>
                    <h3 className="text-[hsl(var(--discord-text))] font-medium">Delete Account</h3>
                    <p className="text-[hsl(var(--discord-text-muted))] text-sm">Permanently delete your account</p>
                  </div>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Activity Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(var(--discord-text))]">Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--discord-text-muted))] text-sm">Messages Sent</span>
                  <span className="text-[hsl(var(--discord-text))] font-bold">1,234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--discord-text-muted))] text-sm">Servers Joined</span>
                  <span className="text-[hsl(var(--discord-text))] font-bold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[hsl(var(--discord-text-muted))] text-sm">Friends</span>
                  <span className="text-[hsl(var(--discord-text))] font-bold">56</span>
                </div>
              </CardContent>
            </Card>

            {/* Badges Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(var(--discord-text))]">Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((badge) => (
                    <div
                      key={badge}
                      className="aspect-square bg-[hsl(var(--discord-darker))] rounded-lg flex items-center justify-center text-2xl hover:bg-[hsl(var(--discord-light-gray))] transition-colors cursor-pointer"
                    >
                      🏆
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Connections Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-[hsl(var(--discord-text))]">Connections</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-[hsl(var(--discord-darker))] rounded hover:bg-[hsl(var(--discord-light-gray))] transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-[#1DA1F2] rounded flex items-center justify-center text-white font-bold text-sm">
                    T
                  </div>
                  <div className="flex-1">
                    <p className="text-[hsl(var(--discord-text))] text-sm font-medium">Twitter</p>
                    <p className="text-[hsl(var(--discord-text-muted))] text-xs">@username</p>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full" size="sm">
                  Add Connection
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
