'use client' // Add this at the top

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextType {
  user: string | null
  setUser: (user: string | null) => void
  lang: string
  setLang: (lang: string) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null)
  const [lang, setLang] = useState<string>('ar') // Default language

  return (
    <AppContext.Provider value={{ user, setUser, lang, setLang }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
