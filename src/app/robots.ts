import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Replace this with your actual deployed website URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://abelbijugeorge.me';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
