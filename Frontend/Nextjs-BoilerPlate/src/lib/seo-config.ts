export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonical: string
  openGraph: {
    title: string
    description: string
    image: string
    url: string
    type: string
    siteName: string
  }
  twitter: {
    card: 'summary_large_image'
    title: string
    description: string
    image: string
    creator: string
  }
  structuredData?: object
}

const baseUrl = 'https://theenergyplanet.com'
const defaultImage = `${baseUrl}/images/solarplanetlogo.png`

export const seoConfigs: Record<string, SEOConfig> = {
  home: {
    title: 'Solar Panel Installation Melbourne | Energy Planet Australia',
    description: 'Leading solar panel installation in Melbourne. Get free quotes for residential & commercial solar systems. CEC accredited installers. Save on energy bills today!',
    keywords: ['solar panels Melbourne', 'solar installation', 'residential solar', 'commercial solar', 'CEC accredited', 'energy savings'],
    canonical: baseUrl,
    openGraph: {
      title: 'Solar Panel Installation Melbourne | Energy Planet Australia',
      description: 'Leading solar panel installation in Melbourne. Get free quotes for residential & commercial solar systems. CEC accredited installers.',
      image: `${baseUrl}/images/residential_solar.jpg`,
      url: baseUrl,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Solar Panel Installation Melbourne | Energy Planet Australia',
      description: 'Leading solar panel installation in Melbourne. Get free quotes for residential & commercial solar systems.',
      image: `${baseUrl}/images/residential_solar.jpg`,
      creator: '@EnergyPlanetAU'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Energy Planet Australia",
      "url": baseUrl,
      "logo": `${baseUrl}/images/solarplanetlogo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+61433866320",
        "contactType": "customer service",
        "areaServed": "AU",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "23 Birmingham Street",
        "addressLocality": "Spotswood",
        "addressRegion": "Victoria",
        "postalCode": "3015",
        "addressCountry": "AU"
      },
      "sameAs": [
        "https://www.facebook.com/energyplanetau",
        "https://www.linkedin.com/company/energy-planet-australia"
      ]
    }
  },
  
  electrifyHome: {
    title: 'Electrify Your Home Melbourne | Complete Home Electrification',
    description: 'Transform your Melbourne home with complete electrification services. Solar panels, heat pumps, EV chargers & battery storage. Expert installation & support.',
    keywords: ['home electrification Melbourne', 'electric home conversion', 'solar heat pump', 'induction cooking', 'electric appliances'],
    canonical: `${baseUrl}/electrify_home`,
    openGraph: {
      title: 'Electrify Your Home Melbourne | Complete Home Electrification',
      description: 'Transform your Melbourne home with complete electrification services. Solar panels, heat pumps, EV chargers & battery storage.',
      image: `${baseUrl}/images/banner_heatpump-1.jpg`,
      url: `${baseUrl}/electrify_home`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Electrify Your Home Melbourne | Complete Home Electrification',
      description: 'Transform your Melbourne home with complete electrification services. Expert installation & support.',
      image: `${baseUrl}/images/banner_heatpump-1.jpg`,
      creator: '@EnergyPlanetAU'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Home Electrification Services",
      "description": "Complete home electrification services including solar panels, heat pumps, and electric appliances",
      "provider": {
        "@type": "Organization",
        "name": "Energy Planet Australia"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Melbourne, Victoria, Australia"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceRange": "$$"
      }
    }
  },

  residentialSolar: {
    title: 'Residential Solar Panels Melbourne | Home Solar Installation',
    description: 'Professional residential solar panel installation in Melbourne. Premium solar systems, CEC accredited installers, 25-year warranty. Get your free quote today!',
    keywords: ['residential solar Melbourne', 'home solar panels', 'solar installation', 'solar quotes', 'CEC accredited'],
    canonical: `${baseUrl}/ResidentialSolar`,
    openGraph: {
      title: 'Residential Solar Panels Melbourne | Home Solar Installation',
      description: 'Professional residential solar panel installation in Melbourne. Premium solar systems, CEC accredited installers, 25-year warranty.',
      image: `${baseUrl}/images/residential_solar.jpg`,
      url: `${baseUrl}/ResidentialSolar`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Residential Solar Panels Melbourne | Home Solar Installation',
      description: 'Professional residential solar panel installation in Melbourne. Premium solar systems, CEC accredited installers.',
      image: `${baseUrl}/images/residential_solar.jpg`,
      creator: '@EnergyPlanetAU'
    }
  },

  commercialSolar: {
    title: 'Commercial Solar Systems Melbourne | Business Solar Installation',
    description: 'Commercial solar panel systems for Melbourne businesses. Reduce energy costs, increase sustainability. Expert commercial solar installation & maintenance.',
    keywords: ['commercial solar Melbourne', 'business solar panels', 'industrial solar', 'commercial solar installation'],
    canonical: `${baseUrl}/commercialsolar`,
    openGraph: {
      title: 'Commercial Solar Systems Melbourne | Business Solar Installation',
      description: 'Commercial solar panel systems for Melbourne businesses. Reduce energy costs, increase sustainability.',
      image: `${baseUrl}/images/img_banner_commercial.jpg`,
      url: `${baseUrl}/commercialsolar`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Commercial Solar Systems Melbourne | Business Solar Installation',
      description: 'Commercial solar panel systems for Melbourne businesses. Reduce energy costs, increase sustainability.',
      image: `${baseUrl}/images/img_banner_commercial.jpg`,
      creator: '@EnergyPlanetAU'
    }
  },

  heatPumps: {
    title: 'Heat Pumps Melbourne | Energy Efficient Heating & Cooling',
    description: 'Premium heat pump installation in Melbourne. Energy efficient heating, cooling & hot water systems. Government rebates available. Expert installation.',
    keywords: ['heat pumps Melbourne', 'heat pump installation', 'energy efficient heating', 'heat pump hot water'],
    canonical: `${baseUrl}/Heatpump`,
    openGraph: {
      title: 'Heat Pumps Melbourne | Energy Efficient Heating & Cooling',
      description: 'Premium heat pump installation in Melbourne. Energy efficient heating, cooling & hot water systems.',
      image: `${baseUrl}/images/banner_heatpump-1.jpg`,
      url: `${baseUrl}/Heatpump`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Heat Pumps Melbourne | Energy Efficient Heating & Cooling',
      description: 'Premium heat pump installation in Melbourne. Energy efficient heating, cooling & hot water systems.',
      image: `${baseUrl}/images/banner_heatpump-1.jpg`,
      creator: '@EnergyPlanetAU'
    }
  },

  batteryStorage: {
    title: 'Solar Battery Storage Melbourne | Home Energy Storage Systems',
    description: 'Solar battery storage systems in Melbourne. Store solar energy, reduce bills, backup power. Tesla Powerwall & premium battery installation.',
    keywords: ['solar battery Melbourne', 'battery storage', 'Tesla Powerwall', 'home energy storage', 'backup power'],
    canonical: `${baseUrl}/BatteryStorage`,
    openGraph: {
      title: 'Solar Battery Storage Melbourne | Home Energy Storage Systems',
      description: 'Solar battery storage systems in Melbourne. Store solar energy, reduce bills, backup power.',
      image: `${baseUrl}/images/batterypage.jpg`,
      url: `${baseUrl}/BatteryStorage`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Solar Battery Storage Melbourne | Home Energy Storage Systems',
      description: 'Solar battery storage systems in Melbourne. Store solar energy, reduce bills, backup power.',
      image: `${baseUrl}/images/batterypage.jpg`,
      creator: '@EnergyPlanetAU'
    }
  },

  contact: {
    title: 'Contact Energy Planet Australia | Solar Installation Melbourne',
    description: 'Contact Energy Planet Australia for solar panel installation in Melbourne. Get free quotes, expert advice. Call +61 433 866 320 or visit our Spotswood office.',
    keywords: ['contact solar installer Melbourne', 'solar quotes', 'Energy Planet contact', 'solar consultation'],
    canonical: `${baseUrl}/Contact`,
    openGraph: {
      title: 'Contact Energy Planet Australia | Solar Installation Melbourne',
      description: 'Contact Energy Planet Australia for solar panel installation in Melbourne. Get free quotes, expert advice.',
      image: defaultImage,
      url: `${baseUrl}/Contact`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Energy Planet Australia | Solar Installation Melbourne',
      description: 'Contact Energy Planet Australia for solar panel installation in Melbourne. Get free quotes, expert advice.',
      image: defaultImage,
      creator: '@EnergyPlanetAU'
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Energy Planet Australia",
      "image": `${baseUrl}/images/solarplanetlogo.png`,
      "telephone": "+61433866320",
      "email": "info@theenergyplanet.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "23 Birmingham Street",
        "addressLocality": "Spotswood",
        "addressRegion": "Victoria",
        "postalCode": "3015",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -37.8136,
        "longitude": 144.9631
      },
      "url": baseUrl,
      "openingHours": "Mo-Fr 08:00-17:00",
      "priceRange": "$$"
    }
  },

  about: {
    title: 'About Energy Planet Australia | Melbourne Solar Installation Experts',
    description: 'Learn about Energy Planet Australia - Melbourne\'s trusted solar installation experts. Family-owned, CEC accredited, 10+ years experience. Quality solar solutions.',
    keywords: ['about Energy Planet', 'Melbourne solar company', 'CEC accredited installer', 'family owned solar'],
    canonical: `${baseUrl}/about`,
    openGraph: {
      title: 'About Energy Planet Australia | Melbourne Solar Installation Experts',
      description: 'Learn about Energy Planet Australia - Melbourne\'s trusted solar installation experts. Family-owned, CEC accredited, 10+ years experience.',
      image: `${baseUrl}/images/group_pic_banner2.jpg`,
      url: `${baseUrl}/about`,
      type: 'website',
      siteName: 'Energy Planet Australia'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Energy Planet Australia | Melbourne Solar Installation Experts',
      description: 'Learn about Energy Planet Australia - Melbourne\'s trusted solar installation experts.',
      image: `${baseUrl}/images/group_pic_banner2.jpg`,
      creator: '@EnergyPlanetAU'
    }
  }
}

export function getSEOConfig(page: string): SEOConfig {
  return seoConfigs[page] || seoConfigs.home
}