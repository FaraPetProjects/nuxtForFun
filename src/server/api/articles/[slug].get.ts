import { findBySlug } from "~/server/utils/articlesDb";

export default defineEventHandler((event) => {
  const { slug } = getRouterParams(event);

  if (!slug) throw createError({ statusCode: 400, statusMessage: "Slug is required" });

  const article = findBySlug(slug);

  if (!article) throw createError({ statusCode: 404, statusMessage: "Article not found" });

  return article;
});
