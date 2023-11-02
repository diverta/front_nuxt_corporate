<template>
  <nav class="l-breadcrumb is-pc">
    <div class="l-container--large">
      <ul>
        <li>
          <NuxtLink to="/">トップ</NuxtLink>
        </li>
        <li v-for="link in path" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <li>{{ subject }}</li>
      </ul>
    </div>
  </nav>

  <div v-if="subject" class="c-page-title">
    <div class="l-container--large">
      <h1 class="c-page-title__heading">{{ subject }}</h1>
      <p class="c-heading--sub u-mt-20 u-mb-0">{{ subheading }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subject: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: false,
  },
  path: {
    type: Array,
    default: () => [],
  },
});
</script>
