import type { PageLoad } from './$types';
import type { SEOData } from '$lib/seo';

export const load: PageLoad = () => {
  const seo: SEOData = {
    title: 'Polio & Immunization Campaign Tracker â€” Rotaract Club of Lilongwe',
    description: 'Track the End Polio Now campaign content calendar of the Rotaract Club of Lilongwe: every child, every dose, every community, a polio-free future.',
    image: {
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Rotaract Club of Lilongwe - Create Lasting Impact'
    }
  };
  return { seo };
};