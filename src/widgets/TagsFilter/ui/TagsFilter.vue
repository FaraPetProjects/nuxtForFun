<template>
  <div class="flex flex-wrap">
    <button
      v-for="t in store.allTags"
      :key="t"
      @click="store.toggleTag(t)"
      class="tag"
      :class="store.selectedTags.includes(t) ? 'bg-black text-white dark:bg-white dark:text-black' : ''"
    >
      #{{ t }}
    </button>
    <button v-if="store.selectedTags.length" @click="store.selectedTags = []" class="tag">Сброс</button>
  </div>
</template>

<script setup lang="ts">
import { useArticlesStore } from '@/entities/article'
const store = useArticlesStore()
</script>
