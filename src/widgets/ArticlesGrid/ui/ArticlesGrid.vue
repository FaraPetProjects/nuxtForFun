<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
    <ArticleCard v-for="a in store.filtered" :key="a.id" :article="a" />
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore, ArticleCard } from '@/entities/article'
const store = useArticlesStore()
await store.fetchAll()
</script>
