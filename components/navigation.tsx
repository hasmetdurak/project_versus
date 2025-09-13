"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Moon, Sun, Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { supportedLanguages, addLanguagePrefix } from "@/lib/i18n"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { currentLanguage, setLanguage, t } = useLanguage()

  const categories = [
    { name: t("nav.vpn"), href: addLanguagePrefix("/vpn", currentLanguage) },
    { name: t("nav.credit-cards"), href: addLanguagePrefix("/credit-cards", currentLanguage) },
    { name: t("nav.hosting"), href: addLanguagePrefix("/hosting", currentLanguage) },
    { name: t("nav.seo-tools"), href: addLanguagePrefix("/seo-tools", currentLanguage) },
    { name: t("nav.insurance"), href: addLanguagePrefix("/insurance", currentLanguage) },
    { name: t("nav.money-transfer"), href: addLanguagePrefix("/money-transfer", currentLanguage) },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href={addLanguagePrefix("/", currentLanguage)} className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
            GC
          </div>
          <span className="text-xl font-bold text-foreground">GlobalCompare</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {categories.map((category) => (
            <Link
              key={category.href}
              href={category.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {category.name}
            </Link>
          ))}
          <Link
            href={addLanguagePrefix("/blog", currentLanguage)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.blog")}
          </Link>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <Globe className="h-4 w-4 mr-1" />
                {supportedLanguages[currentLanguage].flag} {currentLanguage.toUpperCase()}
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(supportedLanguages).map(([code, lang]) => (
                <DropdownMenuItem
                  key={code}
                  onClick={() => setLanguage(code as keyof typeof supportedLanguages)}
                  className={currentLanguage === code ? "bg-accent" : ""}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    href={category.href}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
                <Link
                  href={addLanguagePrefix("/blog", currentLanguage)}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t("nav.blog")}
                </Link>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Language</p>
                  {Object.entries(supportedLanguages).map(([code, lang]) => (
                    <button
                      key={code}
                      className="flex items-center w-full text-left py-2 text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => {
                        setLanguage(code as keyof typeof supportedLanguages)
                        setIsOpen(false)
                      }}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
