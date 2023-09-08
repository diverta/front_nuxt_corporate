<template>
  <section
    :class="[
      'l-container--middle',
      'l-container--contents',
      homePage
        ? 't-article-list p-top-topics__list'
        : 'l-container--main p-news',
    ]"
  >
    <h1 v-if="subject" class="c-heading--lv1">{{ subject }}</h1>
    <ul class="c-topics__list">
      <div v-if="!homePage && list.length == 0">記事が存在しません</div>
      <li v-for="news in list" :key="news.topics_id" class="c-topics__item">
        <time class="c-topics__date" :datetime="news.ymd">{{ news.ymd }}</time>
        <div class="c-topics__label">
          {{ news.contents_type_nm }}
        </div>
        <div class="c-topics__title">
          <NuxtLink :to="`/news/detail/${news.topics_id}`">{{
            news.subject
          }}</NuxtLink>
        </div>
      </li>
    </ul>
    <UiButton :button="button" />
  </section>
</template>

<script setup>
const button = [{ label: "一覧へ", to: "/news/" }];
const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  homePage: {
    type: Boolean,
    required: false,
  },
  subject: {
    type: String,
    required: false,
  },
});
</script>
