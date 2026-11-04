<template>
  <div class="c-alert c-alert--success">
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
          <circle cx="13" cy="13" r="13" fill="var(--color-success)" />
          <path
            d="M18.3333 9L11 16.3333L7.66667 13"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p class="c-alert__heading">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
});
</script>
