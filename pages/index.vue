<template>
  <NuxtLayout>
    <div>
      <NewsList :homePage="homePage" v-bind="news" />
      <UiCardContainer
        v-if="cards && cards.length"
        :cards="cards"
        :homePage="homePage"
      ></UiCardContainer>
    </div>
  </NuxtLayout>
</template>

<script setup>
import dummyImage from "~/assets/image/600x400.png";

const homePage = true;
const cards = [
  {
    href: "https://nuxt.com/", //gaurav
    imageUrl: dummyImage,
    text: "テキストが入ります。テキストが入ります。",
  },
  {
    href: "https://nuxt.com/", //gaurav
    imageUrl: dummyImage,
    text: "テキストが入ります。テキストが入ります。",
  },
  {
    href: "https://nuxt.com/", //gaurav
    imageUrl: dummyImage,
    text: "テキストが入ります。テキストが入ります。",
  },
];
const { data: news } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/news/list"
);
</script>
