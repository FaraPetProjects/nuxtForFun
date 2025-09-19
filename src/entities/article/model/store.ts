import type { Article } from "./types";
import { fetchArticles } from "./api";

export const useArticlesStore = defineStore("articles", () => {
  const articles = ref<Article[]>([]);
  const query = ref("");
  const selectedTags = ref<string[]>([]);

  const allTags = computed(() => {
    const set = new Set<string>();
    for (const a of articles.value) for (const t of a.tags) set.add(t);
    return Array.from(set).sort();
  });

  const filtered = computed(() => {
    const q = query.value.trim().toLowerCase();
    return articles.value.filter((a) => {
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        (a.description ?? "").toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q));
      const matchesTags =
        selectedTags.value.length === 0 || selectedTags.value.every((t) => a.tags.includes(t));
      return matchesQuery && matchesTags;
    });
  });

  function toggleTag(tag: string) {
    const i = selectedTags.value.indexOf(tag);
    if (i === -1) selectedTags.value.push(tag);
    else selectedTags.value.splice(i, 1);
  }

  async function fetchAll() {
    const data = await fetchArticles();
    articles.value = data;
  }

  return { articles, query, selectedTags, allTags, filtered, toggleTag, fetchAll };
});
