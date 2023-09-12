<template>
  <NuxtLayout>
    <div class="l-container--wrap">
      <UiNavLink :subject="response.details.subject" />
      <ContentPlainBody v-bind="response.details" :subheading="subheading" />
    </div>
  </NuxtLayout>
</template>

<!-- <script>
export default {
  data() {
    return {
      subheading: "Service",
    };
  },
  async asyncData({ $axios }) {
    const response = await $axios.$get(`/rcms-api/1/content/details/service`);
    return {
      details: response.details,
    };
  },
};
</script> -->

<script setup>
const subheading = "Service";

const { data: response } = await useFetch(
  "https://dev-nuxt-corporate.g.kuroco.app/rcms-api/1/content/details/service"
);
</script>
