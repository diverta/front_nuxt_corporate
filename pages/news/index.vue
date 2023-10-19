<template>
  <div class="l-container">
    <UiNavLink :subject="subject" />
    <section>
      <UiPagetitle :subject="subject" :subheading="subheading" />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <NewsList v-if="news" :subject="subject" v-bind="news" />
        </div>
        <ContentSideBar v-if="master" :itemList="reverseItems" />
      </div>
    </section>
  </div>
</template>

<script setup>
const subject = 'ニュース';
const subheading = 'News Release';

const route = useRoute();
const filter = computed(() => route.query.filter);

// Add filter later params: { filter: route.query.filter }
const { data: master } = await useFetch('/rcms-api/1/master');
const { data: news } = await useFetch(
  '/rcms-api/1/news/list',
  {
    query: {
      filter,
    },
  },
  {
    watch: [filter],
  }
);
const reverseItems = computed(() => master?.value?.list?.slice()?.reverse());
</script>
