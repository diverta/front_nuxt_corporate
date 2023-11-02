<template>
  <div>
    <UiPageHeader
      :path="path"
      :subject="news.details.group_nm"
      :subheading="subheading"
    />
    <div class="l-container--col-2 l-container--contents">
      <div class="l-container--col-2__main">
        <ContentDetailBody :details="news.details">
          <hr />
          <div class="l-container--contents u-pt-30 u-text-align-center">
            <NuxtLink :to="'/news/'" class="c-button">
              ニュースリリース一覧へ戻る
            </NuxtLink>
          </div>
        </ContentDetailBody>
      </div>
      <ContentSideBar :conditions="newsConditionMaster?.list" />
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

const path = [{ label: 'ニュース', to: '/news' }];
const subheading = 'News Release';

const route = useRoute();

const { data: news } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/news/details/${route.params.id}`,
  {
    credentials: 'include',
  }
);
const { data: newsConditionMaster } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/master`,
  {
    credentials: 'include',
  }
);
</script>
