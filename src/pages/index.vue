<template>
  <div class="space-y-6">
    <input v-model="store.query" placeholder="Поиск…" class="input w-full" />
    <TagsFilter />
    <ArticlesGrid />
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/entities/article'
import { TagsFilter } from '@/widgets/TagsFilter'
import { ArticlesGrid } from '@/widgets/ArticlesGrid'
const store = useArticlesStore()
</script>
