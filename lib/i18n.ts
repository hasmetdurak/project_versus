// Internationalization utilities for 20 language support

export const supportedLanguages = {
  en: { name: "English", flag: "🇺🇸" },
  es: { name: "Español", flag: "🇪🇸" },
  "pt-BR": { name: "Português (Brasil)", flag: "🇧🇷" },
  de: { name: "Deutsch", flag: "🇩🇪" },
  fr: { name: "Français", flag: "🇫🇷" },
  ru: { name: "Русский", flag: "🇷🇺" },
  "zh-CN": { name: "中文 (简体)", flag: "🇨🇳" },
  ja: { name: "日本語", flag: "🇯🇵" },
  ar: { name: "العربية", flag: "🇸🇦" },
  tr: { name: "Türkçe", flag: "🇹🇷" },
  it: { name: "Italiano", flag: "🇮🇹" },
  nl: { name: "Nederlands", flag: "🇳🇱" },
  pl: { name: "Polski", flag: "🇵🇱" },
  vi: { name: "Tiếng Việt", flag: "🇻🇳" },
  th: { name: "ไทย", flag: "🇹🇭" },
  id: { name: "Bahasa Indonesia", flag: "🇮🇩" },
  ko: { name: "한국어", flag: "🇰🇷" },
  hi: { name: "हिन्दी", flag: "🇮🇳" },
  tl: { name: "Filipino (Tagalog)", flag: "🇵🇭" },
  uk: { name: "Українська", flag: "🇺🇦" },
}

export type SupportedLanguage = keyof typeof supportedLanguages

export const defaultLanguage: SupportedLanguage = "en"

// GeoIP to language mapping
// export const countryToLanguage: Record<string, SupportedLanguage> = {
//   US: "en",
//   CA: "en",
//   GB: "en",
//   AU: "en",
//   NZ: "en",
//   TR: "tr",
//   DE: "de",
//   AT: "de",
//   CH: "de",
//   FR: "fr",
//   BE: "fr",
//   LU: "fr",
//   ES: "es",
//   MX: "es",
//   AR: "es",
//   CO: "es",
//   PE: "es",
//   IT: "it",
//   PT: "pt",
//   BR: "pt",
//   RU: "ru",
//   BY: "ru",
//   KZ: "ru",
//   CN: "zh",
//   TW: "zh",
//   HK: "zh",
//   JP: "ja",
//   KR: "ko",
//   SA: "ar",
//   AE: "ar",
//   EG: "ar",
//   MA: "ar",
//   IN: "hi",
//   NL: "nl",
//   SE: "sv",
//   NO: "no",
//   DK: "da",
//   FI: "fi",
//   PL: "pl",
//   CZ: "cs",
// }

// Base translations for common UI elements
export const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.vpn": "VPN",
    "nav.credit-cards": "Credit Cards",
    "nav.hosting": "Hosting",
    "nav.seo-tools": "SEO Tools",
    "nav.insurance": "Insurance",
    "nav.money-transfer": "Money Transfer",
    "nav.blog": "Blog",

    // Common UI
    "common.compare": "Compare",
    "common.features": "Features",
    "common.pricing": "Pricing",
    "common.rating": "Rating",
    "common.reviews": "Reviews",
    "common.get-started": "Get Started",
    "common.learn-more": "Learn More",
    "common.best-value": "Best Value",
    "common.most-popular": "Most Popular",
    "common.free-trial": "Free Trial",
    "common.apply-now": "Apply Now",
    "common.view-all": "View All",
    "common.show-more": "Show More",
    "common.show-less": "Show Less",

    // Homepage
    "hero.title": "Compare the World's Best Services",
    "hero.subtitle":
      "Make informed decisions with our comprehensive comparisons of VPN services, credit cards, hosting providers, and more. Find the perfect solution for your needs.",
    "hero.cta-primary": "Start Comparing",
    "hero.cta-secondary": "Browse Categories",
    "hero.trusted": "Trusted by millions worldwide",

    // Categories
    "category.vpn.title": "VPN Services",
    "category.vpn.description": "Secure your privacy with top-rated VPN providers",
    "category.credit-cards.title": "Credit Cards",
    "category.credit-cards.description": "Find the perfect credit card for your needs",
    "category.hosting.title": "Web Hosting",
    "category.hosting.description": "Compare hosting providers and SaaS platforms",
    "category.seo-tools.title": "SEO Tools",
    "category.seo-tools.description": "Boost your rankings with powerful SEO tools",
    "category.insurance.title": "Insurance",
    "category.insurance.description": "Protect what matters with comprehensive coverage",
    "category.money-transfer.title": "Money Transfer",
    "category.money-transfer.description": "Send money globally with the best rates",

    // Comparison Table
    "comparison.card-view": "Card View",
    "comparison.table-view": "Table View",
    "comparison.show-all-features": "Show All Features",
    "comparison.show-key-features": "Show Key Features Only",
    "comparison.key-features": "Key Features",
    "comparison.pros": "Pros",
    "comparison.cons": "Cons",
    "comparison.editors-choice": "Editor's Choice",

    // Footer
    "footer.newsletter.title": "Stay Updated",
    "footer.newsletter.description":
      "Get the latest comparisons, reviews, and exclusive deals delivered to your inbox.",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.subscribe": "Subscribe",
    "footer.categories": "Categories",
    "footer.company": "Company",
    "footer.resources": "Resources",
    "footer.legal": "Legal",
    "footer.about": "About Us",
    "footer.contact": "Contact",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.copyright": "© 2024 GlobalCompare. All rights reserved.",
    "footer.languages": "Available in 20 languages",
  },

  tr: {
    // Navigation
    "nav.home": "Ana Sayfa",
    "nav.vpn": "VPN",
    "nav.credit-cards": "Kredi Kartları",
    "nav.hosting": "Hosting",
    "nav.seo-tools": "SEO Araçları",
    "nav.insurance": "Sigorta",
    "nav.money-transfer": "Para Transferi",
    "nav.blog": "Blog",

    // Common UI
    "common.compare": "Karşılaştır",
    "common.features": "Özellikler",
    "common.pricing": "Fiyatlandırma",
    "common.rating": "Puan",
    "common.reviews": "Yorumlar",
    "common.get-started": "Başla",
    "common.learn-more": "Daha Fazla",
    "common.best-value": "En İyi Değer",
    "common.most-popular": "En Popüler",
    "common.free-trial": "Ücretsiz Deneme",
    "common.apply-now": "Şimdi Başvur",
    "common.view-all": "Tümünü Gör",
    "common.show-more": "Daha Fazla Göster",
    "common.show-less": "Daha Az Göster",

    // Homepage
    "hero.title": "Dünyanın En İyi Hizmetlerini Karşılaştırın",
    "hero.subtitle":
      "VPN hizmetleri, kredi kartları, hosting sağlayıcıları ve daha fazlasının kapsamlı karşılaştırmaları ile bilinçli kararlar verin. İhtiyaçlarınız için mükemmel çözümü bulun.",
    "hero.cta-primary": "Karşılaştırmaya Başla",
    "hero.cta-secondary": "Kategorilere Göz At",
    "hero.trusted": "Dünya çapında milyonlarca kişi tarafından güveniliyor",

    // Categories
    "category.vpn.title": "VPN Hizmetleri",
    "category.vpn.description": "En iyi VPN sağlayıcıları ile gizliliğinizi koruyun",
    "category.credit-cards.title": "Kredi Kartları",
    "category.credit-cards.description": "İhtiyaçlarınız için mükemmel kredi kartını bulun",
    "category.hosting.title": "Web Hosting",
    "category.hosting.description": "Hosting sağlayıcıları ve SaaS platformlarını karşılaştırın",
    "category.seo-tools.title": "SEO Araçları",
    "category.seo-tools.description": "Güçlü SEO araçları ile sıralamanızı yükseltin",
    "category.insurance.title": "Sigorta",
    "category.insurance.description": "Kapsamlı teminat ile önemli olan şeyleri koruyun",
    "category.money-transfer.title": "Para Transferi",
    "category.money-transfer.description": "En iyi kurlarla dünya çapında para gönderin",

    // Comparison Table
    "comparison.card-view": "Kart Görünümü",
    "comparison.table-view": "Tablo Görünümü",
    "comparison.show-all-features": "Tüm Özellikleri Göster",
    "comparison.show-key-features": "Sadece Ana Özellikleri Göster",
    "comparison.key-features": "Ana Özellikler",
    "comparison.pros": "Artıları",
    "comparison.cons": "Eksileri",
    "comparison.editors-choice": "Editör Seçimi",

    // Footer
    "footer.newsletter.title": "Güncel Kalın",
    "footer.newsletter.description": "En son karşılaştırmalar, incelemeler ve özel teklifler e-posta kutunuza gelsin.",
    "footer.newsletter.placeholder": "E-posta adresinizi girin",
    "footer.newsletter.subscribe": "Abone Ol",
    "footer.categories": "Kategoriler",
    "footer.company": "Şirket",
    "footer.resources": "Kaynaklar",
    "footer.legal": "Yasal",
    "footer.about": "Hakkımızda",
    "footer.contact": "İletişim",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Şartları",
    "footer.copyright": "© 2024 GlobalCompare. Tüm hakları saklıdır.",
    "footer.languages": "20 dilde mevcut",
  },

  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.vpn": "VPN",
    "nav.credit-cards": "Kreditkarten",
    "nav.hosting": "Hosting",
    "nav.seo-tools": "SEO-Tools",
    "nav.insurance": "Versicherung",
    "nav.money-transfer": "Geldtransfer",
    "nav.blog": "Blog",

    // Common UI
    "common.compare": "Vergleichen",
    "common.features": "Funktionen",
    "common.pricing": "Preise",
    "common.rating": "Bewertung",
    "common.reviews": "Bewertungen",
    "common.get-started": "Loslegen",
    "common.learn-more": "Mehr erfahren",
    "common.best-value": "Bestes Preis-Leistungs-Verhältnis",
    "common.most-popular": "Am beliebtesten",
    "common.free-trial": "Kostenlose Testversion",
    "common.apply-now": "Jetzt beantragen",
    "common.view-all": "Alle anzeigen",
    "common.show-more": "Mehr anzeigen",
    "common.show-less": "Weniger anzeigen",

    // Homepage
    "hero.title": "Vergleichen Sie die besten Services der Welt",
    "hero.subtitle":
      "Treffen Sie fundierte Entscheidungen mit unseren umfassenden Vergleichen von VPN-Diensten, Kreditkarten, Hosting-Anbietern und mehr. Finden Sie die perfekte Lösung für Ihre Bedürfnisse.",
    "hero.cta-primary": "Vergleich starten",
    "hero.cta-secondary": "Kategorien durchsuchen",
    "hero.trusted": "Vertraut von Millionen weltweit",

    // Categories
    "category.vpn.title": "VPN-Dienste",
    "category.vpn.description": "Sichern Sie Ihre Privatsphäre mit erstklassigen VPN-Anbietern",
    "category.credit-cards.title": "Kreditkarten",
    "category.credit-cards.description": "Finden Sie die perfekte Kreditkarte für Ihre Bedürfnisse",
    "category.hosting.title": "Web-Hosting",
    "category.hosting.description": "Vergleichen Sie Hosting-Anbieter und SaaS-Plattformen",
    "category.seo-tools.title": "SEO-Tools",
    "category.seo-tools.description": "Verbessern Sie Ihr Ranking mit leistungsstarken SEO-Tools",
    "category.insurance.title": "Versicherung",
    "category.insurance.description": "Schützen Sie das Wichtige mit umfassendem Schutz",
    "category.money-transfer.title": "Geldtransfer",
    "category.money-transfer.description": "Senden Sie Geld weltweit zu den besten Kursen",

    // Comparison Table
    "comparison.card-view": "Kartenansicht",
    "comparison.table-view": "Tabellenansicht",
    "comparison.show-all-features": "Alle Funktionen anzeigen",
    "comparison.show-key-features": "Nur Hauptfunktionen anzeigen",
    "comparison.key-features": "Hauptfunktionen",
    "comparison.pros": "Vorteile",
    "comparison.cons": "Nachteile",
    "comparison.editors-choice": "Redaktionsempfehlung",

    // Footer
    "footer.newsletter.title": "Bleiben Sie auf dem Laufenden",
    "footer.newsletter.description":
      "Erhalten Sie die neuesten Vergleiche, Bewertungen und exklusive Angebote in Ihrem Posteingang.",
    "footer.newsletter.placeholder": "E-Mail-Adresse eingeben",
    "footer.newsletter.subscribe": "Abonnieren",
    "footer.categories": "Kategorien",
    "footer.company": "Unternehmen",
    "footer.resources": "Ressourcen",
    "footer.legal": "Rechtliches",
    "footer.about": "Über uns",
    "footer.contact": "Kontakt",
    "footer.privacy": "Datenschutz",
    "footer.terms": "Nutzungsbedingungen",
    "footer.copyright": "© 2024 GlobalCompare. Alle Rechte vorbehalten.",
    "footer.languages": "Verfügbar in 20 Sprachen",
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.vpn": "VPN",
    "nav.credit-cards": "Cartes de crédit",
    "nav.hosting": "Hébergement",
    "nav.seo-tools": "Outils SEO",
    "nav.insurance": "Assurance",
    "nav.money-transfer": "Transfert d'argent",
    "nav.blog": "Blog",

    // Common UI
    "common.compare": "Comparer",
    "common.features": "Fonctionnalités",
    "common.pricing": "Tarifs",
    "common.rating": "Note",
    "common.reviews": "Avis",
    "common.get-started": "Commencer",
    "common.learn-more": "En savoir plus",
    "common.best-value": "Meilleur rapport qualité-prix",
    "common.most-popular": "Le plus populaire",
    "common.free-trial": "Essai gratuit",
    "common.apply-now": "Postuler maintenant",
    "common.view-all": "Voir tout",
    "common.show-more": "Afficher plus",
    "common.show-less": "Afficher moins",

    // Homepage
    "hero.title": "Comparez les meilleurs services du monde",
    "hero.subtitle":
      "Prenez des décisions éclairées avec nos comparaisons complètes de services VPN, cartes de crédit, fournisseurs d'hébergement et plus encore. Trouvez la solution parfaite pour vos besoins.",
    "hero.cta-primary": "Commencer la comparaison",
    "hero.cta-secondary": "Parcourir les catégories",
    "hero.trusted": "Approuvé par des millions dans le monde",

    // Categories
    "category.vpn.title": "Services VPN",
    "category.vpn.description": "Sécurisez votre vie privée avec les meilleurs fournisseurs VPN",
    "category.credit-cards.title": "Cartes de crédit",
    "category.credit-cards.description": "Trouvez la carte de crédit parfaite pour vos besoins",
    "category.hosting.title": "Hébergement Web",
    "category.hosting.description": "Comparez les fournisseurs d'hébergement et les plateformes SaaS",
    "category.seo-tools.title": "Outils SEO",
    "category.seo-tools.description": "Améliorez votre classement avec des outils SEO puissants",
    "category.insurance.title": "Assurance",
    "category.insurance.description": "Protégez ce qui compte avec une couverture complète",
    "category.money-transfer.title": "Transfert d'argent",
    "category.money-transfer.description": "Envoyez de l'argent dans le monde entier aux meilleurs taux",

    // Comparison Table
    "comparison.card-view": "Vue carte",
    "comparison.table-view": "Vue tableau",
    "comparison.show-all-features": "Afficher toutes les fonctionnalités",
    "comparison.show-key-features": "Afficher uniquement les fonctionnalités clés",
    "comparison.key-features": "Fonctionnalités clés",
    "comparison.pros": "Avantages",
    "comparison.cons": "Inconvénients",
    "comparison.editors-choice": "Choix de l'éditeur",

    // Footer
    "footer.newsletter.title": "Restez informé",
    "footer.newsletter.description":
      "Recevez les dernières comparaisons, avis et offres exclusives dans votre boîte de réception.",
    "footer.newsletter.placeholder": "Entrez votre email",
    "footer.newsletter.subscribe": "S'abonner",
    "footer.categories": "Catégories",
    "footer.company": "Entreprise",
    "footer.resources": "Ressources",
    "footer.legal": "Légal",
    "footer.about": "À propos",
    "footer.contact": "Contact",
    "footer.privacy": "Politique de confidentialité",
    "footer.terms": "Conditions d'utilisation",
    "footer.copyright": "© 2024 GlobalCompare. Tous droits réservés.",
    "footer.languages": "Disponible en 20 langues",
  },

  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.vpn": "VPN",
    "nav.credit-cards": "Tarjetas de crédito",
    "nav.hosting": "Hosting",
    "nav.seo-tools": "Herramientas SEO",
    "nav.insurance": "Seguros",
    "nav.money-transfer": "Transferencia de dinero",
    "nav.blog": "Blog",

    // Common UI
    "common.compare": "Comparar",
    "common.features": "Características",
    "common.pricing": "Precios",
    "common.rating": "Calificación",
    "common.reviews": "Reseñas",
    "common.get-started": "Comenzar",
    "common.learn-more": "Saber más",
    "common.best-value": "Mejor valor",
    "common.most-popular": "Más popular",
    "common.free-trial": "Prueba gratuita",
    "common.apply-now": "Aplicar ahora",
    "common.view-all": "Ver todo",
    "common.show-more": "Mostrar más",
    "common.show-less": "Mostrar menos",

    // Homepage
    "hero.title": "Compara los mejores servicios del mundo",
    "hero.subtitle":
      "Toma decisiones informadas con nuestras comparaciones completas de servicios VPN, tarjetas de crédito, proveedores de hosting y más. Encuentra la solución perfecta para tus necesidades.",
    "hero.cta-primary": "Comenzar comparación",
    "hero.cta-secondary": "Explorar categorías",
    "hero.trusted": "Confiado por millones en todo el mundo",

    // Categories
    "category.vpn.title": "Servicios VPN",
    "category.vpn.description": "Asegura tu privacidad con los mejores proveedores VPN",
    "category.credit-cards.title": "Tarjetas de crédito",
    "category.credit-cards.description": "Encuentra la tarjeta de crédito perfecta para tus necesidades",
    "category.hosting.title": "Hosting Web",
    "category.hosting.description": "Compara proveedores de hosting y plataformas SaaS",
    "category.seo-tools.title": "Herramientas SEO",
    "category.seo-tools.description": "Mejora tu ranking con herramientas SEO potentes",
    "category.insurance.title": "Seguros",
    "category.insurance.description": "Protege lo que importa con cobertura integral",
    "category.money-transfer.title": "Transferencia de dinero",
    "category.money-transfer.description": "Envía dinero globalmente con las mejores tasas",

    // Comparison Table
    "comparison.card-view": "Vista de tarjetas",
    "comparison.table-view": "Vista de tabla",
    "comparison.show-all-features": "Mostrar todas las características",
    "comparison.show-key-features": "Mostrar solo características clave",
    "comparison.key-features": "Características clave",
    "comparison.pros": "Ventajas",
    "comparison.cons": "Desventajas",
    "comparison.editors-choice": "Elección del editor",

    // Footer
    "footer.newsletter.title": "Mantente actualizado",
    "footer.newsletter.description":
      "Recibe las últimas comparaciones, reseñas y ofertas exclusivas en tu bandeja de entrada.",
    "footer.newsletter.placeholder": "Ingresa tu email",
    "footer.newsletter.subscribe": "Suscribirse",
    "footer.categories": "Categorías",
    "footer.company": "Empresa",
    "footer.resources": "Recursos",
    "footer.legal": "Legal",
    "footer.about": "Acerca de",
    "footer.contact": "Contacto",
    "footer.privacy": "Política de privacidad",
    "footer.terms": "Términos de servicio",
    "footer.copyright": "© 2024 GlobalCompare. Todos los derechos reservados.",
    "footer.languages": "Disponible en 20 idiomas",
  },
}

export function getTranslation(key: string, language: SupportedLanguage = defaultLanguage): string {
  return translations[language]?.[key] || translations[defaultLanguage][key] || key
}

export function getLanguageFromPathname(pathname: string): SupportedLanguage {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && firstSegment in supportedLanguages) {
    return firstSegment as SupportedLanguage
  }

  return defaultLanguage
}

export function removeLanguagePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean)
  const firstSegment = segments[0]

  if (firstSegment && firstSegment in supportedLanguages) {
    return "/" + segments.slice(1).join("/")
  }

  return pathname
}

export function addLanguagePrefix(pathname: string, language: SupportedLanguage): string {
  if (language === defaultLanguage) {
    return pathname
  }

  const cleanPath = removeLanguagePrefix(pathname)
  return `/${language}${cleanPath === "/" ? "" : cleanPath}`
}
