<template>
  <div class="l-container">
    <UiPageHeader subject="ニュース" subheading="News Release" />

    <section>
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <template v-if="news">
            <ul v-if="news.list.length > 0" class="c-topics-list">
              <li v-for="news in news.list" :key="news.topics_id">
                <NuxtLink
                  :to="`/news/detail/${news.topics_id}`"
                  class="c-topics"
                >
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
            <p v-else>記事が存在しません</p>
          </template>
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
