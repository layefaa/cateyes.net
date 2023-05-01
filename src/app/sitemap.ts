import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://cateyes.net',
      lastModified: new Date(),
    },
    {

      url: 'https://cateyes.net/about',
      lastModified: new Date(),
    },
    {
      url: 'https://cateyes.net/works',
      lastModified: new Date(),
    },
    {
      url: 'https://cateyes.net/contact',
      lastModified: new Date(),
    },
  ];
}