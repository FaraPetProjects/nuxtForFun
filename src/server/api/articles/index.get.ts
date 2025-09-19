// src/server/api/articles/index.get.ts
export default defineEventHandler(() => {
  return [
    {
      slug: "hello-world",
      title: "Hello World",
      description: "Первая статья",
      image: "https://placekitten.com/300/200",
      url: "https://example.com/hello-world",
      tags: ["vue", "nuxt"],
      createdAt: new Date().toISOString(),
    },
    {
      slug: "second-article",
      title: "Вторая статья",
      description: "Описание второй статьи",
      image: "https://placekitten.com/301/200",
      url: "https://example.com/second",
      tags: ["pinia", "ts"],
      createdAt: new Date().toISOString(),
    },
  ];
});
