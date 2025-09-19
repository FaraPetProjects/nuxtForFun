<script setup lang="ts">
import { useTheme } from '@/features/theme/model/useTheme'

const { isDark, toggle } = useTheme()
</script>

<template>
  <button class="btn" @click="toggle()" :title="isDark ? 'Светлая тема' : 'Тёмная тема'">
    <span v-if="!isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>
