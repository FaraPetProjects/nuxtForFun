import type { Article } from "./types";

export const fetchArticles = () => $fetch<Article[]>("/api/articles");

export const fetchArticleBySlug = (slug: string) => $fetch<Article>(`/api/articles/${slug}`);

export const createArticle = (body: Omit<Article, "id" | "createdAt" | "slug">) =>
  $fetch<Article>("/api/articles", {
    method: "POST",
    body,
  });
