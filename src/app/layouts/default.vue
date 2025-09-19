<template>
  <div class="min-h-dvh bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
    <header class="border-b border-gray-200 dark:border-gray-800">
      <nav class="container-xl py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-semibold">DevLink</NuxtLink>
        <div class="flex items-center gap-2">
          <NuxtLink to="/new" class="btn btn-primary">Добавить</NuxtLink>
          <ThemeToggle />
          <a href="https://github.com" target="_blank" class="btn">GitHub</a>
        </div>
      </nav>
    </header>

    <main class="container-xl py-8">
      <slot />
    </main>

    <footer class="container-xl py-8 text-sm opacity-70">
      © {{ new Date().getFullYear() }} DevLink • Nuxt 3 pet project
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ThemeToggle } from "@/features/theme";
</script>
