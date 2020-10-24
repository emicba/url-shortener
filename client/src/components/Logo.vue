<template>
  <svg
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    version="1.1"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#121212" />
    <g stroke="#42b883">
      <path
        transform="matrix(.81961 0 0 .82099 2.165 2.148)"
        d="m10 13a5 5 0 0 0 7.54 0.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
      />
      <path
        transform="matrix(.81961 0 0 .82099 2.165 2.148)"
        d="m14 11a5 5 0 0 0-7.54-0.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
      />
    </g>
  </svg>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Logo',
});
</script>

<style scoped>
svg {
  width: 10rem;
}
</style>
