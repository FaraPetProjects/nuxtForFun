<template>
  <article class="card p-4 flex flex-col gap-3">
    <img v-if="article.image" :src="article.image" class="rounded-lg aspect-[16/9] object-cover border border-gray-200 dark:border-gray-800" />
    <NuxtLink :to="`/articles/${article.slug}`" class="text-lg font-semibold hover:underline">
      {{ article.title }}
    </NuxtLink>
    <p class="text-sm opacity-80" v-if="article.description">{{ article.description }}</p>
    <div>
      <span v-for="t in article.tags" :key="t" class="tag">#{{ t }}</span>
    </div>
    <div class="flex items-center gap-2 mt-auto">
      <a :href="article.url" target="_blank" class="btn btn-primary">Открыть</a>
      <NuxtLink :to="`/articles/${article.slug}`" class="btn">Подробнее</NuxtLink>
      <span class="ml-auto text-xs opacity-60">{{ new Date(article.createdAt).toLocaleDateString() }}</span>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Article } from '../model/types'
defineProps<{ article: Article }>()
</script>
