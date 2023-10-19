<template>
  <article class="c-article">
    <UiPagetitle :subject="subject" :subheading="subheading" />
    <div class="l-container--large l-container--contents">
      <div v-html="contents"></div>
    </div>
  </article>
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
  contents: {
    type: String,
    required: true,
  },
});
</script>
