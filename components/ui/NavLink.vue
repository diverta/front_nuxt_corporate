<template>
  <nav class="l-breadcrumb is-pc">
    <div class="l-container--middle">
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
</template>

<script setup>
const props = defineProps({
  subject: {
    type: String,
    required: true,
  },
  path: {
    type: Array,
    required: false,
  },
});
</script>
