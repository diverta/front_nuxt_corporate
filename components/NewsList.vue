<template>
  <div>
    <p v-if="list.length == 0">記事が存在しません</p>
    <ul v-else class="c-topics-list">
      <li v-for="news in list" :key="news.topics_id">
        <NuxtLink :to="`/news/detail/${news.topics_id}`" class="c-topics">
          <time class="c-topics__date" :datetime="news.ymd">{{
            news.ymd
          }}</time>
          <span class="c-badge">
            {{ news.contents_type_nm }}
          </span>
          <p class="c-topics__title">
            {{ news.subject }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  subject: {
    type: String,
    required: false,
  },
});
</script>
