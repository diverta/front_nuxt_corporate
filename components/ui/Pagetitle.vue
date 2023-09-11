<template>
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
    required: false,
  },
  subheading: {
      type: String,
      required: false,
    },
});
</script>
