'use client'

import { useState } from 'react'

interface SearchBarProps {
  className?: string
}

export default function SearchBar({ className = '' }: SearchBarProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={`bg-card rounded-xl shadow-lg border border-border p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-primary"></div>
        </div>
        <h2 className="text-2xl font-bold text-card-foreground">
          Search Bar
        </h2>
      </div>

      <p className="text-muted-foreground mb-6 leading-relaxed">
        This SearchBar component is part of your Next.js application.
        Click below to interact with this feature.
      </p>

      <button
        onClick={() => setIsActive(!isActive)}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
          isActive
            ? 'bg-accent text-accent-foreground shadow-md'
            : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg'
        }`}
      >
        {isActive ? '✓ Active' : 'Activate Feature'}
      </button>

      {isActive && (
        <div className="mt-4 p-4 rounded-lg bg-muted border border-border">
          <p className="text-sm text-muted-foreground">
            SearchBar is now active and ready to use!
          </p>
        </div>
      )}
    </div>
  )
}