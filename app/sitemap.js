export default function sitemap() {
  return [
    {
      url: "https://sglabsstudio.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://sglabsstudio.com/cv",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
