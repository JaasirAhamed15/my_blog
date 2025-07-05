// components/ThemeToggle.tsx
'use client'

import { Switch } from 'antd'
import { useEffect, useState } from 'react'

export default function ChangeTheme() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setDark(true)
    }
  }, [])

  const toggleTheme = (checked: boolean) => {
    setDark(checked)
    if (checked) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Switch
      size="default"
      checked={dark}
      onChange={toggleTheme}
      checkedChildren="🌙"
      unCheckedChildren="☀️"
    />
  )
}
