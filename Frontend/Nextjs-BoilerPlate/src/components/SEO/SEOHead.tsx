import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  robots?: string
  openGraph?: {
    title: string
    description: string
    image: string
    url: string
    type?: string
    siteName?: string
  }
  twitter?: {
    card: 'summary' | 'summary_large_image'
    title: string
    description: string
    image: string
    creator?: string
  }
  structuredData?: object
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  canonical,
  robots = 'index, follow',
  openGraph,
  twitter,
  structuredData
}: SEOProps) {
  const fullTitle = title.includes('Energy Planet') ? title : `${title} | Energy Planet Australia`
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Tags */}
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:image" content={openGraph.image} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:type" content={openGraph.type || 'website'} />
          <meta property="og:site_name" content={openGraph.siteName || 'Energy Planet Australia'} />
        </>
      )}
      
      {/* Twitter Card Tags */}
      {twitter && (
        <>
          <meta name="twitter:card" content={twitter.card} />
          <meta name="twitter:title" content={twitter.title} />
          <meta name="twitter:description" content={twitter.description} />
          <meta name="twitter:image" content={twitter.image} />
          {twitter.creator && <meta name="twitter:creator" content={twitter.creator} />}
        </>
      )}
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Energy Planet Australia" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="AU-VIC" />
      <meta name="geo.placename" content="Melbourne" />
      <meta name="geo.position" content="-37.8136;144.9631" />
      <meta name="ICBM" content="-37.8136, 144.9631" />
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}