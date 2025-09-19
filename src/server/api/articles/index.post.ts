import { addArticle } from "~/server/utils/articlesDb";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body?.title || !body?.url)
    throw createError({ statusCode: 400, statusMessage: "title and url are required" });

  return addArticle({ ...body, tags: body.tags ?? [] });
});
