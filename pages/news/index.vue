<template>
  <div class="l-container">
    <UiPageHeader subject="ニュース" subheading="News Release" />

    <section>
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <NewsList v-if="news" :list="news.list" />
        </div>
        <ContentSideBar :conditions="newsConditionMaster?.list" />
      </div>
    </section>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const route = useRoute();
const filter = computed(() => route.query.filter);

const { data: news } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/news/list`,
  {
    credentials: 'include',
    query: {
      filter,
    },
    watch: [filter],
    server: false, // in order to get query parameter, runs only client side
  }
);
const { data: newsConditionMaster } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/master`,
  {
    credentials: 'include',
  }
);
</script>
