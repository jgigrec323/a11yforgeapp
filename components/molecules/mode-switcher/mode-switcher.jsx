'use client'

import { useEffect, useState } from 'react'

const ModeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme')

        if (
            savedTheme === 'dark' ||
            (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        const newMode = !darkMode

        setDarkMode(newMode)

        if (newMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }

    return (
        <button
            title="mode switcher"
            onClick={toggleDarkMode}
            className={`mode-switcher ${darkMode ? 'dark' : ''}`}>
            <div className={`toggle-circle ${darkMode ? 'dark active' : ''}`}></div>
        </button>
    )
}

export default ModeSwitcher
