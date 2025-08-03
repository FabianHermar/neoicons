import './globals.css'
import type { ReactNode } from 'react'
import '@fontsource-variable/albert-sans';

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Neoicons</title>
        <meta
          name="keywords"
          content="neoicons, neo, icons, icon, svg, svg icons, svg icon, react, react icons, react icon, vue, vue icons, vue icon, angular, angular icons, angular icon, svelte, svelte icons, svelte icon, web components, web component, web, component, components, library, libraries, free, free icons, free icon, open source, open, source, open-source, figma, figma icons, figma icon, iconpacks, icon pack, iconpack, icon packs, iconpacks"
        />
        <link
          rel="shortcut icon"
          href="/favicon/favicon.ico"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="Beautiful SVG icons meticulously created by the talented designers behind windUI."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://neoicons.windui.org/" />
        <meta name="apple-mobile-web-app-title" content="Neoicons" />
        <meta name="application-name" content="Neoicons" />
        <meta property="og:url" content="https://neoicons.windui.org/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Neoicons" />
        <meta
          property="og:description"
          content="Beautiful SVG icons meticulously created by the talented designers behind windUI."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dvjzjasfg/image/upload/v1697945410/neoicons_twitter_image_rh953d.png"
        />
        <meta property="og:locate" content="es_MX" />
        <meta property="og:site_name" content="Neoicons" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@BoxodeHQ" />
        <meta name="twitter:domain" content="neoicons.windui.org" />
        <meta name="twitter:site" content="@BoxodeHQ" />
        <meta name="twitter:title" content="Neoicons" />
        <meta
          name="twitter:description"
          content="Beautiful SVG icons meticulously created by the talented designers behind windUI."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dvjzjasfg/image/upload/v1697945410/neoicons_twitter_image_rh953d.png"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
