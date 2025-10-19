"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              JF Software
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Servicios
            </a>
            <a
              href="#proceso"
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Proceso
            </a>
            <ThemeToggle />
            <Button className="shadow-lg shadow-primary/20" asChild>
              <a href="#contacto">Contáctanos</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-4">
              <a
                href="#inicio"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#nosotros"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#servicios"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#proceso"
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Proceso
              </a>
              <Button asChild className="w-full">
                <a href="#contacto" onClick={() => setIsMenuOpen(false)}>
                  Contáctanos
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
