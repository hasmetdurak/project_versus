"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { addLanguagePrefix } from "@/lib/i18n"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { currentLanguage, t } = useLanguage()

  const allItems = [{ name: t("nav.home"), href: addLanguagePrefix("/", currentLanguage) }, ...items]

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      {allItems.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index === 0 && <Home className="h-4 w-4 mr-1" />}
          {index < allItems.length - 1 ? (
            <Link href={item.href} className="hover:text-foreground transition-colors">
              {item.name}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.name}</span>
          )}
          {index < allItems.length - 1 && <ChevronRight className="h-4 w-4 mx-2" />}
        </div>
      ))}
    </nav>
  )
}
