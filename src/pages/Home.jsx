import React, { useEffect, useState, useMemo } from 'react'
import { Button } from 'react-bootstrap'

export default function Home() {
  const [theme, setTheme] = useState('light-theme')
  const toggleTheme = () => {
    theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme')
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  return (
    <>
      <div className="Main">
        <div className="content-box">
          <h1>Dark mode theme</h1>
          <p>blak white and green colors of the theme</p>
          <Button onClick={() => toggleTheme()}>Dark</Button>
        </div>
      </div>
    </>
  )
}
