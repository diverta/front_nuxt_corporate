<template>
    <div class="u-flex-horizon-center">
      <NuxtLink
        v-for="item in button"
        :key="item.label"
        :class="[
          item.type === 'back'
            ? 'c-button--return icon-arrow-left'
            : 'c-button icon-arrow-right',
        ]"
        :to="item.to"
        >{{ item.label }}</NuxtLink
      >
    </div>
  </template>
  
  <script>
  export default {
    props: {
      button: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  