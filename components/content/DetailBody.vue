<template>
  <article class="c-article">
    <header>
      <h1 class="c-heading--lv1">
        {{ details.subject }}
      </h1>
      <time class="c-topics__date" :datetime="details.ymd">{{
        details.ymd
      }}</time>
      <span class="c-badge">
        {{ details.contents_type_nm }}
      </span>
    </header>
    <div class="l-container--contents">
      <div v-html="details.contents"></div>
    </div>
    <template v-if="button">
      <hr>
      <div class="l-container--contents u-pt-30 u-text-align-center">
        <NuxtLink v-for="item in button" :key="item.label" :to="item.to" class="c-button">{{ item.label }}</NuxtLink>
      </div>
    </template>
  </article>
</template>

<script setup>
const props = defineProps({
  details: {
      type: Object,
      required: true,
    },
    button: {
      type: Array,
      required: false,
    },
});
</script>
