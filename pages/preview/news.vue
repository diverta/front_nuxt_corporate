<template>
  <ClientOnly>
    <div>
      <UiPageHeader
        :path="path"
        :subject="response.details.group_nm"
        :subheading="subheading"
      />
      <div class="l-container--col-2 l-container--contents">
        <div class="l-container--col-2__main">
          <ContentDetailBody :details="response.details">
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
  </ClientOnly>
</template>

<script setup>
const config = useRuntimeConfig();

const path = [{ label: 'ニュース', to: '/news' }];
const subheading = 'News Release';

const route = useRoute();
const preview_token = route.query.preview_token;

const { data: response } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/preview`,
  {
    credentials: 'include',
    params: {
      preview_token,
    },
    server: false,
  }
);
const { data: newsConditionMaster } = await useFetch(
  `${config.public.kurocoApiDomain}/rcms-api/1/master`,
  {
    credentials: 'include',
  }
);
</script>
