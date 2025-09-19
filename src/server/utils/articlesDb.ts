export type Article = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  url: string;
  createdAt: string;
};

let articles: Article[] = [
  {
    id: "1",
    title: "Первая статья",
    description: "Описание первой статьи",
    image: "https://placehold.co/600x400",
    tags: ["nuxt", "vue"],
    url: "https://example.com/1",
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Вторая статья",
    description: "Описание второй статьи",
    tags: ["typescript"],
    url: "https://example.com/2",
    createdAt: new Date().toISOString(),
  },
];

export function listArticles() {
  return articles;
}

export function findBySlug(slug: string) {
  return articles.find((a) => a.id === slug);
}

export function addArticle(article: Article) {
  const newArticle = { ...article, id: Date.now().toString(), createdAt: new Date().toISOString() };
  articles.push(newArticle);
  return newArticle;
}
