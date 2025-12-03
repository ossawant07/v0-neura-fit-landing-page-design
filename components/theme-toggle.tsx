"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Check for saved theme preference or default to 'dark'
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const initialTheme = savedTheme || "dark"
    setTheme(initialTheme)
    document.documentElement.classList.toggle("light", initialTheme === "light")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light", newTheme === "light")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-card/50 backdrop-blur-md border border-primary/20 hover:border-primary/50 smooth-transition hover:shadow-[0_0_20px_rgba(147,51,234,0.3)] group"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-primary group-hover:rotate-90 smooth-transition" />
      ) : (
        <Moon className="w-5 h-5 text-primary group-hover:-rotate-12 smooth-transition" />
      )}
    </button>
  )
}
