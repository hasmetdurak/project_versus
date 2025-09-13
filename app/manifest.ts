import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "GlobalCompare - Best Service Comparisons",
    short_name: "GlobalCompare",
    description:
      "Compare VPN, Credit Cards, Hosting, SEO Tools, Insurance and more. Find the best services with expert reviews and detailed comparisons.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/icon-192.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/icon-512.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
    categories: ["business", "finance", "productivity"],
    lang: "en",
    orientation: "portrait-primary",
  }
}
