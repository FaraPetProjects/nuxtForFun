<template>
  <div v-if="article">
    <h1 class="text-2xl font-bold">{{ article.title }}</h1>
    <img
      v-if="article.image"
      :src="article.image"
      class="rounded-xl border border-gray-200 dark:border-gray-800"
    />
    <p class="opacity-80">{{ article.description }}</p>

    <div>
      <span v-for="t in article.tags" :key="t" class="tag">{{ t }}</span>
    </div>

    <aside class="card p-4 h-max space-y-3">
      <a :href="article.url" target="_blank" class="btn btn-primary">Перейти</a>
      <div class="text-sm opacity-70">
        Добавлено: {{ new Date(article.createdAt).toLocaleString() }}
      </div>
      <NuxtLink to="/" class="btn w-full justify-center">← Назад</NuxtLink>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { fetchArticleBySlug } from '@/entities/article'
import type { Article } from '@/entities/article/model/types'
import { useRoute } from 'vue-router'

const route = useRoute()

const { data: article } = await useAsyncData<Article>(() =>
  fetchArticleBySlug(route.params.slug as string)
)
</script>

