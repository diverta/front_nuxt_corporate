<template>
  <div ref="errorWrapperRef" class="c-alert c-alert--error">
    <div class="u-display-flex">
      <div class="c-alert__icon u-display-flex-shrink-0">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="u-display-block"
        >
          <circle cx="13" cy="13" r="13" fill="var(--color-error)" />
          <path
            d="M13 8.33331V13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 17.6667H13.01"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div>
        <p class="c-alert__heading">エラーが発生しました</p>
        <p v-for="(err, idx) in error" :key="idx" class="c-alert__message">
          {{ err.message }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Array,
    required: true,
  },
});

const errorWrapperRef = ref(null);

defineExpose({
  errorWrapperRef,
});
</script>
