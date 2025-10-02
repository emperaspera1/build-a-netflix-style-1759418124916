'use client'

import { useState } from 'react'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import VideoGrid from './components/VideoGrid'
import SearchBar from './components/SearchBar'
import UserProfile from './components/UserProfile'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Build A Netflix Style
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Build a Netflix-style homepage with a hero banner (use a nice, dark-mode compatible gradient here), movie sections, responsive cards, and a modal for 
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Header />
            <VideoPlayer />
            <VideoGrid />
            <SearchBar />
            <UserProfile />
          </div>
        </div>
      </div>
    </main>
  )
}