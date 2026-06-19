export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: string;
  url?: string;
  siteName?: string;
  locale?: string;
  twitterHandle?: string;
  robots?: string;
  canonical?: string;
  structuredData?: object;
}

export const DEFAULT_SEO: SEOData = {
  title: 'Rotaract Club of Lilongwe — Unite for Good',
  description: 'Empowering young leaders and transforming communities in Lilongwe, Malawi. Join the Rotaract Club of Lilongwe in service, fellowship, and positive change.',
  keywords: [
    'Rotaract',
    'Rotaract Club',
    'Lilongwe',
    'Malawi',
    'Rotary International',
    'Youth Leadership',
    'Community Service',
    'Volunteer',
    'Non-profit',
    'District 9210',
    'Service Projects',
    'Professional Development',
    'International Service',
    'Club Service',
    'Community Development'
  ],
  image: 'https://kwwvmkszattobpgisslt.supabase.co/storage/v1/object/public/RAC/RAC/og-image.png',
  type: 'website',
  siteName: 'Rotaract Club of Lilongwe',
  locale: 'en_MW',
  twitterHandle: '@rotaractlilongwe',
  robots: 'index, follow',
};

export function generateSEO(data: Partial<SEOData> = {}): SEOData {
  return { ...DEFAULT_SEO, ...data };
}

export function generateStructuredData(seo: SEOData): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: seo.siteName,
    alternateName: 'Rotaract Lilongwe',
    description: seo.description,
    url: seo.url || 'https://rotaractlilongwe.pages.dev/',
    logo: seo.image,
    foundingDate: '2017',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lilongwe',
      addressCountry: 'MW',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'lilongweerotaract@outlook.com',
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.instagram.com/rotaractlilongwe/',
      'https://www.facebook.com/rotaractlilongwe',
      'https://x.com/RACLilongwe',
      'https://www.linkedin.com/company/rotaract-club-of-lilongwe/',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Rotary International',
      url: 'https://www.rotary.org',
    },
  };
}

export function generateProjectStructuredData(project: {
  name: string;
  description: string;
  image?: string;
  date?: string;
  status?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: project.name,
    description: project.description,
    image: project.image,
    startDate: project.date,
    organizer: {
      '@type': 'Organization',
      name: 'Rotaract Club of Lilongwe',
    },
    eventStatus: project.status === 'Ongoing' ? 'EventScheduled' : 'EventCompleted',
  };
}

export function generateEventStructuredData(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  image?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lilongwe',
        addressCountry: 'MW',
      },
    },
    image: event.image,
    organizer: {
      '@type': 'Organization',
      name: 'Rotaract Club of Lilongwe',
    },
  };
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}