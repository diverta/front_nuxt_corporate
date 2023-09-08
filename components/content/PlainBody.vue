<template>
  <div class="l-container--middle l-container--contents">
    <article>
      <div class="topics_contents">
        <div v-html="contents"></div>
        <div class="clr"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
const props = defineProps({
  contents: {
    type: String,
    required: true,
  },
});
</script>
