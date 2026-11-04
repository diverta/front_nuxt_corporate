<template>
  <NuxtLayout>
    <div>
      <section class="l-container--large l-container--contents">
        <div class="c-section--general u-display-flex-justify-content-center">
          <div
            class="u-display-flex u-display-flex-direction-column u-display-flex-justify-content-center u-display-flex-align-items-center"
          >
            <h2 class="c-heading--lv1">{{ error?.statusCode }}エラー</h2>
            <p class="c-teerrorMessagext">{{ errorMessage }}</p>
            <button @click="handleError" class="c-button">トップページ</button>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object,
});

const errorMessage = computed(() => {
  switch (props?.error?.statusCode) {
    case 404:
      return 'お探しのページは見つかりませんでした。';
    case 500:
      return 'エラーが発生しました。';
    default:
      return 'エラーが発生しました。';
  }
});

const handleError = () => clearError({ redirect: '/' });
</script>
