<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <input v-model="form.title" placeholder="Заголовок *" class="input" />
    <input v-model="form.url" placeholder="URL *" class="input" />
    <textarea v-model="form.description" placeholder="Описание" class="input" rows="4" />
    <input v-model="tagsInput" placeholder="Теги через запятую" class="input" />
    <input v-model="form.image" placeholder="URL картинки" class="input" />
    <button class="btn btn-primary">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
import { object, string } from 'yup'
import { createArticle } from '@/entities/article'

const schema = object({
  title: string().required('Заполни заголовок'),
  url: string().url('Некорректная ссылка').required('Нужен URL')
})

const form = reactive({ title: '', url: '', description: '', image: '' })
const tagsInput = ref('')

async function onSubmit() {
  await schema.validate(form, { abortEarly: false })
  const body = {
    ...form,
    tags: tagsInput.value.split(',').map(s => s.trim()).filter(Boolean)
  }
  const created = await createArticle(body as any)
  await navigateTo(`/articles/${created.slug}`)
}
</script>
